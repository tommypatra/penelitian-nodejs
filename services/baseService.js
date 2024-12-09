//services/baseService
class baseService {
    constructor(model) {
        this.model = model;
    }
    
    async getAll(page = 1, limit = 10, searchField = '', searchValue = '') {
        const offset = (page - 1) * limit;
        const data = await this.model.findAll(offset, limit, searchField, searchValue);
        const total = await this.model.countAll(searchField, searchValue);
    
        return {
            data,
            pagination: {
                total,
                per_page: limit,
                current_page: page,
                last_page: Math.ceil(total / limit),
                from: offset + 1,
                to: offset + data.length,
            },
        };
    }
    
    async getById(id) {
        const data = await this.model.findById(id);
        if (!data) throw new Error('Data tidak ditemukan');
        return data;
    }
    
    async createData(data) {
        return await this.model.create(data);
    }
    
    async updateData(id, data) {
        const exists = await this.model.findById(id);
        if (!exists) throw new Error('Data tidak ditemukan');
        return await this.model.update(id, data);
    }
    
    async deleteData(id) {
        const exists = await this.model.findById(id);
        if (!exists) throw new Error('Data tidak ditemukan');
        await this.model.remove(id);
    }
}

module.exports = baseService;