import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Team from '../views/team.vue'
import Project from '../views/Project.vue'
import About from '../views/About.vue'
import AI from '../views/AI.vue'
import JSP from '../views/JSP.vue'
import CMS from '../views/CMS.vue'
import Portfolio from '../views/Portfolio.vue'
import nike from '../views/nike.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
   },
   {
     path: '/about',
     name: 'About',
     component: About
   },
   {
    path: '/AI',
    name: 'AI',
    component: AI
  },
  {
   path: '/JSP',
   name: 'JSP',
   component: JSP
 },
 {
  path: '/CMS',
  name: 'CMS',
  component: CMS
},
{
 path: '/Portfolio',
 name: 'Portfolio',
 component: Portfolio
},{
  path: '/nike',
  name: 'nike',
  component: nike
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
