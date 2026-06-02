<script setup>
import { onMounted, reactive } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
// Importamos el componente de la fila
import Post from '@/components/post.vue';

const state = reactive({
  posts: []
});

onMounted(async () => {  
  try {    
    const response = await axios.get('http://localhost:8080/posts');    
    state.posts = response.data.posts || response.data;  
  } catch (error) {    
    console.error('Error al buscar publicaciones:', error);  
  }
});
</script>

<template>    
  <div class="central-contenedor">    
    <h1>Todos los mensajes</h1>    
    <RouterLink to="/" class="btn btn-blue">Ir a Inicio</RouterLink>
    <RouterLink to="/posts/add" class="btn btn-green">Añadir entrada</RouterLink>  
    <br />   
    <br />    
    <table id="posts">        
      <tr>            
        <th>S.N</th>            
        <th>Título</th>            
        <th>Acción</th>        
      </tr>        
      <Post v-for = "post in state.posts":key="post.id" :post="post" />    
    </table>  
  </div>
</template>