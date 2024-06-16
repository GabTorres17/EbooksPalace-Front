import React, { useState } from 'react';
import './Form.css';
import validate from "./validate"
import NavBar from '../../components/Nav/Nav'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Form = () => {

    const [input, setInput] = useState({
        name: "",
        editorial: "",
        category: "",
        author: "",
        price: "0.00",
        image: "https://",
        description: "",
        file: "https://"
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value,
        });

        setErrors(validate({
            ...input,
            [name]: value,
        }));
    };

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate(input);
        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await axios.post("http://localhost:3001/books", input);

                if (response.status === 200) {
                    console.log("Libro creado con exito", response.data);
                    setSuccessMessage("El libro fue creado exitosamente")
                    navigate("/");
                }
            } catch (error) {
                console.error("Error al crear el libro", error)
                setErrors({ submit: "Hubo un error al crear el libro. Inténtalo de nuevo." })
            }

        }
    }

    return (
        <div>
            <NavBar />
            <div className="contenedor">
                <form onSubmit={handleSubmit} className="formulario">
                    <h2>Formulario de Libro</h2>
                    <label>Título:</label>
                    <div className="campo">
                        <input type="text" name="name" value={input.name} onChange={handleChange} />
                        {errors.name && <p>{errors.name}</p>}
                    </div>
                    <label>Editorial:</label>
                    <div className="campo">
                        <input type="text" name="editorial" value={input.editorial} onChange={handleChange} />
                        {errors.editorial && <p>{errors.editorial}</p>}
                    </div>
                    <label>Género:</label>
                    <div className="campo">
                        <select name="category" value={input.category} onChange={handleChange}>
                            <option value="">Seleccione un género literario</option>
                            <option value="Terror">Terror</option>
                            <option value="Comedy">Comedia</option>
                            <option value="Romance">Romance</option>
                            <option value="Education">Educativo</option>
                            <option value="Self-Help">Auto-ayuda</option>
                        </select>
                        {errors.category && <p>{errors.category}</p>}
                    </div>
                    <label>Autor:</label>
                    <div className="campo">
                        <input type="text" name="author" value={input.author} onChange={handleChange} />
                        {errors.author && <p>{errors.author}</p>}
                    </div>
                    <label>Precio:</label>
                    <div className="campo">
                        <input type="number" name="price" value={input.price} onChange={handleChange} />
                        {errors.price && <p>{errors.price}</p>}
                    </div>
                    <label>Descripción:</label>
                    <div className="campo">
                        <textarea name="description" value={input.description} onChange={handleChange}></textarea>
                        {errors.description && <p>{errors.description}</p>}
                    </div>
                    <label>Imagen URL:</label>
                    <div className="campo">
                        <input type="text" value={input.image} name="image" onChange={handleChange} />
                        {errors.image && <p>{errors.image}</p>}
                    </div>
                    <label>Archivo URL:</label>
                    <div className='campo'>
                        <input type="text" name="file" value={input.file} onChange={handleChange} />
                        {errors.file && <p>{errors.file}</p>}
                    </div>
                    <div className="boton">
                        <button type="submit">Crear</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
