
let columns = [
  {
    title: '',
    dataIndex: 'choose',
    render:text => <a href="javascript:;">{text}</a>,
  },
  {
    title: '录入日期',
    dataIndex: 'date_typeIn',
  },
  {
    title: '货损编号',
    dataIndex: 'cargo_ID',
    render:text => <a href="javascript:;">{text}</a>,
  },
  {
    title: '发起机构',
    dataIndex: 'org_begin',
  },
  {
    title: '确认机构',
    dataIndex: 'org_end',
  },
  {
    title: '货损价值',
    dataIndex: 'cargo_num',
  },
  {
    title: '所属订单',
    dataIndex: 'cargo_order',
  },
  {
    title: '确认日期',
    dataIndex: 'date_insure',
  },
  {
    title: '发票确认日期',
    dataIndex: 'date_bill_insure',
  },
  {
    title: '货损状态',
    dataIndex: 'status',
  },
]
let data = [
  {
    choose:"",
    date_typeIn:'20180916',
    cargo_ID:'0001',
    org_begin:'XXX',
    org_end:'SSS',
    cargo_num:'1000',
    cargo_order:'0001',
    date_insure:'20180916',
    date_bill_insure:'20180918',
    status:'待发送/待确认/发票待确认/完成',
  },
  {
    choose:"",
    date_typeIn:'20180915',
    cargo_ID:'0002',
    org_begin:'ZZZ',
    org_end:'XXX',
    cargo_num:'10000',
    cargo_order:'0002',
    date_insure:'20180917',
    date_bill_insure:'20180918',
    status:'待发送/待确认/发票待确认/完成',
  },
]
let buttons = [
  {
    name:'增加协议',
    url:'/yygj/service/fwFramePreserve/addFrame'
  },
  {
    name:'发送协议',
    url:'/yygj/ptmember/applyCheck'
  },
  {
    name:'删除协议',
    url:'/yygj/ptmember/applyCheck'
  }
]
let columns_detail = [
  {
    title: '序号',
    dataIndex: 'id',
    render:text => <a href="javascript:;">{text}</a>,
  },
  {
    title: '商品名称',
    dataIndex: 'name',
  },
  {
    title: '数量',
    dataIndex: 'quantity',
  },
  {
    title: '货损价值',
    dataIndex: 'cost',
  },
]
let data_detail = [
  {
    id:"1",
    name:'阿司匹林',
    quantity:'100',
    cost:'500',
  },
]
let columns_file = [
  {
    title: '文件类型',
    dataIndex: 'type',
  },
  {
    title: '文件',
    dataIndex: 'files',
  },
  {
    title: '操作',
    dataIndex: 'option',
    render:text => <a href="javascript:;">{text}</a>,

  },
]
let data_file = [
  {
    type:"货损单",
    files:'',
    option:'+ -',
  },
  {
    type:"冲正发票",
    files:'',
    option:'+ -',
  },
]

let columns_insure_bill =[
  {
    title: '文件类型',
    dataIndex: 'type',
  },
  {
    title: '文件',
    dataIndex: 'files',
  },
  {
    title: '操作',
    dataIndex: 'option',
    render:text => <a href="javascript:;">{text}</a>,

  },
]
let data_insure_bill =[
  {
    type:"货损单",
    files:'',
    option:'查看',
  },
  {
    type:"冲正发票",
    files:'',
    option:'查看',
  },
]
let cargoList = {
  columns,
  data,
  buttons,
  columns_detail,
  data_detail,
  columns_file,
  data_file,
  columns_insure_bill,
  data_insure_bill,
}


export default cargoList
