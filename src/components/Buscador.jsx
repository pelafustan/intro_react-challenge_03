import { Form } from 'react-bootstrap';

const Buscador = ({ colaboradores, setColaboradoresFiltered }) => {

    const inputHandler = (e) => {
        const buscarPalabra = e.target.value.toLowerCase()
        const resultado = colaboradores.filter(
            (usuario) =>
                usuario.nombre.toLowerCase().includes(buscarPalabra) ||
                usuario.correo.toLowerCase().includes(buscarPalabra) ||
                usuario.edad.toLowerCase().includes(buscarPalabra) ||
                usuario.cargo.toLowerCase().includes(buscarPalabra) ||
                usuario.telefono.toLowerCase().includes(buscarPalabra)
        );

        setColaboradoresFiltered(resultado);

    };

    return (
        <div className="buscador col-12 col-md6">
            <Form.Control
                type="text"
                name="buscador"
                id="buscador"
                placeholder="Busca un colaborador"
                className="form-control mn-3"
                onChange={inputHandler}
            />
        </div>
    );
};

export default Buscador;