import HTML from "./HTML.js";

class AboutComponent {
    constructor() {}
    render() {
        let userData = [{_id: "5e13095244e24582b460517c",
            name: "Michelle Stewart",
            password: "$2b$10$JzoNeNEasPYqjMIBKsUNq.GrvtcBs9pIpG.DsMbdRYSkadjYBnHaK",
            email: "michelle@geekhub.ck.ua",
            position: "UX/UI Designer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            phone: "+48 500 400 300",
            address: "65 Lorem St, Warshaw, PL",
            organization: "GeekHub Corp"}]
        let aboutComponent = HTML(`
            <div class="about">
                <div class="user-photo">
                    <img src="./assets/images/main/online.png" alt="online">
                    <img src="./assets/images/main/ellipse.png" alt="photo">
                </div>
                ${userData.map(({name, email, position, description, phone, address, organization}) => `
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