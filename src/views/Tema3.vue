<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Indicadores de venta

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema3/img-01.svg', alt='')
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-left")
        p Los indicadores de ventas son usados en el proceso de medición o evaluación de las campañas promocionales, se aplican como herramienta para obtener cifras referenciales que permiten hacer un análisis del comportamiento de las ventas y del mercado, con el objetivo de que sus resultados  sirvan para la toma de decisiones por parte de gerentes y directivos.
        p.mb-0 Un indicador es un cálculo que permite comparar dos o más datos y obtener una medida que nos da una referencia, en el caso de las ventas, se usa para el análisis y la medición de la repercusión de las acciones promocionales y, consecuentemente, la satisfacción del cliente. Es necesario establecer indicadores de venta que permitan cuantificar el incremento en el promedio de estas; para la evaluación de resultados respecto de la inversión y los esfuerzos que implicó la campaña promocional. Para el caso del punto de venta, se debe calcular las ventas del establecimiento durante la campaña y compararla con los datos históricos. También deberán aplicarse los indicadores de manera más general, es decir, no solo con las cifras de los resultados de la campaña promocional,  sino también, considerando repercusiones en lapsos de tiempo más amplios como los anuales, con el fin de tener más argumentos para el análisis y la toma de decisiones por parte de los jefes o gerentes de mercadeo. 

    p.mb-5(data-aos="fade-left") A continuación, se relacionan algunos indicadores de ventas apropiados para obtener la información referida:

    .col-xl-12.mx-auto.mb-5
      .d-flex.flex-wrap.align-items-center.mb-5
        .col-xl-9.order-2.order-xl-1.pe-xl-4(data-aos="fade-down")
          LineaTiempoD.color-secundario.linea-tiempo-edit.mb-4
            p(numero="a" titulo="Variación en las ventas") Consiste en determinar qué incremento o disminución hubo en las ventas en un periodo determinado respecto a otro periodo. La fórmula a aplicar seria: <br><br> #[b (Ingresos por venta – Ingresos por venta periodo comparación / Ingresos por venta periodo comparación) * 100] <br><br>Por ejemplo: Deseo medir la variación de las ventas respecto a las ventas mensuales del almacén con los siguientes datos: <br><br>Ventas durante el evento: $5.500.000 <br>Ventas del mes anterior: $4.100.000 <br>(5.500.000 – 4.100.000 / 4.100.000 ) * 100 <br>= 34,14 <br><br>Significa que hubo una variación en las ventas del 34 %, quien analice el dato deberá considerar condiciones como el periodo de durabilidad del evento, evaluando si es un incremento favorable, si el porcentaje del incremento genera utilidades suficientes para compensar la inversión en el evento y muchas otras variables, de acuerdo a la información que desee deducir. <br><br>Esta fórmula tendrá variaciones de periodo de acuerdo a lo que desee medir, puede aplicar la fórmula para medir la variación de las ventas anuales, en cuyo caso utilizará el dato de las ventas del año actual vs. ventas del año anterior, y de igual manera, las ventas mensuales. 

            p(numero="b" titulo="Ventas por cliente") Con este indicador podemos determinar el promedio de ventas por cliente. <br><br>#[b Fórmula:] Total de ventas/Total de Clientes.

            p(numero="c" titulo="Fidelidad de los Clientes") Este indicador permite conocer el porcentaje de clientes que consumen el producto más de una vez en un periodo determinado. <br><br>#[b Fórmula:] (Número de Clientes que repiten/Número de clientes que compran) * 100  

            p(numero="d" titulo="Eficacia en ventas") Este indicador sirve para medir la el alcance del objetivo planteado, es decir, puede tomarse como un indicador para medir la eficacia del promotor o la repercusión del evento. <br><br> #[b Fórmula:]  (Total de clientes que compraron/total de clientes atendidos) *100

        img.col-xl-3.mb-4.mb-xl-0.mx-auto.order-1.order-xl-2.d-lg-flex.d-none(data-aos="fade-right")(src='@/assets/curso/temas/tema3/img-02.svg', alt='Rutinas de limpieza')

    p.mb-5 Los indicadores no son fórmulas estándar o prediseñadas, estas fórmulas son creadas y manipuladas de acuerdo al interés del analista, lo realmente importante, es aplicar el cálculo matemático adecuado de acuerdo a la información que se desea obtener y saberla interpretar.













</template>

<script>
export default {
  name: 'Tema3',
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
