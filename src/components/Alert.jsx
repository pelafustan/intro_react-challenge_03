import React from 'react';
import { Alert as AlertaBootstrap } from 'react-bootstrap';

const Alert = ({ estado }) => {
  let mensaje = "";

  if (estado == "danger") {
    mensaje = "Completa todos los campos!";
  }
  if (estado == "success") {
    mensaje = "Colaborador agregado!";
  }

  return (
    <>
      {estado !== "" ? <AlertaBootstrap variant={estado}>{mensaje}</AlertaBootstrap> : null}
    </>
  )
};

export default Alert;