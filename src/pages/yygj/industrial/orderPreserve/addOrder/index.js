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
    return(
      <div>
        <Form>
          <Card title={"订单信息"} headStyle={headStyle} className={styles.cardbottom}>
            <Row >
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"合同性质"} >
                  <Select defaultValue="zeng" >
                    <Option value="zeng">医药贸易</Option>
                    <Option value="cheng">医药服务</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"买方机构"} >
                  <Select defaultValue="医药工业" >
                    <Option value="industrial">医药工业</Option>
                    <Option value="bussiness">医药商业</Option>
                    <Option value="service">医药服务</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"卖方机构"} >
                  <Input placeholder={"卖方机构"} id=""/>
                </FormItem>
              </Col>
            </Row>
            <Row >
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"所属合同"} >
                  <Select defaultValue="hetong1" >
                    <Option value="hetong1">合同1</Option>
                    <Option value="hetong2">合同2</Option>
                    <Option value="hetong3">合同3</Option>
                    <Option value="hetong4">合同4</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"订单日期"} >
                  <DatePicker />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"订单金额"} >
                  <Input placeholder="订单金额" id="" />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"约定付款日"} >
                  <DatePicker />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"关联订单"} >
                  <Select defaultValue="industrial" >
                    <Option value="industrial">订单1</Option>
                    <Option value="bussiness">订单2</Option>
                    <Option value="service">订单3</Option>
                    <Option value="platform">订单4</Option>
                  </Select>
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
                  <DatePicker />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"发票编号"} >
                  <Input placeholder="发票编号" id="" />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"出票人"} >
                  <Input disabled placeholder="出票人" id="" />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"发票抬头"} >
                  <Input disabled placeholder="发票抬头" id="" />
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
            <Button onClick={ok} type="primary" style={{marginRight:'20px'}}>保存</Button>
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
export default IndustrialAddOrder
