import APIService from './APIService'
//import { type collection } from '../components/admin/collections/Collections'

class AdminSerivces extends APIService {
    constructor() {
        super();
    }

    // Collections related API calls
    async getCollections() {
        return this.get('/collections/', {})
    }

    async postCollection(collection : FormData) {
        return this.postFormWithFile('/collections/', collection)
    }

    async deleteCollection(id : string) {
        return this.delete(`/collections/${id}`)
    }

    // Products related API calls
    async getProducts() {
        return this.get('/products/', {})
    }

    async postProduct(product : FormData) {
        return this.postFormWithFile('/products/', product)
    }

    async deleteProduct(id : string) {
        return this.delete(`/products/${id}`)
    }

}


export default AdminSerivces;
