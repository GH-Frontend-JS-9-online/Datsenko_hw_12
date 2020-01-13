import HTML from './HTML.js'

class AboutComponent {
    constructor() {}
    render() {
        const aboutComponentData = []
        let aboutComponent = HTML(`
            <div class="main-message-container__right-aside about">                    
                <img src="./assets/images/main/ellipse.png" alt="profile-photo">
                <div class="profile__data">
                    <h2 class="profile__name">Name</h2>
                    <h3 class="profile__position">UX/UI Designer</h3>
                    <p class="profile__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur consequuntur corporis dolorem est molestiae non numquam officia quam saepe!</p>
                </div>

                <div class="email">
                    <p class="email-title">
                        Email
                    </p>
                    <p class="email-data">
                        someemail@gmail.com
                    </p>
                </div>
                <div class="phone">
                    <p class="phone-title">
                        Phone
                    </p>
                    <p class="phone-data">
                        +48 500 400 300
                    </p>
                </div>
                <div class="address">
                    <p class="address-title">
                        Address
                    </p>
                    <p class="address-data">
                        65 Lorem St, Warsaw, PL
                    </p>
                </div>
                <div class="organization">
                    <p class="organization-title">
                        Organization
                    </p>
                    <p class="organization-data">
                        Symu.co
                    </p>
                </div>
            </div>
        `)
        return aboutComponent
    }
}
const aboutCmp = new AboutComponent()
export default aboutCmp