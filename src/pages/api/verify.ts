export const GET = async ({ request }: { request: Request }) => {
    const cookie = request.headers.get("Cookie");
    if (!cookie)
        return new Response(
            JSON.stringify({
                details: "Unauthorized. Missing session cookie.",
            }),
            {
                status: 401,
                headers: { "Content-Type": "application/json" },
            }
        );

    // Send a request to hCaptcha API to verify the token
    const result = await fetch("https://api.hcaptcha.com/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `response=${cookie}&secret=${import.meta.env.HCAPTCHA_SECRET}&sitekey=${import.meta.env.HCAPTCHA_SITEKEY}`,
    });

    const data = await result.json();

    if (
        (!data.success && data.challenge_ts) ||
        (!data.success &&
            data["error-codes"][0] == "invalid-or-already-seen-response") ||
        data.success
    ) {
        return new Response(
            JSON.stringify({
                message: "OK",
            })
        );
    } else {
        return new Response(
            JSON.stringify({
                details: "Unauthorized. Invalid session cookie.",
            }),
            {
                status: 401,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
};
