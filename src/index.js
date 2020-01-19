import styles from "./styles/main.scss"

import components from "./scripts/main.js";

const app = document.getElementById('app')
components.map(component => app.append(component.render()))

import fakeApiService from "./scripts/services/FakeApiService.js";


fakeApiService.signUp(user)
    .then(response => response.json())
    .then(data => console.table(data))
    .catch(error => console.error(error))

fakeApiService.login(user)
    .then(response => response.json())
    .then(data => console.table(data))
    .catch(error => console.error(error))


fakeApiService.resetPassword(user)
    .then(response => response.json())
    .then(data => console.table(data))
    .catch(error => console.error(error))

fakeApiService.getCurrentUser(user)
    .then(response => response.json())
    .then(data => console.table(data))
    .catch(error => console.error(error))

fakeApiService.getAllUsers(user)
    .then(response => response.json())
    .then(data => console.table(data))
    .catch(error => console.error(error))

fakeApiService.retrieveAllThreads(user)
    .then(response => response.json())
    .then(response => console.table(response))
    .catch(error => console.error(error))

fakeApiService.createThread(user)
    .then(response => response.json())
    .then(response => console.table(response))
    .catch(error => console.error(error))

fakeApiService.sendMessage(user, 'Hello World !!!')
    .then(response => response.json())
    .then(data => console.table(data))
    .catch(error => console.error(error))