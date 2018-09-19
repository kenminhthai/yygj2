

function insure() {
  alert("已付款")
}
export default {
  namespace: 'businessPayData',
  state: {
    columns: [
      {
        title: '',
        dataIndex: 'choose',
        render:text => <a href="javascript:;">{text}</a>,
      },
      {
        title: '应付日期',
        dataIndex: 'date_typeIn',
      },
      {
        title: '所属订单',
        dataIndex: 'orderID',
        render:text => <a href="javascript:;">{text}</a>,
      },
      {
        title: '收款方机构',
        dataIndex: 'gathering_org',
      },
      {
        title: '收款账户',
        dataIndex: 'gathering_account',
      },
      {
        title: '开户行',
        dataIndex: 'accountBank',
      },
      {
        title: '所属银行',
        dataIndex: 'Bank',
      },
      {
        title: '应付金额',
        dataIndex: 'num_payable',
      },
      {
        title: '实付日期',
        dataIndex: 'date_OutOfPocket',
      },
      {
        title: '应付款状态',
        dataIndex: 'status',
      },

    ],
    data: [
      {
        choose:'',
        date_typeIn:'20180916',
        orderID:'0001',
        gathering_org:'XXX',
        gathering_account:'6210888888888888',
        accountBank:'上海工商银行',
        Bank:'工商银行',
        num_payable:'10000',
        date_OutOfPocket:'20180918',
        status:'待付/已付',
      },
    ],
    buttons:[
      {
        name:'付款',
        url:'./sypay',
        fun:insure,
      },

    ],


  },
}
