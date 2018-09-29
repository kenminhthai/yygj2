import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select,Cascader, Table,Button, Card,DatePicker } from 'antd';
import { connect } from 'dva';
import  Link  from 'umi/link';
import {message} from "antd/lib/index";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider,Query,Mutation  } from "react-apollo";
const headStyle={
  backgroundColor:"#E8E8E8",
}
const namespace = 'commonData';
const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const formItemOneLayout = {
  labelCol: {
    sm: { span: 3 },
  },
  wrapperCol: {
    sm: { span: 20 },
  },
};
const formItemTwoLayout_1 = {
  labelCol: {
    sm: { span: 3 },
  },
  wrapperCol: {
    sm: { span: 18 },
  },
};
const formItemTwoLayout_2 = {
  labelCol: {
    sm: { span: 10 },
  },
  wrapperCol: {
    sm: { span: 14 },
  },
};
const formItemThreeLayout = {
  labelCol: {
    sm: { span: 9 },
  },
  wrapperCol: {
    sm: { span: 12 },
  },
};

const options = [{
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
}];
const agree = () => {
  message.info('审核通过！');
};
const client = new ApolloClient({
  uri: "http://192.168.30.10:5000/graphql"
});
const queryMember = gql`
  query member($id:Int!){
  member(id:$id){
  id
  enterprise_name
   enterprise_english_name
   enterprise_abbreviation
   in_the_area
   enterprise_membership_type
   enterprise_scale
   organization_code
   business_registration_number
   institutional_credit_code
   date_of_enterprise_registration
   corporate_contact_number
   corporate_fax
   legal_person_certificate_type
   enterprise_legal_person
   corporate_contacts
   enterprise_contact_job
   business_contact_cell_phone
  }
}
`;

const mapStateToProps = (state) =>{
  const commonData = state["commonData"];
  const colums = commonData.file.colums;
  const filelist = commonData.file.filelist;
  const platformData = state["platformData"];
  const buttons = platformData.buttons;
  const citychoice = platformData.citychoice
  return{
    colums, buttons, filelist, citychoice
  }
}

@connect(mapStateToProps)
class ApplyCheck extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    const id = parseInt(this.props.location.id);
    console.log("***************id:   ",id)
    return(
      <ApolloProvider client={client}>
        <Query query={queryMember} variables={{id:id}}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            console.log(data)
            return (
              <Mutation >
                {(createEnterpriseMember, { data }) => (
                  <Form onSubmit={e=>{
                e.preventDefault();
              }}>
                <Card title={<b>企业基本信息</b>} headStyle={headStyle} bordered={true} className={styles.cardbottom}>
                  <FormItem {...formItemOneLayout} label={"企业名称"} >
                    {getFieldDecorator('enterprise_name', {
                      initialValue:data.member.enterprise_name,
                    })(
                      <Input disabled/>
                    )}
                  </FormItem>
                  <FormItem {...formItemOneLayout} label={"企业英文名称"} >
                    {getFieldDecorator('enterprise_english_name', {
                      initialValue:data.enterprise_english_name,
                    })(
                      <Input  disabled/>
                    )}
                  </FormItem>
                  <FormItem {...formItemOneLayout} label={"企业简称"} >
                    {getFieldDecorator('enterprise_abbreviation',{
                      initialValue:data.enterprise_abbreviation,
                    })(
                      <Input disabled  />
                    )}
                  </FormItem>
                  <Row>
                    <Col span={16} offset={1}>
                      <FormItem {...formItemTwoLayout_1} label={"所在地区"} >
                        {getFieldDecorator('in_the_area', {
                          rules: [{ required: false, message: '请选择所在地区！' }],
                          initialValue:data.in_the_area,
                        })(
                          <Cascader disabled options={options} />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={7} pull={1}>
                      <FormItem {...formItemTwoLayout_2} label={"企业会员类型"} >
                        {getFieldDecorator('enterprise_membership_type',{
                          initialValue:data.enterprise_membership_type,
                        })(
                          <Select  disabled>
                            <Option value="shagnye">医药商业</Option>
                            <Option value="gongye">医药工业</Option>
                            <Option value="fuwu">医药服务</Option>
                          </Select>
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row >
                    <Col span={8}>
                      <FormItem {...formItemThreeLayout} label={"所属行业"} >
                        {getFieldDecorator('industry',{
                          initialValue:data.industry,
                        })(
                          <Select disabled >
                            <Option value="nong">农、林、牧、渔业</Option>
                            <Option value="cai">采矿业</Option>
                            <Option value="zhi">制造业</Option>
                            <Option value="xin">信息传输、计算机服务和软件业</Option>
                          </Select>
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8} >
                      <FormItem {...formItemThreeLayout} label={"企业性质"} >
                        {getFieldDecorator('enterprise_membership_xingzhi',{
                          initialValue:'',
                        })(
                          <Select disabled >
                            <Option value="guoyou">国有企业</Option>
                            <Option value="jiti">集体企业</Option>
                            <Option value="lianyin">联营企业</Option>
                            <Option value="siyin">私营企业</Option>
                          </Select>
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8} >
                      <FormItem {...formItemThreeLayout} label={"企业规模"} >
                        {getFieldDecorator('enterprise_scale',{
                          initialValue:data.enterprise_scale,
                        })(
                          <Select disabled >
                            <Option value="td">特大型</Option>
                            <Option value="d">大型</Option>
                            <Option value="z">中型</Option>
                            <Option value="x">小型</Option>
                          </Select>
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row >
                    <Col span={8}>

                      <FormItem {...formItemThreeLayout} label={"组织机构代码"} >
                        {getFieldDecorator('organization_code',{
                          initialValue:data.organization_code,
                        })(
                          <Input disabled />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8} >
                      <FormItem {...formItemThreeLayout} label={"工商登记注册号"} >
                        {getFieldDecorator('business_registration_number',{
                          initialValue:data.business_registration_number,
                        })(
                          <Input disabled />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8}>
                      <FormItem {...formItemThreeLayout} label={"机构信用代码"} >
                        {getFieldDecorator('institutional_credit_code',{
                          initialValue:data.institutional_credit_code,
                        })(
                          <Input disabled  />
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row >
                    <Col span={8} >
                      <FormItem {...formItemThreeLayout} label={"企业注册日期"} >
                        {getFieldDecorator('date_of_enterprise_registration',{
                          initialValue:data.date_of_enterprise_registration,
                        })(
                          <DatePicker disabled />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8}>
                      <FormItem {...formItemThreeLayout} label={"企业联系电话"} >
                        {getFieldDecorator('corporate_contact_number',{
                          initialValue:data.corporate_contact_number,
                        })(
                          <Input disabled />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8}>
                      <FormItem {...formItemThreeLayout} label={"企业传真"} >
                        {getFieldDecorator('corporate_fax',{
                          initialValue:data.corporate_fax,
                        })(
                          <Input disabled />
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                </Card>
                <Card title={<b>企业法人信息</b>} headStyle={headStyle} className={styles.cardbottom}>
                  <Row >
                    <Col span={8}>
                      <FormItem  {...formItemThreeLayout} label={"企业法人"} >
                        {getFieldDecorator('enterprise_legal_person',{
                          initialValue:data.enterprise_legal_person,
                        })(
                          <Input disabled />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8} >
                      <FormItem {...formItemThreeLayout}  label={"法人证件类型"} >
                        {getFieldDecorator('legal_person_certificate_type',{
                          initialValue:data.legal_person_certificate_type,
                        })(
                          <Select disabled >
                            <Option value="jack">身份证</Option>
                            <Option value="lucy">居住证</Option>
                            <Option value="disabled" >签证</Option>
                            <Option value="Yiminghe">护照</Option>
                            <Option value="Yiminghe">军人证</Option>
                            <Option value="Yiminghe">驾驶证</Option>
                          </Select>
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8}>
                      <FormItem {...formItemThreeLayout}  label={"法人证件号码"} >
                        {getFieldDecorator('legal_person_certificate_number',{
                          initialValue:'',
                        })(
                          <Input disabled />
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                </Card>
                <Card title={<b>企业联系人信息</b>} headStyle={headStyle} className={styles.cardbottom}>
                  <Row >
                    <Col span={8}>
                      <FormItem {...formItemThreeLayout} label={"企业联系人"} >
                        {getFieldDecorator('corporate_contacts',{
                          initialValue:data.corporate_contacts,
                        })(
                          <Input disabled  />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8} >
                      <FormItem {...formItemThreeLayout} label={"企业联系人职务"} >
                        {getFieldDecorator('enterprise_contact_job',{
                          initialValue:data.enterprise_contact_job,
                        })(
                          <Input  disabled />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8}>
                      <FormItem {...formItemThreeLayout} label={"联系人手机"} >
                        {getFieldDecorator('business_contact_cell_phone',{
                          initialValue:data.business_contact_cell_phone,
                        })(
                          <Input  disabled />
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                </Card>
                <Card title={"文件列表"} headStyle={headStyle} bordered={true} className={styles.cardbottom}>
                  <div style={{paddingLeft:'120px',paddingRight:'120px'}}>
                    <Table columns={this.props.colums} dataSource={this.props.filelist} size="small" />
                  </div>
                </Card>
                <div style={{textAlign:'center'}}>
                  <ButtonGroup>
                    <Button type="primary" className={styles.firstButton} onClick={agree}>同意</Button>
                    <Button type="primary" className={styles.firstButton}>拒绝</Button>
                    <Link to={"/yygj/platform"}>
                      <Button type="primary">关闭</Button>
                    </Link>
                  </ButtonGroup>
                </div>
              </Form>
                  )}
              </Mutation>
            )
          }}
        </Query>
      </ApolloProvider>
    )
  }

}
export default Form.create()(ApplyCheck)
