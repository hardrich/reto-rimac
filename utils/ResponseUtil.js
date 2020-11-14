class ResponseUtil {
  static createdOk() {    
    return { message: "OK" };
  }

  static invalid() {    
    return { message: "Invalid request" };
  }
}

exports.ResponseUtil = ResponseUtil;
