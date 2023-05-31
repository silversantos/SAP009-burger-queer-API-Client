const API_URL = 'https://burger-queen-api-mock-rho.vercel.app'

export const login = (email, password) => {
    return fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password}),
    })
}