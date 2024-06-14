import React from 'react';
import './Form.css';
import NavBar from '../../components/Nav/Nav'

const Form = () => {
    return (
      <div>
        <NavBar/>
        <div className="contenedor">
            <form className="formulario">
                <h2>Formulario de Libro</h2>
                    <label>Título:</label>
                <div className="campo">
                    <input type="text" name="titulo" />
                </div>
                    <label>Editorial:</label>
                <div className="campo">
                    <input type="text" name="editorial" />
                </div>
                    <label>Género:</label>
                <div className="campo">
                    <input type="text" name="genero" />
                </div>
                    <label>Autor:</label>
                <div className="campo">
                    <input type="text" name="autor" />
                </div>
                    <label>Precio:</label>
                <div className="campo">
                    <input type="text" name="precio" />
                </div>
                    <label>Descripción:</label>
                <div className="campo">
                    <textarea name="descripcion"></textarea>
                </div>
                    <label>Foto:</label>
                <div className="campo">
                    <input type="file" accept="image/*" name="foto" />
                </div>
                <div className="boton">
                    <button type="submit">Guardar</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default Form;
