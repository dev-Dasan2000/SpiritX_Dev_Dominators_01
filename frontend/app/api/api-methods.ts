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
    },
    signup: async function (username: string, password: string) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            return { success: data.successful, error: data.error };
        } catch (error) {
            return { success: false, error: "Network error" };
        }
    }
};

export default authMethods;
