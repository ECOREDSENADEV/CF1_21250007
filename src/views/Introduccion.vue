<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .bg-full-width.bg-color-3
      .px-4.px-md-5
        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
          .col-lg-9
            p(data-aos="fade-left") El Instrumento de Planificación Predial para la Transición Agroecológica (IPPTA) nace como fruto de un proceso colectivo de construcción de saberes y prácticas que busca fortalecer la agroecología en Colombia desde el nivel predial. Su origen está estrechamente vinculado a experiencias territoriales de extensión rural, acompañamiento técnico y reflexión participativa, donde se identificó la necesidad de una herramienta integral que permita comprender el predio como un sistema vivo. El IPPTA combina dimensiones ecológicas, sociales, culturales y organizativas, permitiendo una lectura situada del territorio y facilitando procesos de diagnóstico, valoración y planificación agroecológica desde las familias rurales.

            .bg-color-1.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.order-2
                  figure
                    img(src='@/assets/curso/intro/2.png', alt='')
                .col-lg.order-1.mb-3.mb-lg-0
                  .p-4
                    p.mb-0(data-aos="fade-up") Su construcción metodológica se nutre de marcos teóricos y prácticos reconocidos, como el MESMIS, el TAPE, la Evaluación Agroecológica Principal y el Diagnóstico Rural Participativo. Estos referentes aportaron al IPPTA criterios de sustentabilidad, indicadores de desempeño, herramientas pedagógicas y dinámicas de diálogo de saberes que fortalecen su carácter participativo. De esta manera, el instrumento se consolida como una propuesta que integra la rigurosidad técnica con la sabiduría campesina, promoviendo un enfoque territorial y colectivo para la gestión del agroecosistema.
        
        .bg-full-width.bg-color-2.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/intro/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El propósito fundamental del IPPTA es acompañar la transición agroecológica de los predios rurales mediante un proceso pedagógico, técnico y organizativo. En su aplicación, permite identificar potencialidades y problemáticas del territorio, promover la autonomía comunitaria y articular acciones con políticas públicas como la Resolución 331 de 2024, que reconoce al IPPTA como herramienta oficial para la planificación agroecológica. Su uso ha demostrado ser valioso en contextos de posconflicto, procesos de reforma agraria y proyectos de economía solidaria, consolidándolo como un dispositivo de transformación territorial que vincula la agroecología con la salud de los ecosistemas y la vida comunitaria.
      
          

</template>

<script>
export default {
  name: 'Introduccion',
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
