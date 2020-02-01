import LoginComponent from '../authorization/LoginComponent.js'
import SignComponent from '../authorization/SignComponent.js'
import ResetComponent from '../authorization/ResetComponent.js'

export default (function () {
    const appDiv = 'app'
    const routes = {}
    const templates = {}

    const template = (name, templateFunction) => {
        return templates[name] = templateFunction
    }

    const route = (path, template) => {
        if (typeof template == 'function') {
            return routes[path] = template
        }
        else if (typeof template == 'string') {
            return routes[path] = templates[template]
        }
        else {
            return
        }
    }

    template('login', () => {
        return document.getElementById(appDiv).append(new LoginComponent().render())
    })

    template('register', () => {
        return document.getElementById(appDiv).append(new SignComponent().render())
    })

    template('reset', () => {
        return document.getElementById(appDiv).append(new ResetComponent().render())
    })

    route('/', 'login')
    route('/register', 'register')
    route('/reset', 'reset')

    let resolveRoute = (route) => {
        try {
            return routes[route]
        } catch (error) {
            throw new Error("The route is not defined")
        }
    }

    let router = () => {
        const url = window.location.hash.slice(1) || "/"
        const routeResolved = resolveRoute(url)
        routeResolved()
    }

    window.addEventListener('load', router)
    window.addEventListener('hashchange', router)
})()