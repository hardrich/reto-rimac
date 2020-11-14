/**
 * By Richard Principe Quiroz
 * Clase helper para soportar la manipulacion de datos de una tabla en dynamodb
 */
const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

class DynamoHelper {
  constructor() {
    this.documentClient = dynamoDb;
    this.params = {
      TableName: process.env.RIMAC_TABLE
    };
  }

  /**
   * Obtener una fila de una tabla dynamodb
   */
  async get(id) {
    const getParams = this.createParamObject({ 
      Key: {
        id: id
      },
    });
    const response = await this.documentClient.get(getParams).promise();
    return response.Item;
  } 

  /**
   * Guardar una fila en una tabla dynamodb
   */
  async put(entity) {
    const params = this.createParamObject({ Item: entity });
    await this.documentClient.put(params).promise();
    return entity;
  }

  /**
   * Asignar parámetros adicionales a la configuración de la acción con dynamo
   */
  createParamObject(additionalArgs = {}) {
    return Object.assign({}, this.params, additionalArgs);
  }
}

exports.DynamoHelper = DynamoHelper;
