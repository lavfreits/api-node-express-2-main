import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import NaoEncontrado from "../erros/naoEncontrado.js";
import RequisicaoIncorreta from "../erros/requisicaoIncorreta.js";
import ErroValidacao from "../erros/validationError.js";

// eslint-disable-next-line no-unused-vars
function errorManipulator(err, req, res, next) {
  if (err instanceof mongoose.Error.CastError) {
    new RequisicaoIncorreta().anviarResposta(res);
  } else if (err instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(err).anviarResposta(res);
  } else if (err instanceof NaoEncontrado) {
    err.anviarResposta(res);
  } else {
    new ErroBase().anviarResposta(res);
  }
}

export default errorManipulator;