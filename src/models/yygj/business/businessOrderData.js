import Link from 'umi/link'
import {Icon,Tooltip,Popconfirm,message } from 'antd'

function confirm(e) {
  message.success('发送完成');
}

function cancel(e) {
}

export default {
  namespace: 'businessOrderData',
  state: {
    colums:[
      {
        title: '操作',
        dataIndex: 'operation',
        width:'100px',
        render: (text, record, index) => {
          if ({record}.record.order_status == '草稿') {
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
        title: '订单编号',
        dataIndex: 'order_number',
        align:'center',
        render:(text,record) => <Link to={{pathname:"/yygj/business/orderPreserve/orderDetail",order_status:{record}.record.order_status}}>{text}</Link>
      },
      {
        title: '订单日期',
        align:'center',
        dataIndex: 'order_date',
      },
      {
        title: '买方机构',
        align:'center',
        dataIndex: 'buyer_organization',
      },
      {
        title: '卖方机构',
        align:'center',
        dataIndex: 'seller_organizatio',
      },
      {
        title: '订单金额',
        dataIndex: 'order_amount',
        align:'right'
      },
      {
        title: '所属合同',
        align:'center',
        dataIndex: 'belonging_contract',
      },
      {
        title: '约定交货日',
        align:'center',
        dataIndex: 'agreed_delivery_date',
      },
      {
        title: '约定付款日期',
        align:'center',
        dataIndex: 'agreed_payment_date',
      },
      {
        title: '订单状态',
        align:'center',
        dataIndex: 'order_status',
        defaultSortOrder:'ascend'
      },
    ],
    orderlist:[
      {
        key:'1',
        order_date:'2018-08-08',
        order_number:'00001',
        buyer_organization:'强生',
        seller_organization:'云南白药',
        order_amount:'6666',
        belonging_contract:'框架1',
        agreed_delivery_date:'2018-10-08',
        agreed_payment_date:'2018-10-31',
        order_status:'草稿',
      },
      {
        key:'2',
        order_date:'2018-08-08',
        order_number:'00001',
        buyer_organization:'强生',
        seller_organization:'云南白药',
        order_amount:'6666',
        belonging_contract:'框架1',
        agreed_delivery_date:'2018-10-08',
        agreed_payment_date:'2018-10-31',
        order_status:'待确认',
      },
      {
        key:'3',
        order_date:'2018-08-08',
        order_number:'00001',
        buyer_organization:'强生',
        seller_organization:'云南白药',
        order_amount:'6666',
        belonging_contract:'框架1',
        agreed_delivery_date:'2018-10-08',
        agreed_payment_date:'2018-10-31',
        order_status:'已确认',
      },
    ],
    buttons:[
      {
        name:'订单新增',
        url:'/yygj/business/orderPreserve/addOrder'
      },
      {
        name:'订单发送',
        url:''
      },
      {
        name:'订单删除',
        url:''
      },
    ],
  }
};
