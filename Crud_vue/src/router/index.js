import { createRouter, createWebHistory } from 'vue-router'; 
import home from '@/pages/home.vue';
import posts from '@/components/posts.vue';
import vistas from '@/components/postView.vue';
import editar from '@/components/postEdit.vue';
import añadir from '@/components/postAdd.vue';
const routes = [    
  { path: '/', name: 'home', component: home },    
  { path: '/posts', name: 'posts', component: posts },
  { path: '/posts/:id', name: 'post-view', component: vistas },
  { path: '/posts/:id/edit', name: 'post-edit', component: editar },
  { path: '/posts/add', name: 'post-add', component: añadir }
];

const router = createRouter({    
  history: createWebHistory(import.meta.env.BASE_URL),    
  routes
});

export default router;