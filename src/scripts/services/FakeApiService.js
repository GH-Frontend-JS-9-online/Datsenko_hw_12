import Storage from "./Storage.js"

class FakeApiService {
    constructor() {
        this._apiBase = 'https://geekhub-frontend-js-9.herokuapp.com/api'
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
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: user.email,
                password: user.password
            }),
        })
        return login
    }

    async getCurrentUser() {
        const currentUser = fetch(`${this._apiBase}/users`, {
            method: 'GET',
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTIwOTVjNDRiNTFlZTAwMjIyMjIyNmEiLCJpYXQiOjE1NzkxOTQ1MTR9.QKIbVJjpshCv6P77ElpWzHMuth5nY8QFYeF-1yCsUVM'
            }
        })
        return currentUser
    }

    async getAllUsers() {
        const allUser = fetch(`${this._apiBase}/users/all`, {
            method: 'GET',
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTIwOTVjNDRiNTFlZTAwMjIyMjIyNmEiLCJpYXQiOjE1NzkxOTQ1MTR9.QKIbVJjpshCv6P77ElpWzHMuth5nY8QFYeF-1yCsUVM'
            }
        })
        return allUser
    }

    async retrieveAllThreadMessages() {
        const allThreadMessages = await fetch(`${this._apiBase}/users/threads`, {
            method: 'GET',
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTIwOTVjNDRiNTFlZTAwMjIyMjIyNmEiLCJpYXQiOjE1NzkxOTQ1MTR9.QKIbVJjpshCv6P77ElpWzHMuth5nY8QFYeF-1yCsUVM'
            }
        })
        return allThreadMessages
    }

    async resetPassword(user) {
        const resetPassword = await fetch(`${this._apiBase}/users/reset_password`, {
            method: 'POST',
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTIwOTVjNDRiNTFlZTAwMjIyMjIyNmEiLCJpYXQiOjE1NzkxOTQ1MTR9.QKIbVJjpshCv6P77ElpWzHMuth5nY8QFYeF-1yCsUVM',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: user.password,
                confirmationPassword: user.password,
                email: user.email
            })
        })
        return resetPassword
    }

    async retrieveAllThreads() {
        const allThreads = await fetch(`${this._apiBase}/threads/messages/5e2095c44b51ee002222226a`, {
            method: 'GET',
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTIwOTVjNDRiNTFlZTAwMjIyMjIyNmEiLCJpYXQiOjE1NzkxOTQ1MTR9.QKIbVJjpshCv6P77ElpWzHMuth5nY8QFYeF-1yCsUVM'
            }
        })
        return allThreads
    }

    async  createThread() {
        const createThread = await fetch(`${this._apiBase}/threads`, {
            method: 'POST',
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTIwOTVjNDRiNTFlZTAwMjIyMjIyNmEiLCJpYXQiOjE1NzkxOTQ1MTR9.QKIbVJjpshCv6P77ElpWzHMuth5nY8QFYeF-1yCsUVM',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    _id: "5e2095c44b51ee002222226a"
                }
            })
        })
        return createThread
    }

    async sendMessage(user, message) {
        const sendMessage = fetch(`${this._apiBase}/threads/messages`, {
            method: 'POST',
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTIwOTVjNDRiNTFlZTAwMjIyMjIyNmEiLCJpYXQiOjE1NzkxOTQ1MTR9.QKIbVJjpshCv6P77ElpWzHMuth5nY8QFYeF-1yCsUVM',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                thread: {
                    _id: "5e2095c44b51ee002222226a"
                },
                message: {
                    body: message
                }
            })
        })
        return sendMessage
    }
}

const fakeApiService = new FakeApiService()
export default fakeApiService