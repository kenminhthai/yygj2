import {Popconfirm, Tooltip, Icon, message,Modal} from 'antd'
import Link from 'umi/link'

const confirm = Modal.confirm;


function sendOrder() {
  confirm({
    title: '确认发送订单吗?',
    okText: '确定',
    cancelText: '取消',
    centered:true,
    onOk() {
      message.success('发送成功！');
    },
    onCancel() {
      message.info('发送取消！');
    },
  });
}

function deleteOrder() {
  confirm({
    title: '确认删除订单吗?',
    okText: '确定',
    cancelText: '取消',
    centered: true,
    onOk() {
      message.success('删除成功！');
    },
    onCancel() {
    },
  });
}
export default {
  namespace: 'industrialOrderData',
  state: {
    colums:[
      {
        title: '操作',
        dataIndex: 'operation',
        width:'80px',
        align:'center',
        render: (text, record, index) => {
          if ({record}.record.order_status == '草稿') {
            return(
              <div>
                  <Tooltip title="发送订单" placement="left">
                    <a onClick={sendOrder}><Icon style={{fontSize: '22px', marginRight: '10px'}} type="mail" theme="twoTone"/></a>
                  </Tooltip>
                  <Tooltip title="删除订单" placement="right">
                    <a onClick={deleteOrder}><Icon style={{fontSize: '22px'}} type="delete" theme="twoTone"/></a>
                  </Tooltip>
              </div>
            )
          }else {
            return;
          }
        }
      },
      {
        title: '订单编号',
        align:'center',
        dataIndex: 'order_number',
        render:(text,record) => <Link to={{pathname:"/yygj/industrial/orderPreserve/orderDetail",order_status:{record}.record.order_status}}>{text}</Link>
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
        dataIndex: 'seller_organization',
      },
      {
        title: '订单金额',
        align:'right',
        dataIndex: 'order_amount',
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
        defaultSortOrder:'ascend',
        align:'center',
        dataIndex: 'order_status',
      },
      {
        title: '关联订单',
        align:'center',
        dataIndex: 'associated_order',
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
        associated_order:'-',
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
        associated_order:'-',
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
        associated_order:'-',
      },
    ],
    buttons:[
      {
        name:'订单新增',
        url:'/yygj/industrial/orderPreserve/addOrder'
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
    seller_organization:[
      '辉瑞医药','康美药业','云南白药','中国生物制药','华大基因','国药控股','上海医药'
    ],
  }
};
