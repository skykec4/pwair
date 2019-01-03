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
    path: "/SignIn",
    component: () => import("../components/FirebaseSignIn.vue")
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
      },
      {
        path: "firebase",
        component: () => import("../components/FirebaseMenu.vue"),
        children: [
          {
            path: "inputUser",
            component: () => import("../components/FirebaseInputUserId.vue")
          },
          {
            path: "getData",
            component: () => import("../components/FirebaseGetdata.vue")
          }
        ]
      },
      {
        path: "Sample",
        component: () => import("../views/SamplePage.vue"),
        children: [
          {
            path: "DragAndDrop",
            component: () => import("../components/DragAndDropSample.vue")
          },
          {
            path: "Card",
            component: () => import("../components/CardSmaple.vue")
          }
        ]
      }
    ]
  }
];
