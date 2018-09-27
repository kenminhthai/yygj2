import {Popconfirm, Tooltip, Icon} from 'antd'
import Link from 'umi/link'
import {message} from "antd/lib/index";

function confirm(e) {
  message.success('订单确定成功！');
}

function cancel(e) {
}

export default {
  namespace: 'industrialOrderAffirm',
  state: {
    colums:[
      {
        title: '操作',
        dataIndex: 'operation',
        width:'50px',
        align:'center',
        render: (text, record, index) => {
          if ({record}.record.order_status == '待确认') {
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
        title: '订单编号',
        align:'center',
        dataIndex: 'order_number',
        render:(text,record) => <Link to={{pathname:"/yygj/industrial/orderAffirm/orderAffirmDetail",order_status:{record}.record.order_status}}>{text}</Link>,
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
        align:'center',
        defaultSortOrder:'ascend',
        dataIndex: 'order_status',
      },
      {
        title:'确认日期',
        align:'center',
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
        order_status:'待确认',
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
