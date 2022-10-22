exports.afterResponse = (req, res, next) => {
  const method = req.method;
  const url = req._parsedUrl.pathname;
  const statusCode = res.statusCode;
  const statusMsg = res.statusMessage;
  console.log(`${method}: ${url}, ${statusCode} ${statusMsg}`);
};
