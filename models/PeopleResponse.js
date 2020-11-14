/**
 * By Richard Principe Quiroz
 * Clase que implementa un response de la entidad People.
 */
const objectMapper = require('object-mapper');

class PeopleResponse {
  /**
   * Mapeo de la entidad People (guardad en swapi o dynamodb) a un modelo en español
   */
  static map(people) {
    var map = {
      "name" : "nombre",
      "height" : "alto",
      "mass" : "peso",
      "hair_color" : "color_cabello",
      "skin_color" : "color_piel",
      "eye_color" : "color_ojos",
      "birth_year" : "año_nacimiento",
      "gender" : "genero",
      "homeworld" : "planeta_nacimiento",
      "films" : "peliculas",
      "species" : "especies",
      "vehicles" : "vehiculos",
      "starships" : "naves",    
      "created" : "creado",
      "edited" : "editado",
      "url" : "url",
    };
    return objectMapper(people, map);
  }
}

exports.PeopleResponse = PeopleResponse;
