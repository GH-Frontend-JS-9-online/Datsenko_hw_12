import Component from '../components/Component'
import store from '../store/Store'
import _$ from '../components/searcElement'
import dashboardServices from '../sevices/DashboardServices'

export default class LoginComponent extends Component{
    constructor() {
        super(store, _$('#app'))
    }

    loginHandler(event) {
        const email = event.target.querySelector('input[type="email"]')
        const password = event.target.querySelector('input[type="password"]')
        const btnLogin = event.target.querySelector('.btn-login')
        const user = {
            email: email.value,
            password: password.value
        }

        let errDiv = document.createElement('div')
        errDiv.style.cssText = 'color: red;'
        btnLogin.insertAdjacentElement('beforebegin', errDiv)
        document.querySelectorAll('input').forEach(input => {
            input.onblur = () => {
                errDiv.innerHTML = ''
            }
        })
        dashboardServices.login(user)
            .then(response => {
                if (response.status === 400) {
                    errDiv.innerHTML = 'Oops, looks like email or password is incorrect.Please try again.'
                    console.log(response.status)
                } else if (response.status === 404) {
                    errDiv.innerHTML = 'Oops, looks like email or password is incorrect.Please try again.'
                    console.log(response.status)
                } else if (response.status === 200) {
                    errDiv.innerHTML = ''
                    console.log(response.status)
                    Storage.setData('token', response.headers.get('x-auth-token'))
                    store.dispatch('login', store.state)
                }
            })
            .catch(error => {
                errDiv.innerHTML = error.message
            })
        email.value = ''
        password.value = ''
    }

    render() {
        let display = (store.state.isLogin) ? 'none' : 'block'

        this.anchor.innerHTML = `
            <div class="container" id="container" style="display: ${display}">
               <div class="view-container">
                    <div class="view">
                        <div class="image"></div>
                    </div>
                </div>
                <div class="form-container sign-in-container">
                    <form name="loginForm" class="form">
                        <h1>Log in</h1>
                        <a href="#/register">Not a member?</a>
                        <input type="email" name="userEmail" placeholder="Email..." required autocomplete="off" >
                        <input type="password" name="userPassword" placeholder="Password..." required>
                        <button class="btn btn-login" type="submit"">Log in</button>
                        <a href="#/reset">Forgot password?</a>
                    </form>
                </div>
            </div>
        `
        const form = this.anchor.querySelector('.form')
        form.addEventListener('submit', event => {
            event.preventDefault()
            this.loginHandler(event)
            store.dispatch('login', store.state)
        })
    }
}
