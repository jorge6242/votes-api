'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CandidateVoteSchema extends Schema {
  up () {
    this.create('candidate_votes', (table) => {
      table.increments()
      table.integer('user_id')
      table.integer('candidate_id')
      table.integer('vote')
      table.timestamps()
    })
  }

  down () {
    this.drop('candidate_votes')
  }
}

module.exports = CandidateVoteSchema
