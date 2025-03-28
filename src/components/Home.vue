<template>
  <section class="home-section">
    <div class="hero">
      <h1 class="hero-title">Bienvenido a mi web</h1>
      <img src="../assets/avatar.png" alt="Perfil" class="hero-avatar" />
      <h2 class='hero-name'>Soy Nestor Jesus Ramirez Reyes</h2>
      <p class="hero-subtitle">Científico de Datos | Ingeniero de Software | Contador</p>
      <p class="hero-description">Combinando análisis de datos, desarrollo de software y experiencia financiera para crear soluciones innovadoras.</p>
    </div>

    <div class="expertise-grid">
      <div class="expertise-card">
        <h3>Ciencia de Datos</h3>
        <p>Transformando datos en insights accionables mediante machine learning y análisis estadístico.</p>
      </div>
      <div class="expertise-card">
        <h3>Desarrollo de Software</h3>
        <p>Creando aplicaciones web modernas y escalables con las últimas tecnologías.</p>
      </div>
      <div class="expertise-card">
        <h3>Contabilidad</h3>
        <p>Proporcionando asesoramiento financiero y contable preciso para la toma de decisiones.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home-section {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 4rem;
}

.hero {
  text-align: center;
  padding: 4rem 0;
}

.hero-title {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.hero-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 1rem auto;
  display: block;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #42b883;
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.2rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.expertise-card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.expertise-card:hover {
  transform: translateY(-5px);
}

.expertise-card h3 {
  color: #42b883;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.expertise-card p {
  color: #64748b;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .home-section {
    padding: 1rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-description {
    font-size: 1rem;
  }
}
</style>