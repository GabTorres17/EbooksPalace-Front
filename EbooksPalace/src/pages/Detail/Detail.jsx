import React from 'react'
import NavBar from '../../components/Nav/Nav'
import './Detail.css'
import portada from '../../components/Images/portada.png'

const Detail = () => {
  return (
    <div>
      <NavBar />
      <div className="detalle-producto">
        <div className="imagen">
        <br/>
        <br/>
        <br/>
          <img src={portada} />
          <h3>Descripcion: </h3>
        </div>
        <div className="info">
        <br/>
        <br/>
          <h2>Titulo: </h2>
          <p>Precio: </p>
          <button>Agregar al Carrito</button>
        </div>
      </div>
    </div>
  )
}

export default Detail
