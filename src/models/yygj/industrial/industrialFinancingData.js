
function insure() {
  alert("已还款")
}
function send() {
  alert("send")
}
function del() {
  alert("del")
}
export default {
  namespace: 'industrialFinancingData',
  state: {
    columns:  [
      {
        title: '',
        dataIndex: 'choose',
        render:text => <a href="javascript:;">{text}</a>,
        width:30,
      },
      {
        title: '款项编号',
        dataIndex: 'ID',
        width:80,
      },
      {
        title: '融资协议',
        dataIndex: 'frameID',
        render:text => <a href="/yygj/industrial/financingRefund/financingProtocol">{text}</a>,
        width:80,
      },
      {
        title: '所属申请',
        dataIndex: 'relevanceApply',
        width:80,
      },
      {
        title: '资金方',
        dataIndex: 'capital_loaner',
        width:100,
      },
      {
        title: '放款日期',
        dataIndex: 'date_begin',
        width:60,
      },
      {
        title: '资金规模',
        dataIndex: 'capital_scale',
        width:40,
      },
      {
        title: '资金价格',
        dataIndex: 'capital_price',
        width:40,
      },
      {
        title: '本息合计',
        dataIndex: 'sum',
        width:50,
      },
      {
        title: '到期日期',
        dataIndex: 'date_end',
        width:60,
      },
      {
        title: '到期状态',
        dataIndex: 'status_date_end',
        width:50,
      },
      {
        title: '实际还款日期',
        dataIndex: 'date_end_fact',
        width:60,
      },
      {
        title: '还款状态',
        dataIndex: 'status_refund',
        width:50,
      },
    ],
    data: [
      {
        choose:'',
        ID:'20180916023132',
        frameID:'0001',
        relevanceApply:'213213',
        capital_loaner:'XX投资公司',
        date_begin:'20180916',
        capital_scale:'1000万',
        capital_price:'80%',
        sum:'1200万',
        date_end:'20181016',
        status_date_end:'未到期',
        date_end_fact:'20180920',
        status_refund:'已还款',

      },
    ],
    buttons:[
      {
        name:'还款',
        url:'/yygj/industrial/financingRefund',
        fun:insure,
      },
    ],
    columns_apply:  [
      {
        title: '',
        dataIndex: 'choose',
        render:text => <a href="javascript:;">{text}</a>,
        width:10,
      },
      {
        title: '申请编号',
        dataIndex: 'ID',
        render:text => <a href="/yygj/industrial/financingDetail">{text}</a>,
        width:80,

      },
      {
        title: '申请日期',
        dataIndex: 'date_apply',
        width:80,

      },
      {
        title: '融资类型',
        dataIndex: 'financing_type',
        width:80,

      },
      {
        title: '申请机构',
        dataIndex: 'apply_org',
        width:80,

      },
      {
        title: '资金方',
        dataIndex: 'capital_loaner',
        width:60,

      },
      {
        title: '所属订单',
        dataIndex: 'order_superior',
        render:text => <a href="/yygj/industrial/financingApply/orderDetail">{text}</a>,
        width:80,

      },
      {
        title: '关联订单',
        dataIndex: 'order_relevance',
        render:text => <a href="/yygj/industrial/financingApply/orderDetail">{text}</a>,
        width:80,

      },
      {
        title: '订单金额',
        dataIndex: 'money_order',
        width:80,

      },
      {
        title: '剩余金额',
        dataIndex: 'money_residue',
        width:80,

      },
      {
        title: '申请金额',
        dataIndex: 'money_apply',
        width:80,
      },
      {
        title: '受理日期',
        dataIndex: 'date_handle',
        width:80,

      },
      {
        title: '审批日期',
        dataIndex: 'date_examine',
        width:80,

      },
      {
        title: '申请状态',
        dataIndex: 'status_apply',
        width:80,

      },
    ],
    data_apply: [
      {
        choose:'',
        ID:'201823132',
        date_apply:'20180916',
        financing_type:'应收款融资',
        apply_org:'上海链石科技有限公司',
        capital_loaner:'赢时胜科技股份有限公司',
        order_superior:'201823132',
        order_relevance:'201823132',
        money_order:'1200',
        money_residue:'200',
        money_apply:'200',
        date_handle:'20180916',
        date_examine:'20180917',
        status_apply:'待发送',
      },
    ],
    buttons_apply:[
      {
        name:'申请新增',
        url:'/yygj/industrial/financingApply/addFinancing',
        fun:'',
      },
      {
        name:'申请发送',
        url:'/yygj/industrial/financingApply',
        fun:send,
      },
      {
        name:'申请删除',
        url:'/yygj/industrial/financingApply',
        fun:del,
      },
    ],

    options_apply_capitalName:[
      {
        name:'资金方',
        value:'资金方',
      },
    ],
    options_apply_orderSuperior:[
      {
        name:'123321',
        value:'123321',
      },
    ],
    cloumns_financing_detail:[
      {
        title: '文件类型',
        dataIndex: 'type',
      },
      {
        title: '文件',
        dataIndex: 'file',
      },
      {
        title: '',
        dataIndex: 'option',
        render:text => <a href="javascript:;">{text}</a>,
      },
    ],
    data_financing_detail:[
      {
        type:'医药服务框架协议',
        file:'11',
        option:'查看',
      },
      {
        type:'医药服务订单',
        file:'12',
        option:'查看',
      },
      {
        type:'关联贸易框架协议',
        file:'3',
        option:'查看',
      },
      {
        type:'关联贸易订单',
        file:'43',
        option:'查看',
      },
      {
        type:'贸易订单相关发票',
        file:'23',
        option:'查看',
      },
    ],

  },
}
