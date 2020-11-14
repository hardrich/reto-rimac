const objectMapper = require('object-mapper');

class PeopleRequest {
  static isValid(people) {    
    return (
      people &&
      typeof people.nombre === "string" &&
      typeof people.alto === "string" &&
      typeof people.peso === "string" &&
      typeof people.color_cabello === "string" &&
      typeof people.color_piel === "string" &&
      typeof people.color_ojos === "string" &&
      typeof people.año_nacimiento === "string" &&
      typeof people.genero === "string" &&
      typeof people.planeta_nacimiento === "string" &&
      typeof people.peliculas === "object" &&
      typeof people.especies === "object" &&
      typeof people.vehiculos === "object" &&
      typeof people.naves === "object" &&
      typeof people.url === "string" &&
      typeof people.creado === "string" &&
      typeof people.editado === "string"
    );
  }

  static mapToDTO(people) {
    var map = {
      "id": "id",
      "nombre": "name",
      "alto": "height",
      "peso": "mass",
      "color_cabello": "hair_color",
      "color_piel": "skin_color",
      "color_ojos": "eye_color",
      "año_nacimiento": "birth_year",
      "genero": "gender",
      "planeta_nacimiento": "homeworld",
      "peliculas": "films",
      "especies": "species",
      "vehiculos": "vehicles",
      "naves": "starships",
      "creado": "created",
      "editado": "edited",
      "url": "url",
    };
    return objectMapper(people, map);
  }
}

exports.PeopleRequest = PeopleRequest;
