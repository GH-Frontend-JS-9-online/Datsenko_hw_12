import Component from '../components/Component'
import store from '../store/Store'
import _$ from '../components/searcElement'
import dashboardServices from '../sevices/DashboardServices'

export default class SignComponent extends Component{
    constructor() {
        super(store, _$('#app'))
    }

    signHandler(event) {
        const email = event.target.querySelector('input[type="email"]')
        const password = event.target.querySelector('input[type="password"]')
        const name = event.target.querySelector('input[type="text"]')
        const btnSignUp = event.target.querySelector('.btn-register')
        const user = {
            email: email.value,
            password: password.value,
            name: name.value
        }

        let errDiv = document.createElement('div')
        errDiv.style.cssText = 'color: red;'
        btnSignUp.insertAdjacentElement('beforebegin', errDiv)
        document.querySelectorAll('input').forEach(input => {
            input.onblur = () => {
                errDiv.innerHTML = ''
            }
        })
        dashboardServices.signUp(user)
            .then(response => {
                if (response.status === 400) {
                    errDiv.innerHTML = 'Your password does not match'
                    console.log(response.status)
                } else if (response.status === 404) {
                    errDiv.innerHTML = 'Your password does not match'
                    console.log(response.status)
                } else if (response.status === 200) {
                    errDiv.innerHTML = ''
                    console.log(response.status)
                }
            })
            .catch(error => {
                errDiv.innerHTML = error.message
            })
        email.value = ''
        password.value = ''
        name.value = ''
    }

    render() {
        let display = (store.state.isRegister) ? 'none' : 'block'

        this.anchor.innerHTML = `          
            <div class="container" id="container" style="display: ${display}">
                <div class="view-container">
                    <div class="view">
                        <div class="image"></div>
                    </div>
            </div>
            <div class="form-container sign-up-container">
                <form name="registerForm" class="form">
                    <h1>Sign up</h1><a href="http://localhost:3000/pages/login.html">Existing member?</a>
                    <input type="email" name="userEmail" placeholder="Email..." required autocomplete="off">
                    <input type="password" name="userPassword" placeholder="Password..." required>
                    <input input type="text" name="userName" placeholder="Name..." required  autocomplete="off">
                    <button class="btn btn-register" type="submit"">Sign up</button>            
                </form>
            </div>
            </div>
        `
        const form = this.anchor.querySelector('.form')
        form.addEventListener('submit', event => {
            event.preventDefault()
            this.signHandler(event)
            store.dispatch('register', store.state)
        })
    }
}
