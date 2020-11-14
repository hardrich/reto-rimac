/**
 * By Richard Principe Quiroz
 * Clase repositorio para la entidad People
 */

const swapi = require("swapi-node");
const { PeopleResponse } = require("../models/PeopleResponse");
const { DynamoHelper } = require("./DynamoHelper");

class PeopleRepository {
  constructor() {
    this.dynamoHelper = new DynamoHelper();
  }

  /**
   * Obtiene una coincidencia de People según un id.
   */
  async get(id) {
    let people = {};
    try {
      people = await this.dynamoHelper.get(id);
      if (!people) {
        people = await swapi.getPerson(id);
      }
      people = PeopleResponse.map(people);// mapeo a español
    } catch (error) {
      people = null;
    }
    return people;
  }

  /**
   * Guardar una fila de People en dynamo
  */
  async create(peopleDto) {
    await this.dynamoHelper.put(peopleDto);
    return { people: peopleDto.id };//id de la entidad creada
  }
}

exports.PeopleRepository = PeopleRepository;
