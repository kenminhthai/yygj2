import Link from 'umi/link'
import {Popconfirm,Tooltip,Icon,message} from "antd";

function confirm(e) {
  message.success('发送完成');
}

function cancel(e) {
}

export default {
  namespace: 'industrialFinancingData',
  state: {
    columns_apply:  [
      {
        title: '操作',
        dataIndex: 'operation',
        width:'80px',
        align:'center',
        render: (text, record, index) => {
          if ({record}.record.application_status == '待发送') {
            return(
              <div>
                <Popconfirm title="确定要发送订单吗？" okText="发送" cancelText="取消" onConfirm={confirm} onCancel={cancel}>
                  <Tooltip title="发送订单" placement="left">
                    <a><Icon style={{fontSize: '22px', marginRight: '10px'}} type="mail" theme="twoTone"/></a>
                  </Tooltip>
                </Popconfirm>
                <Popconfirm title="确定要删除订单吗？" okText="删除" cancelText="取消">
                  <Tooltip title="删除订单" placement="right">
                    <a><Icon style={{fontSize: '22px'}} type="delete" theme="twoTone"/></a>
                  </Tooltip>
                </Popconfirm>
              </div>
            )
          }else {
            return(
              <div>
                <Popconfirm title="确定要删除订单吗？" okText="删除" cancelText="取消">
                  <Tooltip title="删除订单" placement="right">
                    <a><Icon style={{fontSize: '22px'}} type="delete" theme="twoTone"/></a>
                  </Tooltip>
                </Popconfirm>
              </div>
            )
          }
        }
      },
      {
        title: '申请编号',
        dataIndex: 'ID',
        align:'center',
        render:(text,record) => <Link to={{pathname:"/yygj/industrial/financingApply/financingDetail",application_status:{record}.record.application_status}}>{text}</Link>,
      },
      {
        title: '申请日期',
        align:'center',
        dataIndex: 'date_apply',
      },
      {
        title: '融资类型',
        align:'center',
        dataIndex: 'financing_type',
      },
      {
        title: '申请机构',
        align:'center',
        dataIndex: 'apply_org',
      },
      {
        title: '资金方',
        align:'center',
        dataIndex: 'capital_loaner',
      },
      {
        title: '所属订单',
        align:'center',
        dataIndex: 'order_superior',
        render:text => <Link to={"/yygj/industrial/financingApply/orderDetail"}>{text}</Link>,
      },
      {
        title: '关联订单',
        dataIndex: 'order_relevance',
        render:text => <Link to={"/yygj/industrial/financingApply/orderDetail"}>{text}</Link>,
      },
      {
        title: '订单金额',
        align:'right',
        dataIndex: 'money_order',
      },
      {
        title: '剩余金额',
        align:'right',
        dataIndex: 'money_residue',
      },
      {
        title: '申请金额',
        align:'right',
        dataIndex: 'money_apply',
      },
      {
        title: '受理日期',
        align:'center',
        dataIndex: 'date_handle',
      },
      {
        title: '审批日期',
        align:'center',
        dataIndex: 'date_examine',
      },
      {
        title: '申请状态',
        align:'center',
        defaultSortOrder:'ascend',
        dataIndex: 'application_status',
      },
    ],
    data_apply: [
      {
        ID:'00001',
        date_apply:'2018-09-16',
        financing_type:'应收款',
        apply_org:'商业',
        capital_loaner:'服务',
        order_superior:'00001',
        order_relevance:'00001',
        money_order:'1200.00',
        money_residue:'200.00',
        money_apply:'200.00',
        date_handle:'2018-09-16',
        date_examine:'2018-09-17',
        application_status:'待发送',
      },
      {
        ID:'00001',
        date_apply:'2018-09-16',
        financing_type:'应收款',
        apply_org:'商业',
        capital_loaner:'服务',
        order_superior:'00001',
        order_relevance:'00001',
        money_order:'1200.00',
        money_residue:'200.00',
        money_apply:'200.00',
        date_handle:'2018-09-16',
        date_examine:'2018-09-17',
        application_status:'待发送',
      },
      {
        ID:'00001',
        date_apply:'2018-09-16',
        financing_type:'应收款',
        apply_org:'商业',
        capital_loaner:'服务',
        order_superior:'00001',
        order_relevance:'00001',
        money_order:'1200.00',
        money_residue:'200.00',
        money_apply:'200.00',
        date_handle:'2018-09-16',
        date_examine:'2018-09-17',
        application_status:'已发送',
      },
    ],
    buttons_apply:[
      {
        name:'申请新增',
        url:'/yygj/industrial/financingApply/addFinancing',
      },
      {
        name:'申请发送',
        url:'/yygj/industrial/financingApply',
      },
      {
        name:'申请删除',
        url:'/yygj/industrial/financingApply',
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
