import React from 'react'

export const Header = () => {
  return (
    //Porque no funciona el estilo con <div className="Header"
    //Puede ser que porque se puso como header y no .header??
    <>
    
    <header>
        <div className="logo">
            <img src="imagenes/logo1.ico" alt="logo"></img>
            <h2>Alpha Parking</h2>
        </div>
        
        <nav>
            <a href="#title" className="nav-link">Inicio</a>
            <a href="#sobre-nosotros" className="nav-link" >Sobre Nosotros</a>
            <a href="#reserva" className="nav-link">Contacto</a>
        </nav>

        
    </header>


    </>
  )
}
