import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select, DatePicker,  Button, Table, Card, message } from 'antd';
import { connect } from 'dva';
import  Link  from 'umi/link';

const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const formItemOneLayout = {
  labelCol: {
    sm: { span: 2 },
  },
  wrapperCol: {
    sm: { span: 22 },
  },
};
const formItemTwoLayout = {
  labelCol: {
    sm: { span: 4 },
  },
  wrapperCol: {
    sm: { span: 20 },
  },
};
const formItemThreeLayout = {
  labelCol: {
    sm: { span: 7 },
  },
  wrapperCol: {
    sm: { span: 17 },
  },
};
const formItemFourLayout = {
  labelCol: {
    sm: { span: 8 },
  },
  wrapperCol: {
    sm: { span: 16 },
  },
};

const mapStateToProps = (state) =>{
  const commonData = state["commonData"];
  const colums = commonData.file.colums;
  const filelist = commonData.file.filelist;
  const colums2 = commonData.file2.colums;
  const filelist2 = commonData.file2.filelist;
  const businessOrderData = state["industrialOrderData"];
  const buttons = businessOrderData.buttons;
  return{
    colums, filelist, buttons,colums2,filelist2
  }
}

const ok = ()=>{
  message.info("操作完成")
}

@connect(mapStateToProps)
class IndustrialOrderDetail extends React.Component{
  render(){
    return(
      <div>
        <Form>
          <Card>
            <Row gutter={24}>
              <Col span={12}>
                <FormItem  {...formItemTwoLayout} label={"买方机构"} >
                  <Input disabled placeholder={"买方机构"} id=""/>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem {...formItemTwoLayout} label={"卖方机构"} >
                  <Select disabled defaultValue="医药工业" >
                    <Option value="industrial">医药工业</Option>
                    <Option value="bussiness">医药商业</Option>
                    <Option value="service">医药服务</Option>
                    <Option value="platform">医药平台</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={6}>
                <FormItem {...formItemFourLayout} label={"所属合同"} >
                  <Select defaultValue="hetong1" disabled>
                    <Option value="hetong1">合同1</Option>
                    <Option value="hetong2">合同2</Option>
                    <Option value="hetong3">合同3</Option>
                    <Option value="hetong4">合同4</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem {...formItemFourLayout} label={"订单日期"} >
                  <DatePicker disabled/>
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem {...formItemFourLayout} label={"订单金额"} >
                  <Input disabled placeholder="订单金额" id="" />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem {...formItemFourLayout} label={"约定付款日"} >
                  <DatePicker disabled/>
                </FormItem>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <FormItem {...formItemTwoLayout} label={"关联订单"} >
                  <Select defaultValue="industrial" disabled>
                    <Option value="industrial">订单1</Option>
                    <Option value="bussiness">订单2</Option>
                    <Option value="service">订单3</Option>
                    <Option value="platform">订单4</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={"关联订单明细"}>
            <div>
              <Table columns={this.props.colums2} dataSource={this.props.filelist2} size="small" />
            </div>
          </Card>
          <Card title={"发票信息"}>
            <Row gutter={24}>
              <Col span={6}>
                <FormItem {...formItemFourLayout} label={"出票日期"} >
                  <DatePicker disabled />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem {...formItemFourLayout} label={"发票编号"} >
                  <Input disabled placeholder="发票编号" id="" />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem {...formItemFourLayout} label={"出票人"} >
                  <Input disabled placeholder="出票人" id="" />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem {...formItemFourLayout} label={"发票抬头"} >
                  <Input disabled placeholder="发票抬头" id="" />
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={"上传文件"}>
            <div style={{width:'50%'}}>
              <Table columns={this.props.colums} dataSource={this.props.filelist} size="small" />
            </div>
          </Card>
          <Card >
            <Row gutter={24}>
              <Col offset={10}>
                <div>
                <Link  to={"/yygj/industrial/orderPreserve"}><Button type={"primary"}>关闭</Button></Link>
                </div>
              </Col>
            </Row>
          </Card>
        </Form>
      </div>
    )
  }

}
export default IndustrialOrderDetail
