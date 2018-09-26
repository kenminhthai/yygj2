import Link from 'umi/link'
export default {
  namespace: 'businessOrderAffirm',
  state: {
    colums:[
      {
        title: '订单日期',
        dataIndex: 'order_date',
      },
      {
        title: '订单编号',
        dataIndex: 'order_number',
        render:text => <Link to={"/yygj/business/orderAffirm/orderAffirmDetail"}><a >{text}</a></Link>,
      },
      {
        title: '买方机构',
        dataIndex: 'buyer_organization',
      },
      {
        title: '卖方机构',
        dataIndex: 'seller_organization',
      },
      {
        title: '订单金额',
        dataIndex: 'order_amount',
      },
      {
        title: '所属合同',
        dataIndex: 'belonging_contract',
      },
      {
        title: '约定交货日',
        dataIndex: 'agreed_delivery_date',
      },
      {
        title: '约定付款日期',
        dataIndex: 'agreed_payment_date',
      },
      {
        title: '订单状态',
        dataIndex: 'order_status',
      },
      {
        title:'确认日期',
        dataIndex:'affirm_date'
      }
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
        affirm_date:'2018-10-10'
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
        affirm_date:'2018-10-10'
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
        affirm_date:'2018-10-10'
      },
    ],
    buttons:[
      {
        name:'订单确认',
        url:''
      },
    ],
  }
};
