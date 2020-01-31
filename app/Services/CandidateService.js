'use strict'

const CandidateRepository = use('App/Repositories/CandidateRepository');

class CandidateService {
    constructor(){
        this.CandidateRepository = new CandidateRepository()
      }
    async index() {
        return await this.CandidateRepository.all();
    }

    async createVote(params) {
        return await this.CandidateRepository.createVote(params)
    }
}

module.exports = CandidateService
