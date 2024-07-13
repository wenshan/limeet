export default {
  routes: [
    { path: "/",
      name: 'home',
      component: 'home/index'
    },
    {
      name: 'home',
      path: '/index.html',
      component: 'home/index'
    },
    {
      name: 'product',
      path: '/product.html',
      component: 'product/index'
    },
    {
      name: 'detail',
      path: '/detail.html',
      component: 'detail/index'
    },
    {
      name: 'about',
      path: '/about.html',
      component: 'about/index'
    }
  ],
};
