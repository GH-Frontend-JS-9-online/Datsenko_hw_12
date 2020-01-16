import Storage from "./Storage.js";

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
        const currentUser = fetch(`${this._apiBase}/users/current`, {
            method: 'GET',
            headers: {
                'x-access-token': 'null'
            }
        })
        return currentUser
    }

    // async resetPassword(user) {
    //     this.login(user)
    //         .then(response => {
    //             Storage.setData('token', response.headers.get('x-auth-token'))
    //         })
    //         .catch(error => console.log(error))
    //     let token = Storage.getData('token')
    //     const reset = await fetch(`${this._apiBase}/users/reset_password`, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             password: user.password,
    //             confirmationPassword: user.confirmationPassword,
    //             email: user.email
    //         }),
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //             'x-access-token': token
    //         }
    //     })
    //     Storage.removeData()
    //     return reset
    // }
    // async startAThread(user) {
    //     this.login(user)
    //         .then(response => {
    //         Storage.setData('token', response.headers.get('x-auth-token'))
    //     })
    //     .catch(error => console.log(error))
    //     this.login(user)
    //         .then(response => response.json())
    //         .then(response => {
    //             Storage.setData('id', response._id)
    //         })
    //         .catch(error => console.log(error))
    //     let token = Storage.getData('token')
    //     let id = Storage.getData('id')
    //     const thread = await fetch(`${this._apiBase}/threads`, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             user: {
    //                 _id: id
    //             }
    //         }),
    //         headers: {
    //             'Authorization': token,
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     Storage.removeData()
    //     return thread
    // }
    //
    // async getAllThreads(user) {
    //     this.login(user)
    //         .then(response => {
    //             Storage.setData('token', response.headers.get('x-auth-token'))
    //         })
    //         .catch(error => console.log(error))
    //     let token = Storage.getData('token')
    //     const threads = await fetch(`${this._apiBase}/threads`, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': token
    //         }
    //     })
    //     Storage.removeData()
    //     return threads
    // }
    // async sendMessage(user, message) {
    //     this.login(user)
    //         .then(response => {
    //             Storage.setData('token', response.headers.get('x-auth-token'))
    //         })
    //         .catch(error => console.log(error))
    //     this.login(user)
    //         .then(response => response.json())
    //         .then(response => {
    //             Storage.setData('id', response._id)
    //         })
    //         .catch(error => console.log(error))
    //     let token = Storage.getData('token')
    //     let id = Storage.getData('id')
    //     const send = fetch(`${this._apiBase}/threads/messages`, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             thread: {
    //                 _id: id
    //             },
    //             message: {
    //                 body: message
    //             }
    //         }),
    //         headers: {
    //             'Authorization': token,
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     Storage.removeData()
    //     return send
    // }
    // async getThreadMessages(user) {
    //     this.login(user)
    //         .then(response => {
    //             Storage.setData('token', response.headers.get('x-auth-token'))
    //         })
    //         .catch(error => console.log(error))
    //     this.login(user)
    //         .then(response => response.json())
    //         .then(response => {
    //             Storage.setData('id', response._id)
    //         })
    //         .catch(error => console.log(error))
    //     let token = Storage.getData('token')
    //     let id = Storage.getData('id')
    //     const threadsMessages = fetch(`${this._apiBase}/threads/?${id}`, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': token
    //         }
    //     })
    //     Storage.removeData()
    //     return threadsMessages
    // }
}

const fakeApiService = new FakeApiService()
export default fakeApiService