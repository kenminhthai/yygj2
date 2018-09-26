import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select, DatePicker, Button, Table, Card } from 'antd';
import { connect } from 'dva';
import  Link  from 'umi/link';


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
  const filelist = commonData.file.filelist;3
  const businessOrderData = state["industrialOrderData"];
  const buttons = businessOrderData.buttons;
  return{
    colums, filelist, buttons
  }
}

@connect(mapStateToProps)
class ServiceOrderDetail extends React.Component{
  render(){
    return(
      <div>

        <Form>
          <Card title={<b>订单信息</b>} headStyle={headStyle} className={styles.cardbottom}>
            <Row >
              <Col span={8}>
                <FormItem  {...formItemThreeLayout} label={"买方机构"} >
                  <Input disabled placeholder={"买方机构"} id=""/>
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"卖方机构"} >
                  <Select disabled defaultValue="医药工业" >
                    <Option value="industrial">医药工业</Option>
                    <Option value="bussiness">医药商业</Option>
                    <Option value="service">医药服务</Option>
                    <Option value="platform">医药平台</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"所属合同"} >
                  <Select disabled defaultValue="industrial" >
                    <Option value="industrial">合同1</Option>
                    <Option value="bussiness">合同2</Option>
                    <Option value="service">合同3</Option>
                    <Option value="platform">合同4</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row >
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"订单日期"} >
                  <DatePicker disabled/>
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"订单金额"} >
                  <Input disabled placeholder="订单金额" id="" />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"约定付款日"} >
                  <DatePicker disabled/>
                </FormItem>
              </Col>
            </Row>
            <Row >
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"关联订单"} >
                  <Select disabled defaultValue="框架1" >
                    <Option value="industrial">框架1</Option>
                    <Option value="bussiness">框架2</Option>
                    <Option value="service">框架3</Option>
                    <Option value="platform">框架4</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={<b>关联订单明细</b>} headStyle={headStyle} className={styles.cardbottom}>
            <div >
              <Table columns={this.props.colums} dataSource={this.props.filelist} size={"small"}/>
            </div>
          </Card>
          <Card title={<b>发票信息</b>}headStyle={headStyle} className={styles.cardbottom}>
            <Row >
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"出票日期"} >
                  <DatePicker disabled />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"发票编号"} >
                  <Input disabled placeholder="发票编号" id="" />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"出票人"} >
                  <Input disabled placeholder="出票人" id="" />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"发票抬头"} >
                  <Input disabled placeholder="发票抬头" id="" />
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={<b>上传文件</b>} headStyle={headStyle} className={styles.cardbottom}>
            <div >
              <Table columns={this.props.colums} dataSource={this.props.filelist} size={"small"}/>
            </div>
          </Card>
          <div style={{textAlign:'center'}}>
            <Link to={'/yygj/industrial/financingApply'}><Button type={"primary"}>关闭</Button></Link>
          </div>
        </Form>
      </div>
    )
  }

}
export default ServiceOrderDetail
