import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Test = ()=>import('../components/Test.vue');
const Test2 = ()=>import('../components/Test2.vue');

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/test2',  component: Test2 },
      { path: '/*', component: Test },
    ]
  })
}
