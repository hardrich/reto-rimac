const { PeopleRequest } = require("../models/PeopleRequest");

test("validation people request", () => {
  expect(PeopleRequest.isValid({})).toBe(false);
  expect(
    PeopleRequest.isValid({
      nombre: "Testtt",
      alto: "188",
      peso: "86",
      color_cabello: "white",
      color_piel: "fair",
      color_ojos: "blue",
      año_nacimiento: "222BBY",
      genero: "male",
      planeta_nacimiento: "http://swapi.dev/api/planets/1/",
      peliculas: [
        "http://swapi.dev/api/films/1/",
        "http://swapi.dev/api/films/2/",
        "http://swapi.dev/api/films/3/",
        "http://swapi.dev/api/films/6/",
      ],
      especies: [],
      vehiculos: [
        "http://swapi.dev/api/vehicles/14/",
        "http://swapi.dev/api/vehicles/30/",
      ],
      naves: [
        "http://swapi.dev/api/starships/12/",
        "http://swapi.dev/api/starships/22/",
      ],
      creado: "2014-12-09T13:50:51.644000Z",
      editado: "2014-12-20T21:17:56.891000Z",
      url: "http://swapi.dev/api/people/1/",
    })
  ).toBe(true);
  expect(
    PeopleRequest.isValid({
      alto: "188",
      peso: "86",
      color_cabello: "white",
      color_piel: "fair",
      color_ojos: "blue",
      año_nacimiento: "222BBY",
      genero: "male",
      planeta_nacimiento: "http://swapi.dev/api/planets/1/",
      peliculas: [
        "http://swapi.dev/api/films/1/",
        "http://swapi.dev/api/films/2/",
        "http://swapi.dev/api/films/3/",
        "http://swapi.dev/api/films/6/",
      ],
      especies: [],
      vehiculos: [
        "http://swapi.dev/api/vehicles/14/",
        "http://swapi.dev/api/vehicles/30/",
      ],
      naves: [
        "http://swapi.dev/api/starships/12/",
        "http://swapi.dev/api/starships/22/",
      ],
      creado: "2014-12-09T13:50:51.644000Z",
      editado: "2014-12-20T21:17:56.891000Z",
      url: "http://swapi.dev/api/people/1/",
    })
  ).toBe(false);
  expect(
    PeopleRequest.isValid({
      alto: 188,
      peso: "86",
      color_cabello: "white",
      color_piel: "fair",
      color_ojos: "blue",
      año_nacimiento: "222BBY",
      genero: "male",
      planeta_nacimiento: "http://swapi.dev/api/planets/1/",
      peliculas: [
        "http://swapi.dev/api/films/1/",
        "http://swapi.dev/api/films/2/",
        "http://swapi.dev/api/films/3/",
        "http://swapi.dev/api/films/6/",
      ],
      especies: [],
      vehiculos: [
        "http://swapi.dev/api/vehicles/14/",
        "http://swapi.dev/api/vehicles/30/",
      ],
      naves: [
        "http://swapi.dev/api/starships/12/",
        "http://swapi.dev/api/starships/22/",
      ],
      creado: "2014-12-09T13:50:51.644000Z",
      editado: "2014-12-20T21:17:56.891000Z",
      url: "http://swapi.dev/api/people/1/",
    })
  ).toBe(false);
  expect(
    PeopleRequest.isValid({
      nombre: "Richard Principe",
      alto: "188",
      peso: "86",
      color_cabello: "white",
      color_piel: "fair",
      color_ojos: "blue",
      año_nacimiento: "222BBY",
      genero: "male",
      planeta_nacimiento: "http://swapi.dev/api/planets/1/",
      peliculas: [],
      especies: [],
      vehiculos: [
        "http://swapi.dev/api/vehicles/14/",
        "http://swapi.dev/api/vehicles/30/",
      ],
      naves: [
        "http://swapi.dev/api/starships/12/",
        "http://swapi.dev/api/starships/22/",
      ],
      creado: "2014-12-09T13:50:51.644000Z",
      editado: "2014-12-20T21:17:56.891000Z",
      url: "http://swapi.dev/api/people/1/",
    })
  ).toBe(true);
});
