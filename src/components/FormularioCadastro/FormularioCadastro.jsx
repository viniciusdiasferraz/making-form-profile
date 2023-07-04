import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { StepLabel, Stepper, Typography, Step } from "@material-ui/core";
import { useEffect } from "react";

function FormularioCadastro({ aoEnviar, validacoes }) {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDados] = useState({})

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados)
    }
  })

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados}  />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado por se cadastrar</Typography>
  ]

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();

  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1)
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
