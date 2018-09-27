import {Popconfirm,Tooltip,Icon,message} from 'antd'
import Link from 'umi/link'
function confirm(e) {
  message.success('还款成功!');
}

function cancel(e) {
}
export default {
  namespace: 'industrialRefundData',
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
                <Popconfirm title="确定还款吗？" okText="还款" cancelText="取消" onConfirm={confirm} onCancel={cancel}>
                  <Tooltip title="还款" placement="left">
                    <a><Icon style={{fontSize: '22px', marginRight: '10px'}} type="money-collect" theme="twoTone"/></a>
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
        title: '款项编号',
        align:'center',
        dataIndex: 'ID',
      },
      {
        title: '融资协议',
        align:'center',
        dataIndex: 'frameID',
        render:(text,record) =><Link to={{pathname:"/yygj/industrial/financingRefund/financingDetail",status:{record}.record.status}}><a >{text}</a></Link>,
      },
      {
        title: '所属申请',
        align:'center',
        dataIndex: 'relevanceApply',
      },
      {
        title: '资金方',
        align:'center',
        dataIndex: 'capital_loaner',
      },
      {
        title: '放款日期',
        align:'center',
        dataIndex: 'date_begin',
      },
      {
        title: '资金规模',
        align:'center',
        dataIndex: 'capital_scale',
      },
      {
        title: '资金价格',
        align:'right',
        dataIndex: 'capital_price',
      },
      {
        title: '本息合计',
        align:'right',
        dataIndex: 'sum',
      },
      {
        title: '到期日期',
        align:'center',
        dataIndex: 'date_end',
      },
      {
        title: '到期状态',
        align:'center',
        dataIndex: 'status_date_end',
      },
      {
        title: '实际还款日期',
        align:'center',
        dataIndex: 'date_end_fact',
      },
      {
        title: '还款状态',
        align:'center',
        defaultSortOrder:'ascend',
        dataIndex: 'status_refund',
      },
    ],
    data: [
      {
        ID:'20180916023132',
        frameID:'0001',
        relevanceApply:'213213',
        capital_loaner:'XX投资公司',
        date_begin:'20180916',
        capital_scale:'1000万',
        capital_price:'80%',
        sum:'1200万',
        date_end:'20181016',
        status_date_end:'未到期',
        date_end_fact:'20180920',
        status_refund:'待还款',

      },
      {
        ID:'20180916023132',
        frameID:'0001',
        relevanceApply:'213213',
        capital_loaner:'XX投资公司',
        date_begin:'20180916',
        capital_scale:'1000万',
        capital_price:'80%',
        sum:'1200万',
        date_end:'20181016',
        status_date_end:'未到期',
        date_end_fact:'20180920',
        status_refund:'待还款',

      },
      {
        ID:'20180916023132',
        frameID:'0001',
        relevanceApply:'213213',
        capital_loaner:'XX投资公司',
        date_begin:'20180916',
        capital_scale:'1000万',
        capital_price:'80%',
        sum:'1200万',
        date_end:'20181016',
        status_date_end:'未到期',
        date_end_fact:'20180920',
        status_refund:'已还款',

      },
    ],
    buttons:[
      {
        name:'还款',
        url:'/yygj/industrial/financingRefund',
      },
    ],
    columns_apply:  [
      {
        title: '',
        dataIndex: 'choose',
        render:text => <a href="javascript:;">{text}</a>,
      },
      {
        title: '申请编号',
        dataIndex: 'ID',
        render:(text,record) => <Link to={{pathname:"/yygj/industrial/financingRefund/financingDetail",status:{record}.record.status}}><a >{text}</a></Link>,
      },
      {
        title: '申请日期',
        dataIndex: 'date_apply',
      },
      {
        title: '融资类型',
        dataIndex: 'financing_type',
      },
      {
        title: '申请机构',
        dataIndex: 'apply_org',
      },
      {
        title: '资金方',
        dataIndex: 'capital_loaner',
      },
      {
        title: '所属订单',
        dataIndex: 'order_superior',
        render:text => <a href="/yygj/industrial/financingApply/orderDetail">{text}</a>,
      },
      {
        title: '关联订单',
        dataIndex: 'order_relevance',
        render:text => <a href="/yygj/industrial/financingApply/orderDetail">{text}</a>,
      },
      {
        title: '订单金额',
        dataIndex: 'money_order',
      },
      {
        title: '剩余金额',
        dataIndex: 'money_residue',
      },
      {
        title: '申请金额',
        dataIndex: 'money_apply',
        width:80,
      },
      {
        title: '受理日期',
        dataIndex: 'date_handle',
      },
      {
        title: '审批日期',
        dataIndex: 'date_examine',
      },
      {
        title: '申请状态',
        dataIndex: 'status_apply',
      },
    ],
    data_apply: [
      {
        choose:'',
        ID:'201823132',
        date_apply:'20180916',
        financing_type:'应收款融资',
        apply_org:'上海链石科技有限公司',
        capital_loaner:'赢时胜科技股份有限公司',
        order_superior:'201823132',
        order_relevance:'201823132',
        money_order:'1200',
        money_residue:'200',
        money_apply:'200',
        date_handle:'20180916',
        date_examine:'20180917',
        status_apply:'待发送',
      },
      {
        choose:'',
        ID:'201823132',
        date_apply:'20180916',
        financing_type:'应收款融资',
        apply_org:'上海链石科技有限公司',
        capital_loaner:'赢时胜科技股份有限公司',
        order_superior:'201823132',
        order_relevance:'201823132',
        money_order:'1200',
        money_residue:'200',
        money_apply:'200',
        date_handle:'20180916',
        date_examine:'20180917',
        status_apply:'待发送',
      },
      {
        choose:'',
        ID:'201823132',
        date_apply:'20180916',
        financing_type:'应收款融资',
        apply_org:'上海链石科技有限公司',
        capital_loaner:'赢时胜科技股份有限公司',
        order_superior:'201823132',
        order_relevance:'201823132',
        money_order:'1200',
        money_residue:'200',
        money_apply:'200',
        date_handle:'20180916',
        date_examine:'20180917',
        status_apply:'待发送',
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
