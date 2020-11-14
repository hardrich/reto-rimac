/**
 * By Richard Principe Quiroz
 * Handler para obtener una persona (entidad People) por su {id} desde una tabla dynamodb o desde swapi
 * Se debe enviar el path como parámetro al id de la persona
 * Se buscará primero en la tabla dynamo, si existe una coincidencia, mapea 
 * la persona a campos en español y el servidor responde satisfactoriamente con este modelo en español;
 * si no existe una coincidencia en dynamo entonces se conecta a swapi, si existe una coincidencia, mapea 
 * la persona a campos en español y el servidor responde satisfactoriamente con este modelo en español.
 * El servidor responderá con un código 404 si no encuentra la persona.
 */
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
