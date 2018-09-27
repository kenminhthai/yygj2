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
  namespace: 'industralDamageData',
  state: {
    columns:[
      {
        title: '操作',
        dataIndex: 'choose',
        render: (text, record, index) => {
          if ({record}.record.status == '待确认') {
            return(
              <div>
                <Popconfirm title="确定该订单吗？" okText="确定" cancelText="取消" onConfirm={confirm} onCancel={cancel}>
                  <Tooltip title="订单确定" placement="left">
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
        title: '货损编号',
        dataIndex: 'cargo_ID',
        render:text =><Link to={"/yygj/industrial/gyCargoDamage/damageDetail"}> <a>{text}</a></Link>,
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
    ],
    data:[
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
        status:'待确认',
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
        status:'待确认',
      },
    ],
    buttons:[
      {
        name:'货损确认',
        url:'/yygj/industrial/gyCargoDamage',
        fun:insure,
      },
    ],
    columns_insure_bill :[
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
    buttons_demagePreserve:[
      {
        name:'保存',
        url:'/yygj/industrial/syCargoDamage',
        fun:send,
      },
      {
        name:'保存并发送',
        url:'/yygj/industrial/syCargoDamage',
        fun:send,
      },
      {
        name:'取消',
        url:'/yygj/industrial/syCargoDamage',
        fun:'',
      },
    ],
    columns_file_detail          :[
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
    data_file_detail             :[
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
