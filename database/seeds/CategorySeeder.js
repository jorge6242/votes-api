'use strict'

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Category = use('App/Models/Category')

const categories = [
  { description: 'Politics' },
  { description: 'Entertaiment' },
  { description: 'Business' }
]

class CategorySeeder {
    static async run () {
      for (const item of categories) {
        const newCategory = new Category()
        newCategory.description = item.description
        await newCategory.save();
      }
    }
}

module.exports = CategorySeeder
