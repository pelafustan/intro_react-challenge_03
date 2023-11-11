import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Colaboradores } from "./assets/Colaboradores";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Buscador from "./components/Buscador";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Alert from "./components/Alert";
import { PeopleFill } from "react-bootstrap-icons";

function App() {
  const [colaboradores, setColaboradores] = useState(Colaboradores);
  const [busqueda, setBusqueda] = useState("");
  const [alerta, setAlerta] = useState("");

  return (
    <>
      <h2 className="mb-5">Lista de Colaboradores <PeopleFill /></h2>
      <Container fluid>
        <Row>
          <Col xs={12} m={6} className="mb-3">
            <Buscador 
              setBusqueda={setBusqueda} 
            />
            <Listado 
              busqueda={busqueda}
              colaboradores={colaboradores}
              setColaboradores={setColaboradores}
            />
          </Col>
          <Col xs={12} m={6} className="mb-3">
            <Formulario 
              colaboradores={colaboradores}
              setAlerta={setAlerta}
              setColaboradores={setColaboradores}
            />
            <Alert 
              alerta={alerta}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
