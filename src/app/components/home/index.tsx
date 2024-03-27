"use client"
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./PageStyle.module.css";
import PostRouter from "../../../service/routes";

const LoginPage = () => {

  const [formulario, setFormulario] = useState ({
    email:'',
    password:''
  });

  const InformandoDados =(e: ChangeEvent<HTMLInputElement>) =>{  
    const {name, value} = e.target
    setFormulario({
      ...formulario,
      [name]:value
    })
  }

  const Submeter = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      await PostRouter(formulario);
    }catch(error){
      console.log(error)
    }
  }




  return (
    <main>
      <h1 className={styles.title}>Página login</h1> <br />
      <form onSubmit={Submeter}>
        <label>Email</label>
        <input required type="text" name="email" id="email" autoComplete="email" onChange={InformandoDados}/>
        <br /> <br />
        <label>Senha</label>
        <input required type="password" name="password" id="password" autoComplete="new-password" onChange={InformandoDados} /> <br />
        <button  type="submit">Enviar</button>
      </form>
    </main>
  );
};

export default LoginPage;
