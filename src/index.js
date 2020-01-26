import styles from "./styles/main.scss"
import {authorization} from "./scripts/main.js";

const app = document.getElementById('app')
authorization.map(component => app.append(component.render()))

import fakeApiService from "./scripts/services/FakeApiService.js";


// fakeApiService.signUp(user)
//     .then(response => response.json())
//     .then(data => console.table(data))
//     .catch(error => console.error(error))
//
// fakeApiService.login(user)
//     .then(response => response.json())
//     .then(data => console.table(data))
//     .catch(error => console.error(error))
//
//
// fakeApiService.resetPassword(user)
//     .then(response => response.json())
//     .then(data => console.table(data))
//     .catch(error => console.error(error))
//
// fakeApiService.getCurrentUser(user)
//     .then(response => response.json())
//     .then(data => console.table(data))
//     .catch(error => console.error(error))

// fakeApiService.getAllUsers(user)
//     .then(response => response.json())
//     .then(data => console.table(data))
//     .catch(error => console.error(error))
//
// fakeApiService.retrieveAllThreads(user)
//     .then(response => response.json())
//     .then(response => console.table(response))
//     .catch(error => console.error(error))

//
//
// fakeApiService.createThread(user)
//     .then(response => response.json())
//     .then(response => console.table(response))
//     .catch(error => console.error(error))
//
// fakeApiService.sendMessage(user, 'Hello')
//     .then(response => response.json())
//     .then(data => console.table(data))
//     .catch(error => console.error(error))

// fakeApiService.retrieveAllThreadMessages(user)
//     .then(response => response.json())
//     .then(data => console.table(data[0].body))
//     .catch(error => console.error(error))