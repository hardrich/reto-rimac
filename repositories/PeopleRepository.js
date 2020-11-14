const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const swapi = require("swapi-node");
const { PeopleResponse } = require("../models/PeopleResponse");
const { DynamoHelper } = require("./DynamoHelper");

class PeopleRepository {
  constructor() {
    this.dynamoHelper = new DynamoHelper(dynamoDb, process.env.RIMAC_TABLE);
  }

  async get(id) {
    let people = {};
    try {
      people = await this.dynamoHelper.get(id);
      if (!people) {
        people = await swapi.getPerson(id);
      }
      people = PeopleResponse.map(people);
    } catch (error) {
      people = null;
    }
    return people;
  }

  async create(peopleDto) {
    await this.dynamoHelper.put(peopleDto);
    return { people: peopleDto.id };
  }
}

exports.PeopleRepository = PeopleRepository;
