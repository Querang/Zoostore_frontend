import {useState} from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function CreateCategoryForm() {
    const [name, setName] = useState('')

    const createCategory = e => {
        e.preventDefault()
        console.log({name})
    }

    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control placeholder="Username"
                              onChange={e => setName(e.target.value)}
                              value={name}/>
            </InputGroup>

            <Button onClick={createCategory}>
                Создать
            </Button>
        </>
    );
}

export default CreateCategoryForm;