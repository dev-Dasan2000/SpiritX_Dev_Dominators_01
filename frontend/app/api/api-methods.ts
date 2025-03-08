const authMethods = {
    login: async function (username: string, password: string, rememberMe: boolean) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password, rememberMe }),
            });
            const data = await response.json();
            console.log(data);
            return { success: data.successful, error: data.error, accessToken: data.accessToken };
        } catch (error) {
            return { success: false, error: "Network error", accessToken: null };
        }
    },
    refreshToken: async function () {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/refresh_token`, {
                method: "GET",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
            });
            const data = await response.json();
            return { accessToken: data.accessToken, username: data.username };
        } catch (error) {
            return { success: false, error: "Network error", accessToken: null };
        }
    },

    LogOut: async function () {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/refresh_token`, {
                method: "DELETE",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
            });
            const data = await response.json();
            console.log(data);
            return { success: data.successful, error: data.error };
        } catch (error) {
            return { success: false, error: "Network error" };
        }
    },
};

export default authMethods;
