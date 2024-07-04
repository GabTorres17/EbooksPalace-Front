import React from 'react'
// import SearchBar from '../../components/SearchBar/SearchBar'
import foto1 from '../../components/Images/foto1.jpg'
import foto3 from '../../components/Images/foto3.jpg'
import portada from '../../components/Images/portada.png'
// import MainComponent from '../../components/Carrousel/MainCarrousel'
import style from './Landing.module.css'
import NavBar from '../../components/Nav/Nav'
import { Link } from 'react-router-dom'
// import MainPage from '../../components/Reviews/MainPage'
import ImageCarousel from '../../components/Carousel/Carousel'
import Review from '../../components/Reviews/Review'
import Footer from '../../components/Footer/Footer'

const Landing = () => {
  return (
    <div className={style.contenedor}>
    
      <ImageCarousel/>
      

      <div className={style.contenedorexterno}>

        <div className={style.contenedor2}>

          <h3 className={style.contenedor2h3}>Educación</h3>
          <Link to="/home">
            <img className={style.contenedor2img} src={"https://images.cdn2.buscalibre.com/fit-in/360x360/dc/54/dc54141fee3ac921b44105dd29f322d5.jpg"} />
          </Link>
        </div>
        <div className={style.contenedor2}>
          <h3 className={style.contenedor2h3}>Romance</h3>
          <Link to="/home">
            <img className={style.contenedor2img} src={"https://images.cdn1.buscalibre.com/fit-in/360x360/00/74/0074eb918fb013563f627e5219b47fde.jpg"} />
          </Link>
        </div>
        <div className={style.contenedor2}>
          <h3 className={style.contenedor2h3}>Terror</h3>
          <Link to="/home">
            <img className={style.contenedor2img} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn9BzzVeYaPy4oJeSqpufW3C-hxDFvzR8RSQ&s"} />
          </Link>
        </div>
      </div>



      <Review/>
      <br/>
      <br/>
      <div className={style.contenedorexterno}>

        <div className={style.contenedor2}>

          <h3 className={style.contenedor2h3}>Terror</h3>
          <Link to="/home">
            <img className={style.contenedor2img} src={"https://images.cdn3.buscalibre.com/fit-in/360x360/49/2b/492b222b205fcfd109a067e6afad5a3d.jpg"} />
          </Link>
        </div>
        <div className={style.contenedor2}>
          <h3 className={style.contenedor2h3}>Comedia</h3>
          <Link to="/home">
            <img className={style.contenedor2img} src={"https://images.cdn2.buscalibre.com/fit-in/360x360/b8/88/37e56c045d96fe779e3d46531f33f602.jpg"} />
          </Link>
        </div>
        <div className={style.contenedor2}>
          <h3 className={style.contenedor2h3}>Autoayuda</h3>
          <Link to="/home">
            <img className={style.contenedor2img} src={"https://images.cdn2.buscalibre.com/fit-in/360x360/64/65/646518b627e363ad6ad7f41bfa0896f3.jpg"} />
          </Link>
        </div>
      </div>
      <br/>
      <Footer />
    </div>
  )
}
export default Landing



