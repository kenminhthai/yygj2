import {Popconfirm, Tooltip,Icon,message, Modal } from 'antd'
import Link from 'umi/link'
const confirm = Modal.confirm;
function payOrder() {
  confirm({
    title: '确认付款吗?',
    okText: '确定',
    cancelText: '取消',
    centered:true,
    onOk() {
      message.success('付款成功！');
    },
    onCancel() {
    },
  });
}

export default {
  namespace: 'businessPayData',
  state: {
    columns: [
      {
        title: '操作',
        dataIndex: 'operation',
        width:'50px',
        render: (text, record, index) => {
          if ({record}.record.payable_status == '待付') {
            return(
              <div>
                  <Tooltip title="付款" placement="left">
                    <a onClick={payOrder}><Icon style={{fontSize: '22px', marginRight: '10px'}} type="dollar" theme="twoTone"/></a>
                  </Tooltip>
              </div>
            )
          }else {
            return;
          }
        }
      },
      {
        title: '所属订单',
        dataIndex: 'orderID',
        align:'center',
        render:(text,record) => <Link to={{pathname:"/yygj/business/sypay/orderDetail",order_status:{record}.record.payable_status}}>{text}</Link>,
      },
      {
        title: '应付日期',
        align:'center',
        dataIndex: 'date_typeIn',
      },
      {
        title: '收款方机构',
        align:'center',
        dataIndex: 'gathering_org',
      },
      {
        title: '收款账户',
        align:'center',
        dataIndex: 'gathering_account',
      },
      {
        title: '开户行',
        align:'center',
        dataIndex: 'accountBank',
      },
      {
        title: '所属银行',
        align:'center',
        dataIndex: 'Bank',
      },
      {
        title: '应付金额',
        align:'right',
        dataIndex: 'num_payable',
      },
      {
        title: '实付日期',
        align:'center',
        dataIndex: 'date_OutOfPocket',
      },
      {
        title: '应付款状态',
        align:'center',
        defaultSortOrder:'ascend',
        dataIndex: 'payable_status',
      },

    ],
    data: [
      {
        date_typeIn:'20180916',
        orderID:'0001',
        gathering_org:'XXX',
        gathering_account:'6210888888888888',
        accountBank:'上海工商银行',
        Bank:'工商银行',
        num_payable:'10000',
        date_OutOfPocket:'201809182',
        payable_status:'待付',
      },
      {
        date_typeIn:'20180916',
        orderID:'0001',
        gathering_org:'XXX',
        gathering_account:'6210888888888888',
        accountBank:'上海工商银行',
        Bank:'工商银行',
        num_payable:'10000',
        date_OutOfPocket:'201809182',
        payable_status:'已付',
      },
    ],
    buttons:[
      {
        name:'付款',
        url:'./sypay',
      },

    ],


  },
}
