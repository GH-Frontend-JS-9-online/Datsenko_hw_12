class FakeApiService {
    constructor() {
        this._apiBase = 'http://localhost:3000/api'
    }

    async signUp(user) {
        const signUp = await fetch(`${this._apiBase}/users`, {
            method: 'POST',
            body: JSON.stringify({
                email: user.email,
                password: user.password,
                name: user.name
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return signUp
    }

    async login(user) {
        const login = await fetch(`${this._apiBase}/users/login`, {
            method: 'POST',
            body: JSON.stringify({
                email: user.email,
                password: user.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return login
    }

    async resetPassword(user, token) {
        const reset = await fetch(`${this._apiBase}/users/reset_password`, {
            method: 'POST',
            body: JSON.stringify({
                password: user.password,
                confirmationPassword: user.confirmationPassword,
                email: user.email
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': `${token}`
            }
        })
        return reset
    }
    async startAThread(user, token) {
        const thread = await fetch(`${this._apiBase}/threads`, {
            method: 'POST',
            body: {
                _id: user.id
            },
            headers: {
                'Authorization': `${token}`,
                'Content-Type': 'application/json'
            }
        })
        return thread
    }

    async getAllThreads(token) {
        const threads = await fetch(`${this._apiBase}/threads`, {
            headers: {
                'Authorization': `${token}`
            }
        })
        return threads
    }
    async sendMessage() {}
    async getThreadMessages() {}

}

const fakeApiService = new FakeApiService()
export default fakeApiService