<template>
  <section class="portfolio-section">
    <h2 class="section-title">Mi Portafolio</h2>
    <div class="skills-container">
      <div class="skill-category">
        <h3>Ciencia de Datos</h3>
        <ul class="skill-list">
          <li>Análisis de datos</li>
          <li>Machine Learning</li>
          <li>Estadística</li>
          <li>Python y R</li>
        </ul>
      </div>
      <div class="skill-category">
        <h3>Desarrollo de Software</h3>
        <ul class="skill-list">
          <li>Desarrollo Web Full Stack</li>
          <li>Vue.js / React</li>
          <li>Node.js</li>
          <li>APIs RESTful</li>
        </ul>
      </div>
      <div class="skill-category">
        <h3>Contabilidad</h3>
        <ul class="skill-list">
          <li>Contabilidad Financiera</li>
          <li>Análisis Financiero</li>
          <li>Gestión Fiscal</li>
          <li>Auditoría</li>
        </ul>
      </div>
    </div>
    
    <div class="projects-container">
      <h3 class="projects-title">Proyectos Destacados</h3>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <h4>{{ project.title }}</h4>
          <p>{{ project.description }}</p>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Análisis Predictivo de Ventas',
          description: 'Implementación de modelos de machine learning para predecir tendencias de ventas',
          tags: ['Python', 'Scikit-learn', 'Pandas']
        },
        {
          id: 2,
          title: 'Sistema de Gestión Contable',
          description: 'Desarrollo de plataforma web para gestión contable y financiera',
          tags: ['Vue.js', 'Node.js', 'MongoDB']
        },
        {
          id: 3,
          title: 'Dashboard Financiero',
          description: 'Visualización interactiva de datos financieros y KPIs',
          tags: ['D3.js', 'React', 'SQL']
        }
      ]
    }
  }
}
</script>

<style scoped>
.portfolio-section {
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

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.skill-category {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.skill-category h3 {
  color: #42b883;
  margin-bottom: 1rem;
}

.skill-list {
  list-style: none;
  padding: 0;
}

.skill-list li {
  margin: 0.5rem 0;
  color: #2c3e50;
}

.projects-container {
  margin-top: 3rem;
}

.projects-title {
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.project-card h4 {
  color: #42b883;
  margin-bottom: 0.5rem;
}

.project-tags {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #e5f9f2;
  color: #42b883;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .portfolio-section {
    padding: 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>