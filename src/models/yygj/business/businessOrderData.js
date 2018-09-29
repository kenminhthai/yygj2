import Link from 'umi/link'
import {Modal,Icon,Tooltip,Popconfirm,message } from 'antd'
import request from '../../../utils/request'
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
    centered:true,
    onOk() {
      message.success('删除成功！');
    },
    onCancel() {
    },
  });
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
        title: 'id',
        dataIndex: 'id',
        align:'center',
      },
      {
        title: '订单编号',
        dataIndex: 'order_number',
        align:'center',
        render:(text,record) => <Link to={{pathname:"/yygj/business/orderPreserve/orderDetail",order_status:{record}.record.order_status,data:record}}>{text}</Link>
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
    seller_organization:[
      '辉瑞医药','康美药业','云南白药','中国生物制药','华大基因','国药控股','上海医药'
    ],
  },
  effects: {
    *queryOrders(_, sagaEffects) {
      const { call, put } = sagaEffects;
      const endPointURI = 'http://192.168.30.10:5000/graphql?query={ orders { id order_date order_number buyer_organization seller_organization order_amount belonging_contract agreed_delivery_date agreed_payment_date order_status } }';
      console.log("????")
      const orders = request(endPointURI)
      //const orders = yield call(request, endPointURI);
      console.log(orders)
      //yield put({ type: 'initOrder', payload: orders });
    }
  },
  reducers: {
    initOrder(state, { payload: orders }) {
      console.log(orders)
     /* const newCardWithId = { ...newCard, id: nextCounter };
      const nextData = state.data.concat(newCardWithId);
      return {
        data: nextData,
        counter: nextCounter,
      };*/
    }
  },
};
