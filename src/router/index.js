import Vue from 'vue'
import Router from 'vue-router'

// import home from '../components/home'
// import project from '../components/project'
// import article from '../components/article'
// import person from '../components/person'
// import contact from '../components/contact'

const home = () => import('../components/home')
const project = () => import('../components/project')
const person = () => import('../components/person')
const contact = () => import('../components/contact')
const article = () => import('../components/article')


Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/person',
      name: 'person',
      component: person
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
    //     {
    //   path: '/project',
    //   name: 'project',
    //   component: project
    // },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/*',
      redirect: '/home'
    }
  ]
})
