// POST /api/unlock
// Required body: { token: string }
// Return status: 200 OK, 400 Bad Request, 401 Unauthorized, 500 Internal Server Error

export const POST = async ({ request } : { request: Request}) => {
    try {
        // Receive the request body (token)
        const body = await request.json();
        if (!body.token) {
            return new Response(JSON.stringify({
                details: "Bad Request. Missing token."
            }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Send a request to hCaptcha API to verify the token
        const result = await fetch("https://api.hcaptcha.com/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `response=${body.token}&secret=${import.meta.env.HCAPTCHA_SECRET}`
        });

        const data = await result.json();

        // If the token is invalid, return 401 Unauthorized, otherwise return 200 OK
        if (!data.success) {
            return new Response(JSON.stringify({
                details: "Unauthorized. Invalid token."
            }), {
                status: 401,
                headers: { "Content-Type": "application/json" }
            });
        } else {
            return new Response(JSON.stringify({
                message: "OK"
            }), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                    "Set-Cookie": `session=${body.token}; Path=/; HttpOnly; Secure`
                }
            });
        }
    } catch (error) {
        console.error("Error processing the request:", error);
        return new Response(JSON.stringify({
            message: "Internal Server Error"
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}