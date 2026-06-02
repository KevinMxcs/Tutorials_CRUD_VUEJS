<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute();
const postId = route.params.id;

const state = reactive({    
  post: { title: '', description: '' }
});

onMounted(async () => {    
  try {        
    const response = await axios.get(`http://localhost:8080/posts/${postId}`);        
    state.post = response.data.post || response.data;    
  } catch (error) {        
    console.log("Error mientras se obtiene: ", error);    
  }
});
</script>

<template>    
  <div class="central-contenedor">        
    <h1>{{ state.post.title }}</h1>        
    <p>{{ state.post.description }}</p>        
    <RouterLink to="/posts" class="btn btn-green">ver Mensajes</RouterLink>    
  </div>
</template>