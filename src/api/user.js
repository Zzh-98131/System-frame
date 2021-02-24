import request from '@/utils/request.js'
var qs = require('qs')

export function login(userName, passWord, rememberMe, vm) {
  var _data = {
    name: userName,
    password: passWord,
    rememberMe: rememberMe
  }
  return request({
    url: '/ajax/token',
    method: 'post',
    data: _data,
  })
}
