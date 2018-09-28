import Link from 'umi/link'

export default {
  namespace: 'platformData',
  state: {
    colums:[
      {
        title: '申请编号',
        dataIndex: 'id',
        render:(text,record) => <Link to={{pathname:'/yygj/platform/applycheck',id:{record}.record.id}}><a>{text}</a></Link>
      },
      {
        title: '申请日期',
        dataIndex: 'date_of_application',
      },
      {
        title: '创建时间',
        dataIndex: 'gmt_create',
      },
      {
        title: '录入人',
        dataIndex: 'gmt_create',
      },
      {
        title: '申请来源',
        dataIndex: 'source_of_application',
      },
      {
        title: '申请状态',
        dataIndex: 'application_status',
      },
      {
        title: '审核人',
        dataIndex: 'reviewer',
      },
      {
        title: '审核日期',
        dataIndex: 'audit_date',
      },
    ],
    memberlist:[
      {
        key:'1',
        application_number:'0001',
        date_of_application:'2020-10-20',
        enterprise_membership_type:'医药工业',
        enterprise_name:'强生！',
        enterprise_nature:'xxxx',
        enterprise_legal_person:'张三',
        corporate_contacts:'李四',
        business_contact_cell_phone:'10086',
        application_status:'待审核',
        audit_date:'',
      }
    ],
    buttons:[
      {
        name:'会员申请',
        url:'/yygj/platform/applyMember'
      },
      {
        name:'申请审核',
        url:'/yygj/platform/applyCheck'
      }
    ],
    citychoice:[{
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
          value: 'xihu',
          label: 'West Lake',
        }],
      }],
    }, {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
          value: 'zhonghuamen',
          label: 'Zhong Hua Men',
        }],
      }],
    }]
  }
};
