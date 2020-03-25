import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginView from '@/views/LoginView'
import FileCenterView from '@/views/FileCenterView'
import PersonView from '@/views/PersonView'
import FileCenterEditView from '@/views/FileCenterEditView'
import FileCenterShowView from '@/views/FileCenterShowView'
import IndexView from '@/views/IndexView'
import Layout from "@//components/common/Layout";
import Bootstrap from "@/components/common/Bootstrap";
import Simple from "@/components/common/Simple";

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
        name: 'IndexView',
        component: IndexView,
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
      },
      {
        path: "/layout",
        name: "Layout",
        component: Layout
      },
      {
        path: "/bootstrap",
        name: "Bootstrap",
        component: Bootstrap
      },
      {
        path: "/simple",
        name: "Simple",
        component: Simple
      }
    ]
})
