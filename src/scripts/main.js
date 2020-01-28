// import LoginComponent from './components/LoginComponent'
// const login = new LoginComponent()
// export default login

import createTemplate from "./components/createTemplate";
import HeaderComponent from "./components/HeaderComponent";
import AsideComponent from "./components/AsideComponent";
import MainMenuComponent from "./components/MainMenuComponent";
import InboxComponent from "./components/InboxComponent";
import MessagesComponent from "./components/MessagesComponent";
import WriteMessageComponent from "./components/WriteMessageComponent";
import AboutComponent from "./components/AboutComponent";
import _$ from "./components/searcElement";

const app = _$('#app')
app.append(createTemplate())

const components = [
    new HeaderComponent(),
    new AsideComponent(),
    new MainMenuComponent(),
    new InboxComponent(),
    new MessagesComponent(),
    new WriteMessageComponent(),
    new AboutComponent()
]


export default components