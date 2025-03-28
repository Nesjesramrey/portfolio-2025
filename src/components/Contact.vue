<template>
  <section class="contact-section">
    <h2 class="section-title">Contacto</h2>
    <div class="contact-container">
      <div class="contact-info">
        <h3>¡Hablemos!</h3>
        <p>¿Tienes un proyecto en mente? ¿Necesitas ayuda con análisis de datos, desarrollo de software o consultoría contable? No dudes en contactarme.</p>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/nestor-jesus-ramirez-reyes/" class="social-link">LinkedIn</a>
          <a href="https://github.com/Nesjesramrey" class="social-link">GitHub</a>
          <a href="https://twitter.com/nesramblue" class="social-link">Twitter</a>
        </div>
      </div>
      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Nombre</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            required
            placeholder="Tu nombre"
            :disabled="loading"
          >
        </div>
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            required
            placeholder="tu@email.com"
            :disabled="loading"
          >
        </div>
        <div class="form-group">
          <label for="subject">Asunto</label>
          <input
            type="text"
            id="subject"
            v-model="formData.subject"
            required
            placeholder="Asunto de tu mensaje"
            :disabled="loading"
          >
        </div>
        <div class="form-group">
          <label for="message">Mensaje</label>
          <textarea
            id="message"
            v-model="formData.message"
            required
            placeholder="Tu mensaje"
            rows="5"
            :disabled="loading"
          ></textarea>
        </div>
        <div v-if="submitStatus === 'success'" class="status-message success">
          ¡Mensaje enviado con éxito! Gracias por contactarme.
        </div>
        <div v-if="submitStatus === 'error'" class="status-message error">
          {{ errorMessage }}
        </div>
        <button type="submit" class="submit-button" :disabled="loading">
          <span v-if="!loading">Enviar Mensaje</span>
          <span v-else>Enviando...</span>
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'Contact',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      loading: false,
      submitStatus: null,
      errorMessage: ''
    }
  },
  methods: {
    async handleSubmit() {
      this.loading = true;
      this.submitStatus = null;
      this.errorMessage = '';

      try {
        const templateParams = {
          from_name: this.formData.name,
          from_email: this.formData.email,
          subject: this.formData.subject,
          message: this.formData.message,
          to_name: 'Nestor' // Tu nombre como destinatario
        };

        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        this.submitStatus = 'success';
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
      } catch (error) {
        console.error('Error al enviar el correo:', error);
        this.submitStatus = 'error';
        this.errorMessage = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>
.contact-section {
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

.contact-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.contact-info {
  padding-right: 2rem;
}

.contact-info h3 {
  color: #42b883;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.contact-info p {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: #2c3e50;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #42b883;
  color: white;
  border-color: #42b883;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  color: #2c3e50;
  font-weight: 500;
}

input,
textarea {
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #42b883;
}

.submit-button {
  background: #42b883;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background: #3aa876;
}

.submit-button:disabled {
  background: #a8a8a8;
  cursor: not-allowed;
}

.status-message {
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  text-align: center;
}

.status-message.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.status-message.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }

  .contact-info {
    padding-right: 0;
    padding-bottom: 2rem;
    border-bottom: 1px solid #e2e8f0;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>