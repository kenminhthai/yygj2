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
  namespace: 'serviceFrameData',
  state: {
    columns:  [
      {
        title: '操作',
        dataIndex: 'choose',
        render: (text, record, index) => {
          if ({record}.record.status == '待发送') {
            return(
              <div>
                <Popconfirm title="确定要发送协议吗？" okText="发送" cancelText="取消" onConfirm={confirm} onCancel={cancel}>
                  <Tooltip title="发送协议" placement="left">
                    <a><Icon style={{fontSize: '22px', marginRight: '10px'}} type="mail" theme="twoTone"/></a>
                  </Tooltip>
                </Popconfirm>
                <Popconfirm title="确定要删除协议吗？" okText="删除" cancelText="取消">
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
        title: '录入日期',
        dataIndex: 'date_typeIn',
      },
      {
        title: '合同编号',
        dataIndex: 'frameID',
        render:text =><Link to={"/yygj/service/fwFramePreserve/frameDetail"}> <a >{text}</a></Link>,
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
        choose:'',
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
        title: '录入日期',
        dataIndex: 'date_typeIn',
      },
      {
        title: '合同编号',
        dataIndex: 'frameID',
        render:text => <Link to={"/yygj/industrial/gyFrameInsure/frameDetail"}><a >{text}</a></Link>,
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

    buttons:[
      {
        name:'添加协议',
        url:'/yygj/service/fwFramePreserve/addFrame',
        fun:'',
      },
    ],
    buttons_Insure:[

    ],
    buttons_page_addFrame:[

      {
        name:'保存',
        url:'/yygj/service/fwFramePreserve',
        fun:save,
      },
      {
        name:'保存并发送',
        url:'/yygj/service/fwFramePreserve',
        fun:send,
      },
      {
        name:'取消',
        url:'/yygj/service/fwFramePreserve',
        fun:'',
      },
    ],
    options_frameType:[
      {
        value:'框架类型',
        name:'框架类型',
      },
    ],
    options_frameCharacter:[
      {
        value:'医药贸易',
        name:'医药贸易',
      },
    ],
  },
}
