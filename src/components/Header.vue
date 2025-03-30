<template>
  <header class="header">
    <nav class="nav-container">
      <router-link to="/" class="container-logo">
        <img src="../assets/iconjatech.png" alt="Perfil" class="hero-icon" />
        <div class="logo">Jatech</div>
      </router-link>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Inicio</router-link>
        <router-link to="/portfolio" class="nav-link">Portafolio</router-link>
        <router-link to="/blog" class="nav-link">Blog</router-link>
        <router-link to="/contacto" class="nav-link">Contacto</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.container-logo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.hero-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: auto 1.5rem;
  display: block;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #42b883;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    gap: 1rem;
  }
}
</style>
