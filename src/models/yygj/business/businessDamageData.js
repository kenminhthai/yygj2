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
          if ({record}.record.damage_order_status == '待发送') {
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
        dataIndex: 'damage_order_number',
        render:(text,record) => <Link to={{pathname:'/yygj/business/syCargoDamage/damageDetail',status:{record}.record.status}} ><a>{text}</a></Link>,
      },
      {
        title: '录入日期',
        dataIndex: 'gmt_create',
      },

      {
        title: '发起机构',
        dataIndex: 'cargo_damage_submitting_agency',
      },
      {
        title: '确认机构',
        dataIndex: 'cargo_damage_confirmation_mechanism',
      },
      {
        title: '货损价值',
        dataIndex: 'loss_value',
        align:'right',
      },
      {
        title: '所属订单',
        dataIndex: 'belonging_order',
      },
      {
        title: '确认日期',
        dataIndex: 'date_of_confirmation_of_damage',
      },
      {
        title: '发票确认日期',
        dataIndex: 'confirmation_date_of_reversing_invoice',
      },
      {
        title: '货损状态',
        dataIndex: 'damage_order_status',
      },
    ],
    data                  :[
      {

        damage_order_number:'20180916',
        gmt_create:'0001',
        cargo_damage_submitting_agency:'XXX',
        cargo_damage_confirmation_mechanism:'SSS',
        loss_value:1000,
        belonging_order:'0001',
        date_of_confirmation_of_damage:'20180916',
        confirmation_date_of_reversing_invoice:'20180918',
        damage_order_status:'发票待确认',
      },
      {

        damage_order_number:'20180916',
        gmt_create:'0001',
        cargo_damage_submitting_agency:'XXX',
        cargo_damage_confirmation_mechanism:'SSS',
        loss_value:1000,
        belonging_order:'0001',
        date_of_confirmation_of_damage:'20180916',
        confirmation_date_of_reversing_invoice:'20180918',
        damage_order_status:'待发送',
      },
      {

        damage_order_number:'20180916',
        gmt_create:'0001',
        cargo_damage_submitting_agency:'XXX',
        cargo_damage_confirmation_mechanism:'SSS',
        loss_value:1000,
        belonging_order:'0001',
        date_of_confirmation_of_damage:'20180916',
        confirmation_date_of_reversing_invoice:'20180918',
        damage_order_status:'已发送',
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
        title: '编号',
        dataIndex: 'id',
      },
      {
        title:'创建时间',
        dataIndex:'gmt_create',
      },
      {
        title:'商品编号',

        dataIndex:'commodity_number',
      },
      {
        title: '商品名称',
        dataIndex: 'name_of_commodity',
      },
      {
        title: '数量',
        dataIndex: 'quantity',
      },
      {
        title: '所属货单',
        dataIndex: 'goods_damage_list',
      },
    ],
    data_detail           :[
      {
        id:"1",
        name_of_commodity:'阿司匹林',
        quantity:'100',
        commodity_number:'500',
        goods_damage_list:'',
        gmt_create:'2018/09/16',
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
