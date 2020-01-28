import Component from '../components/Component'
import store from '../store/Store'
import _$ from './searcElement'

export default class HeaderComponent extends Component {
    constructor() {
        super(store, _$('.header'))
    }

    render() {
        this.anchor.innerHTML = `                          
            <nav class="top-nav">
                <a href="#" class="top-nav__logo">
                    <img src="./assets/images/header/logo.png" alt="logo">
                </a>                        
                <ul class="top-nav__menu">
                    ${store.state.headerMenuItems.map( item => `
                    <li class="top-nav__menu__item">
                        <a href="#" class="top-nav__menu__link"  ${item}>
                            <img src="./assets/images/header/${item}.png" alt="${item}">
                        </a>
                     </li>
                     `).join('')}
                 </ul>                        
             </nav>             
        `
    }
}
