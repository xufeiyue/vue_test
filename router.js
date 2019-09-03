import Vue from 'vue'
import Router from 'vue-router'
import login from './components/login.vue'
import register from './components/register.vue'
import forget_pw from './components/forget_pw.vue'
Vue.use(Router)

const Routers =  new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: () => import(/* webpackChunkName: "about" */ './views/index.vue')
    },
    {
      path: '/',
      name: 'index1',
      component: () => import(/* webpackChunkName: "about" */ './views/index1.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/card_management',
      name: 'card_management',
      component: () => import(/* webpackChunkName: "about" */ './views/card_management.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './components/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './components/register.vue')
    },
    {
      path: '/forget_pw',
      name: 'forget_pw',
      component: () => import(/* webpackChunkName: "about" */ './components/forget_pw.vue')
    },
    {
      path: '/share_code',
      name: 'share_code',
      component: () => import(/* webpackChunkName: "about" */ './views/share_code.vue')
    },
    {
      path: '/share_code1',
      name: 'share_code1',
      component: () => import(/* webpackChunkName: "about" */ './views/share_code1.vue')
    },
    {
      path: '/credits_exchange',
      name: 'credits_exchange',
      component: () => import(/* webpackChunkName: "about" */ './views/credits_exchange.vue')
    },
    {
      path: '/exchange_center',
      name: 'exchange_center',
      component: () => import(/* webpackChunkName: "about" */ './views/exchange_center.vue')
    },
    {
      path: '/exchange_details',
      name: 'exchange_details',
      component: () => import(/* webpackChunkName: "about" */ './views/exchange_details.vue')
    },
    {
      path: '/reimbursement_means',
      name: 'reimbursement_means',
      component: () => import(/* webpackChunkName: "about" */ './views/reimbursement_means.vue')
    },
    {
      path: '/z_card_list',
      name: 'z_card_list',
      component: () => import(/* webpackChunkName: "about" */ './views/z_card_list.vue')
    },
    {
      path: '/binding_card',
      name: 'binding_card',
      component: () => import(/* webpackChunkName: "about" */ './views/binding_card.vue')
    },
    {
      path: '/y_card_list',
      name: 'y_card_list',
      component: () => import(/* webpackChunkName: "about" */ './views/y_card_list.vue')
    },
    {
      path: '/reservation_list',
      name: 'reservation_list',
      component: () => import(/* webpackChunkName: "about" */ './views/reservation_list.vue')
    },
    {
      path: '/reservation_list_details',
      name: 'reservation_list_details',
      component: () => import(/* webpackChunkName: "about" */ './views/reservation_list_details.vue')
    },
    {
      path: '/reservation_payment',
      name: 'reservation_payment',
      component: () => import(/* webpackChunkName: "about" */ './views/reservation_payment.vue')
    },
    {
      path: '/plan_details',
      name: 'plan_details',
      component: () => import(/* webpackChunkName: "about" */ './views/plan_details.vue')
    },
    {
      path: '/sk_card_management',
      name: 'sk_card_management',
      component: () => import(/* webpackChunkName: "about" */ './views/sk_card_management.vue')
    },
    {
      path: '/sk',
      name: 'sk',
      component: () => import(/* webpackChunkName: "about" */ './views/sk.vue')
    },
    {
      path: '/sk_channel_status',
      name: 'sk_channel_status',
      component: () => import(/* webpackChunkName: "about" */ './views/sk_channel_status.vue')
    },
    {
      path: '/sk_record',
      name: 'sk_record',
      component: () => import(/* webpackChunkName: "about" */ './views/sk_record.vue')
    },
    {
      path: '/sign_in',
      name: 'sign_in',
      component: () => import(/* webpackChunkName: "about" */ './views/sign_in.vue')
    },
    {
      path: '/sign_in_1',
      name: 'sign_in_1',
      component: () => import(/* webpackChunkName: "about" */ './views/sign_in_1.vue')
    },
    {
      path: '/task',
      name: 'task',
      component: () => import(/* webpackChunkName: "about" */ './views/task.vue')
    },
    {
      path: '/user/user_index',
      name: 'user_index',
      component: () => import(/* webpackChunkName: "about" */ './views/user/user_index.vue')
    },
    {
      path: '/user/upload_head_pic',
      name: 'upload_head_pic',
      component: () => import(/* webpackChunkName: "about" */ './views/user/upload_head_pic.vue')
    },
    {
      path: '/user/data_authentication',
      name: 'data_authentication',
      component: () => import(/* webpackChunkName: "about" */ './views/user/data_authentication.vue')
    },
    {
      path: '/user/invite_friend',
      name: 'invite_friend',
      component: () => import(/* webpackChunkName: "about" */ './views/user/invite_friend.vue')
    }
  ]
});
Routers.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');

    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});
export default Routers

