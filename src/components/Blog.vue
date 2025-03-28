<template>
  <section class="blog-section">
    <h2 class="section-title">Blog</h2>
    <div class="blog-grid">
      <article v-for="post in blogPosts" :key="post.id" class="blog-card">
        <div class="blog-card-content">
          <span class="blog-category" :class="post.category.toLowerCase()">{{ post.category }}</span>
          <h3 class="blog-title">{{ post.title }}</h3>
          <p class="blog-excerpt">{{ post.excerpt }}</p>
          <div class="blog-meta">
            <span class="blog-date">{{ post.date }}</span>
            <button class="read-more">Leer más</button>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      blogPosts: [
        {
          id: 1,
          title: 'Implementación de Machine Learning en Finanzas',
          excerpt: 'Explorando cómo el aprendizaje automático está revolucionando el análisis financiero y la toma de decisiones.',
          category: 'Data Science',
          date: '2024-01-15'
        },
        {
          id: 2,
          title: 'Arquitectura de Microservicios con Vue.js',
          excerpt: 'Guía práctica para implementar una arquitectura escalable usando Vue.js y servicios backend.',
          category: 'Desarrollo',
          date: '2024-01-10'
        },
        {
          id: 3,
          title: 'NIIF 2024: Cambios y Actualizaciones',
          excerpt: 'Análisis detallado de las últimas actualizaciones en las Normas Internacionales de Información Financiera.',
          category: 'Contabilidad',
          date: '2024-01-05'
        }
      ]
    }
  }
}
</script>

<style scoped>
.blog-section {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 4rem;
}

.section-title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.blog-card {
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
}

.blog-card-content {
  padding: 1.5rem;
}

.blog-category {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.blog-category.data {
  background: #e5f9f2;
  color: #42b883;
}

.blog-category.desarrollo {
  background: #f0f4ff;
  color: #3b82f6;
}

.blog-category.contabilidad {
  background: #fff4e5;
  color: #f59e0b;
}

.blog-title {
  color: #2c3e50;
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

.blog-excerpt {
  color: #64748b;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.blog-date {
  color: #94a3b8;
  font-size: 0.875rem;
}

.read-more {
  background: transparent;
  border: 2px solid #42b883;
  color: #42b883;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.read-more:hover {
  background: #42b883;
  color: white;
}

@media (max-width: 768px) {
  .blog-section {
    padding: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>