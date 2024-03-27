import axios from "axios";
import url from '../service/midleware'

const PostRouter = async (e) => {
  e.preventDefault();
  let response;

  try {
    response = await axios.post(url, formulario)
    alert("Login realizado com sucesso!");
    console.log(response.id);
    console.log("Requisição de login bem-sucedida!");
    console.log("Resposta da API:", response.data);

  } catch (error) {
    alert("Usuário ou senha inválido!");
    console.log(error.response);
    console.error("Erro ao fazer requisição de login:", error);
  }
};


export default PostRouter;