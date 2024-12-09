//services/roleService.js

const baseService = require('./baseService');
const myModel = require('../models/roleModel');

class myService extends baseService {
    constructor() {
        super(myModel);
    }

    async getByNama(nama) {
        return await this.model.findByNama(nama);
    }
}

module.exports = new myService();