const { config } = require('./common')

const { apiPrefix } = config
let database = [
  {
    id: '1',
    icon: 'user',
    name: '企业会员管理',
    route: '/yygj/platform',
  },
  {
    id: '2',
    icon: 'user',
    name: '框架协议维护',
    route: '/yygj/business/syFramePreserve',
  },
  {
    id: '3',
    icon: 'user',
    name: '框架协议确认',
    route: '/yygj/business/syFrameInsure',
  },
  {
    id: '4',
    icon: 'user',
    name: '订单维护',
    route: '/yygj/business/orderPreserve',
  },
  {
    id: '5',
    icon: 'user',
    name: '订单确认',
    route: '/yygj/business/orderAffirm',
  },
  {
    id: '6',
    icon: 'user',
    name: '货损管理',
    route: '/yygj/business/syCargoDamage',
  },
  {
    id: '7',
    icon: 'user',
    name: '贸易订单付款',
    route: '/yygj/business/sypay',
  },
  {
    id: '8',
    icon: 'user',
    name: '框架协议维护',
    route: '/yygj/industrial/gyFramePreserve',
  },
  {
    id: '9',
    icon: 'user',
    name: '框架协议确认',
    route: '/yygj/industrial/gyFrameInsure',
  },
  {
    id: '10',
    icon: 'user',
    name: 'gy订单维护',
    route: '/yygj/industrial/orderPreserve',
  },
  {
    id: '11',
    icon: 'user',
    name: '订单确认',
    route: '/yygj/industrial/orderAffirm',
  },
  {
    id: '12',
    icon: 'user',
    name: '货损管理',
    route: '/yygj/industrial/gyCargoDamage',
  },
  {
    id: '13',
    icon: 'user',
    name: '贸易订单付款',
    route: '/yygj/industrial/gypay',
  },
  {
    id: '14',
    icon: 'user',
    name: '融资申请',
    route: '/yygj/industrial/financingApply',
  },
  {
    id: '15',
    icon: 'user',
    name: '融资还款',
    route: '/yygj/industrial/financingRefund',
  },
  {
    id: '16',
    icon: 'user',
    name: '框架协议维护',
    route: '/yygj/service/fwFramePreserve',
  },
  {
    id: '17',
    icon: 'user',
    name: '框架协议确认',
    route: '/yygj/service/fwFrameInsure',
  },
  {
    id: '18',
    icon: 'user',
    name: '订单维护',
    route: '/yygj/service/orderPreserve',
  },
  {
    id: '19',
    icon: 'user',
    name: '订单确认',
    route: '/yygj/service/orderAffirm',
  },
  {
    id: '20',
    icon: 'user',
    name: '融资申请',
    route: '/yygj/service/financingApply',
  },

  {
    id: '21',
    icon: 'user',
    name: '融资还款',
    route: '/yygj/service/financingRefund',
  },
]

module.exports = {

  [`GET ${apiPrefix}/menus`] (req, res) {
    res.status(200).json(database)
  },
}
