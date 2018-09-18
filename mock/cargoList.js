
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
    title: '合同编号',
    dataIndex: 'frameID',
  },
  {
    title: '合同日期',
    dataIndex: 'frame_date',
  },
  {
    title: '合同类型',
    dataIndex: 'frame_type',
  },
  {
    title: '合同性质',
    dataIndex: 'frame_character',
  },
  {
    title: '合同维护方',
    dataIndex: 'frame_preserve_person',
  },
  {
    title: '合同确认方',
    dataIndex: 'frame_insure_person',
  },
  {
    title: '记录状态',
    dataIndex: 'status',
  },
  {
    title: '合同开始日期',
    dataIndex: 'date_frame_begin',
  },
  {
    title: '合同结束日期',
    dataIndex: 'date_frame_end',
  },
]
let data = [
  {
    choose:"",
    date_typeIn:'20180916',
    frameID:'0001',
    frame_date:'2020-10-20',
    frame_type:'医药合同',
    frame_character:'医药服务',
    frame_preserve_person:'李四',
    frame_insure_person:'张三',
    status:'待发送/待确认/已确认',
    date_frame_begin:'20180916',
    date_frame_end:'20181016',
  },
  {
    choose:"",
    date_typeIn:'20180916',
    frameID:'0001',
    frame_date:'2020-10-20',
    frame_type:'医药合同',
    frame_character:'医药服务',
    frame_preserve_person:'李四',
    frame_insure_person:'张三',
    status:'待发送/待确认/已确认',
    date_frame_begin:'20180916',
    date_frame_end:'20181016',
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

let cargoList = {
  columns,
  data,
  buttons,
}


export default cargoList
