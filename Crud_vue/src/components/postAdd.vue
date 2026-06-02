<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import router from '@/router';

// Declaramos el objeto reactivo del formulario en inglés
const form = reactive({    
  title: '',    
  description: ''
});

// Función para procesar el envío del formulario
const envioFormulario = async () => {    
  const newPost = {        
    title: form.title,        
    description: form.title    
  };    

  try {        
    await axios.post('http://localhost:8080/posts', newPost);        
    return router.push('/posts'); // Redirecciona a la lista de posts tras guardar
  } catch (error) {        
    console.error("Error al enviar la publicación:", error);    
  }
};
</script>

<template>    
  <div class="central-contenedor">        
    <RouterLink to="/posts" class="btn btn-green">Volver a Mensajes</RouterLink>    
    <br /><br />

    <form @submit.prevent="envioFormulario">            
      <label for="title">Título</label>            
      <input             
        v-model="form.title"             
        type="text"             
        id="title"             
        name="title"             
        placeholder="Buscar título aquí..."
      />            
      
      <label for="description">Descripción</label>            
      <textarea             
        v-model="form.description"             
        id="description"             
        name="description"
        placeholder="descripción mostrada aquí..."
      ></textarea>            
      
      <button type="submit" class="btn btn-green">Enviar</button>        
    </form>    
  </div>
</template>

<style scoped></style>