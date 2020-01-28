import Component from '../components/Component'
import store from '../store/Store'
import _$ from './searcElement'
import Storage from '../store/Storage'

export default class AboutComponent extends Component{
    constructor() {
        super(store, _$('.about'))
    }

    render() {
        let userInfo = [Storage.getData('user')]

        this.anchor.innerHTML = `
            <div class="user-photo">
                <img src="./assets/images/main/online.png" alt="online">
                <img src="./assets/images/main/ellipse.png" alt="photo">
            </div>
            ${userInfo.map(({name, email, position, description, phone, address, organization}) => `
                <div class="user-data">
                <h2>${name}</h2>
                <h3>${position}</h3>
                <p>${description}</p>
             </div>
             <ul class="user-contacts">
                <li class="user-contacts__item">
                <h4>Email</h4>
                <span>${email}</span>
                </li>
                <li class="user-contacts__item">
                <h4>Phone</h4>
                <span>${phone}</span>
                </li>
                <li class="user-contacts__item">
                <h4>Address</h4>
                <span>${address}</span>
                </li>
                <li class="user-contacts__item">
                <h4>Organization</h4>
                <span>${organization}</span>
                </li>
            </ul>
            `).join('')}

        `
    }
}