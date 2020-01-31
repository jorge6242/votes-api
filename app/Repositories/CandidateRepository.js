"use strict";

const Candidate = use("App/Models/Candidate");
const CandidateVote = use("App/Models/CandidateVote");
const Database = use("Database");

class CandidateRepository {
  async all() {
    const arrayCandidates = [];
    const fetchCandidates = await Candidate.query()
      .with("category")
      .fetch();

    for (const item of fetchCandidates.toJSON()) {
      const candidate = item;
      const percentageNo = await this.getPercentageVotes(item.id, 0);
      const percentageYes = await this.getPercentageVotes(item.id, 1);
      candidate.percentageNo = percentageNo;
      candidate.percentageYes = percentageYes;
      arrayCandidates.push(candidate);
    }
    return arrayCandidates;
  }

  async getPercentageVotes(candidate, type) {
    const votes = await Database.from("candidate_votes")
      .where("candidate_id", candidate)
      .where("vote", type)
      .getCount("vote");
    return (votes * 100) / 100;
  }

  async getAmountVotes({user, candidate}) {
    return await Database.from("candidate_votes")
      .where("user_id", user)
      .where("candidate_id", candidate)
      .getCount("vote");
  }

  async createVote({ user, candidate, vote }){
    const amountVotes = await this.getAmountVotes({ user, candidate})

    if (amountVotes === 3) {
        return false
    }

    const newCandidateVote = new CandidateVote()
    newCandidateVote.user_id = user
    newCandidateVote.candidate_id = candidate
    newCandidateVote.vote = vote
    return await newCandidateVote.save()
  }
}

module.exports = CandidateRepository;
