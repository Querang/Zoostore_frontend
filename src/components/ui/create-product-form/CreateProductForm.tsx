import {useState} from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function CreateProductForm() {
    const [name, setName] = useState('')

    const createCar = () => {
        console.log(name)
    }
    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control placeholder="Username"
                              onChange={e => setName(e.target.value)}
                              value={name}/>
            </InputGroup>

            <InputGroup className="mb-3">
                <Form.Control placeholder="Recipient's username"/>
            </InputGroup>

            <InputGroup>
                <Form.Control placeholder="Recipient's username" />
            </InputGroup>

            <Button>
                Создать
            </Button>
        </>
    );
}

export default CreateProductForm;