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
          dataIndex: 'index',
          key: 'index',
        }, {
          title: '药品名',
          dataIndex: 'medname',
          key: 'medname',
          render: text => <div>{text}</div>,
        }, {
          title: '剂型',
          dataIndex: 'medtype',
          key: 'medtype',
        }, {
          title: '规格',
          dataIndex: 'rule',
          key: 'rule',
        }, {
          title: '包装',
          dataIndex: 'pack',
          key: 'pack',
        }, {
          title: '单位',
          dataIndex: 'unit',
          key: 'unit',
        }, {
          title: '数量',
          dataIndex: 'sum',
          key: 'sum',
        }, {
          title: '批次',
          dataIndex: 'order',
          key: 'order',
        }, {
          title: '单价',
          dataIndex: 'price',
          key: 'price',
        }
      ],
      filelist:[
        {
          key: '1',
          index: '1',
          medname: '葡萄糖注射液',
          medtype: '注射液',
          rule:'50ml:0.45g',
          pack:'1',
          unit:'瓶',
          sum:50000,
          order:'',
          price:'2.35',
        },{
          key: '2',
          index: '2',
          medname: '葡萄糖氯化钠注射液',
          medtype: '注射液',
          rule:'500ml:25g:4.5g',
          pack:'1',
          unit:'袋',
          sum:10000,
          order:'',
          price:'5.32',
        },{
          key: '3',
          index: '3',
          medname: '阿奇霉素胶囊',
          medtype: '胶囊剂',
          rule:'0.5g(50万单位)',
          pack:'6',
          unit:'盒',
          sum:8000,
          order:'',
          price:'14.35',
        },{
          key: '4',
          index: '4',
          medname: '玉屏风颗粒',
          medtype: '颗粒剂',
          rule:'5g',
          pack:'15',
          unit:'盒',
          sum:100000,
          order:'',
          price:'24.35',
        },{
          key: '5',
          index: '5',
          medname: '叶酸片',
          medtype: '素片',
          rule:'5mg',
          pack:'100',
          unit:'瓶',
          sum:20000,
          order:'',
          price:'2.7',
        },{
          key: '6',
          index: '6',
          medname: '盐酸可乐定片',
          medtype: '素片',
          rule:'75ug',
          pack:'100',
          unit:'瓶',
          sum:20000,
          order:'',
          price:'11.5',
        }
      ],
    }
  }
};
