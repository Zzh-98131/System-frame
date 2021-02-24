import Cookies from 'js-cookie'

const east_menu = [
  {
    id: 5395,
    menuText: '监控管理',
    menuIcon: 'glyphicon glyphicon-cloud',
    menuURL: null,
    order: 2,
    parentId: 0,
    perms: 'perms',
    items: [
      {
        id: 5398,
        items: [
          {
            id: 5448,
            items: null,
            menuIcon: "",
            menuText: "站点详情",
            menuType: 2,
            menuURL: "/station/monitor",
            order: 0,
            parentId: 5398,
            perms: "sys:stationmonitor:view",
            visible: true
          }
        ],
        menuIcon: "glyphicon",
        menuText: "总览",
        menuType: 2,
        menuURL: "/home",
        order: 1,
        parentId: 5395,
        perms: "perms"
      },
      {
        id: 5399,
        items: null,
        menuIcon: "icon",
        menuText: "站点列表",
        menuType: 2,
        menuURL: "/monitor/station/list",
        order: 2,
        parentId: 5395,
        perms: "perms",
        visible: true
      },
      {
        id: 5400,
        items: null,
        menuIcon: "icon",
        menuText: "站点详情",
        menuType: 2,
        menuURL: "/monitor/station/detail",
        order: 3,
        parentId: 5395,
        perms: "perms",
        visible: true
      },
      {
        id: 5401,
        items: null,
        menuIcon: "icon",
        menuText: "设备列表",
        menuType: 2,
        menuURL: "/monitor/device/list",
        order: 4,
        parentId: 5395,
        perms: "perms",
        visible: true
      },
      {
        id: 5402,
        items: [
          {
            id: 5476,
            items: null,
            menuIcon: "",
            menuText: "设备组态",
            menuType: 2,
            menuURL: "/monitor/device/diagram",
            order: 0,
            parentId: 5402,
            perms: "sys:stationmonitor:device:real:view",
            visible: true
          },
        ],
        menuIcon: "icon",
        menuText: "设备详情",
        menuType: 2,
        menuURL: "/monitor/device/detail",
        order: 5,
        parentId: 5395,
        perms: "perms",
        visible: true
      },
      {
        id: 5403,
        items: null,
        menuIcon: "icon",
        menuText: "物联网卡",
        menuType: 2,
        menuURL: "/monitor/streamcard/list",
        order: 6,
        parentId: 5395,
        perms: "perms",
        visible: true
      },
      {
        id: 5404,
        items: [
          {
            id: 5405,
            items: null,
            menuIcon: "icon",
            menuText: "运行数据",
            menuType: 2,
            menuURL: "/report/deviceReport",
            order: 2,
            parentId: 5404,
            perms: "sys:report:devices:view",
            visible: true
          },
          {
            id: 5406,
            items: null,
            menuIcon: "icon",
            menuText: "告警统计",
            menuType: 2,
            menuURL: "/report/alertReport",
            order: 3,
            parentId: 5404,
            perms: "sys:report:alert:view",
            visible: true
          },
          {
            id: 5407,
            items: null,
            menuIcon: "icon",
            menuText: "站点发电量报表",
            menuType: 2,
            menuURL: "/energy/statistics",
            order: 4,
            parentId: 5404,
            perms: "sys:report:energy:view",
            visible: true
          },
          {
            id: 5408,
            items: null,
            menuIcon: "icon",
            menuText: "设备发电量报表",
            menuType: 2,
            menuURL: "/manufacture/report/device/energy",
            order: 5,
            parentId: 5404,
            perms: "perms",
            visible: true
          },
          {
            id: 5602,
            items: null,
            menuIcon: "icon",
            menuText: "流量统计",
            menuType: 2,
            menuURL: "/manufacture/report/simcard/flow",
            order: 6,
            parentId: 5404,
            perms: "sys:manufacture:simcard:flow:log",
            visible: true
          }
        ],
        menuIcon: "glyphicon",
        menuText: "统计分析",
        menuType: 1,
        menuURL: null,
        order: 7,
        parentId: 5395,
        perms: "perms",
        visible: true
      }
    ]
  },
  {
    id: 5396,
    items: [
      {
        id: 5409,
        items: [
          {
            id: 5410,
            items: [
              {
                id: 5509,
                items: null,
                menuIcon: "",
                menuText: "用户详情界面",
                menuType: 2,
                menuURL: "/user/userOwnerDetail",
                order: 0,
                parentId: 5410,
                perms: "sys:userowner:detail:view",
                visible: true
              }
            ],
            menuIcon: "icon",
            menuText: "终端用户",
            menuType: 2,
            menuURL: "/user/userowner",
            order: 1,
            parentId: 5409,
            perms: "sys:userowner:view",
            visible: true
          },
          {
            id: 5411,
            items: [
              {
                id: 5593,
                items: null,
                menuIcon: "",
                menuText: "用户创建界面",
                menuType: 2,
                menuURL: "/user/createAdminUser",
                order: 0,
                parentId: 5411,
                perms: "sys:useradmin:add:view",
                visible: true
              },
              {
                id: 5594,
                items: null,
                menuIcon: "",
                menuText: "用户编辑界面",
                menuType: 2,
                menuURL: "/user/editAdminUser",
                order: 0,
                parentId: 5411,
                perms: "sys:useradmin:edit:view",
                visible: true
              }
            ],
            menuIcon: "icon",
            menuText: "后台用户",
            menuType: 2,
            menuURL: "/user/useradminManager",
            order: 2,
            parentId: 5409,
            perms: "sys:useradmin:view",
            visible: true
          },
          {
            id: 5412,
            items: null,
            menuIcon: "icon",
            menuText: "系统角色",
            menuType: 2,
            menuURL: "/user/roleManager",
            order: 3,
            parentId: 5409,
            perms: "sys:role:view",
            visible: true
          }
        ],
        menuIcon: "glyphicon",
        menuText: "用户管理",
        menuType: 1,
        menuURL: null,
        order: 1,
        parentId: 5396,
        perms: "perms",
        visible: true
      },
      {
        id: 5414,
        items: [
          {
            id: 5495,
            items: null,
            menuIcon: "",
            menuText: "设备绑定界面",
            menuType: 2,
            menuURL: "/maintenance/stationManager/deviceBinding",
            order: 0,
            parentId: 5414,
            perms: "sys:maintenance:station:device:view",
            visible: true
          },
          {
            id: 5494,
            items: null,
            menuIcon: "",
            menuText: "站点编辑界面",
            menuType: 2,
            menuURL: "/maintenance/stationModify",
            order: 0,
            parentId: 5414,
            perms: "sys:maintenance:station:modify:view",
            visible: true
          },
          {
            id: 5493,
            items: null,
            menuIcon: "",
            menuText: "站点创建界面",
            menuType: 2,
            menuURL: "/maintenance/stationCreate",
            order: 0,
            parentId: 5414,
            perms: "sys:maintenance:station:create:view",
            visible: true
          }
        ],
        menuIcon: "icon",
        menuText: "站点管理",
        menuType: 2,
        menuURL: "/maintenance/stationManager",
        order: 3,
        parentId: 5396,
        perms: "sys:maintenance:station:view",
        visible: true
      },
      {
        id: 5415,
        items: [
          {
            id: 5604,
            items: null,
            menuIcon: "",
            menuText: "批量添加界面",
            menuType: 2,
            menuURL: "/maintenance/addDevicest",
            order: 0,
            parentId: 5415,
            perms: "super:maintenance:device:group:add:view",
            visible: true
          }
        ],
        menuIcon: "icon",
        menuText: "设备管理",
        menuType: 2,
        menuURL: "/maintenance/deviceManager",
        order: 4,
        parentId: 5396,
        perms: "sys:maintenance:device:view",
        visible: true
      },
      {
        id: 5416,
        items: [
          {
            id: 5522,
            items: null,
            menuIcon: "",
            menuText: "序列号列表界面",
            menuType: 2,
            menuURL: "/produceMng/snList",
            order: 0,
            parentId: 5416,
            perms: "produceMng:batch:list:view",
            visible: true
          }
        ],
        menuIcon: "icon",
        menuText: "设备序列号管理",
        menuType: 2,
        menuURL: "/produceMng/batchList",
        order: 5,
        parentId: 5396,
        perms: "produceMng:batch:view",
        visible: true
      },
      {
        id: 5417,
        items: [
          {
            id: 5418,
            items: [
              {
                id: 5525,
                items: null,
                menuIcon: "",
                menuText: "上传固件界面",
                menuType: 2,
                menuURL: "/firmware/firmwareUpload",
                order: 0,
                parentId: 5418,
                perms: "sys:upgrade:firmware:add:view",
                visible: true
              }
            ],
            menuIcon: "icon",
            menuText: "固件管理",
            menuType: 2,
            menuURL: "/firmware/firmwareList",
            order: 1,
            parentId: 5417,
            perms: "sys:upgrade:firmware:view",
            visible: true
          },
          {
            id: 5419,
            items: [
              {
                id: 5530,
                items: null,
                menuIcon: "",
                menuText: "创建任务界面",
                menuType: 2,
                menuURL: "/firmware/taskCreate",
                order: 0,
                parentId: 5419,
                perms: "sys:upgrade:task:create:view",
                visible: true
              },
              {
                id: 5531,
                items: null,
                menuIcon: "",
                menuText: "任务详情界面",
                menuType: 2,
                menuURL: "/firmware/taskDetail",
                order: 0,
                parentId: 5419,
                perms: "sys:upgrade:taskdetail|view",
                visible: true
              }
            ],
            menuIcon: "icon",
            menuText: "任务管理",
            menuType: 2,
            menuURL: "/firmware/taskList",
            order: 2,
            parentId: 5417,
            perms: "sys:upgrade:task:view",
            visible: true
          },
          {
            id: 5420,
            items: null,
            menuIcon: "icon",
            menuText: "设备调试",
            menuType: 2,
            menuURL: "/maintenance/soft/debug",
            order: 3,
            parentId: 5417,
            perms: "maintenance:soft:debug:view",
            visible: true
          }
        ],
        menuIcon: "glyphicon",
        menuText: "设备软件管理",
        menuType: 1,
        menuURL: null,
        order: 6,
        parentId: 5396,
        perms: "perms",
        visible: true
      },
      {
        id: 5595,
        items: [
          {
            id: 5598,
            items: null,
            menuIcon: "",
            menuText: "批次新增界面",
            menuType: 2,
            menuURL: "/maintenance/simCard/create",
            order: 0,
            parentId: 5595,
            perms: "super:maintenance:simcard:group:create:view",
            visible: true
          }
        ],
        menuIcon: "icon",
        menuText: "物联网卡管理",
        menuType: 2,
        menuURL: "/maintenance/simCard/list",
        order: 7,
        parentId: 5396,
        perms: "super:maintenance:simcard:group:list:view",
        visible: true
      },
      {
        id: 5421,
        items: null,
        menuIcon: "icon",
        menuText: "告警管理",
        menuType: 2,
        menuURL: "/maintenance/alertManager",
        order: 8,
        parentId: 5396,
        perms: "perms",
        visible: true
      }
    ],
    menuIcon: "glyphicon glyphicon-tower",
    menuText: "运维管理",
    menuType: 1,
    menuURL: null,
    order: 3,
    parentId: 0,
    perms: "perms",
    visible: true
  },
  {
    id: 5397,
    items: [
      {
        id: 5425,
        items: null,
        menuIcon: "icon",
        menuText: "操作日志",
        menuType: 2,
        menuURL: "/sys/log",
        order: 1,
        parentId: 5397,
        perms: "sys:log:view",
        visible: true
      },
      {
        id: 5429,
        items: null,
        menuIcon: "icon",
        menuText: "APP管理",
        menuType: 2,
        menuURL: "/sys/app",
        order: 5,
        parentId: 5397,
        perms: "sys:app:view",
        visible: true
      },
      {
        id: 5438,
        items: null,
        menuIcon: "icon",
        menuText: "多语言管理",
        menuType: 2,
        menuURL: "/super/i18nManager",
        order: 9,
        parentId: 5397,
        perms: "perms",
        visible: true
      }
    ],
    menuIcon: "glyphicon glyphicon-cog",
    menuText: "系统管理",
    menuType: 1,
    menuURL: null,
    order: 4,
    parentId: 0,
    perms: "perms",
    visible: true
  }
]

const admin_menu = [
  {
    title: '监控管理',
    icon: 'monitor',
    children: [
      {
        title: '总览',
        path: '/index'
      },
      {
        title: '站点列表',
        path: '/monitor'
      },
      {
        title: '设备列表',
        path: '/monitor'
      },
      {
        title: '设备详情',
        path: '/monitor'
      },
      {
        title: '物联网卡',
        path: '/monitor'
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
            title: '终端用户',
            path: '/operation'
          }
        ]
      },
      {
        title: '站点管理',
        path: '/operation'
      },
      {
        title: '设备管理',
        path: '/operation'
      },
      {
        title: '设备序列号管理',
        path: '/operation'
      },
      {
        title: '设备软件管理',
        children: [
          {
            title: '固件管理',
            path: '/operation'
          },
          {
            title: '任务管理',
            path: '/operation'
          }
        ]
      },
      {
        title: '物联网卡管理',
        path: '/operation'
      },
      {
        title: '告警管理',
        path: '/operation'
      }
    ]
  },
  {
    title: '系统管理',
    icon: 'setting',
    children: [
      {
        title: '操作日志',
        path: '/system'
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
        path: '/index'
      },
      {
        title: '站点列表',
        path: '/monitor'
      },
      {
        title: '统计分析',
        children: [
          {
            title: '运行数据',
            path: '/monitor'
          },
          {
            title: '告警统计',
            path: '/monitor'
          },
          {
            title: '流量统计',
            path: '/monitor'
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
            title: '终端用户',
            path: '/operation'
          },
          {
            title: '后台用户',
            path: '/operation'
          },
          {
            title: '系统角色',
            path: '/operation'
          }
        ]
      },
      {
        title: '站点管理',
        path: '/operation'
      },
      {
        title: '物联网卡管理',
        path: '/operation'
      },
      {
        title: '告警管理',
        path: '/operation'
      }
    ]
  },
  {
    title: '系统管理',
    icon: 'setting',
    children: [
      {
        title: '操作日志',
        path: '/system'
      },
      {
        title: 'APP管理',
        path: '/system'
      },
      {
        title: '多语言管理',
        path: '/system'
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
