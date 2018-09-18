export default {
  namespace: 'platformData',
  state: {
    colums:[
      {
        title: '申请编号',
        dataIndex: 'application_number',
        render:text => <a href="javascript:;">{text}</a>
      },
      {
        title: '申请日期',
        dataIndex: 'date_of_application',
      },
      {
        title: '企业会员类型',
        dataIndex: 'enterprise_membership_type',
      },
      {
        title: '企业名称',
        dataIndex: 'enterprise_name',
      },
      {
        title: '企业性质',
        dataIndex: 'enterprise_nature',
      },
      {
        title: '企业法人',
        dataIndex: 'enterprise_legal_person',
      },
      {
        title: '企业联系人',
        dataIndex: 'corporate_contacts',
      },
      {
        title: '联系人手机',
        dataIndex: 'business_contact_cell_phone',
      },
      {
        title: '申请状态',
        dataIndex: 'application_status',
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
