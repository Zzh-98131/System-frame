import Cookies from 'js-cookie'

const admin_menu = [
  {
    title: '监控管理',
    icon: 'monitor',
    children: [
      {
        title: '总览',
      },
      {
        title: '站点列表'
      },
      {
        title: '站点详情'
      },
      {
        title: '设备列表'
      },
      {
        title: '设备详情'
      },
      {
        title: '物联网卡'
      },
      {
        title: '统计分析',
        children: [
          {
            title: '运行数据'
          },
          {
            title: '告警统计'
          },
          {
            title: '站点发电量报表'
          },
          {
            title: '设备发电量报表'
          },
          {
            title: '流量统计'
          }
        ]
      }
    ]
  },
  {
    title: '运维管理',
    icon: 'manage',
    children: [
      {
        title: '用户管理',
        children: [
          {
            title: '终端用户'
          },
          {
            title: '后台用户'
          },
          {
            title: '系统角色'
          }
        ]
      },
      {
        title: '站点管理'
      },
      {
        title: '设备管理'
      },
      {
        title: '设备序列号管理'
      },
      {
        title: '设备软件管理',
        children: [
          {
            title: '固件管理'
          },
          {
            title: '任务管理'
          },
          {
            title: '设备调试'
          }
        ]
      },
      {
        title: '物联网卡管理'
      },
      {
        title: '告警管理'
      }
    ]
  },
  {
    title: '系统管理',
    icon: 'setting',
    children: [
      {
        title: '操作日志'
      },
      {
        title: 'APP管理'
      },
      {
        title: '多语言管理'
      }
    ]
  }
]

const east_menu = [
  {
    title: '监控管理',
    icon: 'monitor',
    children: [
      {
        title: '总览',
      },
      {
        title: '站点列表'
      },
      {
        title: '设备列表'
      },
      {
        title: '设备详情'
      },
      {
        title: '物联网卡'
      }
    ]
  },
  {
    title: '运维管理',
    icon: 'manage',
    children: [
      {
        title: '用户管理',
        children: [
          {
            title: '终端用户'
          }
        ]
      },
      {
        title: '站点管理'
      },
      {
        title: '设备管理'
      },
      {
        title: '设备序列号管理'
      },
      {
        title: '设备软件管理',
        children: [
          {
            title: '固件管理'
          },
          {
            title: '任务管理'
          }
        ]
      },
      {
        title: '物联网卡管理'
      },
      {
        title: '告警管理'
      }
    ]
  },
  {
    title: '系统管理',
    icon: 'setting',
    children: [
      {
        title: '操作日志'
      }
    ]
  }
]

const idbk_menu = [
  {
    title: '监控管理',
    icon: 'monitor',
    children: [
      {
        title: '总览',
      },
      {
        title: '站点列表'
      },
      {
        title: '统计分析',
        children: [
          {
            title: '运行数据'
          },
          {
            title: '告警统计'
          },
          {
            title: '流量统计'
          }
        ]
      }
    ]
  },
  {
    title: '运维管理',
    icon: 'manage',
    children: [
      {
        title: '用户管理',
        children: [
          {
            title: '终端用户'
          },
          {
            title: '后台用户'
          },
          {
            title: '系统角色'
          }
        ]
      },
      {
        title: '站点管理'
      },
      {
        title: '物联网卡管理'
      },
      {
        title: '告警管理'
      }
    ]
  },
  {
    title: '系统管理',
    icon: 'setting',
    children: [
      {
        title: '操作日志'
      },
      {
        title: 'APP管理'
      },
      {
        title: '多语言管理'
      }
    ]
  }
]

var this_user = Cookies.get('user_name')
var menu = null
switch (this_user) {
  case 'east':
    menu = east_menu
    break
  case 'idbk':
    menu = idbk_menu
    break
  case 'admin':
    menu = admin_menu
    break
  default:
    break
}

export default menu
