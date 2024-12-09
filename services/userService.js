//services/userService.js

const baseService = require('./baseService');
const userModel = require('../models/userModel');

class myService extends baseService {
    constructor() {
        super(userModel);
    }

    async getByEmail(email) {
        return await this.model.findByEmail(email);
    }
}

module.exports = new myService();
