import  Link  from 'umi/link';
import {Popconfirm,Tooltip,Icon,message,Modal} from "antd";

const confirm = Modal.confirm;


function refund() {
  confirm({
    title: '确认还款吗?',
    okText: '确定',
    cancelText: '取消',
    centered:true,
    onOk() {
      message.success('还款成功！');
    },
    onCancel() {
    },
  });
}

export default {
  namespace: 'serviceRefundData',
  state: {
    columns:  [
      {
        title: '操作',
        dataIndex: 'operation',
        width:'80px',
        align:'center',
        render: (text, record, index) => {
          if ({record}.record.status_refund == '待还款') {
            return(
              <div>
                  <Tooltip title="还款" placement="left">
                    <a onClick={refund}><Icon style={{fontSize: '22px', marginRight: '10px'}} type="money-collect" theme="twoTone"/></a>
                  </Tooltip>
              </div>
            )
          }else {
            return;
          }
        }
      },
      {
        title: '款项编号',
        dataIndex: 'ID',
      },
      {
        title: '融资协议',
        dataIndex: 'frameID',
        render:text => <Link to={'/yygj/service/financingRefund/financingDetail'}><a>{text}</a></Link>,
      },
      {
        title: '所属申请',
        dataIndex: 'relevanceApply',
      },
      {
        title: '资金方',
        dataIndex: 'capital_loaner',
      },
      {
        title: '放款日期',
        dataIndex: 'date_begin',
      },
      {
        title: '资金规模',
        dataIndex: 'capital_scale',
      },
      {
        title: '资金价格',
        dataIndex: 'capital_price',
      },
      {
        title: '本息合计',
        dataIndex: 'sum',
      },
      {
        title: '到期日期',
        dataIndex: 'date_end',
      },
      {
        title: '到期状态',
        dataIndex: 'status_date_end',
      },
      {
        title: '实际还款日期',
        dataIndex: 'date_end_fact',
      },
      {
        title: '还款状态',
        dataIndex: 'status_refund',
      },
    ],
    data: [
      {
        ID:'0000001',
        frameID:'0001',
        relevanceApply:'213213',
        capital_loaner:'XX投资公司',
        date_begin:'2018-09-16',
        capital_scale:'1000万',
        capital_price:'80%',
        sum:'1200万',
        date_end:'2018-10-16',
        status_date_end:'未到期',
        date_end_fact:'2018-09-20',
        status_refund:'待还款',
      },
      {
        ID:'0000001',
        frameID:'0001',
        relevanceApply:'213213',
        capital_loaner:'XX投资公司',
        date_begin:'2018-09-16',
        capital_scale:'1000万',
        capital_price:'80%',
        sum:'1200万',
        date_end:'2018-10-16',
        status_date_end:'未到期',
        date_end_fact:'2018-09-20',
        status_refund:'待还款',
      },
      {
        ID:'0000001',
        frameID:'0001',
        relevanceApply:'213213',
        capital_loaner:'XX投资公司',
        date_begin:'2018-09-16',
        capital_scale:'1000万',
        capital_price:'80%',
        sum:'1200万',
        date_end:'2018-10-16',
        status_date_end:'未到期',
        date_end_fact:'2018-09-20',
        status_refund:'已还款',
      },
    ],
    buttons:[
      {
        name:'还款',
        url:'/yygj/service/financingRefund',
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
