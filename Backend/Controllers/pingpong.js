exports.ping = function (req, res, next) {
  res.status(200).json({ msj: "pong" });
};
