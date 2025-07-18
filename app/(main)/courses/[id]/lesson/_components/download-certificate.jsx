"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export const DownloadCertificate = ({ course, totalProgress }) => {
    const [isCertificateDownloading, setIsCertificateDownloading] = useState(false);

    const handleCertificateDownload = async () => {
        try {
            setIsCertificateDownloading(true);
            
            await fetch(`/api/certificate?courseId=${course?.id}`)
                .then((response) => response.blob())
                .then((blob) => {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = `${course?.title} Certificate.pdf`;
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                });

            toast.success("Certificate downloaded successfully.");
        } catch (err) {
            toast.error(err.message);
        } finally {
            setIsCertificateDownloading(false);
        }
    };

    return (
        <Button
            onClick={handleCertificateDownload}
            disabled={totalProgress < 100 && !isCertificateDownloading}
            className="w-full mt-6"
        >
            Download Certificate
        </Button>
    );
};
