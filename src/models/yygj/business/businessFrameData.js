import Link from 'umi/link'
import {Popconfirm, Tooltip, Icon} from 'antd'
import {message} from "antd/lib/index"
function send(e) {
  message.success('发送完成');
}
function save(e) {
  message.success('保存完成');

}
function del(e){
  message.success('删除完成');
}
function insure(e) {
  message.success('确认完成');

}
function confirm(e) {
  message.success('发送完成');
}

function cancel(e) {
}
export default {
  namespace: 'businessFrameData',
  state: {
    columns:  [
      {
        title: '操作',
        dataIndex: 'choose',
        render: (text, record, index) => {
          if ({record}.record.status == '待发送') {
            return(
              <div>
                <Popconfirm title="确定要发送协议吗？" okText="发送" cancelText="取消" onConfirm={send} onCancel={cancel}>
                  <Tooltip title="发送协议" placement="left">
                    <a><Icon style={{fontSize: '22px', marginRight: '10px'}} type="mail" theme="twoTone"/></a>
                  </Tooltip>
                </Popconfirm>
                <Popconfirm title="确定要删除协议吗？" okText="删除" cancelText="取消" onConfirm={del}>
                  <Tooltip title="删除协议" placement="right">
                    <a><Icon style={{fontSize: '22px'}} type="delete" theme="twoTone"/></a>
                  </Tooltip>
                </Popconfirm>
              </div>
            )
          }else {
            return(
              <div>
                <Popconfirm title="确定要删除协议吗？" okText="删除" cancelText="取消" onConfirm={del}>
                  <Tooltip title="删除协议" placement="right">
                    <a><Icon style={{fontSize: '22px'}} type="delete" theme="twoTone"/></a>
                  </Tooltip>
                </Popconfirm>
              </div>
            )
          }
        }
      },
      {
        title: '合同编号',
        dataIndex: 'frameID',
        render:(text,record) => <Link to={{pathname:"/yygj/business/syFramePreserve/frameDetail",status:{record}.record.status}}><a>{text}</a></Link>,
      },
      {
        title: '录入日期',
        dataIndex: 'date_typeIn',
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
    ],
    data: [
      {

        date_typeIn:'20180916',
        frameID:'0001',
        frame_date:'2020-10-20',
        frame_type:'医药合同',
        frame_character:'医药服务',
        frame_preserve_person:'李四',
        frame_insure_person:'张三',
        status:'待发送',
        date_frame_begin:'20180916',
        date_frame_end:'20181016',
      },
    ],
    buttons:[
      {
        name:'添加协议',
        url:'/yygj/business/syFramePreserve/addFrame',
        fun:'',
      },
    ],
    columns_insure:  [
      {
        title: '操作',
        dataIndex: 'operation',
        width:'50px',
        align:'center',
        render: (text, record, index) => {
          if ({record}.record.status == '待确认') {
            return(
              <div>
                <Popconfirm title="确定该协议吗？" okText="确定" cancelText="取消" onConfirm={insure} onCancel={cancel}>
                  <Tooltip title="协议确定" placement="left">
                    <a><Icon style={{fontSize: '22px', marginRight: '10px'}} type="check-circle" theme="twoTone"/></a>
                  </Tooltip>
                </Popconfirm>
              </div>
            )
          }else {
            return;
          }
        }
      },
      {
        title: '合同编号',
        dataIndex: 'frameID',
        render:(text,record) => <Link to={{pathname:"/yygj/business/syFrameInsure/frameDetail",status:{record}.record.status}}><a >{text}</a></Link>,
      },
      {
        title: '录入日期',
        dataIndex: 'date_typeIn',
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
    ],
    data_insure: [
      {
        choose:'',
        date_typeIn:'20180916',
        frameID:'0001',
        frame_date:'2020-10-20',
        frame_type:'医药合同',
        frame_character:'医药服务',
        frame_preserve_person:'李四',
        frame_insure_person:'张三',
        status:'待确认',
        date_frame_begin:'20180916',
        date_frame_end:'20181016',
      },
    ],
    buttons_Insure:[

    ],

    buttons_page_addFrame:[

      {
        name:'保存',
        url:'/yygj/business/syFramePreserve',
        fun:save,
      },
      {
        name:'保存并发送',
        url:'/yygj/business/syFramePreserve',
        fun:send,
      },
      {
        name:'取消',
        url:'/yygj/business/syFramePreserve',
        fun:'',
      },
    ],
    options_frameType:[
      {
        value:'框架协议',
        name:'框架协议',
      },
    ],
    options_frameCharacter:[
      {
        value:'医药贸易',
        name:'医药贸易',
      },
    ],

    columns_detail : [
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
    ],
    data_detail : [
      {
        id:"1",
        name:'阿司匹林',
        quantity:'100',
        cost:'500',
      },
    ],
    columns_file : [
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
    ],
    data_file : [
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
    ],
    columns_insure_bill : [
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
    ],
    data_insure_bill :[
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
    ],
  },
}
