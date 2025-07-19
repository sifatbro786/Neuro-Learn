"use server";

import { headers } from "next/headers";
import { formatAmountForStripe } from "@/lib/stripe-helpers";
import { stripe } from "@/lib/stripe";
import { getCourseDetails } from "@/queries/courses";
import { getLoggedInUser } from "@/lib/loggedin-user";
import { redirect } from "next/navigation";
import { dbConnect } from "@/service/mongo";

const CURRENCY = "BDT";

export async function createCheckoutSession(data) {
    await dbConnect();


    const ui_mode = "hosted";
    const origin = headers().get("origin");
    const courseId = data.get("courseId");

    const user = await getLoggedInUser();
    if (!user) redirect("/login");

    const course = await getCourseDetails(courseId);
    if (!course) return new Error("Course not found!");

    const courseName = course?.title;
    const coursePrice = course?.price;

    const checkoutSession = await stripe.checkout.sessions.create({
        mode: "payment",
        submit_type: "auto",
        line_items: [
            {
                quantity: 1,
                price_data: {
                    currency: CURRENCY,
                    product_data: {
                        name: courseName,
                    },
                    unit_amount: formatAmountForStripe(coursePrice, CURRENCY),
                },
            },
        ],

        ...(ui_mode === "hosted" && {
            success_url: `${origin}/enroll-success?session_id={CHECKOUT_SESSION_ID}&courseId=${courseId}`,
            cancel_url: `${origin}/courses`,
        }),

        ui_mode,
    });

    return {
        client_secret: checkoutSession.client_secret,
        url: checkoutSession.url,
    };
}

export async function createPaymentIntent() {
    await dbConnect();

    const paymentIntent = await stripe.paymentIntents.create({
        amount: formatAmountForStripe(coursePrice, CURRENCY),
        automatic_payment_methods: { enabled: true },
        currency: CURRENCY,
    });

    return { client_secret: paymentIntent.client_secret };
}
