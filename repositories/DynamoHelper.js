class DynamoHelper {
  constructor(documentClient, tableName) {
    this.documentClient = documentClient;
    this.params = {
      TableName: tableName
    };
  }

  async get(id) {
    const getParams = this.createParamObject({ 
      Key: {
        id: id
      },
    });
    const response = await this.documentClient.get(getParams).promise();
    return response.Item;
  } 

  async put(entity) {
    const params = this.createParamObject({ Item: entity });
    await this.documentClient.put(params).promise();
    return entity;
  }

  createParamObject(additionalArgs = {}) {
    return Object.assign({}, this.params, additionalArgs);
  }

  getProjection(expression) {
    return Object.keys(expression).join()
  }
}

exports.DynamoHelper = DynamoHelper;
