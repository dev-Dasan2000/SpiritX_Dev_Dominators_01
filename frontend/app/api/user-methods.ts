const userMethods = {
    registerUser: async function (userDetails: any) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userDetails),
            });
            const data = await response.json();
            if (data.error) {
                throw new Error(data.error);
            }
            return { success: response.ok };
        } catch (error: any) {
            if (error.message.includes("duplicate key value")) {
                return { success: false, error: "User already exists" };
            }
        }
        return { success: false, error: "Network error" };
    },

    getUser: async function (username: string) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${username}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const data = await response.json();
            if (response.ok) {
                return { success: true, user: data };
            } else {
                return { success: false, error: data.error || "User not found", user: null };
            }
        } catch (error) {
            return { success: false, error: "Network error", user: null };
        }
    },

    getAllUsers: async function () {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const data = await response.json();
            return { success: response.ok, users: data };
        } catch (error) {
            return { success: false, error: "Network error", users: null };
        }
    },

    updateUser: async function (username: string, userDetails: any) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, ...userDetails }),
            });
            const data = await response.json();
            return { success: response.ok, error: data.error || null };
        } catch (error) {
            return { success: false, error: "Network error" };
        }
    },

    deleteUser: async function (username: string) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${username}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            });
            const data = await response.json();
            return { success: response.ok, error: data.error || null };
        } catch (error) {
            return { success: false, error: "Network error" };
        }
    },
};

export default userMethods;
