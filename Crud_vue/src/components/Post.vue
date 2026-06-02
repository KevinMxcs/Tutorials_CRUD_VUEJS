<script setup>
import { useRouter, RouterLink } from 'vue-router';
import axios from 'axios';

const router = useRouter();

const props = defineProps({
  post: Object
});

const deletePost = async (id) => {  
  try {    
    const confirmar = window.confirm('¿Estás seguro de que deseas eliminar esta publicación?');
    if (confirmar) {
        await axios.delete(`http://localhost:8080/posts/${id}`);    
        // cierra la pagina
        router.push('/'); 
    }
  } catch (error) {    
    console.error('Error al eliminar la publicación:', error);  
  }
};
</script>

<template>    
  <tr>        
    <td>{{ post.id }}</td>        
    <td>{{ post.title }}</td>        
    <td>            
      <RouterLink :to="`/posts/${post.id}`" class="btn btn-green">O</RouterLink>            
      <RouterLink :to="`/posts/edit/${post.id}`" class="btn btn-blue">/</RouterLink>            
      <button @click="deletePost(post.id)" class="btn btn-red">X</button>        
    </td>    
  </tr>
</template>