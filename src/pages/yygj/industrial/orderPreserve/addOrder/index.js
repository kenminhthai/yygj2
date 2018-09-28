import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select, DatePicker, Button, Table, Card, message } from 'antd';
import { connect } from 'dva';
import  Link  from 'umi/link';
import {Upload} from "antd/lib/index";
const Dragger = Upload.Dragger;
const ButtonGroup = Button.Group;
const FormItem = Form.Item;
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

const mapStateToProps = (state) =>{
  const commonData = state["commonData"];
  const colums = commonData.file.colums;
  const filelist = commonData.file.filelist;
  const colums2 = commonData.file2.colums;
  const filelist2 = commonData.file2.filelist;
  const industrialOrderData = state["industrialOrderData"];
  const buttons = industrialOrderData.buttons;
  return{
    colums, buttons, filelist, colums2, filelist2
  }
}

const ok = () =>{
  message.info("操作完成")
}

@connect(mapStateToProps)
class IndustrialAddOrder extends React.Component{
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
        <Form onSubmit={e => {
          e.preventDefault();
          this.props.form.validateFields((err, values) => {
            console.log(values)
          });
        }}>
          <Card title={"订单信息"} headStyle={headStyle} className={styles.cardbottom}>
            <Row >
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"合同性质"} >
                  {getFieldDecorator('contract_character', {
                    initialValue:'',
                  })(
                  <Select>
                    <Option value="zeng">医药贸易</Option>
                    <Option value="cheng">医药服务</Option>
                  </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"买方机构"} >
                  {getFieldDecorator('buyer_organization', {
                    initialValue:'',
                  })(
                  <Select>
                    <Option value="industrial">医药工业</Option>
                    <Option value="bussiness">医药商业</Option>
                    <Option value="service">医药服务</Option>
                  </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"卖方机构"} >
                  {getFieldDecorator('seller_organization', {
                    initialValue:'',
                  })(
                  <Input />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row >
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"所属合同"} >
                  {getFieldDecorator('belonging_contract', {
                    initialValue:'',
                  })(
                  <Select >
                    <Option value="hetong1">合同1</Option>
                    <Option value="hetong2">合同2</Option>
                    <Option value="hetong3">合同3</Option>
                    <Option value="hetong4">合同4</Option>
                  </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"订单日期"} >
                  {getFieldDecorator('order_date', {
                  })(
                  <DatePicker />
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"订单金额"} >
                  {getFieldDecorator('order_amount', {
                    initialValue:'',
                  })(
                  <Input placeholder="订单金额" id="" />
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"约定付款日"} >
                  {getFieldDecorator('agreed_payment_date', {
                  })(
                  <DatePicker />
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"关联订单"} >
                  {getFieldDecorator('associated_order', {
                  })(
                  <Select >
                    <Option value="industrial">订单1</Option>
                    <Option value="bussiness">订单2</Option>
                    <Option value="service">订单3</Option>
                    <Option value="platform">订单4</Option>
                  </Select>
                  )}
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={"订单明细/关联订单明细"} headStyle={headStyle} className={styles.cardbottom}>
            <div >
              <Table columns={this.props.colums2} dataSource={this.props.filelist2} size="small" />
            </div>
          </Card>
          <Card title={"发票信息"} headStyle={headStyle} className={styles.cardbottom}>
            <Row >
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"出票日期"} >
                  {getFieldDecorator('date_of_issue', {
                  })(
                  <DatePicker />
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"发票编号"} >
                  {getFieldDecorator('id', {
                    initialValue:'',
                  })(
                  <Input />
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"出票人"} >
                  {getFieldDecorator('drawer', {
                    initialValue:'',
                  })(
                  <Input disabled  />
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"发票抬头"} >
                  {getFieldDecorator('invoice_title', {
                    initialValue:'',
                  })(
                  <Input disabled />
                  )}
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={"上传文件"} headStyle={headStyle} className={styles.cardbottom}>
            <div >
              <FormItem {...formItemOneLayout}  label={"订单"} >
                <Dragger  >
                  <p className="ant-upload-text">点击上传订单</p>
                </Dragger>
              </FormItem>
              <FormItem {...formItemOneLayout}  label={"发票"} >
                <Dragger  >
                  <p className="ant-upload-text">点击上传发票</p>
                </Dragger>
              </FormItem>
            </div>
          </Card>
          <div style={{textAlign:'center'}}>
          <ButtonGroup>
            <Button onClick={ok} type="primary" htmlType="submit" style={{marginRight:'20px'}}>保存</Button>
            <Button onClick={ok} type="primary"  style={{marginRight:'20px'}}>保存并发送</Button>
            <Link to={"/yygj/industrial/orderPreserve"}>
              <Button type="primary"  style={{marginRight:'20px'}}>关闭</Button>
            </Link>
          </ButtonGroup>
          </div>
        </Form>
      </div>
    )
  }

}
export default Form.create()(IndustrialAddOrder)
