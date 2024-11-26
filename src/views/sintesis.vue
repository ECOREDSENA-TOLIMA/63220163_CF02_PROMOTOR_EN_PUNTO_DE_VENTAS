<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") El siguiente recursos comparte la síntesis del componente formativo Promoción y servicio al cliente exponiendo los conceptos fundamentales trabajados a los largo del contenido de manera detallada:

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo “Promoción y servicio al cliente”, se presentan herramientas y estrategias para evaluar campañas promocionales, recolectar información, analizar indicadores de venta, y emplear encuestas y observación. También abarca el cálculo de resultados, la comunicación efectiva, el impacto del servicio al cliente en ventas y el uso de CRM para optimizar la atención y la mejora continua.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
