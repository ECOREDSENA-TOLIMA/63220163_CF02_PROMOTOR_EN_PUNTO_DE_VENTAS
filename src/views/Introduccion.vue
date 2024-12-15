<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/introduccion/img-01.svg', alt='')
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-left")
        p Uno de los aspectos más relevantes para el #[i marketing] tiene que ver con la satisfacción del cliente, ya que, su manifestación de aceptación y beneplácito respalda el cumplimiento o sobrepaso de las expectativas que un producto o servicio ofrece; por el contrario, la no satisfacción de esas expectativas por parte del cliente, sin duda, ha de generar la pérdida de confiabilidad, y muy probablemente, una mala referenciación frente a potenciales consumidores.
        .cajon.color-secundario.p-4(style="background-color:#FFF8E0")
          p.mb-0 Una forma de conocer el grado de satisfacción del cliente es medir la repercusión de las acciones promocionales y determinar el impacto en el cliente, #[i shopper] o consumidor, que como se espera en cualquier campaña promocional, deberá ser positivo y reflejarse en el incremento de ventas.

    p.mb-5(data-aos="fade-right") Uno de los elementos a destacar cuando se hacen evaluaciones de los planes promocionales es la satisfacción del cliente, entendiendo que la insatisfacción genera quejas o reclamos, ya sea sobre el producto como tal o del respaldo que se espera de la empresa. Los puntos de venta son el elemento de contacto directo entre el promotor y el cliente, convirtiéndose en el mediador que hace conocer a la empresa las insatisfacciones del consumidor, por tanto, el promotor debe contar con el conocimiento estratégico para actuar desde el punto de venta, recabando información requerida para el mejoramiento, e informando adecuadamente sobre las bondades del producto o servicio. Este desempeño está directamente relacionado con el servicio al cliente, teniendo claridad que su insatisfacción se convierte en un factor que repercute negativamente en las ventas, requiriéndose de un buen manejo y ajuste para revertir la situación con resultados efectivos 
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
