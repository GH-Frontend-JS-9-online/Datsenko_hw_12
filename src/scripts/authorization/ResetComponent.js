import Component from '../components/Component'
import store from '../store/Store'
import _$ from '../components/searcElement'
import dashboardServices from '../sevices/DashboardServices'

export default class ResetComponent extends Component {
    constructor() {
        super(store, _$('#app'))
    }

    render() {
        this.anchor.innerHTML = `
            <div class="container" id="container">
                <div class="view-container">
                    <div class="view">
                        <div class="image"></div>
                    </div>
            </div>
            <div class="form-container sign-up-container">
                <form name="registerForm" class="form">
                    <h1>Reset password</h1>
                    <span>Please enter your new password</span>
                    <input type="password" name="userPassword" placeholder="Password..." required>
                    <input input type="password" name="userConfirmPassword" placeholder="Confirm password..." required>
                    <button class="btn btn-register" type="submit"">Sign up</button>            
                </form>
            </div>
            </div>
        `
    }
}