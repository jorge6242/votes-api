'use strict';

const CategorySeeder = require('./CategorySeeder')
const MarriageSeeder = require('./MarriageSeeder')
const CandidateSeeder = require('./CandidateSeeder')
const UserSeeder = require('./UserSeeder')

class DatabaseSeeder {
  async run() {
    await MarriageSeeder.run()
    await CategorySeeder.run()
    await CandidateSeeder.run()
    await UserSeeder.run()
  }
}

module.exports = DatabaseSeeder