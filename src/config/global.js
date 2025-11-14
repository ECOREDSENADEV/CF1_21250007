export default {
  global: {
    Name: 'Fundamentos del IPPTA y proyección de transición agro ecológica.',
    Description:
      'Este componente permite comprender el origen, propósito y estructura metodológica del IPPTA como instrumento técnico, pedagógico y político para la transición agroecológica. A partir del análisis participativo de las condiciones del predio, se orienta la identificación, agrupación y secuenciación de actividades situadas, articulando criterios técnicos, saberes locales y herramientas de planificación predial. Se reconocen ejemplos territoriales que validan el uso del IPPTA en contextos rurales diversos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Origen, construcción y propósito del IPPTA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Antecedentes metodológicos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Proceso de construcción colectiva y validación territorial',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Propósitos del IPPTA: pedagógicos, técnicos y organizativos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Experiencias de aplicación del IPPTA',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estructura metodológica del IPPTA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Componentes del instrumento',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Métodos participativos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Lectura integral del sistema predial',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Normatividad agroecológica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Resolución 464 de 2017 - Agricultura Campesina, Familiar y Comunitaria (AFCEC)',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Ley 1876 de 2017 - Sistema Nacional de Innovación Agropecuaria (SNIA)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Sentencia T-247 de 2023 - Protección de semillas nativas y criollas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Resolución 331 de 2024 - Política Pública de Agroecología',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Avances normativos territoriales: políticas públicas agroecológicas en departamentos',
            hash: 't_3_4',
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
        download: 'downloads/dist.pdf',
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
      tema: 'Origen, construcción y propósito del IPPTA',
      referencia:
        'Agencia de Desarrollo Rural Colombia. (2024). <em>INSTRUMENTO DE PLANIFICACIÓN PREDIAL PARA LA TRANSICIÓNAGROECOLÓGICA</em>. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xSEpl6HMlTU&t=3s',
    },
    {
      tema: 'Experiencias de aplicación IPPTA',
      referencia:
        'AVSF. (2025). <em>Agrónomos y Veterinarios Sin Fronteras</em>. LinkedIn.',
      tipo: 'Video',
      link:
        'https://www.linkedin.com/feed/update/urn:li:activity:7377069662511054849',
    },
    {
      tema: 'Experiencias de aplicación del IPPTA',
      referencia:
        'FAO. (2024). <em>Guía de transición a la agroecología para extensionistas y promotores rurales en Colombia</em>. Agroecology Knowledge Hub.',
      tipo: 'Libro',
      link:
        'https://tapipedia.org/sites/default/files/af-guia_de_agroecologia-web_1.pdf',
    },
    {
      tema: 'Normatividad agroecológica',
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2024). <em>Resolución 331 de 2024 Por la cual se adopta la política pública de Agroecología y se dictan otras disposiciones</em>.',
      tipo: 'Resolución',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=169881&dt=S',
    },
    {
      tema:
        'Avances normativos territoriales: políticas públicas agroecológicas en departamentos',
      referencia:
        'Buraschi, D., & Oldano, N. (2021). <em>La herencia de Paulo Freire en las prácticas participativas dialógicas</em>. Revista de Educación Social, (35).',
      tipo: 'Artículo',
      link:
        'https://www.eduso.net/res/revista/35/miscelanea/la-herencia-de-paulo-freire-en-las-practicas-participativas-dialogicas',
    },
  ],
  glosario: [
    {
      termino: 'Diagnóstico participativo',
      significado:
        'Proceso metodológico que permite leer el predio desde la experiencia de sus habitantes, integrando recorridos, entrevistas y valoración situada.',
    },
    {
      termino: 'Diálogo de saberes',
      significado:
        'Intercambio horizontal entre conocimientos técnicos, locales y ancestrales, que permite construir propuestas contextualizadas y culturalmente pertinentes.',
    },
    {
      termino: 'IPPTA',
      significado:
        'Instrumento de Planificación Predial para la Transición Agroecológica. Herramienta técnica, pedagógica y comunitaria que orienta el diagnóstico y planificación agroecológica del predio.',
    },
    {
      termino: 'Normatividad agroecológica',
      significado:
        'Conjunto de leyes, resoluciones y sentencias que respaldan la agroecología como enfoque estratégico de política pública en Colombia.',
    },
    {
      termino: 'Política pública agroecológica',
      significado:
        'Estrategia institucional que reconoce la agroecología como propuesta integral para el desarrollo rural, la soberanía alimentaria y la justicia socioambiental, Resolución 331 de 2024.',
    },
    {
      termino: 'Sistema predial',
      significado:
        'Unidad territorial rural en la que interactúan dimensiones ecológicas, sociales, culturales, económicas y organizativas. Se concibe como un espacio vivo de producción, planificación y transformación, donde cada decisión tiene implicaciones técnicas, sociales y territoriales.',
    },
    {
      termino: 'Recorridos interpretativos',
      significado:
        'Caminatas por el predio que permiten observar, dialogar y registrar elementos clave del agroecosistema desde la experiencia cotidiana de la familia.',
    },
    {
      termino: 'Sentencia T-247 de 2023',
      significado:
        'Fallo de la Corte Constitucional que protege las semillas nativas y criollas como patrimonio biocultural y base de la soberanía alimentaria.',
    },
    {
      termino: 'Resolución 464 de 2017',
      significado:
        'Norma que adopta los lineamientos estratégicos para la Agricultura Campesina, Familiar y Comunitaria (AFCEC), reconociéndola como sujeto de política pública y base para la transición agroecológica.',
    },
  ],
  referencias: [
    {
      referencia:
        'AVSF – Agrónomos y Veterinarios Sin Fronteras. (2025). <em>ARRIC: Apoyo a la Reforma Rural Integral en Colombia</em>.',
      link:
        'https://www.avsf.org/es/projets/arric-apoyo-a-la-reforma-rural-integral-en-colombia/',
    },
    {
      referencia:
        'Carreño, N. E. F. (2021). <em>Propuesta metodológica para medir la sustentabilidad en agroecosistemas a través del marco MESMIS</em>. Pensamiento udecino, 5(1), 143-160.',
      link: '',
    },
    {
      referencia:
        'Collantes, R. D. (2021). <em>Diagnóstico rural participativo en las comunidades Emberá de Marragantí y Villa Caleta, Panamá</em>. Revista Semilla del Este, 1(2), 25-31.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2017). <em>Ley 1876 de 2017: Por la cual se crea el Sistema Nacional de Innovación Agropecuaria (SNIA) y se dictan otras disposiciones</em>. Diario Oficial No. 50.310 del 29 de diciembre de 2017.',
      link: '',
    },
    {
      referencia:
        'Corte Constitucional de Colombia. (2023). <em>Sentencia T-247 de 2023: Protección de semillas nativas y soberanía alimentaria</em>. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'FAIA – Fondo de Acceso a Insumos Agropecuarios. (2025). <em>Programa Nacional de Bioinsumos, Fertilizantes Orgánicos y Acondicionadores de Suelos</em>.',
      link: 'https://www.faia.com.co/programabioinsumos',
    },
    {
      referencia:
        'FAO, Ministerio de Agricultura y Desarrollo Rural (MADR), Agencia de Desarrollo Rural (ADR), & Unión Europea (UE). (2021). <em>Cartilla transiciones agroecológicas: prácticas y experiencias en Colombia</em>. Sembrando Capacidades – Cooperación Brasil-Colombia-FAO.',
      link:
        'https://sembrandocapacidades.fao.org.co/wp-content/uploads/2021/11/V-FINAL-CARTILLA-TRANSICIÍN-ESPAÑOL-V-DIGITAL.pdf',
    },
    {
      referencia:
        'León-Sicard, T. E. (2021). <em>La Estructura Agroecológica Principal de los agroecosistemas</em>. Universidad Nacional de Colombia – IDEA.',
      link:
        'https://ppduruguay.undp.org.uy/wp-content/uploads/2021/09/LeonSicard-21-EAP-agroecosistemas.pdf',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural & Ministerio Federal de Alimentación y Agricultura de Alemania. (2025). <em>Proyecto Colombo-Alemán de Demostración y Formación en Agroecología (PACA)</em>.',
      link: 'https://paca.com.co/',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural (MADR), Agencia de Desarrollo Rural (ADR), Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO), & Unión Europea (UE). (2023). <em>Guía de transición a la agroecología para extensionistas y promotores rurales en Colombia</em>. Jairo Andrés Peña Torres (Comp.). Proyecto TAP-AIS. ISBN: 978-628-7522-81-7.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2017). <em>Resolución 464 de 2017: Por la cual se adoptan los lineamientos de política pública para el fortalecimiento de la Agricultura Campesina, Familiar y Comunitaria (ACFC)</em>. Diario Oficial No. 50.254 del 7 de diciembre de 2017.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2024). <em>Resolución 331 de 2024: Por la cual se adopta la Política Pública de Agroecología</em>. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'Namirembe, S., Mhango, W., Njoroge, R., Tchuwa, F., Wellard, K., & Coe, R. (2022). <em>Grounding a global tool—Principles and practice for agroecological assessments inspired by TAPE</em>. Elementa: Science of the Anthropocene, 10(1), 000022.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
}
