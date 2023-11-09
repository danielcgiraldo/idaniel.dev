export const GET = async ({ request }: { request: Request }) => {
    const cookie = request.headers.get("Cookie");
    const session = cookie?.split(";").find((c) => c.includes("session="));
    if (!session)
        return new Response(
            JSON.stringify({
                details: "Unauthorized. Missing session cookie.",
            }),
            {
                status: 401,
                headers: { "Content-Type": "application/json" },
            }
        );
    const token = session.split("=")[1];

    // Send a request to hCaptcha API to verify the token
    const result = await fetch("https://api.hcaptcha.com/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `response=${token}&secret=${import.meta.env.HCAPTCHA_SECRET}`,
    });

    const data = await result.json();

    return new Response(
        JSON.stringify({
            message: "OK",
            data,
        }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Set-Cookie": `session=${token}; Path=/; HttpOnly; Secure`,
            },
        }
    );
};
