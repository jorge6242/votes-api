"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const CandidateService = use("App/Services/CandidateService");

/**
 * Resourceful controller for interacting with candidates
 */
class CandidateController {
  constructor() {
    this.CandidateService = new CandidateService();
  }

  /**
   * Show a list of all candidates.
   * GET candidates
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ response }) {
    const candidates = await this.CandidateService.index();
    return response.json(candidates);
  }

  /**
   * Create/save a new candidate vote.
   * POST candidates
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async createCandidateVote({ request, auth, response }) {
    const { candidate, vote } = request.post();
    const { id } = await auth.getUser();
    const candidates = await this.CandidateService.createVote({
      candidate,
      vote,
      user: id
    });
    if (candidates) {
      return response.json({ message: "Vote Saved!" });
    }
    return response
      .status(400)
      .json({ message: "You only can vote three times per candidate" });
  }

}

module.exports = CandidateController;
