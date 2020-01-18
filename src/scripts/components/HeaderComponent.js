import HTML from './HTML.js'

class HeaderComponent {
    constructor() {}
    render() {
        const headerMenuImg = ['plus', 'search', 'bell', 'ellipse']
        let headerComponent = HTML(`
            <header class="header">                
                    <nav class="top-nav">
                        <a href="#" class="top-nav__logo">
                            <img src="./assets/images/header/logo.png" alt="logo">
                        </a>                        
                        <ul class="top-nav__menu">
                               ${headerMenuImg.map( item => `
                                    <li class="top-nav__menu__item">
                                        <a href="#" class="top-nav__menu__link"  ${item}>
                                            <img src="./assets/images/header/${item}.png" alt="${item}">
                                        </a>
                                    </li>
                               `).join('')}
                        </ul>                        
                    </nav>              
            </header>        
        `)
        return headerComponent
    }
}

const headerCmp = new HeaderComponent()
export default headerCmp

