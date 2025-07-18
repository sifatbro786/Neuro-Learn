import { formatMyDate } from "@/lib/date";
import { getLoggedInUser } from "@/lib/loggedin-user";
import { getCourseDetails } from "@/queries/courses";
import { getAReport } from "@/queries/reports";
import fontkit from "@pdf-lib/fontkit";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

// Helper: Wrap long text into lines
function wrapText(text, font, fontSize, maxWidth) {
    const words = text.split(" ");
    const lines = [];
    let currentLine = "";

    for (const word of words) {
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        const testWidth = font.widthOfTextAtSize(testLine, fontSize);

        if (testWidth > maxWidth) {
            lines.push(currentLine);
            currentLine = word;
        } else {
            currentLine = testLine;
        }
    }

    if (currentLine) lines.push(currentLine);
    return lines;
}

export async function GET(request) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const courseId = searchParams.get("courseId");

        const course = await getCourseDetails(courseId);
        const loggedInUser = await getLoggedInUser();
        const report = await getAReport({ course: courseId, student: loggedInUser.id });

        const completionDate = report?.completion_date
            ? formatMyDate(report?.completion_date)
            : formatMyDate(Date.now());

        const completionInfo = {
            name: `${loggedInUser?.firstName} ${loggedInUser?.lastName}`,
            completionDate: completionDate,
            courseName: course.title,
            instructor: `${course?.instructor?.firstName} ${course?.instructor?.lastName}`,
            instructorDesignation: `${course?.instructor?.designation}`,
            sign: "/sign.png",
        };

        // Load fonts
        const kalamFontUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/fonts/kalam/Kalam-Regular.ttf`;
        const kalamFontBytes = await fetch(kalamFontUrl).then((res) => res.arrayBuffer());

        const montserratItalicFontUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/fonts/montserrat/Montserrat-Italic.ttf`;
        const montserratItalicFontBytes = await fetch(montserratItalicFontUrl).then((res) =>
            res.arrayBuffer(),
        );

        const montserratFontUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/fonts/montserrat/Montserrat-Medium.ttf`;
        const montserratFontBytes = await fetch(montserratFontUrl).then((res) => res.arrayBuffer());

        const pdfDoc = await PDFDocument.create();
        pdfDoc.registerFontkit(fontkit);

        const kalamFont = await pdfDoc.embedFont(kalamFontBytes);
        const montserratItalic = await pdfDoc.embedFont(montserratItalicFontBytes);
        const montserrat = await pdfDoc.embedFont(montserratFontBytes);
        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

        const page = pdfDoc.addPage();
        const { width, height } = page.getSize();

        // Background pattern
        const patternUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/pattern.jpg`;
        const patternBytes = await fetch(patternUrl).then((res) => res.arrayBuffer());
        const pattern = await pdfDoc.embedJpg(patternBytes);
        page.drawImage(pattern, {
            x: 0,
            y: 0,
            width,
            height,
            opacity: 0.2,
        });

        // Logo
        const logoUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`;
        const logoBytes = await fetch(logoUrl).then((res) => res.arrayBuffer());
        const logo = await pdfDoc.embedPng(logoBytes);
        const logoDimns = logo.scale(0.7);
        page.drawImage(logo, {
            x: width / 2 - logoDimns.width / 2,
            y: height - 120,
            width: logoDimns.width,
            height: logoDimns.height,
        });

        // Title
        const titleText = "Certificate Of Completion";
        const titleFontSize = 30;
        const titleTextWidth = montserrat.widthOfTextAtSize(titleText, titleFontSize);
        page.drawText(titleText, {
            x: width / 2 - titleTextWidth / 2,
            y: height - (logoDimns.height + 125),
            size: titleFontSize,
            font: montserrat,
            color: rgb(0, 0.53, 0.71),
        });

        // Name Label
        const nameLabelText = "This certificate is hereby bestowed upon";
        const nameLabelFontSize = 20;
        const nameLabelTextWidth = montserratItalic.widthOfTextAtSize(
            nameLabelText,
            nameLabelFontSize,
        );
        page.drawText(nameLabelText, {
            x: width / 2 - nameLabelTextWidth / 2,
            y: height - (logoDimns.height + 170),
            size: nameLabelFontSize,
            font: montserratItalic,
            color: rgb(0, 0, 0),
        });

        // Name
        const nameText = completionInfo.name;
        const nameFontSize = 40;
        const nameTextWidth = kalamFont.widthOfTextAtSize(nameText, nameFontSize);
        page.drawText(nameText, {
            x: width / 2 - nameTextWidth / 2,
            y: height - (logoDimns.height + 220),
            size: nameFontSize,
            font: kalamFont,
            color: rgb(0, 0, 0),
        });

        // Details Info (wrapped)
        const detailsText = `This is to certify that ${completionInfo.name} successfully completed the ${completionInfo.courseName} course on ${completionInfo.completionDate} by ${completionInfo.instructor}`;
        const detailsFontSize = 16;
        const detailsLines = wrapText(detailsText, montserrat, detailsFontSize, 500);

        let detailsY = height - 320;
        for (const line of detailsLines) {
            const lineWidth = montserrat.widthOfTextAtSize(line, detailsFontSize);
            page.drawText(line, {
                x: width / 2 - lineWidth / 2,
                y: detailsY,
                size: detailsFontSize,
                font: montserrat,
                color: rgb(0, 0, 0),
            });
            detailsY -= 22;
        }

        // Signature & Instructor Info (moved up)
        const signatureBoxWidth = 300;
        page.drawText(completionInfo.instructor, {
            x: width - signatureBoxWidth,
            y: 140,
            size: detailsFontSize,
            font: timesRomanFont,
            color: rgb(0, 0, 0),
        });

        page.drawText(completionInfo.instructorDesignation, {
            x: width - signatureBoxWidth,
            y: 122,
            size: 10,
            font: timesRomanFont,
            color: rgb(0, 0, 0),
            maxWidth: 250,
        });

        page.drawLine({
            start: { x: width - signatureBoxWidth, y: 160 },
            end: { x: width - 60, y: 160 },
            thickness: 1,
            color: rgb(0, 0, 0),
        });

        const signUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${completionInfo.sign}`;
        const signBytes = await fetch(signUrl).then((res) => res.arrayBuffer());
        const sign = await pdfDoc.embedPng(signBytes);
        page.drawImage(sign, {
            x: width - signatureBoxWidth,
            y: 170,
            width: 180,
            height: 54,
        });

        const pdfBytes = await pdfDoc.save();

        return new Response(pdfBytes, {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": "inline; filename=certificate.pdf",
            },
        });
    } catch (error) {
        console.error("PDF Generation Error:", error);
        return new Response("Failed to generate PDF", { status: 500 });
    }
}

export const dynamic = "force-dynamic";
