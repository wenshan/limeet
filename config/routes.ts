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
      path: '/product',
      routes: [
        {
          name: 'product-list',
          path: '/product/list.html',
          component: './productList/index'
        }
      ],
    },
    {
      name: 'detail',
      path: '/detail.html',
      component: 'detail/index'
    },
    {
      name: 'brand',
      path: '/brand.html',
      component: 'brand/index'
    },
    {
      name: 'about',
      path: '/about.html',
      component: 'about/index'
    },
    {
      name: 'demo',
      path: '/demo.html',
      component: 'demo/index'
    }
  ],
};
