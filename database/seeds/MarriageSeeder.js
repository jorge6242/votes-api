'use strict'

/*
|--------------------------------------------------------------------------
| MarriageSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Marriage = use('App/Models/Marriage')

const marriage = [
  { description: 'Single' },
  { description: 'Marriage' },
  { description: 'Widower' },
  { description: 'Divorced' }
]

class MarriageSeeder {
  static async run () {
    for (const item of marriage) {
      const newMarriage = new Marriage()
      newMarriage.description = item.description
      await newMarriage.save();
    }
  }
}

module.exports = MarriageSeeder
