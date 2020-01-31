'use strict'

const UserRepository = use('App/Repositories/UserRepository');

class UserService {
    constructor(){
        this.UserRepository = new UserRepository()
      }
    async index() {
        return await this.UserRepository.all();
    }

    async read(id) {
        return await this.UserRepository.find(id);
    }

    async update(params) {
        return await this.UserRepository.update(params);
    }

    async checkEmail(email) {
        return await this.UserRepository.checkEmail(email);
    }

}

module.exports = UserService
