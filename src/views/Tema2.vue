<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Recolección y registro de información

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img-01.svg', alt='')
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-left")
        p El primer paso para medir una campaña promocional es recolectar y registrar la información necesaria. Esta tarea puede realizarse según requerimientos específicos y con apoyo tecnológico. En muchos casos, se utilizará la sistematización informática; en otros, se hará de forma manual y personalizada. Una vez recopilada, la información se almacenará en una base de datos para su posterior análisis y manipulación, de acuerdo con los objetivos de la medición.
        .cajon.color-primario.p-4.mb-4(style="background-color:#FFECDA")
          p.mb-0 Existen dos tipos de fuentes en la recolección de información: primarias y secundarias. Las fuentes primarias se obtienen directamente del cliente, quien proporciona los datos. Las fuentes secundarias provienen de registros o documentos existentes, como históricos de ventas, inventarios, rotación de mercancía y cifras de negociaciones, entre otros.

    .row.justify-content-center.mb-4
      .col-12.col-md-10.col-lg-10
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Fuentes de información.</i>
        figure.mb-3(data-aos="fade-left")
          img.d-none.d-sm-none.d-lg-block(src='@/assets/curso/temas/tema2/img-02-01.svg', alt='La gráfica comparte un embudo que presenta la exhibición de los productos de una manera estratégica organizando las categorías según las necesidades del cliente para entender que el cliente recibe una exhibición optimizada.')
          img.d-block.d-lg-none(src='@/assets/curso/temas/tema2/img-02-02.svg', alt='La gráfica comparte un embudo que presenta la exhibición de los productos de una manera estratégica organizando las categorías según las necesidades del cliente para entender que el cliente recibe una exhibición optimizada.') 

    p.mb-5(data-aos="fade-left") Definir cómo recolectar y registrar la información es fundamental para medir el impacto de las acciones promocionales y la satisfacción del cliente. En marketing, se utiliza un sistema computarizado conocido como CRM (Customer Relationship Management) para administrar la información del cliente. Este software contiene una base de datos sobre las preferencias del cliente, los productos que consume y la frecuencia de consumo, entre otros datos. Aunque representa una inversión significativa para las empresas, es muy útil para analizar el comportamiento del consumidor, la satisfacción del cliente y el impacto de las ofertas y campañas promocionales. Hay dos estrategias para alimentar esta base de datos: el cliente ingresa la información por sí mismo, o la empresa encuentra mecanismos para obtenerla e ingresarla.

    .row.justify-content-center.align-items-center.py-3.px-lg-5.px-4(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema2/img-03.svg', alt='Imagen decorativa')

        .col-lg-8.col-12.mb-3(data-aos="fade-right")
          p.mb-4 Los CRM son manejados especialmente por los puntos de venta, que buscan mejorar la relación con el cliente y fidelizarlo. Utilizan incentivos para que el cliente acceda a la plataforma donde se encuentra el CRM (generalmente el sitio web de la empresa) y registre la información requerida. Cuando es la empresa quien ingresa la información, se basa en datos de facturación o en preguntas realizadas al consumidor en el momento del pago. Los software de CRM incluyen una herramienta llamada #[b Data Mining], que consiste en obtener modelos de comportamiento de los clientes basándose en la información histórica almacenada. Esto permite obtener datos como: 
          ul.lista-ul.mb-4
            li(data-aos="fade-down")
              i.fas.fa-store(style="color: #FFACAC")
              p.mb-0 ¿Quién es el cliente? 
            
            li(data-aos="fade-down")
              i.fas.fa-store(style="color: #FFACAC")
              p.mb-0 ¿Qué promociones se ofrecieron al cliente? 
            
            li(data-aos="fade-down")
              i.fas.fa-store(style="color: #FFACAC")
              p.mb-0 ¿Cómo reaccionó el cliente a estas promociones?

            li(data-aos="fade-down")
              i.fas.fa-store(style="color: #FFACAC")
              p.mb-0 Las transacciones que realizó con la empresa.
          p Esta información permite determinar qué promociones funcionan y cuáles no, facilitando así mejorar lo efectivo y eliminar lo ineficaz.

    p.mb-5(data-aos="fade-left") Los fabricantes también tienen un amplio interés en medir la repercusión de una campaña promocional, dado que de ello dependen las futuras negociaciones con el punto de venta o el incremento de sus ventas regulares y, en general, necesitan saber cuál fue la reacción del cliente frente al evento y al producto para seguir implementando sus estrategias de marketing. Las técnicas que se usan para hacer esta medición son las fuentes secundarias de información, para el cálculo de indicadores que le permitan hacer un análisis detallado, y llegar a conclusiones claras sobre la satisfacción del cliente, su percepción frente al producto y la campaña realizada. Las técnicas más utilizadas son las encuestas de satisfacción y la observación.




</template>

<script>
export default {
  name: 'Tema2',
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
