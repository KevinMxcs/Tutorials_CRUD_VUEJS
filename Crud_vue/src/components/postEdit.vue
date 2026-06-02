<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter, RouterLink } from 'vue-router';

const route = useRoute();
const router = useRouter();

const postId = route.params.id;

const form = reactive({
    title: '',
    description: ''
});

onMounted(async () => {
    try {
        const response = await axios.get(`http://localhost:8080/posts/${postId}`);
        const postData = response.data.post || response.data;
        
        form.title = postData.title;
        form.description = postData.description;
    } catch (error) {
        
        console.error("Error al llamar post:", error);
    }
});

const envioFormulario = async () => {
    const actualizarFormulario = {
        title: form.title,
        description: form.description
    };

    try {
        await axios.put(`http://localhost:8080/posts/${postId}`, actualizarFormulario);
        router.push(`/posts/${postId}`);
    } catch (error) {
        console.error("Error al actualizar post:", error);
    }
}
</script>

<template>
    <div class="central-contenedor">
        <RouterLink to="/posts" class="btn btn-green">Return to Posts</RouterLink>
        <br /><br />
        
        <form @submit.prevent="envioFormulario">
            <label for="title">Titulo</label>
            <input 
                v-model="form.title" 
                type="text" 
                id="title" 
                name="title" 
                placeholder="Title"
            />
            
            <label for="description">Descripción</label>
            <textarea 
                v-model="form.description" 
                id="description" 
                name="description"
            ></textarea>
            
            <button type="submit" class="btn btn-green">Submit</button>
        </form>
    </div>
</template>