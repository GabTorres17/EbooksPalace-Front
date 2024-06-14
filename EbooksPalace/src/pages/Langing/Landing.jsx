import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import foto1 from '../../components/Images/foto1.jpg'
import foto3 from '../../components/Images/foto3.jpg'
import portada from '../../components/Images/portada.png'
// import MainComponent from '../../components/Carrousel/MainCarrousel'
import style from './Landing.module.css'
import NavBar from '../../components/Nav/Nav'
import { Link } from 'react-router-dom'


const Landing = () => {
  return (
    <div className={style.contenedor}>
      <div>
      <NavBar/>
      </div>
      <img className={style.img} src={foto1} />
      <h3>ALGUNOS PRODUCTOS</h3>
      <img className={style.img2} src={foto3} />
      <div className={style.contenedorexterno}>
      <div className={style.contenedor2}>
      <h3 className={style.contenedor2h3}>Drama</h3>
      <Link to="/home">
      <img className={style.contenedor2img} src={portada} />
      </Link>
      </div>
      <div className={style.contenedor2}>
      <h3 className={style.contenedor2h3}>Romance</h3>
      <Link to="/home">
      <img className={style.contenedor2img} src={portada} />
      </Link>
      </div>
      <div className={style.contenedor2}>
      <h3 className={style.contenedor2h3}>Policiales</h3>
      <Link to="/home">
      <img className={style.contenedor2img} src={portada} />
      </Link>
      </div>
      </div>
      
    </div>
  )
}

export default Landing
