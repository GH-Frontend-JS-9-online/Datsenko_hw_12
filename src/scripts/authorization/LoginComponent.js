import Component from '../components/Component'
import store from '../store/Store'
import _$ from '../components/searcElement'

export default class LoginComponent extends Component{
    constructor() {
        super(store, _$('#app'))
    }

    loginHandler(event) {
        const email = event.target.querySelector('input[type="email"]')
        const password = event.target.querySelector('input[type="password"]')
        const btnLogin = event.target.querySelector('.btn')
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

        //
        // if (store.state.isLogin) {
        //     _$('#app > .container').style.display = 'none'
        //     console.log( _$('#container'))
        //     const app = _$('#app')
        //     app.append(createTemplate())
        //
        //     const components = [
        //         new HeaderComponent(),
        //         new AsideComponent(),
        //         new MainMenuComponent(),
        //         new InboxComponent(),
        //         new MessagesComponent(),
        //         new WriteMessageComponent(),
        //         new AboutComponent()
        //     ]
        //
        //     components.map(component => component.render())
        //
        // }
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
                        <a href="#">Not a member?</a>
                        <input type="email" name="userEmail" placeholder="Email..." required autocomplete="off" >
                        <input type="password" name="userPassword" placeholder="Password..." required>
                        <button class="btn" type="submit"">Log in</button>
                        <a href="#">Forgot password?</a>
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
