<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Estructura metodológica del IPPTA

    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El IPPTA se basa en una estructura metodológica que articula diagnóstico, valoración y planificación predial desde una perspectiva agroecológica, territorial y participativa. Su diseño responde a la necesidad de acompañar procesos de transición predial reconociendo la complejidad de los agroecosistemas y la diversidad de saberes presentes en cada territorio.
    
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Componentes del instrumento
    
    .row.mb-5.align-items-center
      .col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p(data-aos="fade-left") El IPPTA se compone de tres elementos centrales que permiten desarrollar una intervención coherente, situada y transformadora. A continuación se presentan sus componentes clave:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-5.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Diagnóstico participativo
              p Permite una lectura integral del predio mediante recorridos interpretativos, entrevistas familiares y cartografía social. Se identifican prácticas productivas, dinámicas familiares, conflictos ecológicos y potencialidades del sistema predial.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Valoración del Estado de Transición Agroecológica (ETA)
              p Evalúa el agroecosistema a través de 21 indicadores, agrupados en dimensiones sociales, ambientales y productivas. La información se representa en un diagrama radial, que permite visualizar fortalezas, desequilibrios y puntos críticos, estimando el nivel de avance del predio en su proceso de transición agroecológica.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Planificación predial agroecológica
              p Con base en el diagnóstico y la valoración, se construye una hoja de ruta con acciones concretas, organizadas por actividades, tiempos, recursos, responsables y criterios de seguimiento. Esta planificación es guiada por los principios agroecológicos y construida de manera colectiva con la familia.

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Métodos participativos
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
      .col-lg-8.mb-3.mb-lg-0
        p(data-aos="fade-left") El IPPTA se aplica mediante metodologías etnográficas participativas, que promueven el diálogo de saberes, la reflexión situada y la construcción colectiva del conocimiento. Estas metodologías garantizan que el IPPTA no sea una herramienta impuesta, sino una construcción enraizada en la experiencia y visión de las familias rurales. Los principales métodos aplicados:
    
        .bg-color-6.tarjeta.mb-3.pe-lg-3.p-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/7.svg', alt='')
            .col-lg
              .p-4.bg-white.tarjeta
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 <b>Recorridos interpretativos</b>: Caminatas por el predio que permiten observar, dialogar y registrar elementos clave del agroecosistema, partiendo de la experiencia cotidiana de la familia.
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 <b>Entrevistas familiares</b>: Espacios de conversación que permiten comprender la historia del predio, las prácticas productivas, los roles familiares y las aspiraciones de transformación.
                  li.mb-0.d-flex
                    i.fa-solid.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 <b>Talleres vivenciales</b>: Encuentros colectivos donde se comparten experiencias, se construyen mapas colectivos, se priorizan acciones y se fortalecen capacidades organizativas.
        p Estos métodos permiten que el IPPTA sea una herramienta viva y contextualizada, que reconoce la voz y el saber de quienes habitan y transforman el territorio.

    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Concepto

    .row.mb-5.align-items-center
      .col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p(data-aos="fade-left") El IPPTA parte de una concepción del predio como sistema vivo, donde interactúan múltiples dimensiones interdependientes que configuran su realidad y potencial transformador. Esta perspectiva permite comprender el agroecosistema más allá de lo productivo, reconociendo su complejidad ecológica, social, cultural, económica y organizativa. A continuación se presentan las dimensiones clave que integran esta lectura integral:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.p-4.align-items-center
          .col-lg-9.mb-3.mb-lg-0.order-lg-2.p-4
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Ecológica
                p.text-center Suelos, agua, biodiversidad, ciclos naturales y relaciones entre especies.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Social
                p.text-center Relaciones familiares, roles de género, redes de apoyo y dinámicas comunitarias.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cultural
                p.text-center Saberes locales, prácticas ancestrales, cosmovisiones y formas de habitar el territorio.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Económica
                p.text-center Ingresos, costos, mercados, intercambios solidarios y estrategias de sostenibilidad.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Organizativa
                p.text-center Participación en procesos colectivos, toma de decisiones, incidencia y autonomía.
          .col-lg-3.order-lg-1
            figure
              img(src='@/assets/curso/tema2/8.png', alt='')

        .bg-full-width.bg-color-7.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema2/14.svg", style="max-width: 90px").mx-auto
              .col-lg.text-white
                p.mb-0 Esta lectura integral del sistema predial permite orientar las acciones del IPPTA hacia una transición agroecológica situada, basada en el reconocimiento de la diversidad territorial y la capacidad de las comunidades para transformar su entorno.

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
