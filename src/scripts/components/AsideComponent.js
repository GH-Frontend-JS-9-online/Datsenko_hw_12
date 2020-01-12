import HTML from './HTML.js'

class AsideComponent {
    constructor() {}
    render() {
        let asideComponent = HTML(`
            <aside class="aside">
                <nav class="aside__nav">
                    <ul class="aside__nav__menu">
                        <li class="aside__nav__menu__item">
                            <a href="#" class="aside__nav__menu__link">
                                <img src="./assets/images/aside/home.png" alt="home">
                            </a>
                        </li>
                        <li class="aside__nav__menu__item">
                            <a href="#" class="aside__nav__menu__link">
                                <img src="./assets/images/aside/menu.png" alt="menu">
                            </a>
                        </li>
                        <li class="aside__nav__menu__item">
                            <a href="#" class="aside__nav__menu__link">
                                <img src="./assets/images/aside/trending-up.png" alt="trending-up">
                            </a>
                        </li>
                        <li class="aside__nav__menu__item">
                            <a href="#" class="aside__nav__menu__link">
                                <img src="./assets/images/aside/email.png" alt="email">
                            </a>
                        </li>
                        <li class="aside__nav__menu__item">
                            <a href="#" class="aside__nav__menu__link">
                                <img src="./assets/images/aside/account-multiple.png" alt="account-multiple">
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
        
        `)
        return asideComponent
    }
}

const asideCmp = new AsideComponent()
export default  asideCmp