import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginView from '@/views/LoginView'
import FileCenterView from '@/views/FileCenterView'
import PersonView from '@/views/PersonView'
import FileCenterEditView from '@/views/FileCenterEditView'
import FileCenterShowView from '@/views/FileCenterShowView'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/login',
        name: 'LoginView',
        component: LoginView
      },
      {
        path: '/index',
        name: 'HelloWorld',
        component: HelloWorld,
        meta: {
          requireAuth: true
        },
        child: [
          {
            path: '/fileCenter',
            name: 'FileCenterView',
            component: FileCenterView,
            child: [
              {
                path: '/fileCenterEdit',
                name: 'FileCenterEditView',
                component: FileCenterEditView
              },
              {
                path: '/fileCenterShow',
                name: 'fileCenterShowView',
                component: FileCenterShowView
              }
            ]
          },
          {
            path: '/person',
            name: 'PersonView',
            component: PersonView,
          }
        ]
      }
    ]
})
