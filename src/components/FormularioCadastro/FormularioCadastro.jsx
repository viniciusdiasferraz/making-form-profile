import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Typography } from "@material-ui/core";
import { useEffect } from "react";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [ dadosColetados, setDados] =  useState({})

  useEffect(()=>{
    console.log(dadosColetados, "teste");
  })

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
    <DadosEntrega aoEnviar={coletarDados} />,
  ]

  function coletarDados(dados){
    setDados({...dadosColetados, ...dados});
    proximo();

  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1)
  }

  return (
    <>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
