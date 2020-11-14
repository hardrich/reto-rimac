"use strict";

const { PeopleRepository } = require("../repositories/PeopleRepository");
const { responseWithStatus } = require("../utils/response");

const ok = responseWithStatus(200, JSON.stringify);
const notFound = responseWithStatus(404);
const repository = new PeopleRepository();

exports.handler = async (event) => {
  const people = await repository.get(event.pathParameters.id);
  return people ? ok(people) : notFound();
};
