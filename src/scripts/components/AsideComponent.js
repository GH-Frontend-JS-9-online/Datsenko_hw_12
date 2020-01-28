import Component from '../components/Component'
import store from '../store/Store'
import _$ from './searcElement'

export default class AsideComponent extends Component{
    constructor() {
        super(store, _$('.aside'))
    }

    render() {
        this.anchor.innerHTML = `            
            <nav class="aside__nav">
                <ul class="aside__nav__menu">
                    ${store.state.asideItems.map(item => `
                        <li class="aside__nav__menu__item">
                            <a href="#">
                                <img src="./assets/images/aside/${item}.png" alt="${item}">
                            </a>
                            </li>                         
                        `).join('')}
                 </ul>
             </nav>                
        `
    }
}