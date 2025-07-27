import APIService from './APIService'
import { type collection } from '../components/admin/collections/Collections'

class AdminSerivces extends APIService {
    constructor() {
        super();
    }

    async getCollections() {
        return this.get('/collections/', {})
    }

    async postCollection(collection : collection) {
        return this.post('/collections/', collection)
    }
}


export default AdminSerivces;
