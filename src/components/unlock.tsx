import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function UnlockComponent() {
    const handleVerify = async(token: string) => {
        const response = await fetch("/api/unlock", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: token }),
        });
        if (response.ok) {
            window.location.replace("/");
        } else {
            console.error("Error while verifying the token");
        }
    }
    return (
        <HCaptcha sitekey="73046cec-5952-4de7-af59-dd4e15ac070d" onVerify={handleVerify} />
    )
}