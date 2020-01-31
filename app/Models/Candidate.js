'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Candidate extends Model {
    category() {
        return this.belongsTo('App/Models/Category', 'categories_id', 'id')
      }
    candidateVotes () {
        return this.hasMany('App/Models/CandidateVote', 'id', 'candidate_id')
      }
}

module.exports = Candidate
