import VueRouter from "vue-router"
import store from "@/store";

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Content',
            component: () => import('@/components/Content'),
            children: [
                {
                    path: 'login',
                    name: 'Login',
                    component: () => import('@/pages/Login')
                },
                {
                    path: '/register',
                    name: 'Register',
                    component: () => import('@/pages/Register')
                },
            ]
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('@/pages/About')
        },

        {
            path: '/404',
            name: 'NotFound',
            component: () => import('@/pages/404')
        }
    ],
    mode: 'history'
})

// //动态路由
// export const setRoutes = () => {
//     //进行判断。如果有重复名字的路由就不再进行添加
//     const currentRouteName = router.getRoutes().map(v => v.name)
//     if(currentRouteName.includes('Manage')){
//         return
//     }
//     //获取menus
//     if(!localStorage.getItem('user')){
//         //如果没有登录直接返回
//         return
//     }
//     const menus = JSON.parse(localStorage.getItem('user')).menus
//     const activeRoutes = {
//         //固定部分
//         path: '/',
//         name: 'Manage',
//         component: () => import(`@/components/Manage.vue`),
//         redirect: '/home',
//         //动态部分
//         children: []
//
//     }
//     //如果不为空，直接遍历生成路由。路径要去除斜杠，组件导入pages文件夹中已有的组件
//     if (menus) {
//         for (const menu of menus) {
//             if(menu.children.length){
//                 menu.children.forEach(child=>{
//                     activeRoutes.children.push({
//                         path: child.path.replace('/',''),        //menu.path.substr(1),
//                         name: child.component,
//                         component: () => import(`@/pages/${child.component}`),
//                         meta: {pathName: child.name}
//                     })
//                 })
//             }else{
//                 activeRoutes.children.push({
//                     path: menu.path.replace('/', ''),        //menu.path.substr(1),
//                     name: menu.component,
//                     component: () => import(`@/pages/${menu.component}`),
//                     meta: {pathName: menu.name}
//                 })
//             }
//         }
//     }
//     //添加动态路由
//     router.addRoute(activeRoutes)
// }
//
// setRoutes()
//
// router.beforeEach((to, from, next) => {
//     if(to.path === from.path){
//         console.log("!")
//         next(false)
//     }
//     store.state.currentPath = to.meta.pathName
//     if(!to.matched.length){
//         const storeUser = localStorage.getItem('user')
//         //未找到路由
//         if(storeUser){
//             next('/404')
//         }else{
//             next('/login')
//         }
//     }
//     next()
// })

export default router