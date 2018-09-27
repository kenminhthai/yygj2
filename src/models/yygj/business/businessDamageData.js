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
  namespace: 'businessDamageData',
  state: {
    columns               :[
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
          }
          else if({record}.record.status == '发票待确认'){
            return(
              <div>
                <Popconfirm title="确定该协议吗？" okText="确定" cancelText="取消" onConfirm={insure} onCancel={cancel}>
                  <Tooltip title="协议确定" placement="left">
                    <a><Icon style={{fontSize: '22px', marginRight: '10px'}} type="check-circle" theme="twoTone"/></a>
                  </Tooltip>
                </Popconfirm>
                <Popconfirm title="确定要删除协议吗？" okText="删除" cancelText="取消" onConfirm={del}>
                  <Tooltip title="删除协议" placement="right">
                    <a><Icon style={{fontSize: '22px'}} type="delete" theme="twoTone"/></a>
                  </Tooltip>
                </Popconfirm>
              </div>
            )
          }else{
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
        title: '货损编号',
        dataIndex: 'cargo_ID',
        render:text =><Link to={'/yygj/business/syCargoDamage/damageDetail'} ><a>{text}</a></Link>,
      },
      {
        title: '录入日期',
        dataIndex: 'date_typeIn',
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
        align:'right',
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
    data                  :[
      {

        date_typeIn:'20180916',
        cargo_ID:'0001',
        org_begin:'XXX',
        org_end:'SSS',
        cargo_num:'1000',
        cargo_order:'0001',
        date_insure:'20180916',
        date_bill_insure:'20180918',
        status:'发票待确认',
      },
      {

        date_typeIn:'20180915',
        cargo_ID:'0002',
        org_begin:'ZZZ',
        org_end:'XXX',
        cargo_num:'10000',
        cargo_order:'0002',
        date_insure:'20180917',
        date_bill_insure:'20180918',
        status:'待发送',
      },
    ],
    buttons               :[
      {
        name:'货损维护',
        url:'/yygj/business/syCargoDamage/damagePreserve',
        fun:'',
      },
      {
        name:'货损发送',
        url:'/yygj/business/syCargoDamage',
        fun:send,
      },
      {
        name:'货损删除',
        url:'/yygj/business/syCargoDamage',
        fun:del,
      },
      {
        name:'发票确认',
        url:'/yygj/business/syCargoDamage/billInsure',
        fun:'',
      },
    ],
    columns_insure_bill   :[
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
    data_insure_bill      :[
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
    columns_file          :[
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
    data_file             :[
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
    columns_detail        :[
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
    data_detail           :[
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
        url:'/yygj/business/syCargoDamage',
        fun:send,
      },
      {
        name:'保存并发送',
        url:'/yygj/business/syCargoDamage',
        fun:send,
      },
      {
        name:'取消',
        url:'/yygj/business/syCargoDamage',
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
