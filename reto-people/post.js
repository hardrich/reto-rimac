/**
 * By Richard Principe Quiroz
 * Handler para guardar personas (entidad People) en una tabla dynamodb
 * Se debe enviar en el body un json que cumpla con el modelo PeopleRequest (campos en español)
 * Se guardará en la tabla si es un modelo válido, luego el servidor responderá con el
 * identificador de la persona. Esto es temporal para poder luego hacer uso del endpoint GET y
 * obtener los datos desde la tabla en dynamodb.
 */
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
  if (body) {
    let people = parseJson(body);
    if (PeopleRequest.isValid(people)) {
      people.id = uuid().toString();
      const response = await repository.create(PeopleRequest.mapToDTO(people)); //mapToDTO(people) mapea un request en español a su equivalente en inglés
      return created(response);
    } else {
      return badRequest(ResponseUtil.invalid());
    }
  } else {
    return badRequest(ResponseUtil.invalid());
  }
};
