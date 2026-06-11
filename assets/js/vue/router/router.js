import { createWebHistory, createMemoryHistory, createRouter } from 'vue-router'

import LandingContent from "@jsDist/vue/pages/public/view/LandingContent";
import Login from "@jsDist/vue/pages/public/view/Login";
import Register from "@jsDist/vue/pages/public/view/Register";
import About from "@jsDist/vue/pages/public/view/About";

import Global from "@jsDist/services/globals";

const routes = [
  { path: '/',
    component: LandingContent,
    name: 'home',
    meta: {
      title: 'Добро пожаловать',
      metaTags: [
        {
          name: 'description',
          content: 'Добро пожаловать на наш сайт'
        },
        {
          property: 'og:description',
          content: 'Добро пожаловать на наш сайт'
        }
      ]
    },
  },
  { path: '/login', component: Login, name: 'app_login',
    meta: {
      title: 'Авторизация',
      metaTags: [
        {
          name: 'description',
          content: 'Страница авторизации пользователей на сайте'
        },
        {
          property: 'og:description',
          content: 'Страница авторизации пользователей на сайте'
        }
      ]
    },
  },
  { path: '/register', component: Register, name: 'app_register',
    meta: {
      title: 'Регистрация',
      metaTags: [
        {
          name: 'description',
          content: 'Страница регистрации пользователей на сайте'
        },
        {
          property: 'og:description',
          content: 'Страница регистрации пользователей на сайте'
        }
      ]
    },
  },
    { path: '/page/about', component: About, name: 'app_about',
        meta: {
            title: 'О нас',
            metaTags: [
                {
                    name: 'description',
                    content: 'Страница с информацией о нашем сайте'
                },
                {
                    property: 'og:description',
                    content: 'Страница с информацией о нашем сайте'
                }
            ]
        },
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  window.pageName = to.name;
  document.querySelector('meta[name="description"]').content = to.meta.metaTags[0].content
  next()
})

export default router
