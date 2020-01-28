import Component from '../components/Component'
import store from '../store/Store'
import _$ from './searcElement'

export default class MainMenuComponent extends Component {
    constructor() {
        super(store, _$('.main-menu__container'))
    }

    render() {
        this.anchor.innerHTML = `             
                <nav class="main__nav">
                    <ul class="main__nav__menu">
                        <ul class="main__nav__left-menu">
                            ${store.state.mainNavLeftMenu.map(({src, title}) => `
                                <li class="main__nav__left-menu__item">
                                    <a href="#" class="main__nav__left-menu__link">
                                        <img src="./assets/images/main/${src}.png" alt="${src}">
                                        ${title}
                                    </a>                                    
                                </li>                            
                            `).join('')}                           
                        </ul>
                        <ul class="main__nav__right-menu">                           
                             ${store.state.mainNavRightMenu.map(item => `
                                <li class="main__nav__right-menu__item">
                                    <a href="#" class="main__nav__right-menu__link">                                        
                                        ${item}
                                    </a>                                    
                                </li>                            
                            `).join('')}     
                        </ul>
                    </ul>
                </nav>
        `
    }
}
