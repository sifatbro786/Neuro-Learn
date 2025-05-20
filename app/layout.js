import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
    subsets: ["latin"],
});

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
    title: "NeuroLearn",
    description: "Explore || Learn || Build || Share",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={cn(inter.className, poppins.className)}>
                {children}
                <Toaster richColors position="top-center" />
            </body>
        </html>
    );
}
