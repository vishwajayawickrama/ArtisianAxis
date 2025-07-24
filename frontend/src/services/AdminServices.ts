import APIService from './APIService'

class AdminSerivces extends APIService {
    constructor() {
        super();
    }

    async getCollections() {
        return this.get('/collections/', {})
    }
}


export default AdminSerivces;
