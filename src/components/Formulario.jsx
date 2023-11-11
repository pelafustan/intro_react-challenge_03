import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Formulario = ({ colaboradores, setAlerta, setColaboradores }) => {
  const nameRegex = /^[a-zA-Z]{2,}(\s[a-zA-Z]{2,})*$/;
  const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const generateId = (data) => {
    let id = 1;

    if (data.length) {
      return id += data[data.length - 1].id;
    }

    return id;
  }

  const [nuevoColaborador, setNuevoColaborador] = useState({
    id: "",
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const [hasFocus, setHasFocus] = useState({
    nombre: false,
    correo: false,
    edad: false,
    cargo: false,
    telefono: false,
  });

  const handleChange = (event) => {
    setNuevoColaborador({
      ...nuevoColaborador,
      [event.target.name]: event.target.value,
    });
  };

  const handleFocus = (event) => {
    setHasFocus({
      ...hasFocus,
      [event.target.name]: true,
    });
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (!form.checkValidity()) {
      setValidated(true);
      event.stopPropagation();
      setAlerta("danger");
      return;

    } else {

      setAlerta("success");

      nuevoColaborador.id = generateId(colaboradores);

      setColaboradores([
        ...colaboradores,
        nuevoColaborador,
      ]);

      setNuevoColaborador({
        id: "",
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });

      setHasFocus({
        nombre: false,
        correo: false,
        edad: false,
        cargo: false,
        telefono: false,
      });

      setValidated(false);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-2">
        <Form.Control
          required
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={nuevoColaborador.nombre}
          onChange={handleChange}
          onFocus={handleFocus}
          isValid={nameRegex.test(nuevoColaborador.nombre) && hasFocus.nombre}
          isInvalid={!nameRegex.test(nuevoColaborador.nombre) && hasFocus.nombre}
        />
        <Form.Control.Feedback type="invalid">¡Ingresa un nombre válido!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control
          required
          type="email"
          name="correo"
          placeholder="user@example.com"
          value={nuevoColaborador.correo}
          onChange={handleChange}
          onFocus={handleFocus}
          isValid={mailRegex.test(nuevoColaborador.correo) && hasFocus.correo}
          isInvalid={!mailRegex.test(nuevoColaborador.correo) && hasFocus.correo}
        />
        <Form.Control.Feedback type="invalid">¡Ingresa un correo válido!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control
          required
          type="text"
          name="edad"
          placeholder="Edad"
          value={nuevoColaborador.edad}
          pattern="(1[8-9]|[2-9][0-9])"
          onChange={handleChange}
          onFocus={handleFocus}
          isValid={parseInt(nuevoColaborador.edad) >= 18 && hasFocus.edad}
          isInvalid={(parseInt(nuevoColaborador.edad) < 18 || nuevoColaborador.edad === "") && hasFocus.edad}
        />
        <Form.Control.Feedback type="invalid">¡Colaborador debe tener, a lo menos, 18 años!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control
          required
          type="text"
          name="cargo"
          placeholder="Cargo"
          value={nuevoColaborador.cargo}
          onChange={handleChange}
          onFocus={handleFocus}
          isValid={nuevoColaborador.cargo !== "" && hasFocus.cargo}
          isInvalid={nuevoColaborador.cargo === "" && hasFocus.cargo}
        />
        <Form.Control.Feedback type="invalid">¡Ingresa un cargo válido!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Control
          required
          type="text"
          name="telefono"
          placeholder="999999999"
          value={nuevoColaborador.telefono}
          pattern="\d{9}"
          onChange={handleChange}
          onFocus={handleFocus}
          isValid={/\d{9}/.test(nuevoColaborador.telefono) && hasFocus.telefono}
          isInvalid={!/\d{9}/.test(nuevoColaborador.telefono) && hasFocus.telefono}
        />
        <Form.Control.Feedback type="invalid">¡Ingresa un teléfono válido!</Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" className="btn btn-success">Agregar Colaborador</Button>
    </Form>
  )
};

export default Formulario;
