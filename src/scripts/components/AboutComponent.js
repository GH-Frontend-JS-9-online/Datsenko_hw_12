import HTML from "./HTML.js";
import fakeApiService from "../services/FakeApiService";
import Storage from "../services/Storage.js";

class AboutComponent {
    constructor() {}
    render(user) {
        fakeApiService.login(user)
            .then(response => response.json())
            .then(data => Storage.setData('user', data))
            .catch(error => console.error(error))
        let userInfo = [Storage.getData('user')]
        Storage.removeData()
        let aboutComponent = HTML(`
            <div class="about">
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
            </div>
        `)
        return aboutComponent
    }
}
const aboutCmp = new AboutComponent()
export default aboutCmp