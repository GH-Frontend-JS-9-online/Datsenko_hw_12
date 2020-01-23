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

    async getCurrentUser(user) {
        this.login(user)
            .then(response => Storage.setData('token', response.headers.get('x-auth-token')))
            .catch(error => console.error(error))
        let token = Storage.getData('token')
        const currentUser = fetch(`${this._apiBase}/users`, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        })
        Storage.removeData()
        return currentUser
    }

    async getAllUsers(user) {
        this.login(user)
            .then(response => Storage.setData('token', response.headers.get('x-auth-token')))
            .catch(error => console.error(error))
        let token = Storage.getData('token')
        const allUser = fetch(`${this._apiBase}/users/all`, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        })
        Storage.removeData()
        return allUser
    }

    async retrieveAllThreadMessages(user) {
        this.login(user)
            .then(response => Storage.setData('token', response.headers.get('x-auth-token')))
            .catch(error => console.error(error))
        let token = Storage.getData('token')
        const allThreadMessages = await fetch(`${this._apiBase}/users/threads`, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        })
        Storage.removeData()
        return allThreadMessages
    }

    async resetPassword(user) {
        this.login(user)
            .then(response => Storage.setData('token', response.headers.get('x-auth-token')))
            .catch(error => console.error(error))
        let token = Storage.getData('token')
        const resetPassword = await fetch(`${this._apiBase}/users/reset_password`, {
            method: 'POST',
            headers: {
                'x-access-token': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: user.password,
                confirmationPassword: user.password,
                email: user.email
            })
        })
        Storage.removeData()
        return resetPassword
    }

    async retrieveAllThreads(user) {
        this.login(user)
            .then(response => response.json())
            .then(response => Storage.setData('id', response._id))
            .catch(error => console.error(error))
        this.login(user)
            .then(response => Storage.setData('token', response.headers.get('x-auth-token')))
            .catch(error => console.error(error))
        let id = Storage.getData('id')
        let token = Storage.getData('token')
        const allThreads = await fetch(`${this._apiBase}/threads/messages/${id}`, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        })
        Storage.removeData()
        return allThreads
    }

    async  createThread(user) {
        this.login(user)
            .then(response => response.json())
            .then(response => Storage.setData('id', response._id))
            .catch(error => console.error(error))
        this.login(user)
            .then(response => Storage.setData('token', response.headers.get('x-auth-token')))
            .catch(error => console.error(error))
        let id = Storage.getData('id')
        let token = Storage.getData('token')
        const createThread = await fetch(`${this._apiBase}/threads`, {
            method: 'POST',
            headers: {
                'x-access-token': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    _id: id
                }
            })
        })
        Storage.removeData()
        return createThread
    }

    async sendMessage(user, message) {
        this.login(user)
            .then(response => response.json())
            .then(response => Storage.setData('id', response._id))
            .catch(error => console.error(error))
        this.login(user)
            .then(response => Storage.setData('token', response.headers.get('x-auth-token')))
            .catch(error => console.error(error))
        let id = Storage.getData('id')
        let token = Storage.getData('token')
        const sendMessage = fetch(`${this._apiBase}/threads/messages`, {
            method: 'POST',
            headers: {
                'x-access-token': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                thread: {
                    _id: id
                },
                message: {
                    body: message
                }
            })
        })
        Storage.removeData()
        return sendMessage
    }
}

const fakeApiService = new FakeApiService()
export default fakeApiService