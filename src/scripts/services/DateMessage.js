export default class DateMessage {
    constructor() {
        this._date = new Date()
        this._monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ]
    }

    timeMessage() {
        let hours = (this._date.getHours() < 10) ? `0${this._date.getHours()}` : `${this._date.getHours()}`
        let minutes =  (this._date.getMinutes() < 10) ? `0${this._date.getMinutes()}` : `${this._date.getMinutes()}`
        return `${hours}:${minutes}`
    }

    dateMessage() {
        return `${this._date.getDate()} ${this._monthNames[this._date.getMonth()]} ${this._date.getFullYear()}`
    }

    totalDateMessage() {
        return `${this.dateMessage()}, ${this.timeMessage()}`
    }
}