export default {
  global: {
    componenteFormativo:
      'Promoción y servicio al cliente en el punto de ventas',
    descripcionCurso:
      'Este componente formativo aborda la promoción y servicio al cliente en puntos de venta, destacando la importancia de medir la satisfacción del cliente, recolección de información, uso de CRM, y análisis de indicadores de ventas. Se enfoca en técnicas de observación y encuestas para evaluar campañas promocionales y mejorar la experiencia del consumidor, optimizando la fidelización y relación con el cliente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'La satisfacción del cliente y la medición de la campaña promocional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Satisfacción del Cliente',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Medición de la campaña promocional',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Recolección y registro de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Indicadores de venta',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'La encuesta y la observación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Encuesta de satisfacción ',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'La observación',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Cálculo y análisis de resultados',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'La comunicación en el proceso de medición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Elementos de la comunicación',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'La comunicación oral',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'La comunicación escrita',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Impacto del servicio al cliente en las ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'El CRM como herramienta del servicio al cliente',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Proceso de atención de quejas y reclamos',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Manejo de la comunicación',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Acciones de mejoramiento',
            hash: 't_7_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_63220163_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2.	Recolección y registro de información',
      referencia:
        'BIOESTADISTICO. (2012). 19. Técnicas de recolección de datos | Metodología de la investigación científica',
      tipo: 'Video en línea',
      link: 'https://www.youtube.com/watch?v=6uRAkQdGmDU',
    },
    {
      tema: 'La comunicación en el proceso de medición',
      referencia:
        'Profe Teatro (2020). La comunicación: Proceso de comunicación y sus elementos.',
      tipo: 'Video en línea',
      link: 'https://www.youtube.com/watch?v=93fJzlfLeS8 ',
    },
  ],
  glosario: [
    {
      termino: 'Comportamiento del consumidor',
      significado:
        'forma que un individuo llega a las decisiones relativas a la selección, compra y uso de bienes y servicios.',
    },
    {
      termino: 'Concepto de producto',
      significado:
        'noción que establece que los consumidores preferirán productos que ofrezcan mejor calidad, rendimiento o características y de que la organización debe dedicar su energía para mejorarlos continuamente; versión detallada de la idea del nuevo producto expresada en términos comprensibles para los consumidores.',
    },
    {
      termino: 'Concepto de venta',
      significado:
        'idea de que el consumidor no comprará suficientes productos de la organización a menos que ésta haga un gran esfuerzo de promoción y ventas.',
    },
    {
      termino: 'Proceso',
      significado:
        'conjunto de actividades o fases para realizar una actividad.',
    },
    {
      termino: 'Promesa de calidad',
      significado:
        'compromiso que adquieren las empresas con sus clientes y que se considera inquebrantable. Promesa de la empresa relacionada con calidad en el servicio o producto.',
    },
    {
      termino: 'Queja',
      significado:
        'reclamación que se hace cuando se considera que algo no es conforme.',
    },
    {
      termino: 'Satisfacción',
      significado: 'sensación de agrado al obtener lo que necesita.',
    },
    {
      termino: 'Servicio',
      significado: 'actividad que se presta a otras personas',
    },
    {
      termino: 'Valor agregado',
      significado:
        'en administración el valor agregado es un componente que adiciona valor a un producto o servicio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Burnett, J. J. (1996). Promoción, Conceptos y Estrategias. Bogotá: McGraw Hill. Fernández Valinas , R. (2003). FUNDAMENTOS DE MERCADOTECNIA. México: S.A. EDICIONES PARANINFO.',
    },
    {
      referencia:
        'Katz, B. (1991). Cómo Gerenciar el Servicio al Cliente. Bogotá: Legis Editores. Reinares Lara, P., & Ponzoa Casado, J. M. (2002). Marketing relacional: un nuevo enfoque para la seducción y fidelización del cliente. México D.F.: Pearson Educación.',
    },
    {
      referencia:
        'Llamas Olarán, J. M. (2001). MERCADOLOGIA DE LA PROMOCION. México D.F.: Trillas.',
    },
    {
      referencia:
        'Vallejo López , G., & Sánchez Paredes, F. (2011). UN PASO ADELANTE. Cómo lograr la ventaja competitiva a través del servicio al cliente . Bogotá: Norma.',
    },
    {
      referencia:
        'Wise, T. (1999). Que hacer realmente para atraer, deleitar y retener clientes. Buenos Aires: S.A. Ediciones Garnica.',
    },
    {
      referencia:
        'Zapata Alarcón, Y. (2006). Fidelización de Clientes, Marketing Relacional y CRM. Gestiopolis.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sonia Maritza Ramos Ruiz',
          cargo: 'Experta temática',
          centro:
            'Distrito Capital. Centro de Gestión de Mercados, Logística y Tic’s. Regional Distrito Capital.',
        },
        {
          nombre: 'Rosa Elvia Quintero Guasca',
          cargo: 'Asesora pedagógica',
          centro:
            'Regional Santander. Centro Industrial de Mantenimiento Integral- CIMI.',
        },
        {
          nombre: 'Luis Orlando Beltrán Vargas',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander. Centro Industrial de Mantenimiento Integral- CIMI.',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
