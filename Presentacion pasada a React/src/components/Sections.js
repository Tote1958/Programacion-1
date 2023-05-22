import React from 'react'

export const Sections = () => {
  return (
    <>

<section id="title">

    <h1>Alpha <br></br>Parking</h1>

    <form action="#reserva">
        
        <button>RESERVÁ</button>

    </form>

</section>

<section id="sobre-nosotros">

    <div className="conteiner">

        <div className="img-conteiner"></div>

        <div className="texto">

            <h2>Sobre Nosotros</h2>
            <p>Somos dos estudiantes de Ing. en informatica, con un espiritu emprendedor, y una idea que, creemos revolucionaria. Por estas razones, estamos dedicados completamente a este proyecto, el cual creemos que tiene un gran futuro. </p>

        </div>
    </div>

</section>

<section id="que-ofrecemos">

    <div className="conteiner">

        <h2>¿Qué Ofrecemos?</h2>           
        <p>Ofrecemos un servicio de estacionamiento V.I.P. para la ciudad de San Rafael, ofreciendo un servicio con una atractiva relacion de calidad-precio, integrando junto a esto, un componente de seguridad, contando con camaras y vigilancia 24 horas </p>
        
        <div className="img_seguridad"></div>

    </div>

</section>

<section className="contactanos" id="reserva">

<div className="conteiner">

    <h2>Contactanos</h2>
    <p>Direccion de correo electronico: estacionamientovipsr@gmai.com</p>
    <p>Numero de telefono: +54 9 260-4954675</p>

</div>

</section>

    <section className="endpage">


        <h2>Te esperamos</h2>

        <div id="address"> 

            <h3>Av. San Martin & Av. Hipolito Yrigoyen</h3>

        </div>

    <div className="img_final"></div>


</section>

    </>
  )
}
