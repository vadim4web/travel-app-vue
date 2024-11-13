import { createRouter
  , createWebHistory
 } 
  from 'vue-router'
  
  // import { router } from 'vue-router'

// import AboutView from '@/views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
// import BrazilView from '@/views/BrazilView.vue'
// import HawaiiView from '@/views/HawaiiView.vue'
// import PanamaView from '@/views/PanamaView.vue'
// import JamaicaView from '@/views/JamaicaView.vue'

// import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
  // },
  // {
  //   path: '/brazil',
  //   name: 'brazil',
  //   component: () => import(/* webpackChunkName: "brazil" */ "../views/BrazilView.vue")
  // },
  // {
  //   path: '/hawaii',
  //   name: 'hawaii',
  //   component: () => import(/* webpackChunkName: "hawaii" */ "../views/HawaiiView.vue")
  // },
  // {
  //   path: '/panama',
  //   name: 'panama',
  //   component: () => import(/* webpackChunkName: "panama" */ "../views/PanamaView.vue")
  // },
  // {
  //   path: '/jamaica',
  //   name: 'jamaica',
  //   component: () => import(/* webpackChunkName: "jamaica" */ "../views/JamaicaView.vue")
  // },
  {
    // path: '/details/:id',
    path: '/details/:slug',
    name: 'DestinationDetails',
    component: () => import(/* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails.vue"),
    props: true,
    children: [
      {
        // path: "/details/:slug/:experienceSlug"
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component: () => 
          import(/* webpackChunk: "ExperienceDetails" */ "../views/ExperienceDetails.vue")
      }
    ]
  },
  // {
  //   path: '*',
  //   name: 'notFound',
  //   component: () => import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue")
  // }

  // { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
]

// router.resolve({
//   name: 'not-found',
//   params: { pathMatch: ['not', 'found'] },
// }).href // '/not/found'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // mode: "history",
  linkExactActiveClass: "vue-school-active-class",
  routes
})

export default router
