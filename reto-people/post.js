"use strict";

const { PeopleRepository } = require("../repositories/PeopleRepository");
const { responseWithStatus } = require("../utils/response");
const { parseWith } = require("../utils/request");
const { v1: uuid } = require("uuid");
const { PeopleRequest } = require("../models/PeopleRequest");
const { ResponseUtil } = require("../utils/ResponseUtil");

const created = responseWithStatus(201, JSON.stringify);
const badRequest = responseWithStatus(400, JSON.stringify);
const parseJson = parseWith(JSON.parse);
const repository = new PeopleRepository();

exports.handler = async (event) => {
  const { body } = event;
  let people = parseJson(body);
  if (PeopleRequest.isValid(people)) {
    people.id = uuid().toString();
    await repository.create(PeopleRequest.mapToDTO(people));
    return created(ResponseUtil.createdOk());
  } else {
    return badRequest(ResponseUtil.invalid());
  }
};
