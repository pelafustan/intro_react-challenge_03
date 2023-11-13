import Table from "react-bootstrap/Table"
import { Trash2Fill } from "react-bootstrap-icons";

const Listado = ({ busqueda, colaboradores, setColaboradores }) => {

  // función que se encarga de eliminar entradas en el listado de colaboradores
  const handleDeletion = (event) => {
    const id = parseInt(event.currentTarget.dataset.key);
    const colaboradores_nuevo = colaboradores.filter((colaborador) => {
      return colaborador.id !== id
    });
    setColaboradores([
      ...colaboradores_nuevo,
    ]);
  }

  // arreglo que almacena los colaboradores que deben mostrarse en pantalla
  let filtered = [];

  // condiciones para mostrar el listado de colaboradores
  if (busqueda !== "") {
    filtered = colaboradores.filter(colaborador => {
      return (
        colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase())
        || colaborador.correo.toLowerCase().includes(busqueda.toLowerCase())
        || colaborador.edad.includes(busqueda)
        || colaborador.cargo.toLowerCase().includes(busqueda.toLowerCase())
        || colaborador.telefono.includes(busqueda)
      );
    });
  } else {
    filtered = [...colaboradores];
  }
  return (
    // la tabla que muestra los colaboradores
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          filtered.map(colaborador => (
            <tr key={colaborador.id} className="align-middle">
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
              <td>
                <Trash2Fill 
                  className="trash-icon"
                  size={28}
                  data-key={colaborador.id}
                  onClick={handleDeletion}
                />
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
};

export default Listado;
