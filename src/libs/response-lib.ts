export default (function () {
  const buildResponse = (statusCode: number, body: object) => {
    return {
      statusCode,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(body)
    }
  }

  return {
    success: (body: object) => buildResponse(200, body),
    failure: (body: object) => buildResponse(500, body)
  }
})()
