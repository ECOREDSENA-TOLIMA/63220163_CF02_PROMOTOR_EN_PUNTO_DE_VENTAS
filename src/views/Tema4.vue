<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 La encuesta y la observación

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema4/img-01.png', alt='')

    p.mb-5 Dentro de las técnicas que buscan medir la satisfacción del cliente y el comportamiento del consumidor mencionamos, la encuesta y la observación, cada una con una forma particular de desarrollo y aplicación: 

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Encuesta de satisfacción

    p Esta técnica usa como herramienta formatos denominados cuestionarios diseñados por expertos, con un objetivo claro de información que debe suministrar el cliente. Es posible que al promotor de ventas se le asigne la aplicación de estos cuestionarios, mediante una breve entrevista al momento de contacto con el cliente; por tanto, es importante que conozca la herramienta.
    p.mb-5 Los aspectos más relevantes a considerar en la elaboración de un cuestionario son:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-3.col-8.col-md-6.mb-3.order-lg-1.order-2
        figure
          img(src='@/assets/curso/temas/tema4/img-02.svg', alt='Imagen decorativa')
      .col-lg-9.col-12.order-lg-2.order-1.mb-lg-0.mb-4
        .row.justify-content-center
          .col-lg-6.col-12
            ul.lista-ul
              li
                i.fas.fa-circle(style="color:#544403")
                h4 #[b(style="color: #544403 !important") Organización del Formulario]
              li 
                i.fas.fa-angle-right
                p.mb-0 Título.
              li 
                i.fas.fa-angle-right
                p.mb-0 Instrucciones.
              li 
                i.fas.fa-angle-right
                p.mb-0 Identificación del formulario. 
              li 
                i.fas.fa-angle-right
                p.mb-0 Secciones o áreas específicas.
              li 
                i.fas.fa-angle-right
                p.mb-0 Observaciones. 
              li 
                i.fas.fa-angle-right
                p.mb-0 Identificación del encuestador. 

          .col-lg-6.col-12
            ul.lista-ul
              li
                i.fas.fa-circle(style="color:#544403")
                h4 #[b(style="color: #544403 !important") Tipo de preguntas]
              li 
                i.fas.fa-angle-right
                p.mb-0 Cerradas: solo permiten una respuesta concreta ya definida.
              li 
                i.fas.fa-angle-right
                p.mb-0 Abiertas: permite la libre expresión del encuestado.
              li 
                i.fas.fa-angle-right
                p.mb-0 Mixtas: se combinan el tipo de preguntas abiertas y cerradas.

            ul.lista-ul
              li
                i.fas.fa-circle(style="color:#544403")
                h4 #[b(style="color: #544403 !important") Redacción de las preguntas ]
              li 
                i.fas.fa-angle-right
                p.mb-0 Terminología exacta. Evitar complejidad de las preguntas.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-04.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los cuestionarios varían de acuerdo a quien los diseña y al propósito para el cual se crean, por tanto, para su aplicación, sobre todo es fundamental direccionar las preguntas de acuerdo con la intencionalidad del conocimiento a conseguir.
            br
            br
            | Un ejemplo de pregunta que podría ir incluida en el cuestionario con respuesta cerrada es:
            br
            br
            | #[b 1. ¿Cómo evalúa la calidad del producto?]
            br
            br
          .row.justify-content-center
            .col-lg-4
              p #[b a.] Excelente
            .col-lg-4
              p #[b b.] Buena 
            .col-lg-4
              p.mb-0 #[b c.] Mala 

    //.row.justify-content-center.align-items-center
      .col-lg-3.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema4/img-02.svg', alt='Imagen decorativa')
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-left")
        .row.mt-2.mb-2
          .col-lg-5
            ul.lista-ul.mb-2
              li.mb-0
                i.fas.fa-circle(style="color:#544403")
                h4 #[b(style="color: #544403 !important") Organización del Formulario]

            ul.lista-ul.mb-3
              li(data-aos="fade-down")
                i.fas.fa-chevron-right(style="color: #00223D")
                p.mb-0 Título.
              li(data-aos="fade-down")
                i.fas.fa-chevron-right(style="color: #00223D")
                p.mb-0 Instrucciones.
              li(data-aos="fade-down")
                i.fas.fa-chevron-right(style="color: #00223D")
                p.mb-0 Identificación del formulario. 
              li(data-aos="fade-down")
                i.fas.fa-chevron-right(style="color: #00223D")
                p.mb-0 Secciones o áreas específicas.
              li(data-aos="fade-down")
                i.fas.fa-chevron-right(style="color: #00223D")
                p.mb-0 Observaciones. 
              li(data-aos="fade-down")
                i.fas.fa-chevron-right(style="color: #00223D")
                p.mb-0 Identificación del encuestador. 

          .col-lg-5
            ul.lista-ul.mb-2
              li.mb-0
                i.fas.fa-circle(style="color:#544403")
                h4 #[b(style="color: #544403 !important") Tipo de preguntas]

            ul.lista-ul.mb-3
              li(data-aos="fade-down")
                i.fas.fa-chevron-right(style="color: #00223D")
                p.mb-0 Cerradas: solo permiten una respuesta concreta ya definida.
              li(data-aos="fade-down")
                i.fas.fa-chevron-right(style="color: #00223D")
                p.mb-0 Abiertas: permite la libre expresión del encuestado.
              li(data-aos="fade-down")
                i.fas.fa-chevron-right(style="color: #00223D")
                p.mb-0 Mixtas: se combinan el tipo de preguntas abiertas y cerradas.

            ul.lista-ul.mb-2
              li.mb-0
                i.fas.fa-circle(style="color:#544403")
                h4 #[b(style="color: #544403 !important") Redacción de las preguntas]
        
            ul.lista-ul.mb-3
              li(data-aos="fade-down")
                i.fas.fa-chevron-right(style="color: #00223D")
                p.mb-0 Terminología exacta. Evitar complejidad de las preguntas.

    //.bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-03.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los cuestionarios varían de acuerdo a quien los diseña y al propósito para el cual se crean, por tanto, para su aplicación, sobre todo es fundamental direccionar las preguntas de acuerdo con la intencionalidad del conocimiento a conseguir.
          br
          br
          | Un ejemplo de pregunta que podría ir incluida en el cuestionario con respuesta cerrada es:
          br
          br
          | #[b 1. ¿Cómo evalúa la calidad del producto?]

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 La observación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema4/img-03.svg', alt='')
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-left")
        p Es el registro visual de lo que ocurre en una situación real dentro del punto de venta al observar el comportamiento del consumidor. No es necesario abordarlo o preguntarle algo específico, por lo general, al usar esta técnica, el observador se mantiene encubierto.
        p Como instrumento de aplicación se utiliza una lista de chequeo, en donde se va registrando si el cliente realizó o no una acción. Otra forma de registrar información observada, es a través de los informes que entregan los promotores de venta o las personas que tienen contacto directo con el cliente, en algunos casos estos informes estarán organizados de acuerdo a las pautas suministradas por los gerentes de mercadeo, de los directivos o de jefes. Se realizan en formatos preestablecidos, pueden contener los comentarios u observaciones que el cliente quiere hacer llegar a través del promotor. 
        .cajon.color-primario.p-4.mb-4(style="background-color:#FFECDA")
          p.mb-0 Las ventajas de usar la técnica de observación es que permite obtener información importante a través de comportamientos espontáneos, de la tendencia sobre la selección de un producto, o la información que las personas no pueden o no quieren brindar por algún motivo. Entre las desventajas de utilizar esta técnica, se encuentra el hecho de no poder determinar emociones, actitudes o motivaciones que llevan a un consumidor a realizar un acto. Esta técnica es más usada cuando lo que se desea saber del cliente es su comportamiento, y no su grado de satisfacción respecto a un producto.










</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
