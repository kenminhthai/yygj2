export default {
  namespace: 'commonData',
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
    citychoice:[
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children:[
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            children:[
              {
                value: 'xihu',
                label: 'West Lake',
              }
            ]
          }
        ]
      },
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        children:[
          {
            value: 'nanjing',
            label: 'Nanjing',
            children:[
              {
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
              }
            ]
          }
        ]
      },
    ],
    file:{
      colums:[
        {
          title: '文件类型',
          dataIndex: 'file_type',
        },
        {
          title: '文件',
          dataIndex: 'file',
          render:text => <a href="javascript:;">{text}</a>
        },
        {
          title: '',
          dataIndex: 'view',
          render:text => <a href="javascript:;">查看</a>
        },
      ],
      filelist:[
        {
          key:'1',
          file_type:'企业营业执照',
          file:'0000.pdf',
          view:''
        },
        {
          key:'2',
          file_type:'法人身份证正面',
          file:'0000.pdf',
          view:''
        },
        {
          key:'3',
          file_type:'法人身份证反面',
          file:'0000.pdf',
          view:''
        },
        {
          key:'4',
          file_type:'平台会员协议书',
          file:'0000.pdf',
          view:''
        },
      ],
    },
    file2:{
      colums:[
        {
          title: '序号',
          dataIndex: 'id',
        },
        {
          title: '商品名',
          dataIndex: 'name',
          render:text => <a href="javascript:;">{text}</a>
        },
      ],
      filelist:[
        {
          key:'1',
          id:'00001',
          name:'商品',
        },
        {
          key:'2',
          id:'00002',
          name:'商品2',
        },
        {
          key:'3',
          id:'00003',
          name:'商品3',
        },
        {
          key:'4',
          id:'00004',
          name:'商品4',
        },
      ],
    }
  }
};
