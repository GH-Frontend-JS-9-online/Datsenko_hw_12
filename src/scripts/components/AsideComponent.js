import HTML from './HTML.js'

class AsideComponent {
    constructor() {}
    render() {
        const dataImg = ['home', 'menu', 'trending-up', 'email', 'account-multiple']
        let asideComponent = HTML(`
            <aside class="aside">
                <nav class="aside__nav">
                    <ul class="aside__nav__menu">
                        ${dataImg.map(item => `
                             <li class="aside__nav__menu__item">
                                <a href="#">
                                    <img src="./assets/images/aside/${item}.png" alt="${item}">
                                </a>
                            </li>                         
                        `).join('')}
                    </ul>
                </nav>
            </aside>        
        `)
        return asideComponent
    }
}

const asideCmp = new AsideComponent()
export default  asideCmp

