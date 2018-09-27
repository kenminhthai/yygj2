import Link from 'umi/link'
import {Popconfirm, Tooltip,Icon } from 'antd'

import {message} from "antd/lib/index";
function insure() {
  alert("已付款")
}
function confirm(e) {
  message.success('付款成功');
}

function cancel(e) {
}
export default {
  namespace: 'industrialPayData',
  state: {
    columns: [
      {
        title: '操作',
        dataIndex: 'operation',
        width:'50px',
        render: (text, record, index) => {
          if ({record}.record.status == '待付') {
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
        render:text => <Link to={"/yygj/industrial/gypay/orderDetail"}><a >{text}</a></Link>,
      },
      {
        title: '应付日期',
        dataIndex: 'date_typeIn',
      },

      {
        title: '收款方机构',
        dataIndex: 'gathering_org',
      },
      {
        title: '收款账户',
        dataIndex: 'gathering_account',
      },
      {
        title: '开户行',
        dataIndex: 'accountBank',
      },
      {
        title: '所属银行',
        dataIndex: 'Bank',
      },
      {
        title: '应付金额',
        dataIndex: 'num_payable',
        align:"right"
      },
      {
        title: '实付日期',
        dataIndex: 'date_OutOfPocket',
      },
      {
        title: '应付款状态',
        dataIndex: 'status',
      },

    ],
    data: [
      {
        choose:'',
        date_typeIn:'20180916',
        orderID:'0001',
        gathering_org:'XXX',
        gathering_account:'6210888888888888',
        accountBank:'上海工商银行',
        Bank:'工商银行',
        num_payable:'10000',
        date_OutOfPocket:'20180918',
        status:'待付',
      },
    ],
    buttons:[
      {
        name:'付款',
        url:'./gypay',
        fun:insure,
      },

    ],


  },
}
