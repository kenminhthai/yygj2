import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select,Cascader,Upload, Button,  Card, message,DatePicker } from 'antd';
import Link from 'umi/link'
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import moment from 'moment';
const  date = new Date();
const namespace = "platformData"
const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const Dragger = Upload.Dragger;
const headStyle={
  backgroundColor:"#E8E8E8",
}
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

const save = () => {
  message.info('保存成功！');
};
const client = new ApolloClient({
  uri: 'http://192.168.30.10:5000/graphql',
})
const ADD_Member = gql`
   mutation createEnterpriseMember($member:EnterpriseMemberInput){
   createEnterpriseMember(member:$member){
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
class ApplyMember extends React.Component{
  render(){
    let english = new RegExp("[a-zA-Z]");
    const { getFieldDecorator } = this.props.form;
    return(
      <ApolloProvider client={client} >
        <Mutation mutation={ADD_Member}>
          {(createEnterpriseMember, { data }) => (
            <Form onSubmit={e => {
                e.preventDefault();
              this.props.form.validateFields((err, values) => {
                console.log(values)
                if (!err) {
                  createEnterpriseMember({ variables:{member:{

                        enterprise_name:values.enterprise_name,
                        enterprise_english_name:values.enterprise_english_name,
                        enterprise_abbreviation:values.enterprise_abbreviation,
                        in_the_area:parseInt(values.in_the_area),
                        enterprise_membership_type:values.enterprise_membership_type,
                        industry:parseInt(values.industry),
                        enterprise_scale:parseInt(values.enterprise_scale),
                        organization_code:values.organization_code,
                        business_registration_number:parseInt(values.business_registration_number),
                        institutional_credit_code:values.institutional_credit_code,
                        date_of_enterprise_registration:values.date_of_enterprise_registration.format('YYYY-MM-DD'),
                        corporate_contact_number:values.corporate_contact_number,
                        corporate_fax:values.corporate_fax,
                        legal_person_certificate_type:values.legal_person_certificate_type,
                        enterprise_legal_person:values.enterprise_legal_person,
                        corporate_contacts:values.corporate_contacts,
                        enterprise_contact_job:values.enterprise_contact_job,
                        business_contact_cell_phone:values.business_contact_cell_phone,
                      }}}).then(message.info("提交成功"));
                }
              });
              }}>
                <Card title={<b>企业基本信息</b>} headStyle={headStyle} bordered={true} className={styles.cardbottom}>
                  <FormItem {...formItemOneLayout} label={"企业名称"} >
                    {getFieldDecorator('enterprise_name', {
                      rules: [{ required: false, message: '请输入企业名称!' }],
                      initialValue:'',
                    })(
                      <Input/>
                    )}
                  </FormItem>
                  <FormItem {...formItemOneLayout} label={"企业英文名称"} >
                    {getFieldDecorator('enterprise_english_name', {
                      rules: [{ required: false, message: '请输入企业英文名称!' },
                              {pattern:english,message:'请输入英文！'},
                      ],
                      initialValue:'',
                    })(
                    <Input />
                    )}
                  </FormItem>
                  <FormItem {...formItemOneLayout} label={"企业简称"} >
                    {getFieldDecorator('enterprise_abbreviation',{})(
                    <Input  />
                    )}
                  </FormItem>
                  <Row>
                    <Col span={16} offset={1}>
                      <FormItem {...formItemTwoLayout_1} label={"所在地区"} >
                        {getFieldDecorator('in_the_area', {
                          rules: [{ required: false, message: '请选择所在地区！' }],
                          initialValue:'',
                        })(
                        <Cascader options={options} />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={7} pull={1}>
                      <FormItem {...formItemTwoLayout_2} label={"企业会员类型"} >
                        {getFieldDecorator('enterprise_membership_type',{
                          initialValue:'',
                        })(
                        <Select >
                          <Option value="1">医药商业</Option>
                          <Option value="2">医药工业</Option>
                          <Option value="3">医药服务</Option>
                        </Select>
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row >
                    <Col span={8}>
                      <FormItem {...formItemThreeLayout} label={"所属行业"} >
                        {getFieldDecorator('industry',{
                          initialValue:'',
                        })(
                        <Select >
                          <Option value="1">农、林、牧、渔业</Option>
                          <Option value="2">采矿业</Option>
                          <Option value="3">制造业</Option>
                          <Option value="4">信息传输、计算机服务和软件业</Option>
                        </Select>
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8} >
                      <FormItem {...formItemThreeLayout} label={"企业性质"} >
                        {getFieldDecorator('enterprise_membership_xingzhi',{
                          initialValue:'',
                        })(
                        <Select >
                          <Option value="1">国有企业</Option>
                          <Option value="2">集体企业</Option>
                          <Option value="3">联营企业</Option>
                          <Option value="4">私营企业</Option>
                        </Select>
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8} >
                      <FormItem {...formItemThreeLayout} label={"企业规模"} >
                        {getFieldDecorator('enterprise_scale',{
                          initialValue:'',
                        })(
                        <Select >
                          <Option value="1">特大型</Option>
                          <Option value="2">大型</Option>
                          <Option value="3">中型</Option>
                          <Option value="4">小型</Option>
                        </Select>
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row >
                    <Col span={8}>

                      <FormItem {...formItemThreeLayout} label={"组织机构代码"} >
                        {getFieldDecorator('organization_code',{
                          initialValue:'',
                        })(
                        <Input />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8} >
                      <FormItem {...formItemThreeLayout} label={"工商登记注册号"} >
                        {getFieldDecorator('business_registration_number',{
                          initialValue:'',
                        })(
                        <Input />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8}>
                      <FormItem {...formItemThreeLayout} label={"机构信用代码"} >
                        {getFieldDecorator('institutional_credit_code',{
                          initialValue:'',
                        })(
                        <Input  />
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row >
                    <Col span={8} >
                      <FormItem {...formItemThreeLayout} label={"企业注册日期"} >
                        {getFieldDecorator('date_of_enterprise_registration',{
                        })(
                        <DatePicker />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8}>
                      <FormItem {...formItemThreeLayout} label={"企业联系电话"} >
                        {getFieldDecorator('corporate_contact_number',{
                          initialValue:moment(date,("YYYY-MM-DD")),
                        })(
                        <Input />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8}>
                      <FormItem {...formItemThreeLayout} label={"企业传真"} >
                        {getFieldDecorator('corporate_fax',{
                          initialValue:'',
                        })(
                        <Input />
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
                          initialValue:'',
                        })(
                        <Input />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8} >
                      <FormItem {...formItemThreeLayout}  label={"法人证件类型"} >
                        {getFieldDecorator('legal_person_certificate_type',{
                          initialValue:'',
                        })(
                        <Select >
                          <Option value="1">身份证</Option>
                          <Option value="2">居住证</Option>
                          <Option value="3" >签证</Option>
                          <Option value="4">护照</Option>
                          <Option value="5">军人证</Option>
                          <Option value="6">驾驶证</Option>
                        </Select>
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8}>
                      <FormItem {...formItemThreeLayout}  label={"法人证件号码"} >
                        {getFieldDecorator('legal_person_certificate_number',{
                          initialValue:'',
                        })(
                        <Input />
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
                          initialValue:'',
                        })(
                        <Input  />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8} >
                      <FormItem {...formItemThreeLayout} label={"企业联系人职务"} >
                        {getFieldDecorator('enterprise_contact_job',{
                          initialValue:'',
                        })(
                        <Input  />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8}>
                      <FormItem {...formItemThreeLayout} label={"联系人手机"} >
                        {getFieldDecorator('business_contact_cell_phone',{
                          initialValue:'',
                        })(
                        <Input  />
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                </Card>
                <Card title={<b>上传文件</b>} headStyle={headStyle} className={styles.cardbottom}>
                  <FormItem {...formItemOneLayout}  label={"营业执照"} >
                    <Dragger  >
                      <p className="ant-upload-text">点击上传营业执照</p>
                    </Dragger>
                  </FormItem>
                  <FormItem {...formItemOneLayout}  label={"法人身份证件（正面"} >
                    <Dragger  >
                      <p className="ant-upload-text">点击上传法人身份证件（正面）</p>
                    </Dragger>
                  </FormItem>
                  <FormItem {...formItemOneLayout}  label={"法人身份证件（反面）"} >
                    <Dragger  >
                      <p className="ant-upload-text">点击上传法人身份证件（反面）</p>
                    </Dragger>
                  </FormItem>
                  <FormItem {...formItemOneLayout}  label={"平台会员协议书"} >
                    <Dragger >
                      <p className="ant-upload-text">点击上传平台会员协议书</p>
                    </Dragger>
                  </FormItem>
                </Card>
                <div style={{textAlign:'center'}}>
                  <ButtonGroup >
                    <Button type="primary" htmlType="submit" className={styles.firstButton}>保存</Button>
                    <Link to={"/yygj/platform"}>
                    <Button type="primary">取消</Button>
                    </Link>
                  </ButtonGroup>
                </div>
              </Form>
          )}
        </Mutation>
      </ApolloProvider>
    )
  }

}
export default Form.create()(ApplyMember)
