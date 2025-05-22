import Image from "next/image";
import WebsiteLogo from "@/public/assets/images/logo.png";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Logo = ({ className = "" }) => {
    return (
        <Link href={"/"}>
            <Image className={cn("max-w-[100px]", className)} src={WebsiteLogo} alt="logo" />
        </Link>
    );
};
