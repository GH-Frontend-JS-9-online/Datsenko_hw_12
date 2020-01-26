import HTML from "./HTML.js";
import fakeApiService from "../services/FakeApiService.js";
import Storage from "../services/Storage.js";
import {components} from "../main.js";

class LoginComponent {
    constructor() {}
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
        fakeApiService.login(user)
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
                    //console.log(response.status, response.headers.get('x-auth-token'), response)
                    const app = document.getElementById('app')
                    const virtusApp = document.createElement('div')
                    virtusApp.className = 'virtusApp'
                    virtusApp.style.display = 'block'
                    components.map(component => virtusApp.append(component.render()))
                    app.append(virtusApp)
                    document.querySelector('.container').style.display = 'none'
                }
            })
            .catch(error => {
                errDiv.innerHTML = error.message
            })
        let token = Storage.getData('token')
        fakeApiService.getCurrentUser(token)
            .then(response => response.json())
            .then(data => {
                console.table(data)
                Storage.setData('user', data)
            })
            .catch(error => console.error(error))
        email.value = ''
        password.value = ''
    }

    render() {
        let loginComponent = HTML(`            
            <div class="container" id="container">
               <div class="view-container">
                    <div class="view">
                        <div class="image"></div>
                    </div>
                </div>
                <div class="form-container sign-in-container">
                    <form name="loginForm" class="form">
                        <h1>Log in</h1>
                        <a href="http://localhost:3000/pages/register.html">Not a member?</a>
                        <input type="email" name="userEmail" placeholder="Email..." required autocomplete="off" >
                        <input type="password" name="userPassword" placeholder="Password..." required>
                        <button class="btn" type="submit"">Log in</button>
                        <a href="http://localhost:3000/pages/sendreset.html">Forgot password?</a>
                    </form>
                </div>
            </div>
        `)
        const form = loginComponent.querySelector('form[name="loginForm"]')
        form.addEventListener('submit', event => {
            event.preventDefault()
            this.loginHandler(event)
        })
        return loginComponent
    }
}

const loginCmp = new LoginComponent()
export default loginCmp