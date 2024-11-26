<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Promoción y servicio al cliente en el punto de ventas',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> validar el conocimiento adquirido sobre las herramientas de promoción y servicio al cliente.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal de medir la satisfacción del cliente en una campaña promocional?',
          imagen: require('@/assets/actividad/imagen1.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Establecer precios óptimos para cada cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evaluar el impacto de la campaña y realizar ajustes necesarios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Comparar ventas con las campañas de la competencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Obtener datos para incrementar la fidelidad del cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Medir la satisfacción permite evaluar el impacto y ajustar la campaña.',
          mensaje_incorrecto:
            'Incorrecto. Medir la satisfacción se enfoca en evaluar el impacto y realizar ajustes.',
        },
        {
          id: 2,
          texto:
            '¿Qué técnica permite obtener información directa del cliente en el punto de venta?',
          imagen: require('@/assets/actividad/imagen2.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Revisión de ventas', esCorrecta: false },
            { id: 'b', texto: 'Encuesta de satisfacción', esCorrecta: true },
            {
              id: 'c',
              texto: 'Observación de la competencia',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Comparación de precios', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Bien hecho! Las encuestas de satisfacción proporcionan información directa del cliente.',
          mensaje_incorrecto:
            'Incorrecto. Las encuestas de satisfacción permiten obtener información directa de los clientes.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes opciones NO es una fuente primaria de información?',
          imagen: require('@/assets/actividad/imagen3.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Entrevistas con clientes', esCorrecta: false },
            {
              id: 'b',
              texto: 'Registros de ventas históricas',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Encuestas realizadas a compradores',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Opiniones de los consumidores',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Exacto! Los registros de ventas son una fuente secundaria.',
          mensaje_incorrecto:
            'No es correcto. Los registros de ventas pertenecen a las fuentes secundarias.',
        },
        {
          id: 4,
          texto: '¿Qué es el CRM en el contexto del servicio al cliente?',
          imagen: require('@/assets/actividad/imagen4.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un sistema para gestionar relaciones y recopilar datos del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Un método para registrar el inventario en el punto de venta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una herramienta para mejorar los descuentos en ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un software de análisis financiero y contable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El CRM se utiliza para gestionar relaciones y datos del cliente.',
          mensaje_incorrecto:
            'Incorrecto. El CRM está diseñado para gestionar relaciones y recopilar datos de clientes.',
        },
        {
          id: 5,
          texto:
            '¿Qué indicador de ventas permite evaluar la cantidad promedio de compras por cliente?',
          imagen: require('@/assets/actividad/imagen1.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ventas por cliente', esCorrecta: true },
            { id: 'b', texto: 'Tasa de conversión', esCorrecta: false },
            { id: 'c', texto: 'Frecuencia de compra', esCorrecta: false },
            {
              id: 'd',
              texto: 'Participación en el mercado',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Bien hecho! El indicador de ventas por cliente permite calcular el promedio de compras.',
          mensaje_incorrecto:
            'Incorrecto. Las ventas por cliente calculan el promedio de compras.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el propósito de la técnica de observación en el punto de venta?',
          imagen: require('@/assets/actividad/imagen2.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Obtener información detallada sobre la competencia',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registrar el comportamiento del consumidor de manera natural',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Identificar el precio óptimo del producto de manera natural',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evaluar las campañas promocionales de otros puntos de venta',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Exacto! La observación permite registrar el comportamiento del consumidor de manera espontánea.',
          mensaje_incorrecto:
            'Incorrecto. La técnica de observación se centra en observar el comportamiento del consumidor.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la diferencia principal entre preguntas cerradas y abiertas en un cuestionario?',
          imagen: require('@/assets/actividad/imagen3.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las cerradas tienen respuestas específicas; las abiertas permiten libre expresión.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Las abiertas son más fáciles de analizar que las cerradas por su cantidad de información.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las cerradas permiten múltiples respuestas, mientras que las abiertas no.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las preguntas abiertas se usan solo para medir satisfacción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las preguntas cerradas ofrecen opciones concretas, mientras que las abiertas permiten libre expresión.',
          mensaje_incorrecto:
            'No es correcto. Las preguntas cerradas tienen respuestas específicas, a diferencia de las abiertas.',
        },
        {
          id: 8,
          texto:
            '¿Qué indicador de ventas mide el porcentaje de clientes que compran repetidamente en un periodo?',
          imagen: require('@/assets/actividad/imagen4.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Eficacia en ventas', esCorrecta: false },
            { id: 'b', texto: 'Ventas por cliente', esCorrecta: false },
            { id: 'c', texto: 'Fidelidad del cliente', esCorrecta: true },
            { id: 'd', texto: 'Variación de las ventas', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Bien hecho! La fidelidad del cliente mide el porcentaje de compras repetidas.',
          mensaje_incorrecto:
            'Incorrecto. La fidelidad del cliente mide las compras repetidas en un periodo.',
        },
        {
          id: 9,
          texto: '¿Qué es un Data Mining en el contexto de CRM?',
          imagen: require('@/assets/actividad/imagen1.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una técnica para analizar datos y obtener patrones de comportamiento del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Un sistema de almacenamiento de datos de ventas con la suma de los comportamiento del cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una herramienta para incrementar la frecuencia de compra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un método para establecer relaciones con proveedores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El Data Mining permite obtener patrones de comportamiento a partir de los datos.',
          mensaje_incorrecto:
            'No es correcto. El Data Mining analiza datos para obtener patrones de comportamiento.',
        },
        {
          id: 10,
          texto:
            '¿Qué ventaja ofrece el uso de la observación en la evaluación de la satisfacción del cliente?',
          imagen: require('@/assets/actividad/imagen2.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Garantiza precisión en las respuestas del cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aumenta la confiabilidad de las respuestas de los cuestionarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Facilita el análisis de datos en tiempo real.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Captura comportamientos espontáneos y no invasivos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Exacto! La observación permite captar comportamientos espontáneos sin interferir.',
          mensaje_incorrecto:
            'No es correcto. La observación se centra en captar comportamientos espontáneos y naturales.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
