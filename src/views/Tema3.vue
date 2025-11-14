<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Normatividad agroecológica 

    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El IPPTA se basa en una estructura metodológica que articula diagnóstico, valoración y planificación predial desde una perspectiva agroecológica, territorial y participativa. Su diseño responde a la necesidad de acompañar procesos de transición predial reconociendo la complejidad de los agroecosistemas y la diversidad de saberes presentes en cada territorio.
    
    .bg-full-width.bg-color-9
      .px-4.px-md-5
        separador
        
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.1 Resolución 464 de 2017 - Agricultura Campesina, Familiar y Comunitaria (AFCEC)
        
        .row.mb-5.align-items-center
          .col-lg-2.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/2.svg", data-aos="zoom-in")
          .col-lg-10.order-lg-1
            p(data-aos="fade-left") La Resolución 464 de 2017, emitida por el Ministerio de Agricultura y Desarrollo Rural, marca un hito en el reconocimiento institucional de la Agricultura Campesina, Familiar y Comunitaria (AFCEC) como sujeto político y técnico diferenciado dentro del desarrollo rural con enfoque territorial. Los principales aportes de la resolución son:

        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-11.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/tema3/3.svg', alt='Texto que describa la imagen')
              h5.text-center Reconocimiento político
              p.text-center La AFCEC es reconocida como sujeto de política pública, con enfoque territorial y pertinencia cultural.
        
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-11.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/tema3/4.svg', alt='Texto que describa la imagen')
              h5.text-center Lineamientos estratégicos
              p.text-center Se adoptan los Lineamientos de Política Pública para el fortalecimiento de la AFCEC.
        
          .col-sm-6.col-lg-4.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-11.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema3/5.svg', alt='Texto que describa la imagen')
              h5.text-center Mesa Ampliada de la AFCEC
              p.text-center Espacio institucional de diálogo, articulación y seguimiento de la política pública agroecológica.

        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") La composición de la mesa ampliada de la AFCEC:
        
            .bg-color-12.tarjeta.p-4.mb-3(data-aos="fade-left")
              .bg-color-white.p-4.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Delegados del Ministerio de Agricultura y sus entidades adscritas (ADR, UPRA, ICA, entre otras).
                  li.mb-3.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Representantes de organizaciones campesinas, indígenas, afrodescendientes y comunitarias.
                  li.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Actores académicos, técnicos y de cooperación internacional vinculados al fortalecimiento de la AFCEC.
            p Las funciones principales de la mesa son:
            
            ol.lista-ol--cuadro
              li.d-flex
                .lista-ol--cuadro__vineta
                  span a
                | Acompañar la implementación de los lineamientos estratégicos de la política pública para la AFCEC.
              li.d-flex
                .lista-ol--cuadro__vineta
                  span b
                | Promover la articulación interinstitucional y territorial de programas y proyectos con enfoque diferencial.
              li.d-flex
                .lista-ol--cuadro__vineta
                  span c
                | Fortalecer la participación de organizaciones sociales en la formulación, ejecución y evaluación de políticas rurales.
              li.d-flex
                .lista-ol--cuadro__vineta
                  span d
                | Impulsar procesos relacionados con:

        .row.mb-5.justify-content-center
          .col-sm-4.col-lg-2.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-11.p-3.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema3/7.svg', alt='Texto que describa la imagen')
              p.text-center Agricultura campesina, familiar, étnica y comunitaria.
          .col-sm-4.col-lg-2.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-11.p-3.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema3/8.svg', alt='Texto que describa la imagen')
              p.text-center Comercialización justa.
          .col-sm-4.col-lg-2.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-11.p-3.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema3/9.svg', alt='Texto que describa la imagen')
              p.text-center Acceso a tierras
          .col-sm-4.col-lg-2.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-11.p-3.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema3/10.svg', alt='Texto que describa la imagen')
              p.text-center Formación técnica.
          .col-sm-4.col-lg-2.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-11.p-3.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema3/11.svg', alt='Texto que describa la imagen')
              p.text-center Reconocimiento de saberes tradicionales.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
            h3.titulo-con-imagen__texto Importancia de la Resolución 464 para la agroecología

        p.mb-5 Este instrumento ha sido clave para posicionar la agroecología como eje estratégico de la política pública rural. Además, ha contribuido a la creación de herramientas como el IPPTA, mediante procesos de diálogo con plataformas como:

        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/12.png", data-aos="zoom-in")
          .col-lg-8.mb-3.mb-lg-0
            .bg-color-7.tarjeta.mb-3.px-lg-3.pt-lg-3.p-3(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/13.svg', alt='')
                .col-lg
                  .p-4.bg-white.tarjeta
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p.mb-0 RENAF
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p.mb-0 MAELA
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p.mb-0 Red de Guardianes de Semillas de Vida
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p.mb-0 Red de Semillas Libres
            p La Resolución no solo reconoce a la AFCEC como actor central del desarrollo rural, sino que establece las condiciones institucionales necesarias para su fortalecimiento, abriendo camino a:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-10.tarjeta.p-3(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/14.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 01
                  p.mb-0 La planificación predial participativa
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-10.tarjeta.p-3(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/15.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 02
                  p.mb-0 La transición agroecológica
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-10.tarjeta.p-3(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/16.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 03
                  p.mb-0 La soberanía alimentaria

        separador
        
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.2 Ley 1876 de 2017 - Sistema Nacional de Innovación Agropecuaria (SNIA)  
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/17.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La Ley 1876 de 2017 establece el marco institucional para coordinar la investigación, el desarrollo tecnológico, la extensión agropecuaria y la formación rural en Colombia. A través de esta ley, se crea el Sistema Nacional de Innovación Agropecuaria (SNIA), cuyo objetivo es articular actores públicos, privados, comunitarios y académicos en torno a procesos de innovación que respondan a las realidades territoriales.
        .bg-color-7.tarjeta.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/18.svg', alt='')
            .col-lg
              .p-4.text-white
                p.mb-0(data-aos="fade-up") Uno de sus aportes clave es el reconocimiento de la Agricultura Campesina, Familiar y Comunitaria (AFCEC) como actor estratégico dentro del sistema (Ley 1876 de 2017).

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto Elementos clave de la Ley 1876 de 2017
    
    .row.mb-5.align-items-center
      .col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p(data-aos="fade-left") La Ley 1876 establece pilares fundamentales para el funcionamiento del Sistema Nacional de Innovación Agropecuaria (SNIA), los cuales permiten comprender su alcance institucional, metodológico y territorial. A continuación, se detallan sus componentes más relevantes:
    
    .row.align-items-start.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/19.png", alt="").mb-4.mb-lg-0
      .col-lg-9
    
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .div(titulo="Creación del SNIA como sistema articulador")
            .ms-5
              p El SNIA se compone de políticas, programas, metodologías y mecanismos de gestión, financiación, divulgación y evaluación en torno a la innovación agropecuaria. Participan entidades públicas, privadas y comunitarias que promueven actividades científicas, tecnológicas y de innovación en el sector rural.
    
          .div(titulo="Subsistemas funcionales del SNIA")
            .ms-5
              p La estructura del SNIA se organiza en tres subsistemas:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Subsistema Nacional de Investigación y Desarrollo Tecnológico Agropecuario
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Subsistema Nacional de Extensión Agropecuaria
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Subsistema Nacional de Formación y Capacitación para la Innovación Agropecuaria
          
          .div(titulo="Principios orientadores")
            .ms-5
              p La ley se guía por principios como:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Enfoque territorial y diferencial
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Participación de productores como agentes de innovación
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Articulación con sistemas de educación, ambiente, crédito y competitividad
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Reconocimiento de saberes locales y ancestrales
                li.mb-0.d-flex
                  i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                  p.mb-0 Desarrollo sostenible y seguridad alimentaria

    
          .div(titulo="Sistemas Territoriales de Innovación Agropecuaria (STI)")
            .ms-5
              p Son espacios prácticos donde se integran actores públicos, privados y comunitarios para impulsar procesos de investigación, formación, transferencia tecnológica y extensión, adaptados a las realidades biofísicas, culturales y socioeconómicas de cada territorio.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto Articulación con la AFCEC y la agroecología
    
    p.mb-5 Aunque la Ley 1876 no menciona explícitamente la agroecología, establece condiciones normativas favorables para su fortalecimiento. Entre los aspectos más relevantes se encuentran:

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/20.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-6.tarjeta.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/21.svg', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Reconocimiento de los productores agropecuarios organizados (AFCEC) como actores estratégicos del SNIA.
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Promoción de una innovación abierta y colaborativa, basada en el diálogo de saberes.
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Establecimiento de una extensión agropecuaria participativa y contextualizada, orientada al fortalecimiento de capacidades locales.
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Posibilidad de integrar herramientas como el IPPTA en procesos de planificación predial, formación rural y acompañamiento técnico.
        p(data-aos="fade-left") Esta ley representa una base normativa fundamental para impulsar procesos de transición agroecológica con enfoque participativo, donde instrumentos como el IPPTA pueden insertarse como estrategias metodológicas integradoras en el marco de sistemas territoriales de innovación.
    
    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Sentencia T-247 de 2023 - Protección de semillas nativas y soberanía alimentaria
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/22.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La Sentencia T-247 de 2023, emitida por la Corte Constitucional de Colombia, representa un hito jurídico en la defensa de los derechos territoriales, culturales y alimentarios de los pueblos indígenas. En esta decisión, la Corte ampara los derechos fundamentales de comunidades indígenas frente a la contaminación transgénica de sus semillas nativas y criollas, reconociendo su valor como patrimonio biocultural y fundamento de la soberanía alimentaria (Sentencia T-247 de 2023).
        .bg-color-7.tarjeta.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/23.svg', alt='')
            .col-lg
              .p-4.text-white
                p.mb-0(data-aos="fade-up") Esta decisión es el resultado de una acción de tutela interpuesta por autoridades indígenas que denunciaron la vulneración de sus derechos por la contaminación genética de semillas de maíz nativas y criollas debido a cultivos transgénicos. La Corte, en ejercicio de su función de protección constitucional, estableció medidas concretas para garantizar los derechos a la soberanía alimentaria, la identidad cultural y la autodeterminación frente a los riesgos de la biotecnología agrícola.
       
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto Elementos clave de la Sentencia T-247 de 2023
    
    p.mb-5 La Sentencia establece fundamentos jurídicos y políticos para la protección de las semillas nativas y criollas, reconociéndolas como parte del patrimonio biocultural de los pueblos indígenas. A continuación, se presentan los aspectos más relevantes definidos por la Corte:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-5.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/24.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Derecho a la autodeterminación alimentaria
              p Las semillas nativas y criollas son reconocidas como expresión de la identidad cultural, espiritual y productiva de los pueblos indígenas. Su protección es esencial para garantizar la autonomía, soberanía alimentaria y pervivencia étnica.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/25.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Orden al Estado para adoptar medidas efectivas de protección
              p La Corte exige al Ministerio de Agricultura, al ICA y a otras entidades implementar acciones concretas para prevenir la contaminación genética, garantizar la bioseguridad y proteger los sistemas tradicionales de semillas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/26.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Consulta previa y participación comunitaria
              p Cualquier medida que afecte el uso o conservación de semillas debe ser consultada previamente con las comunidades indígenas, de acuerdo con el Convenio 169 de la OIT y el bloque de constitucionalidad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/27.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Articulación institucional y enfoque diferencial
              p Se ordena la coordinación entre entidades del Estado, organizaciones indígenas y académicas para diseñar políticas públicas que fortalezcan los sistemas propios de producción, conservación y circulación de semillas.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto Implicaciones para la agroecología y el IPPTA
    
    .row
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/28.png", data-aos="zoom-in")
      .col-lg-8
        p Esta sentencia fortalece el enfoque agroecológico, al reconocer que las semillas nativas no son simples insumos, sino elementos centrales de la cultura, la salud territorial y la autonomía alimentaria. En este marco, el IPPTA puede integrar criterios de protección y valorización de semillas dentro de sus indicadores, promoviendo:
        .bg-color-4.tarjeta.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/29.svg', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Conservación in situ de semillas nativas y criollas
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Intercambio comunitario de semillas
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Fortalecimiento de bancos de semillas locales
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Reconocimiento del vínculo entre biodiversidad agrícola y soberanía cultural

    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Resolución 331 de 2024 - Política Pública de Agroecología
    
    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.order-2
          figure
            img(src='@/assets/curso/tema3/30.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") La Resolución 331 de 2024, expedida por el Ministerio de Agricultura y Desarrollo Rural, formaliza la Política Pública de Agroecología (PPA) en Colombia, en coherencia con el Plan Nacional de Desarrollo “Colombia Potencia Mundial de la Vida”. Este instrumento normativo representa un avance histórico, al reconocer la agroecología como un enfoque integral orientado al bienestar y buen vivir, la diversidad étnica y comunitaria, la interculturalidad, la justicia socioambiental, la sostenibilidad, la protección de la agrobiodiversidad y el reconocimiento del campesinado (Ministerio de Agricultura y Desarrollo Rural, 2024).

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto Fundamentos y contexto
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/31.png", data-aos="zoom-in")
      .col-lg-8.mb-3.mb-lg-0
        p La política surge como respuesta a los impactos negativos del modelo agroindustrial dominante, caracterizado por:
        .bg-color-7.tarjeta.mb-3.px-lg-3.pt-lg-3.p-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/32.svg', alt='')
            .col-lg
              .p-4.bg-white.tarjeta
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Uso intensivo de agroquímicos
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Pérdida de biodiversidad
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Inseguridad alimentaria
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Exclusión de saberes campesinos, étnicos y comunitarios
        p Reconoce que la agroecología no es solo un conjunto de prácticas productivas, sino una propuesta política, cultural y territorial, construida desde los movimientos sociales, mujeres rurales, pueblos indígenas, comunidades negras y organizaciones campesinas.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto Lineamientos estratégicos de la PPA
    
    p.mb-5 La política se estructura en cuatro lineamientos estratégicos que orientan la acción pública en los territorios. Cada uno responde a dimensiones clave del proceso de transición agroecológica:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-5.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/33.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Gestión del conocimiento agroecológico
              ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Escuelas agroecológicas y territorios-escuela
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Investigación participativa y diálogo de saberes
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Fortalecimiento de saberes ancestrales y populares
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/34.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Producción y transición agroecológica
              ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 - Sustitución progresiva de agrotóxicos
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Uso de bioinsumos
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Planes prediales agroecológicos y herramientas como el IPPTA
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Diversificación productiva y prácticas regenerativas
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/35.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Distribución, comercialización y consumo con base agroecológica
              ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Sistemas Participativos de Garantía (SPG)
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Circuitos cortos, mercados campesinos, tiendas agroecológicas
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Promoción del consumo responsable y la soberanía alimentaria
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/36.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Agrobiodiversidad, sistemas bioculturales y crisis climática
              ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Conservación y gestión comunitaria de la agrobiodiversidad
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Reconocimiento de sistemas bioculturales
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Resiliencia territorial y transición productiva ante el cambio climático
    
    p.mb-5 A continuación, se presenta un video  que expone los criterios orientadores de una política territorial, ética y técnica, fundamentada en enfoques integradores que promueven la inclusión, la diversidad y la justicia ambiental.

    .bg-full-width.bg-color-9
      .px-4.px-md-5
        figure.mb-5
          .video.mb-2
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Leyenda del video

    
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
            h3.titulo-con-imagen__texto Relevancia para el IPPTA
        
        p.mb-5 La Resolución 331 de 2024 respalda directamente el uso del IPPTA como herramienta técnica para la planificación predial agroecológica. Al estar incluido en el lineamiento de producción y transición, el IPPTA se consolida como un instrumento clave para:
    
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-10.tarjeta.p-3(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/37.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 01
                  p.mb-0 Diagnóstico y planificación territorial agroecológica
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-10.tarjeta.p-3(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/38.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 02
                  p.mb-0 Fortalecimiento organizativo y autonomía comunitaria
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-10.tarjeta.p-3(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/39.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 03
                  p.mb-0 Articulación entre política pública y saberes locales

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
            h3.titulo-con-imagen__texto Estructura de gobernanza de la política pública
        
        p.mb-5 La gobernanza de la Política Pública de Agroecología (PPA) se organiza en instancias nacionales y territoriales que garantizan su territorialización, sostenibilidad y seguimiento participativo. Estas instancias articulan actores estatales, sociales, académicos y comunitarios.
    
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Mesa Nacional de Agroecología (MNA)" :icono="require('@/assets/componentes/5.svg')")
        .row.align-items-center.p-5
          .col-md-7.mb-4.mb-md-0
            h4 Mesa Nacional de Agroecología (MNA)
            p.mb-0 Espacio de coordinación nacional entre el Ministerio de Agricultura, organizaciones sociales, academia, delegados regionales y cooperación internacional. Define agendas estratégicas, orienta recursos y articula con planes departamentales.
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/40.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Mesas técnicas interinstitucionales" :icono="require('@/assets/componentes/6.svg')")
        .row.align-items-center.p-5
          .col-md-7.mb-4.mb-md-0
            h4 Mesas técnicas interinstitucionales
            p.mb-0 Equipos especializados responsables del desarrollo de herramientas, metodologías y criterios técnicos para implementar la política pública de agroecología.
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/41.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Instancias territoriales de gobernanza" :icono="require('@/assets/componentes/7.svg')")
        .row.align-items-center.p-5
          .col-md-7.mb-4.mb-md-0
            h4 Instancias territoriales de gobernanza
            p.mb-0 Conformadas por mesas agroecológicas departamentales, municipales y comunitarias. Promueven la planificación participativa, el seguimiento de acciones locales y la articulación con los planes de desarrollo local.
          .col-md-5.mb-4.mb-md-0.order-1
            figure
              img(src='@/assets/curso/tema3/42.png', alt='Texto que describa la imagen')

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
        h3.titulo-con-imagen__texto Herramientas técnicas y operativas
    
    .row.mb-5.align-items-center
      .col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p(data-aos="fade-left") La Resolución 331 de 2024 reconoce explícitamente al IPPTA como una herramienta técnica clave para la planificación predial participativa en procesos de transición agroecológica. Además, promueve el uso de otras estrategias complementarias que fortalecen los procesos desde lo local.
    
    .row.align-items-start.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/43.png", alt="").mb-4.mb-lg-0
      .col-lg-9
    
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .div(titulo="IPPTA (Instrumento de Planificación Predial para la Transición Agroecológica)")
            .ms-5
              p Planificación predial participativa con enfoque territorial, cultural y agroecológico. Permite operacionalizar los lineamientos nacionales en acciones concretas por predio.
    
          .div(titulo="Sustitución de agrotóxicos y uso de bioinsumos")
            .ms-5
              p Impulsa la reducción de insumos químicos mediante alternativas agroecológicas.
          
          .div(titulo="Fortalecimiento de bancos de semillas nativas y criollas")
            .ms-5
              p Protege la agrobiodiversidad y los sistemas tradicionales de reproducción de semillas.
    
    .bg-full-width.bg-color-9
      .px-4.px-md-5
        .row.align-items-start.mb-5
          .col-lg-3.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema3/44.png", alt="").mb-4.mb-lg-0
          .col-lg-9.order-lg-1
        
            AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
              .div(titulo="Escuelas agroecológicas y formación territorial")
                .ms-5
                  p Promueve el aprendizaje situado, el diálogo de saberes y el fortalecimiento de capacidades locales.
        
              .div(titulo="Articulación con PDEA y STI")
                .ms-5
                  p Integra la agroecología en los Planes Departamentales de Extensión Agropecuaria (PDEA) y en los Sistemas Territoriales de Innovación Agropecuaria (STI).
              
              .div(titulo="Sistemas Participativos de Garantía (SPG), mercados campesinos y circuitos cortos")
                .ms-5
                  p Fomenta la comercialización justa, el consumo responsable y el acceso directo a alimentos agroecológicos.

        p.mb-5 La Resolución 331 de 2024 consolida un marco normativo robusto para escalar la agroecología desde los territorios, reconociendo el papel central de las organizaciones sociales en la construcción de esta política. Además, impulsa:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-10.tarjeta.p-3(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/45.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 01
                  p.mb-0 La inversión pública en agroecología
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-10.tarjeta.p-3(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/46.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 02
                  p.mb-0 La articulación intersectorial entre instituciones
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-10.tarjeta.p-3(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/47.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 03
                  p.mb-0 La validación territorial de las estrategias agroecológicas
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/48.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 En este contexto, el IPPTA se posiciona como un instrumento fundamental para traducir los lineamientos nacionales en planes de acción predial, construidos de forma colectiva, participativa y con pertinencia cultural.
    
    .bg-full-width.bg-color-9
      .px-4.px-md-5
        separador
        
        #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.5 Avances normativos territoriales: políticas públicas agroecológicas en departamentos
        
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/49.png", data-aos="zoom-in")
          .col-lg-8.mb-3.mb-lg-0
            p La implementación de la Política Pública de Agroecología (PPA) no se restringe al nivel nacional. En los últimos años, varios departamentos han formulado y adoptado sus propios planes agroecológicos, reconociendo la agroecología como eje estratégico para:
            .bg-color-14.tarjeta.mb-3.px-lg-3.pt-lg-3.p-3(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/50.svg', alt='')
                .col-lg
                  .p-4.bg-white.tarjeta
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p.mb-0 El desarrollo rural
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p.mb-0 La soberanía alimentaria
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p.mb-0 La justicia ambiental
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p.mb-0 Exclusión de saberes campesinos, étnicos y comunitarios
        p.mb-5 Estos marcos permiten adaptar los lineamientos nacionales a las realidades locales, fortaleciendo la planificación participativa, la articulación interinstitucional y el protagonismo comunitario. A continuación, se presentan tres experiencias departamentales pioneras, destacando sus principales características:

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
            h3.titulo-con-imagen__texto Valle del Cauca - Ordenanza 656 de 2024
        
        .row.mb-5
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/51.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            p(data-aos="fade-left") El Plan Agroecológico del Valle del Cauca (PLAEV) 2024–2035 se aprobó mediante una ordenanza departamental, construida con amplia participación social. La siguiente tabla resume sus elementos más destacados:
            p.mb-0 <b>Instrumento normativo</b>. Plan Agroecológico del Valle del Cauca (PLAEV) 2024–2035, adoptado por ordenanza departamental.
            p.mb-0 <b>Participación</b>. Comunidades campesinas, indígenas, afrodescendientes, urbanas y periurbanas.
            p.mb-0 <b>Ejes clave</b>. Etno agroecosistemas, memoria biocultural, recampesinización, autonomía, economía solidaria.
            p.mb-0 <b>Enfoques transversales</b>. Étnico, territorial, de género, generacional, participativo y diferencial.
            p.mb-0 <b>Dispositivos</b>. Nodos agroecológicos, Escuelas Campesinas de Agroecología (ECA), SPG y mercados agroecológicos locales.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
            h3.titulo-con-imagen__texto Antioquia - Plan Departamental de Agroecología (en formulación)
        
        .row.mb-5
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/52.png", data-aos="zoom-in")
          .col-lg-7
            p(data-aos="fade-left") El departamento de Antioquia ha avanzado en un proceso participativo de formulación de su plan agroecológico. La tabla a continuación presenta sus componentes principales:
            p.mb-0 <b>Reconocimiento conceptual</b>. La agroecología se entiende como ciencia, práctica sostenible y movimiento social.
            p.mb-0 <b>Participación territorial</b>. Talleres en todas las subregiones con asociaciones campesinas, mujeres rurales, comunidades étnicas, universidades y entidades públicas.
            p <b>Enfoque integral</b>. Articulación de dimensiones ecológicas, culturales, económicas y políticas, con énfasis en soberanía alimentaria y justicia ambiental.
            p <b>Programas operativos</b>:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                p.mb-0 Modelos de producción en ZPPA, TECAM y ZRC
              li.mb-0.d-flex
                i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                p.mb-0 Redes comunitarias de semillas
              li.mb-0.d-flex
                i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                p.mb-0 Circuitos solidarios y avales de confianza
              li.mb-0.d-flex
                i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                p.mb-0 Escuelas agroecológicas y extensión rural
              li.mb-0.d-flex
                i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                p.mb-0 Gobernanza agroecológica e institucionalidad propia
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/4.png")
            h3.titulo-con-imagen__texto Nariño – Ordenanza N° 25 de 2024
        p(data-aos="fade-left").mb-5 El departamento de Nariño formalizó su política agroecológica con un enfoque territorial, espiritual y biocultural. A continuación, se presentan sus aspectos clave:
        .row.mb-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema3/53.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            p.mb-0 <b> Marco normativo</b>. Política agroecológica formalizada mediante ordenanza con enfoque territorial y biocultural.
            p <b>Sujeto político</b>. Reconocimiento del campesinado como sujeto de derechos y actor estratégico.
            p <b>Apuestas estructurales</b> 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                p.mb-0 Sistemas agroalimentarios sustentables y resilientes
              li.mb-0.d-flex
                i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                p.mb-0 Soberanía alimentaria
              li.mb-0.d-flex
                i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                p.mb-0 Acceso a la tierra y educación agroecológica
            p.mb-0 <b>Estrategias clave</b>.  Territorios-escuela, redes de intercambio de saberes, enfoque ecológico, económico, cultural, político y espiritual.
            p.mb-0 <b>Articulación.</b> Coherencia con el Plan Nacional de Desarrollo y la Resolución 331 de 2024.
        
        .row
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/54.png", data-aos="zoom-in")
          .col-lg-8.mb-3.mb-lg-0
            p Estos avances normativos departamentales consolidan la agroecología como política pública desde lo local, demostrando cómo los territorios pueden asumir el liderazgo de la transición agroecológica.
            p Herramientas como el IPPTA se integran con facilidad en estos contextos para:
            .bg-color-13.tarjeta.mb-3.px-lg-3.pt-lg-3.p-3(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/55.svg', alt='')
                .col-lg
                  .p-4.bg-white.tarjeta
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p.mb-0 Facilitar la planificación predial participativa
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p.mb-0 Acompañar la formación agroecológica comunitaria
                      li.mb-0.d-flex
                        i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                        p.mb-0 Articular políticas públicas con procesos autónomos y culturales
    
        .bg-full-width.bg-color-7.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema3/48.svg", style="max-width: 90px").mx-auto
              .col-lg.text-white
                p.mb-0 La validación territorial, la participación activa de las comunidades y la articulación con los marcos nacionales son condiciones esenciales para escalar la agroecología en Colombia desde abajo.
            

    



 
    

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
