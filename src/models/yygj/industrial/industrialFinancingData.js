import Link from 'umi/link'
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
    columns_apply:  [
      {
        title: '申请编号',
        dataIndex: 'ID',
        width:80,
        render:text => <Link to={"/yygj/industrial/financingApply/financingDetail"}>{text}</Link>,
      },
      {
        title: '申请日期',
        dataIndex: 'date_apply',
        width:90,
      },
      {
        title: '融资类型',
        dataIndex: 'financing_type',
        width:100,
      },
      {
        title: '申请机构',
        dataIndex: 'apply_org',
        width:100
      },
      {
        title: '资金方',
        dataIndex: 'capital_loaner',
        width:100
      },
      {
        title: '所属订单',
        dataIndex: 'order_superior',
        width:80,
        render:text => <Link to={"/yygj/industrial/financingApply/orderDetail"}>{text}</Link>,
      },
      {
        title: '关联订单',
        dataIndex: 'order_relevance',
        width:80,
        render:text => <Link to={"/yygj/industrial/financingApply/orderDetail"}>{text}</Link>,
      },
      {
        title: '订单金额',
        width:80,
        dataIndex: 'money_order',
      },
      {
        title: '剩余金额',
        dataIndex: 'money_residue',
        width:70,
      },
      {
        title: '申请金额',
        dataIndex: 'money_apply',
        width:70,
      },
      {
        title: '受理日期',
        dataIndex: 'date_handle',
        width:90,
      },
      {
        title: '审批日期',
        dataIndex: 'date_examine',
        width:90,
      },
      {
        title: '申请状态',
        dataIndex: 'status_apply',
        width:70,
      },
    ],
    data_apply: [
      {
        ID:'201823132',
        date_apply:'2018-09-16',
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
