import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/layout.vue'

Vue.use(Router)


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/components/login/login.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/components/views/index/index.vue')
      }
    ],
  },
  // 监控管理
  {
    path: '/monitor',
    component: Layout,
    redirect: '/monitor/station/list', // 当路由url只有/monitor时，路由重定向到url：/monitor/station/list，不全的url都需要重定向
    children: [
      // 站点列表
      {
        path: 'station/list',
        name: 'station_list',
        component: () => import('@/components/views/monitor/station/station_list.vue')
      },
      // 站点详情
      {
        path: 'station/detail',
        name: 'station_detail',
        component: () => import('@/components/views/monitor/station/station_detail.vue')
      },

      // 设备列表
      {
        path: 'device/list',
        name: 'device_list',
        component: () => import('@/components/views/monitor/device/device_list.vue')
      },
      // 设备详情
      {
        path: 'device/detail',
        name: 'device_detail',
        component: () => import('@/components/views/monitor/device/device_detail.vue')
      },

      // 物联网卡
      {
        path: 'streamcard/list',
        name: 'stream_card_list',
        component: () => import('@/components/views/monitor/stream_card/stream_card_list.vue')
      },

      // 运行数据
      {
        path: '/report/deviceReport', // path头部加 / 表示路径前不接上父级path
        name: 'device_report',
        component: () => import('@/components/views/monitor/analysis/report/device_report.vue')
      },

      // 告警统计
      {
        path: '/report/alertReport',
        name: 'alert_report',
        component: () => import('@/components/views/monitor/analysis/report/alert_report.vue')
      },

      // 站点发电量报表
      {
        path: '/energy/statistics',
        name: 'station_statistics',
        component: () => import('@/components/views/monitor/analysis/energy/station_statistics.vue')
      },

      // 设备发电量报表
      {
        path: '/manufacture/report/device/energy',
        name: 'device_statistics',
        component: () => import('@/components/views/monitor/analysis/energy/device_statistics.vue')
      },

      // 流量统计
      {
        path: '/manufacture/report/simcard/flow',
        name: 'traffic_statistics',
        component: () => import('@/components/views/monitor/analysis/energy/traffic_statistics.vue')
      }
    ]
  },
  // 运维管理
  {
    path: '/maintenance',
    name: 'maintenance',
    component: Layout,
    redirect: '/maintenance/stationManager',
    children: [
      // 终端用户
      {
        path: '/user/userowner',
        name: 'end_user',
        component: () => import('@/components/views/maintenance/user/end_user.vue')
      },

      // 后台用户
      {
        path: '/user/useradminManager',
        name: 'background_user',
        component: () => import('@/components/views/maintenance/user/background_user.vue')
      },

      // 系统角色
      {
        path: '/user/roleManager',
        name: 'role_user',
        component: () => import('@/components/views/maintenance/user/role_user.vue')
      },

      // 站点管理
      {
        path: 'stationManager',
        name: 'station_manager',
        component: () => import('@/components/views/maintenance/station_manager.vue')
      },

      // 设备管理
      {
        path: 'deviceManager',
        name: 'device_manager',
        component: () => import('@/components/views/maintenance/device/device_manager.vue')
      },

      // 设备序列号管理
      {
        path: '/produceMng/batchList',
        name: 'device_serial_manager',
        component: () => import('@/components/views/maintenance/device/device_serial_manager.vue')
      },

      // 固件管理
      {
        path: '/firmware/firmwareList',
        name: 'firmware_manager',
        component: () => import('@/components/views/maintenance/device/software/firmware_manager.vue')
      },

      // 任务管理
      {
        path: '/firmware/taskList',
        name: 'task_manager',
        component: () => import('@/components/views/maintenance/device/software/task_manager.vue')
      },

      // 设备调试
      {
        path: 'soft/debug',
        name: 'debug_manager',
        component: () => import('@/components/views/maintenance/device/software/debug_manager.vue')
      },

      // 物联网卡管理
      {
        path: 'simCard/list',
        name: 'sim_card_manager',
        component: () => import('@/components/views/maintenance/sim_card_manager.vue')
      },

      // 告警管理
      {
        path: 'alertManager',
        name: 'alert_manager',
        component: () => import('@/components/views/maintenance/alert_manager.vue')
      }
    ]
  },
  {
    path: '/sys',
    name: 'system',
    component: Layout,
    redirect: '/sys/log',
    children: [
      // 操作日志
      {
        path: 'log',
        name: 'log_sys',
        component: () => import('@/components/views/system/log_sys.vue')
      },

      // APP管理
      {
        path: 'app',
        name: 'app_sys',
        component: () => import('@/components/views/system/app_sys.vue')
      },

      // 多语言管理
      {
        path: '/super/i18nManager',
        name: 'i18n_sys',
        component: () => import('@/components/views/system/i18n_sys.vue')
      }
    ]
  },
  {
    path: '/test',
    component: Layout,
    children: [
      {
        path: '/test',
        name: 'test',
        component: () => import('@/components/views/test/test.vue')
      }
    ]
  }
]

const createRouter = () => new Router({
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
