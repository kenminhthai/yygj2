
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
      },
      {
        title: '款项编号',
        dataIndex: 'ID',
      },
      {
        title: '融资协议',
        dataIndex: 'frameID',
        render:text => <a href="/yygj/industrial/financingRefund/financingProtocol">{text}</a>,
      },
      {
        title: '所属申请',
        dataIndex: 'relevanceApply',
      },
      {
        title: '资金方',
        dataIndex: 'capital_loaner',
      },
      {
        title: '放款日期',
        dataIndex: 'date_begin',
      },
      {
        title: '资金规模',
        dataIndex: 'capital_scale',
      },
      {
        title: '资金价格',
        dataIndex: 'capital_price',
      },
      {
        title: '本息合计',
        dataIndex: 'sum',
      },
      {
        title: '到期日期',
        dataIndex: 'date_end',
      },
      {
        title: '到期状态',
        dataIndex: 'status_date_end',
      },
      {
        title: '实际还款日期',
        dataIndex: 'date_end_fact',
      },
      {
        title: '还款状态',
        dataIndex: 'status_refund',
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
      },
      {
        title: '申请编号',
        dataIndex: 'ID',
        render:text => <a href="yygj/industrial/financingDetail">{text}</a>,
      },
      {
        title: '申请日期',
        dataIndex: 'date_apply',
      },
      {
        title: '融资类型',
        dataIndex: 'financing_type',
      },
      {
        title: '申请机构',
        dataIndex: 'apply_org',
      },
      {
        title: '资金方',
        dataIndex: 'capital_loaner',
      },
      {
        title: '所属订单',
        dataIndex: 'order_superior',
        render:text => <a href="yygj/industrial/financingDetail">{text}</a>,
      },
      {
        title: '关联订单',
        dataIndex: 'order_relevance',
        render:text => <a href="yygj/industrial/financingDetail">{text}</a>,
      },
      {
        title: '订单金额',
        dataIndex: 'money_order',
      },
      {
        title: '剩余金额',
        dataIndex: 'money_residue',
      },
      {
        title: '申请金额',
        dataIndex: 'money_apply',
      },
      {
        title: '受理日期',
        dataIndex: 'date_handle',
      },
      {
        title: '审批日期',
        dataIndex: 'date_examine',
      },
      {
        title: '申请状态',
        dataIndex: 'status_apply',
      },
    ],
    data_apply: [
      {
        choose:'',
        ID:'20180916023132',
        date_apply:'20180916',
        financing_type:'应收款融资',
        apply_org:'XX医药服务公司',
        capital_loaner:'XX投资公司',
        order_superior:'123312',
        order_relevance:'321123',
        money_order:'1200万',
        money_residue:'200万',
        money_apply:'200万',
        date_handle:'20180916',
        date_examine:'20180917',
        status_apply:'待发送/待受理/待审批/拒绝受理/审批同意/审批拒绝',
      },
    ],
    buttons_apply:[
      {
        name:'申请新增',
        url:'/yygj/industrial/financingDetail',
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
