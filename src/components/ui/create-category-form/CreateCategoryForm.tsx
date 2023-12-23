import {useState} from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import {useLocation} from "react-router-dom";
import axios from "axios";
import categoryDetail from "../../screens/category-detial/CategoryDetail";

function CreateCategoryForm() {
    const [name, setName] = useState('')
    const [slug, setSlug] = useState('')
    const location = useLocation()

    const handleSubmit = async (e: {preventDefault: () => void; }) => {
        e.preventDefault()
        const categoryData = {
            name,
            slug
        }
        const category = await axios.post('http://localhost:8080/api/category', categoryData)
        console.log(category.data)
    }

    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control placeholder="Category name"
                              onChange={e => setName(e.target.value)}
                              value={name}/>
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Control placeholder="Category slug"
                              onChange={e => setSlug(e.target.value)}
                              value={slug}/>
            </InputGroup>

            <Button onClick={e => handleSubmit(e)}>
                Создать
            </Button>
        </>
    );
}

export default CreateCategoryForm;