import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select,Button, Card ,DatePicker} from 'antd';
import {message, Upload} from "antd/lib/index"
import { connect } from 'dva'
import moment from 'moment';
import  Link  from 'umi/link'
import { Mutation } from "react-apollo";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag"
const ButtonGroup = Button.Group
const FormItem = Form.Item;
const Dragger = Upload.Dragger;
const date = new Date()
const dateFormat = 'YYYY-MM-DD';
const headStyle={
  backgroundColor:"#E8E8E8",
}
const formItemThreeLayout = {
  labelCol: {
    sm: { span: 9 },
  },
  wrapperCol: {
    sm: { span: 12 },
  },
};
const client = new ApolloClient({
  uri: 'http://192.168.30.10:5000/graphql',
})
const ADD_Member = gql`
   mutation createEnterpriseMember($member:EnterpriseMemberInput){
   createEnterpriseMember(member:$member){
   enterprise_name
   }
 }
 `;
function option() {
  message.success('操作完成');

}

const namespace = 'businessFrameData'
const mapStateToProps = (state) =>{
  const DataList               = state[namespace]
  const columns                = DataList.columns
  const data                   = DataList.data
  const buttons                = DataList.buttons
  const options_frameType      = DataList.options_frameType
  const options_frameCharacter = DataList.options_frameCharacter
  const buttons_addFrame       = DataList.buttons_page_addFrame
  return{
    columns,
    data,
    buttons,
    options_frameType,
    options_frameCharacter,
    buttons_addFrame,
  }
}
@connect(mapStateToProps)
class framePresure extends React.Component{
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <ApolloProvider client={client}>
        <Mutation mutation={ADD_Member}>
          {(createEnterpriseMember, { data }) => (
        <Form onSubmit={e=>{
          e.preventDefault();
          this.props.form.validateFields((err, fieldsValue) => {
            if (!err) {
              const values={
                ...fieldsValue,
                'gmt_create':fieldsValue['gmt_create'].format(dateFormat),
              }
              console.log('Received values of form: ', values);
              createEnterpriseMember({ variables:{member:{enterprise_name:values.gmt_create }}}).then(message.info("提交成功"));
            }
          });
        }}>
          <Card title={"基本信息"} headStyle={headStyle} className={styles.cardbottom}>
            <Row >
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"签订日期："} >
                  {getFieldDecorator('gmt_create', {
                    initialValue:moment(date, dateFormat)
                  })(
                  <DatePicker/>
                  )}
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"合同类型："} >
                  {getFieldDecorator('contract_type', {
                    initialValue:"框架协议",
                  })(
                  <Select >
                    {
                      this.props.options_frameType.map((item, index) => {
                        return(
                          <Option value={item.value} key={index} >{item.name}</Option>
                        )
                      })
                    }
                  </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"合同性质："} >
                  {getFieldDecorator('nature_of_contract', {
                    initialValue:"医药贸易",
                  })(
                  <Select >
                    {
                      this.props.options_frameCharacter.map((item, index) => {
                        return(
                          <Option value={item.value} key={index} >{item.name}</Option>
                        )
                      })
                    }
                  </Select>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row  >
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"合同维护方："} >
                  <Input disabled placeholder="登录会员" id="" />
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"合同确认方："} >
                  <Input  placeholder="" id="" />
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"合同编号："} >
                  <Input   id="" />
                </FormItem>
              </Col>
            </Row>
            <Row >
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"合同开始日期："} >
                  {getFieldDecorator('date_of_contract_signing', {
                    initialValue:moment(date, dateFormat)
                  })(
                  <DatePicker/>
                  )}
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"结束日期："} >
                  {getFieldDecorator('contract_expiration_date', {
                    initialValue:moment(date, dateFormat)
                  })(
                  <DatePicker/>
                  )}
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"合同文本："} >
                  <Dragger className={styles.D}>
                    点击上传合同电子文档
                  </Dragger>
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={"日期和用户"} headStyle={headStyle} className={styles.cardbottom}>
            <Row >
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"录入日期："} >
                  <DatePicker disabled={true} defaultValue={moment(date, dateFormat)}/>
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"录入用户："} >
                  <Input disabled placeholder="登录会员" id="" />
                </FormItem>
              </Col>
            </Row>
            <Row >
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"确认日期："} >
                  <DatePicker disabled={true} defaultValue={moment(date, dateFormat)}/>
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"确认用户："} >
                  <Input disabled placeholder="" id="" />
                </FormItem>
              </Col>
            </Row>
          </Card>
           <div align="center">
              <ButtonGroup>
                <Link to={"/yygj/business/syFramePreserve/"}>
                  <Button  type="primary" htmlType="submit"  style={{ marginRight:'5px',marginBottom:'10px'}} key={"保存"}>保存</Button>
                </Link>
                <Link to={"/yygj/business/syFramePreserve/"}>
                  <Button  type="primary" htmlType="submit" style={{ marginRight:'5px',marginBottom:'10px'}} key={"保存并发送"}>保存并发送</Button>
                </Link>
                <Link to={"/yygj/business/syFramePreserve/"}>
                  <Button  type="primary"  style={{ marginRight:'5px',marginBottom:'10px'}} key={"取消"}>取消</Button>
                </Link>
              </ButtonGroup>
           </div>
        </Form>)}
        </Mutation>
      </ApolloProvider>
    )
  }
}
export default Form.create()(framePresure)
