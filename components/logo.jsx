import Image from "next/image";
import WebsiteLogo from "@/public/logo2.png";
import Link from "next/link";

export const Logo = () => {
    return (
        <Link href={"/"} className="flex items-center gap-1">
            <Image className="w-[30px] h-[30px] " src={WebsiteLogo} alt="logo" />
            <h2 className="text-2xl">Techlight</h2>
        </Link>
    );
};
