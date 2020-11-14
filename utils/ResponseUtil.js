/**
 * By Richard Principe Quiroz
 * Mensajes como respuesta del servidor
 */
class ResponseUtil {
  static createdOk() {    
    return { message: "OK" };
  }

  static invalid() {    
    return { message: "Invalid request" };
  }
}

exports.ResponseUtil = ResponseUtil;
