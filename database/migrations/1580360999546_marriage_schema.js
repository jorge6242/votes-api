'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MarriageSchema extends Schema {
  up () {
    this.create('marriages', (table) => {
      table.increments()
      table.string('description', 80)
      table.timestamps()
    })
  }

  down () {
    this.drop('marriages')
  }
}

module.exports = MarriageSchema
