'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const UserService = use('App/Services/UserService');

/**
 * Resourceful controller for interacting with users
 */
class UserController {

  constructor() {
    this.UserService = new UserService()
  }
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let user = await this.UserService.index()
    return response.json(user)
  }

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    const book = await this.UserService.read(params.id)
    return response.json(book)
  }


  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const { id } = params;
    const { username, email, password, age } = request.post()
    return await this.UserService.update({ id, body: { username, email, password, age } })
  }

    /**
   * Check user email.
   */
  async checkEmail ({ params, request, response }) {
    const { email } = params
    const checkStatus = await this.UserService.checkEmail(email)
    return response.json(checkStatus)
  }

}

module.exports = UserController
