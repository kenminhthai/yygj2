const { config } = require('./common')

const { apiPrefix } = config
let database = [
  {
    id: '1',
    icon: 'user',
    name: 'pt企业会员管理',
    route: '/yygj/member',
  },
  {
    id: '2',
    icon: 'user',
    name: 'sy框架协议维护',
    route: '/yygj/syframepreserve',
  },
  {
    id: '3',
    icon: 'user',
    name: 'sy框架协议确认',
    route: '/yygj/syframeverify',
  },
  {
    id: '4',
    icon: 'user',
    name: 'sy订单维护',
    route: '/yygj/syorderpreserve',
  },
  {
    id: '5',
    icon: 'user',
    name: 'sy订单确认',
    route: '/yygj/syorderverify',
  },
  {
    id: '6',
    icon: 'user',
    name: 'sy货损管理',
    route: '/yygj/sydamagemanage',
  },
  {
    id: '7',
    icon: 'user',
    name: 'sy贸易订单付款',
    route: '/yygj/syorderpay',
  },
  {
    id: '8',
    icon: 'user',
    name: 'sy框架协议维护',
    route: '/yygj/gyframepreserve',
  },
  {
    id: '9',
    icon: 'user',
    name: 'sy框架协议确认',
    route: '/yygj/gyframeverify',
  },
  {
    id: '10',
    icon: 'user',
    name: 'gy订单维护',
    route: '/yygj/gyorderpreserve',
  },
  {
    id: '11',
    icon: 'user',
    name: 'gy订单确认',
    route: '/yygj/gyorderverify',
  },
  {
    id: '12',
    icon: 'user',
    name: 'gy货损管理',
    route: '/yygj/gydamagemanage',
  },
  {
    id: '13',
    icon: 'user',
    name: 'gy贸易订单付款',
    route: '/yygj/gyorderpayy',
  },
  {
    id: '14',
    icon: 'user',
    name: 'gy融资申请',
    route: '/yygj/gyapply',
  },
  {
    id: '15',
    icon: 'user',
    name: 'gy融资还款',
    route: '/yygj/gyrefund',
  },
  {
    id: '16',
    icon: 'user',
    name: 'fw框架协议维护',
    route: '/yygj/fwframepreserve',
  },
  {
    id: '17',
    icon: 'user',
    name: 'fw框架协议确认',
    route: '/yygj/fwframeverify',
  },
  {
    id: '18',
    icon: 'user',
    name: 'fw订单维护',
    route: '/yygj/fworderpreserve',
  },
  {
    id: '19',
    icon: 'user',
    name: 'fw订单确认',
    route: '/yygj/fworderverify',
  },
  {
    id: '20',
    icon: 'user',
    name: 'fw融资申请',
    route: '/yygj/fwapply',
  },

  {
    id: '21',
    icon: 'user',
    name: 'fw融资还款',
    route: '/yygj/fwrefund',
  },
]

module.exports = {

  [`GET ${apiPrefix}/menus`] (req, res) {
    res.status(200).json(database)
  },
}
