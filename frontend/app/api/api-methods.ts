const authMethods = {
    login: async function (username: string, password: string, rememberMe: boolean) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password, rememberMe }),
            });
            const data = await response.json();
            return { success: data.successful, error: data.error, accessToken: data.accessToken };
        } catch (error) {
            return { success: false, error: "Network error", accessToken: null };
        }
    }
};

export default authMethods;
