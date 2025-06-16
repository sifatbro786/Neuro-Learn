// import Image from "next/image";
// import WebsiteLogo from "@/public/assets/images/logo.png";
import Link from "next/link";

export const Logo = () => {
    return (
        <Link href={"/"}>
            {/* <Image className="max-w-[100px]" src={WebsiteLogo} alt="logo" /> */}
            <h2 className="text-2xl">Demo</h2>
        </Link>
    );
};
