import { createRouter, createWebHistory } from "vue-router";

import Dashboard from './components/Pages/Dashboard.vue';
import Tarefas from './components/Pages/Tarefas.vue';
import Objetivos from './components/Pages/Objetivos.vue';
import Streaks from './components/Pages/Streaks.vue';
import Anotacoes from './components/Pages/Anotacoes.vue';
import Gratidao from './components/Pages/Gratidao.vue';
import Configuracoes from './components/Pages/Configuracoes.vue';

const routes = [
{
    path: "/",
    name: "dashboard",
    component: Dashboard
},
{
    path: "/tarefas",
    name: "tarefas",
    component: Tarefas
},
{
    path: "/objetivos",
    name: "objetivos",
    component: Objetivos
},
{
    path: "/streaks",
    name: "streaks",
    component: Streaks
},
{
    path: "/anotacoes",
    name: "anotacoes",
    component: Anotacoes
},
{
    path: "/gratidao",
    name: "gratidao",
    component: Gratidao
},
{
    path: "/configuracoes",
    name: "configuracoes",
    component: Configuracoes
},
]

const router = createRouter({ history: createWebHistory(), routes: routes })

export default router;