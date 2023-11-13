import { Form } from 'react-bootstrap';

const Buscador = ({ setBusqueda }) => {

    const inputHandler = (e) => {
      setBusqueda(e.target.value);
    };

    return (
        <Form className="buscador mb-3">
            <Form.Control
                type="text"
                name="buscador"
                id="buscador"
                placeholder="Busca un colaborador"
                onChange={inputHandler}
            />
        </Form>
    );
};

export default Buscador;
