import "dotenv/config";

export async function POST(request: Request) {
    if (request.url.endsWith("/signup")) {
        const userData = await request.json();
        return signup(userData);
    }
    /*if (req.url.endsWith("/login")) {
        const credentials = await req.json();
        return loginUser(credentials);
    }*/
    return new Response(JSON.stringify({ error: "Not Found" }), { status: 404 });
}

async function signup(userData:any) {
    try {
        const response = await fetch(process.env.BACKEND_URL + "/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });

        const data = await response.json();
        return new Response(JSON.stringify(data), { status: response.status });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
