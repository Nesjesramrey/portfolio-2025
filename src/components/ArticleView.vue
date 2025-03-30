<template>
  <section class="article-section">
    <div class="article-container" v-if="article">
      <span class="article-category" :class="article.category.toLowerCase()">{{ article.category }}</span>
      <h1 class="article-title">{{ article.title }}</h1>
      <div class="article-meta">
        <span class="article-date">{{ article.date }}</span>
      </div>
      <div class="article-content" v-html="article.content"></div>
      <router-link to="/blog" class="back-button">Volver al Blog</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ArticleView',
  data() {
    return {
      article: null
    }
  },
  created() {
    const articles = [
      {
        id: 1,
        title: 'Implementación de Machine Learning en Finanzas',
        content: `
          <p>El machine learning está revolucionando la forma en que analizamos y tomamos decisiones en el sector financiero. En este artículo, exploraremos cómo las instituciones financieras están aprovechando el poder del aprendizaje automático para mejorar sus operaciones y servicios.</p>

          <h2>Aplicaciones Principales</h2>
          <p>Las aplicaciones más destacadas del machine learning en finanzas incluyen:</p>
          <ul>
            <li>Detección de fraude en tiempo real</li>
            <li>Evaluación automatizada de riesgos crediticios</li>
            <li>Optimización de carteras de inversión</li>
            <li>Predicción de tendencias de mercado</li>
          </ul>

          <h2>Beneficios y Desafíos</h2>
          <p>La implementación de soluciones de machine learning en el sector financiero ofrece numerosos beneficios:</p>
          <ul>
            <li>Mayor precisión en la toma de decisiones</li>
            <li>Reducción de costos operativos</li>
            <li>Mejora en la experiencia del cliente</li>
            <li>Identificación temprana de riesgos</li>
          </ul>

          <p>Sin embargo, también existen desafíos importantes que deben considerarse:</p>
          <ul>
            <li>Calidad y disponibilidad de datos</li>
            <li>Requisitos regulatorios</li>
            <li>Necesidad de talento especializado</li>
            <li>Costos de implementación</li>
          </ul>

          <h2>Conclusiones</h2>
          <p>El machine learning está transformando fundamentalmente el sector financiero, ofreciendo nuevas oportunidades para la innovación y la eficiencia. Las organizaciones que adopten estas tecnologías de manera estratégica estarán mejor posicionadas para el futuro.</p>
        `,
        category: 'Data Science',
        date: '2024-01-15'
      },
      {
        id: 2,
        title: 'Arquitectura de Microservicios con Vue.js',
        content: `
          <p>La arquitectura de microservicios se ha convertido en un estándar para el desarrollo de aplicaciones modernas. En este artículo, exploraremos cómo implementar una arquitectura de microservicios efectiva utilizando Vue.js como framework frontend.</p>

          <h2>Fundamentos de la Arquitectura</h2>
          <p>Los componentes clave de una arquitectura de microservicios incluyen:</p>
          <ul>
            <li>Servicios independientes y autónomos</li>
            <li>APIs bien definidas</li>
            <li>Bases de datos descentralizadas</li>
            <li>Comunicación asíncrona</li>
          </ul>

          <h2>Integración con Vue.js</h2>
          <p>Vue.js ofrece varias características que facilitan la implementación de microservicios:</p>
          <ul>
            <li>Componentes reutilizables</li>
            <li>Sistema de enrutamiento flexible</li>
            <li>Gestión de estado centralizada</li>
            <li>Herramientas de desarrollo robustas</li>
          </ul>

          <h2>Mejores Prácticas</h2>
          <p>Para una implementación exitosa, considere las siguientes prácticas:</p>
          <ul>
            <li>Diseño API First</li>
            <li>Implementación de Circuit Breakers</li>
            <li>Monitoreo y logging centralizados</li>
            <li>Estrategias de despliegue gradual</li>
          </ul>

          <h2>Conclusiones</h2>
          <p>La combinación de Vue.js con una arquitectura de microservicios proporciona una base sólida para construir aplicaciones escalables y mantenibles. La clave está en la planificación cuidadosa y la adherencia a las mejores prácticas de desarrollo.</p>
        `,
        category: 'Desarrollo',
        date: '2024-01-10'
      },
      {
        id: 3,
        title: 'NIIF 2024: Cambios y Actualizaciones',
        content: `
          <p>Las Normas Internacionales de Información Financiera (NIIF) continúan evolucionando para adaptarse a las necesidades cambiantes del mundo empresarial. Este artículo analiza las principales actualizaciones para 2024.</p>

          <h2>Principales Cambios</h2>
          <p>Las actualizaciones más significativas incluyen:</p>
          <ul>
            <li>Nuevos requisitos de revelación</li>
            <li>Modificaciones en la valoración de activos</li>
            <li>Cambios en el reconocimiento de ingresos</li>
            <li>Actualizaciones en informes de sostenibilidad</li>
          </ul>

          <h2>Impacto en las Empresas</h2>
          <p>Los cambios afectarán a las organizaciones en varios aspectos:</p>
          <ul>
            <li>Procesos contables internos</li>
            <li>Sistemas de información financiera</li>
            <li>Políticas de reporting</li>
            <li>Capacitación del personal</li>
          </ul>

          <h2>Preparación para la Transición</h2>
          <p>Para una implementación exitosa, las empresas deben:</p>
          <ul>
            <li>Evaluar el impacto de los cambios</li>
            <li>Actualizar sistemas y procesos</li>
            <li>Capacitar al personal relevante</li>
            <li>Revisar políticas contables</li>
          </ul>

          <h2>Conclusiones</h2>
          <p>La adaptación a las nuevas NIIF requiere una planificación cuidadosa y una implementación sistemática. Las organizaciones deben comenzar su preparación lo antes posible para garantizar una transición sin problemas.</p>
        `,
        category: 'Contabilidad',
        date: '2024-01-05'
      }
    ];

    const articleId = parseInt(this.$route.params.id);
    this.article = articles.find(a => a.id === articleId);
  }
}
</script>

<style scoped>
.article-section {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 4rem;
}

.article-container {
  background: #ffffff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.article-category {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.article-category.data {
  background: #e5f9f2;
  color: #42b883;
}

.article-category.desarrollo {
  background: #f0f4ff;
  color: #3b82f6;
}

.article-category.contabilidad {
  background: #fff4e5;
  color: #f59e0b;
}

.article-title {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.article-meta {
  margin-bottom: 2rem;
}

.article-date {
  color: #94a3b8;
  font-size: 0.875rem;
}

.article-content {
  color: #4a5568;
  line-height: 1.8;
}

.article-content h2 {
  color: #2c3e50;
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
}

.article-content p {
  margin-bottom: 1.5rem;
}

.article-content ul {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.article-content li {
  margin-bottom: 0.5rem;
}

.back-button {
  display: inline-block;
  margin-top: 2rem;
  background: transparent;
  border: 2px solid #42b883;
  color: #42b883;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: #42b883;
  color: white;
}

@media (max-width: 768px) {
  .article-section {
    padding: 1rem;
  }

  .article-title {
    font-size: 2rem;
  }
}
</style>