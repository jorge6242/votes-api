'use strict'

const Marriage = use('App/Models/Marriage');

class MarriageController {
      /**
   * Show a list of all marriages.
   * GET marriages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ response }) {
    const marriages = await Marriage.all();
    return response.json(marriages)
  }
}

module.exports = MarriageController
