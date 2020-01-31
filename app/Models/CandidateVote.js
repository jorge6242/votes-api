'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CandidateVote extends Model {
    user() {
        return this.belongsTo('App/Models/User', 'user_id', 'id')
    }
    candidate() {
        return this.belongsTo('App/Models/Candidate', 'candidate_id', 'id')
    }
}

module.exports = CandidateVote
