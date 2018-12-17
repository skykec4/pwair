export default [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: () => import("../views/LoginPage.vue")
  },
  {
    path: "/main",
    component: () => import("../views/MainPage.vue"),
    children: [
      {
        path: "MainProduct",
        component: () => import("../components/MainProduct.vue")
      },
      {
        path: "SubProduct",
        component: () => import("../components/MainSubProduct.vue")
      },
      {
        path: "news",
        component: () => import("../components/MainNews.vue")
      }
    ]
  }
];
