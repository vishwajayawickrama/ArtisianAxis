import APIService from './APIService'

class AdminSerivces extends APIService {
    constructor() {
        super();
    }

    // Collections related API calls
    async getCollections() {
        return this.get('/collections/', {})
    }

    async getCollection(id: string) {
        return this.get(`/collections/${id}/`, {})
    }

    async getCollectionProducts(id: string) {
        return this.get(`/collections/${id}/products/`, {})
    }
}

export default AdminSerivces;
