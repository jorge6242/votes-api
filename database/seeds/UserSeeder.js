"use strict";

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Hash = use('Hash')

const User = use("App/Models/User");
const Marriage = use("App/Models/Marriage");

const users = [
  { email: "jorge6242@gmail.com", password: "123456", username: "jorge6242" , age: 18 , type: 'Marriage' },
  { email: "user1@user.com", password: "123456", username: "user1" , age: 18 , type: 'Divorced' },
  { email: "user2@user.com", password: "123456", username: "user2" , age: 18 , type: 'Single' },
  { email: "user3@user.com", password: "123456", username: "user3" , age: 18 , type: 'Divorced' }
];

class UserSeeder {
   static async run() {
    for (const item of users) {
      const typeMarriage = await Marriage.query().where('description', item.type).first()
      if(typeMarriage) {
        const newUser = new User();
        newUser.email = item.email
        newUser.password = item.password
        newUser.username = item.username
        newUser.age = item.age
        newUser.marriages_id = typeMarriage.id
        await newUser.save();
      }
    }
  }
}

module.exports = UserSeeder;
