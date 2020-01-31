"use strict";

/*
|--------------------------------------------------------------------------
| CandidateSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Category = use("App/Models/Category");
const Candidate = use("App/Models/Candidate");

const candidates = [
  {
    name: "Kanye West",
    description:
      "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero",
    category: "Entertaiment",
    image: 'bg-vote-keny.png'
  },
  {
    name: "Mark Zuckerberg",
    description:
      "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero",
    category: "Business",
    image: 'bg-vote-mark.jpg'
  },
  {
    name: "Cristina Fernandez de Kirchner",
    description:
      "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero",
    category: "Politics",
    image: 'bg-vote-cristina.png'
  },
  {
    name: "Malala Yousafzai",
    description:
      "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero",
    category: "Entertaiment",
    image: 'bg-vote-india.png'
  }
];

class CandidateSeeder {
   static async run() {
    for (const item of candidates) {
      const newCategory = await Category.query().where('description', item.category).first()
      if(newCategory) {
        const newCandidate = new Candidate();
        newCandidate.name = item.name;
        newCandidate.description = item.description;
        newCandidate.image = item.image;
        newCandidate.categories_id = newCategory.id
        await newCandidate.save();
      }
    }
  }
}

module.exports = CandidateSeeder;
