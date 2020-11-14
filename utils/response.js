/**
 * By Richard Principe Quiroz
 * Configurar respuesta del servidor
 */
const responseWithStatus = (status, formatter = null) => {
  if (status < 100 || status > 599) {
    throw new Error('Status code out of range');
  }
  const hasFormatter = typeof formatter === 'function';
  const format = hasFormatter ? formatter : _ => _;
  return (data = null) => {
    const response = {
      statusCode: status,
      headers: {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
      }
    };
    if (data) {
      response.body = format(data);
    }
    return response;
  };
};

module.exports = {
  responseWithStatus
};
