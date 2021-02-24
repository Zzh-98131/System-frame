import request from '@/utils/request.js'
var qs = require('qs')

export function getMenu() {
  return request({
    url: 'ajax/admin/menu',
    method: 'get'
  })
}
