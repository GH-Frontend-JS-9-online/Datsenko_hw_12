import HTML from "./HTML.js";

class AboutComponent {
    constructor() {}
    render() {
        let aboutComponent = HTML(`
            <div class="about">
                <div class="user-photo">
                    <img src="./assets/images/main/online.png" alt="online">
                    <img src="./assets/images/main/ellipse.png" alt="photo">
                </div>
                <div class="user-data">
                    <h2>Lyall Roach</h2>
                    <h3>UX/UI Designer</h3>
                    <p>
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad
                    </p>
                 </div>
                 <ul class="user-contacts">
                    <li class="user-contacts__item">
                    <h4>Email</h4>
                    <span>lyallroach@gmail.com</span>
                    </li>
                    <li class="user-contacts__item">
                    <h4>Phone</h4>
                    <span>+48 500 400 300</span>
                    </li>
                    <li class="user-contacts__item">
                    <h4>Address</h4>
                    <span>65 Lorem St, Warsaw, PL</span>
                    </li>
                    <li class="user-contacts__item">
                    <h4>Organization</h4>
                    <span>Symu.co</span>
                    </li>
                </ul>
            </div>
        `)
        return aboutComponent
    }
}
const aboutCmp = new AboutComponent()
export default aboutCmp