import React, { useState, useRef } from 'react';
import './Form.css';
import validate from "./validate";
import NavBar from '../../components/Nav/Nav';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const [URL_Image, setURL_Image] = useState("");
    const fileInputRef = useRef(null);

    const deleteImage = () => {
        setURL_Image("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const changeUploadImage = async (e) => {
        if (URL_Image) {
            toast.warn('Primero elimine la imagen actual antes de subir una nueva.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return;
        }

        const file = e.target.files[0];
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "ebookspalace_preset");

        try {
            const response = await axios.post("https://api.cloudinary.com/v1_1/dwxr0uihx/image/upload", data);
            setURL_Image(response.data.secure_url);
            setErrors((prevErrors) => {
                const { image, ...rest } = prevErrors;
                return rest;
            });
        } catch (error) {
            console.error("Error al subir la imagen", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value,
        });

        setErrors(validate({
            ...input,
            [name]: value,
            image: URL_Image,
        }));
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate({ ...input, image: URL_Image });
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const formData = {
                    ...input,
                    image: URL_Image,
                };
                const response = await axios.post("http://localhost:3001/books", formData);

                if (response.status === 200) {
                    setSuccessMessage("El libro fue creado exitosamente");
                    toast.success('Libro creado con éxito.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                    setTimeout(() => {
                        navigate("/");
                    }, 5000); // Tiempo para permitir que el toast se muestre antes de redirigir
                }
            } catch (error) {
                console.error("Error al crear el libro", error);
                setErrors({ submit: "Hubo un error al crear el libro. Inténtalo de nuevo." });
                toast.error('Hubo un error al crear el libro. Inténtalo de nuevo.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }
        }
    };

    return (
        <div>
            <ToastContainer />
            <div className="contenedor">
                <form onSubmit={handleSubmit} className="formulario">
                    <h2 className="title">Formulario de Libro</h2>
                    <label>Título:</label>
                    <div className="campo">
                        <input type="text" placeholder="Ej: Romeo y Julieta" name="name" value={input.name} onChange={handleChange} />
                        {errors.name && <p>{errors.name}</p>}
                    </div>
                    <label>Editorial:</label>
                    <div className="campo">
                        <input type="text" placeholder="Ej: San Andrés" name="editorial" value={input.editorial} onChange={handleChange} />
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
                        <input type="text" placeholder="Ej: William Shakespeare" name="author" value={input.author} onChange={handleChange} />
                        {errors.author && <p>{errors.author}</p>}
                    </div>
                    <label>Precio:</label>
                    <div className="campo">
                        <input type="number" name="price" value={input.price} onChange={handleChange} />
                        {errors.price && <p>{errors.price}</p>}
                    </div>
                    <label>Descripción:</label>
                    <div className="campo">
                        <textarea name="description" placeholder="Ej: En el último día de un helado junio..." value={input.description} onChange={handleChange}></textarea>
                        {errors.description && <p>{errors.description}</p>}
                    </div>
                    <label>Imagen:</label>
                    <div className="campo">
                        <input type="file" accept="image/*" name="image" onChange={changeUploadImage} disabled={!!URL_Image} ref={fileInputRef} />
                        {errors.image && <p>{errors.image}</p>}
                        {URL_Image && (
                            <div className='image-div'>
                                <img className="uploaded-image" src={URL_Image} />
                                <button type="button" onClick={() => deleteImage()}>Eliminar Imagen</button>
                            </div>
                        )}
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
