/**
 * 路由集中整理，这里的只是显示在Layout组件里面的路由，通过登录、权限动态生成路由
 */

import PurchaseList from '@pages/purchaseList/PurchaseList'
import UserList from '@pages/user/UserList'
import UserDetail from '@pages/userDetail/UserDetail'
import Home from '@pages/home/Home'
import NoPermissions from '@pages/error/NoPermissions'
import Usual from '@pages/learnTest/Usual'
import Magnifier from '@pages/component/magnifier/Magnifier'

/**
 * 获取组件
 * @param {String} file 文件路径
 */
// const _import_ = file => () => import(`@pages/${file}`);

/**
 * path-访问的路径
 * name-名称
 * component-应用的组件
 * auth-能访问该路由的权限（没有就证明没有权限限制）
 * 注：下面的组件只有首页可以直接访问，其他全都要登录才能访问，管理员和购买者详情分别要admin和user的权限才能访问
 */
const RouterMap = [
  { path: '/purchaseList', name: '购买记录', component: PurchaseList, needLogin: true },
  { path: '/user', name: '管理员', component: UserList, needLogin: true, auth: ['admin'] },
  { path: '/userDetail/:id', name: '购买者详情', component: UserDetail, needLogin: true, auth: ['user'] },
  { path: '/noPermissions', name: '403未拥有权限页', component: NoPermissions, needLogin: true },
  { path: '/learn', name: '学习测试', component: Usual, needLogin: true, auth: ['admin'] },
  { path: '/component', name: '组件案例', component: Magnifier, redirect: '/component/magnifier' },
  { path: '/component/magnifier', name: '组件案例', component: Magnifier, needLogin: true, auth: ['admin'] },
  { path: '/', name: '首页', component: Home, needLogin: true }
]

export default RouterMap
