import Storage from '../store/Storage'

class DashboardServices {
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
        return resetPassword
    }

    async getCurrentUser() {
        let token = Storage.getData('token')
        const currentUser = fetch(`${this._apiBase}/users/`, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        })
        return currentUser
    }

    async getAllUsers() {
        let token = Storage.getData('token')
        const allUser = fetch(`${this._apiBase}/users/all`, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        })
        return allUser
    }

    async getUserById() {
        const userById = fetch(`${this._apiBase}/users/${Storage.getData('id')}`, {
            method: 'GET',
            headers: {
                'x-access-token': Storage.getData('token')
            }
        })
        return userById
    }

    async retrieveAllThreads() {
        const allThreads = await fetch(`${this._apiBase}/threads?sort=desc`, {
            method: 'GET',
            headers: {
                'x-access-token': Storage.getData('token')
            }
        })
        return allThreads
    }

    async retrieveAllThreadMessages() {
        let token = Storage.getData('token')
        let id = Storage.getData('id')
        const allTreadsMassages = fetch(`${this._apiBase}/threads/messages/${id}?sort=desc`, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        })
        return allTreadsMassages
    }

    async  createThread() {
        let token = Storage.getData('token')
        let id = Storage.getData('id')
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
        return createThread
    }

    async sendMessage(message) {
        let token = Storage.getData('token')
        let id = Storage.getData('id')
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
        return sendMessage
    }

    async createProjects(project) {
        let token = Storage.getData('token')
        const newProject = fetch(`${this._apiBase}/projects/`, {
            method: 'POST',
            headers: {
                'x-access-token': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: project.title,
                company: project.company,
                cost: project.cost,
                deadline: project.deadline,
                assigned: project.assigned
            })
        })
        return newProject
    }

    async getAllProjects() {
        let token = Storage.getData('token')
        const allProjects = fetch(`${this._apiBase}/projects/`, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        })
        return allProjects
    }

    async  updateProject(newProjectData) {
        let token = Storage.getData('token')
        let id = Storage.getData('id')
        const updateProject = fetch(`${this._apiBase}/projects/${id}`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
                'x-access-token': token
            },
            body: JSON.stringify({
                cost: newProjectData.cost,
                status: newProjectData.status
            })
        })
        return updateProject
    }

    async removeProject() {
        let token = Storage.getData('token')
        let id = Storage.getData('id')
        const removeProject = fetch(`${this._apiBase}/projects/${id}`, {
            method: 'DEL',
            headers: {
                'x-access-token': token,
                'Content-Type': 'application/json'
            }
        })
        return removeProject
    }

}

const dashboardServices = new DashboardServices()
export default dashboardServices