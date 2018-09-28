import  Link  from 'umi/link';
import {Popconfirm,Tooltip,Icon,message,Modal} from "antd";

const confirm = Modal.confirm;


function sendApply() {
  confirm({
    title: '确认发送申请吗?',
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

function deleteApply() {
  confirm({
    title: '确认删除申请吗?',
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
  namespace: 'serviceFinancingData',
  state: {
    columns:  [
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
        choose:'',
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
        url:'/yygj/service/financingRefund',
      },
    ],
    columns_apply:  [
      {
        title: '操作',
        dataIndex: 'operation',
        width:'80px',
        align:'center',
        render: (text, record, index) => {
          if ({record}.record.application_status == '待发送') {
            return(
              <div>
                  <Tooltip title="发送申请" placement="left">
                    <a onClick={sendApply}><Icon style={{fontSize: '22px', marginRight: '10px'}} type="mail" theme="twoTone"/></a>
                  </Tooltip>
                  <Tooltip title="删除申请" placement="right">
                    <a onClick={deleteApply}><Icon style={{fontSize: '22px'}} type="delete" theme="twoTone"/></a>
                  </Tooltip>
              </div>
            )
          }else {
            return;
          }
        }
      },
      {
        title: '申请编号',
        align:'center',
        dataIndex: 'ID',
        render:(text,record) => <Link to={{pathname:"/yygj/service/financingApply/financingDetail",application_status:{record}.record.application_status}}>{text}</Link>,
      },
      {
        title: '申请日期',
        align:'center',
        dataIndex: 'date_apply',
      },
      {
        title: '融资类型',
        align:'center',
        dataIndex: 'financing_type',
      },
      {
        title: '申请机构',
        align:'center',
        dataIndex: 'apply_org',
      },
      {
        title: '资金方',
        align:'center',
        dataIndex: 'capital_loaner',
      },
      {
        title: '所属订单',
        align:'center',
        dataIndex: 'order_superior',
        render:text =><Link to={"/yygj/service/financingApply/orderDetail"}> <a>{text}</a></Link>,
      },
      {
        title: '关联订单',
        align:'center',
        dataIndex: 'order_relevance',
        render:text =><Link to={"/yygj/service/financingApply/orderDetail"}> <a>{text}</a></Link>,
      },
      {
        title: '订单金额',
        align:'right',
        dataIndex: 'money_order',
      },
      {
        title: '剩余金额',
        align:'right',
        dataIndex: 'money_residue',
      },
      {
        title: '申请金额',
        align:'right',
        dataIndex: 'money_apply',
      },
      {
        title: '受理日期',
        align:'center',
        dataIndex: 'date_handle',
      },
      {
        title: '审批日期',
        align:'center',
        dataIndex: 'date_examine',
      },
      {
        title: '申请状态',
        align:'center',
        defaultSortOrder:'ascend',
        dataIndex: 'application_status',
      },
    ],

    data_apply: [
      {
        ID:'0000001',
        date_apply:'20180916',
        financing_type:'应收款',
        apply_org:'医药',
        capital_loaner:'服务',
        order_superior:'123312',
        order_relevance:'321123',
        money_order:'1200.00',
        money_residue:'200.00',
        money_apply:'200.00',
        date_handle:'20180916',
        date_examine:'20180917',
        application_status:'待发送',
      },
      {
        ID:'0000001',
        date_apply:'20180916',
        financing_type:'应收款',
        apply_org:'医药',
        capital_loaner:'服务',
        order_superior:'123312',
        order_relevance:'321123',
        money_order:'1200.00',
        money_residue:'200.00',
        money_apply:'200.00',
        date_handle:'20180916',
        date_examine:'20180917',
        application_status:'待发送',
      },
      {
        ID:'0000001',
        date_apply:'20180916',
        financing_type:'应收款',
        apply_org:'医药',
        capital_loaner:'服务',
        order_superior:'123312',
        order_relevance:'321123',
        money_order:'1200.00',
        money_residue:'200.00',
        money_apply:'200.00',
        date_handle:'20180916',
        date_examine:'20180917',
        application_status:'已发送',
      },
    ],
    buttons_apply:[
      {
        name:'申请新增',
        url:'/yygj/service/financingApply/addFinancing',
        fun:'',
      },
      {
        name:'申请发送',
        url:'/yygj/service/financingApply',
      },
      {
        name:'申请删除',
        url:'/yygj/service/financingApply',
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
