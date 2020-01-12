import HTML from './HTML.js'

class HeaderComponent {
    constructor() {}
    render() {
        let headerComponent = HTML(`
            <header class="header">
                <div class="container">
                    <nav class="top-nav">
                        <a href="#" class="top-nam__logo">
                            <img src="./assets/images/header/logo.png" alt="logo">
                            <ul class="top-nav__menu">
                                <li class="top-nav__menu__item">
                                    <a href="#" class="top-nav__menu__link add-btn">
                                        Add<img src="./assets/images/header/plus.png" alt="plus">
                                    </a>
                                </li>
                                <li class="top-nav__menu__item">
                                    <a href="#" class="top-nav__menu__link search">
                                        <img src="./assets/images/header/search.png" alt="search">
                                    </a>
                                </li>
                                <li class="top-nav__menu__item">
                                    <a href="#" class="top-nav__menu__link bell">
                                        <img src="./assets/images/header/bell.png" alt="bell">
                                    </a>
                                </li>
                                <li class="top-nav__menu__item">
                                    <a href="#" class="top-nav__menu__link profile">
                                        <img src="./assets/images/header/ellipse.png" alt="ellipse">
                                        <img src="./assets/images/header/chevron.png" alt="chevron">
                                    </a>
                                </li>
                            </ul>
                        </a>
                    </nav>
                </div>
            </header>        
        `)
        return headerComponent
    }
}

const headerCmp = new HeaderComponent()
export default headerCmp