<template lang="pug">
.curso-main-container.pb-3.tema5
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Cálculo y análisis de resultados

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema5/img-01.svg', alt='')
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-left")
        p Es una tarea que compete a los expertos en #[i marketing,] a directivos, jefes de mercadeo y gerentes. Se realiza con ayuda de la tecnología informática, en donde los #[i software] son muy útiles para la realización de estas operaciones, tal y como ocurre con la Administración Basada en la Relación con los Clientes o CRM, quien se encarga de efectuar estos cálculos y brindar de forma directa e inmediata los resultados.
        p Los cálculos matemáticos requieren de conocimiento acerca de la aplicación de fórmulas y de la realización de la operación, como en el caso de los Indicadores de venta.
        p.mb-0 Una vez realizado el cálculo se procede al análisis del resultado, este estará sujeto a variables propias del interés de quien está haciendo la medición. Para realizar un buen análisis es fundamental comprender el concepto de lo que se está calculando, y de saber interpretar correctamente las cifras, de lo contrario, podrían causar grandes estragos en la toma de decisiones, y sin duda, en la gestión del proceso a implementar.
  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-down-right")
        .cajon.color-secundario.p-4(style="background-color:#FFF8E0")
          p Para explicarlo se retomará el ejemplo que se trató en los indicadores de ventas sobre la variación de las ventas:
          p #[b Ventas durante el evento:] $5.500.000 / #[b Ventas del mes anterior:] $4.100.000
          p Variación en las ventas= (Ingresos por venta - Ingresos por venta periodo comparación/Ingresos por venta periodo comparación) * 100 = (5.500.000 – 4.100.000 / 4.100.000 ) * 100 = 34,14
          p La respuesta es 34, 14%, pero: ¿eso es bueno o es malo? 

    p.mb-5(data-aos="fade-right") Para explicarlo brevemente lo primero que se debe tener en cuenta es qué significa esa variación de ventas, y en este caso, es el incremento sucedido durante la campaña promocional. Para determinar si es bueno o malo, deberá considerarse el objetivo trazado por el creador de la campaña promocional, que si fuese, por ejemplo, un incremento de las ventas en un 50% entonces el resultado no es bueno, dado que no se cumplió la meta. Ese mismo resultado podría no ser malo, si junto con otros cálculos se puede establecer que en ese 34,4% adicional de ventas, se recuperó la inversión y se obtuvo ganancias. En el informe de análisis que se obtiene, es posible especificar nuevas consideraciones al comparar con otros datos, de donde se concluyen especificaciones de aplicación ampliada.

    .row.fondo3-t3.justify-content-center.align-items-center.py-3.px-lg-5.px-4.mb-4(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        .col-lg-4.col-6.mb-lg-0.mb-4(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema5/img-02.svg', alt='Imagen decorativa')

        .col-lg-6.col-12.mb-3(data-aos="fade-right")
          p Cuando los cálculos se realizan para consolidar datos, se debe hacer un procedimiento para el cómputo de resultados desde su forma básica. Para el ejercicio se supondrá una pregunta de un cuestionario y el total de respuestas dadas por los entrevistados o encuestados.
          p.mb-0 #[b Pregunta:] ¿Volvería a comprar el producto?
          p.mb-0 #[b Total de encuestados:] 80
          p #[b Respuesta:] Si…… 51 personas.  No…… 29 personas
          p Se aplica una regla de 3 para conocer el porcentaje de personas que volverían a comprar el producto: ¿Si 80 es 100% que porcentaje es 51 personas?
          p.mb-0 80………………100 %
          p 51………………?
          | = 51*100/80
          br
          | = 63, 75%

    p.mb-5(data-aos="fade-left") ¿Es bueno o malo?  De igual manera, al ser éste un cálculo matemático con un resultado debe interpretarse de acuerdo a las variables de los datos, en este caso el 63,75% de los encuestados estarían dispuestos a volver a comprar el producto, esto puede ser bueno o malo, en la medida que cumpla las expectativas de la empresa. Depende del analista obtener las conclusiones adecuadas y presentarlas en un informe






</template>

<script>
export default {
  name: 'Tema5',
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
