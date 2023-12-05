export class Iss{
    #latitude
    #longitude

    constructor(latitude, longitude) {
        this._latitude = latitude;
        this._longitude = longitude;
    }


    get latitude() {
        return this._latitude;
    }

    set latitude(value) {
        this._latitude = value;
    }

    get longitude() {
        return this._longitude;
    }

    set longitude(value) {
        this._longitude = value;
    }

    async setCoordonnees() {
        let issPosition = await fetch('http://api.open-notify.org/iss-now.json')
            .then(response => response.json())
            .then(response => response.iss_position)
        this.latitude = await issPosition.latitude
        this.longitude = await issPosition.longitude
    }

    async afficherCoordonnees() {
        await this.setCoordonnees()

        return [this.latitude, this.longitude]
    }
}