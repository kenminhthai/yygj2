import {Popconfirm, Tooltip,Icon } from 'antd'
import Link from 'umi/link'
import {message} from "antd/lib/index";
function confirm(e) {
  message.success('付款成功');
}

function cancel(e) {
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
                <Popconfirm title="确定要付款吗？" okText="付款" cancelText="取消" onConfirm={confirm} onCancel={cancel}>
                  <Tooltip title="付款" placement="left">
                    <a><Icon style={{fontSize: '22px', marginRight: '10px'}} type="dollar" theme="twoTone"/></a>
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
