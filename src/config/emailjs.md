# Configuración de EmailJS para el Formulario de Contacto

Para hacer funcional el formulario de contacto, necesitas seguir estos pasos para configurar EmailJS:

1. Crear una cuenta en EmailJS:
   - Ve a [https://www.emailjs.com](https://www.emailjs.com)
   - Regístrate para obtener una cuenta gratuita

2. Crear un Servicio de Email:
   - En el dashboard de EmailJS, ve a "Email Services"
   - Haz clic en "Add New Service"
   - Selecciona tu proveedor de email (Gmail, Outlook, etc.)
   - Sigue las instrucciones para conectar tu cuenta de email
   - Guarda el Service ID

3. Crear una Plantilla de Email:
   - Ve a "Email Templates"
   - Haz clic en "Create New Template"
   - Diseña tu plantilla usando las siguientes variables:
     - {{from_name}} - Nombre del remitente
     - {{from_email}} - Email del remitente
     - {{subject}} - Asunto del mensaje
     - {{message}} - Contenido del mensaje
     - {{to_name}} - Tu nombre como destinatario
   - Guarda el Template ID

4. Obtener tu Public Key:
   - Ve a "Account" > "API Keys"
   - Copia tu Public Key

5. Actualizar el componente Contact.vue:
   - Reemplaza 'YOUR_SERVICE_ID' con tu Service ID
   - Reemplaza 'YOUR_TEMPLATE_ID' con tu Template ID
   - Reemplaza 'YOUR_PUBLIC_KEY' con tu Public Key

Ejemplo de configuración en Contact.vue:
```javascript
await emailjs.send(
  'service_xxxxxxx', // Tu Service ID
  'template_xxxxxxx', // Tu Template ID
  templateParams,
  'public_key_xxxxxxxxxxxxxxx' // Tu Public Key
);
```

Nota: La cuenta gratuita de EmailJS permite enviar hasta 200 emails por mes.