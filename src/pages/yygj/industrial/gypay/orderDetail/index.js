import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select, DatePicker,  Button, Table, Card, message } from 'antd';
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
  const filelist = commonData.file.filelist;
  const colums2 = commonData.file2.colums;
  const filelist2 = commonData.file2.filelist;
  const businessOrderData = state["industrialOrderData"];
  const buttons = businessOrderData.buttons;
  return{
    colums, filelist, buttons,colums2,filelist2
  }
}
const ok=()=>{
  message.info("发送成功！")
}

@connect(mapStateToProps)
class IndustrialOrderDetail extends React.Component{
  render(){
    let buttons;
    if(this.props.location.status == '待发送'){
      buttons = (
        <div style={{textAlign:'center'}}>
          <Link to={"/yygj/industrial/gypay"}><Button  onClick={ok} type={"primary"} style={{marginRight:'20px'}}>发送</Button></Link>
          <Link  to={"/yygj/industrial/gypay"}><Button type={"primary"}>关闭</Button></Link>
        </div>
      )
    }else{
      buttons = (
        <div style={{textAlign:'center'}}>
          <Button disabled  type={"primary"} style={{marginRight:'20px'}}>发送</Button>
          <Link  to={"/yygj/industrial/gypay"}><Button type={"primary"}>关闭</Button></Link>
        </div>
      )
    }
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
                  <Select defaultValue="hetong1" disabled>
                    <Option value="hetong1">合同1</Option>
                    <Option value="hetong2">合同2</Option>
                    <Option value="hetong3">合同3</Option>
                    <Option value="hetong4">合同4</Option>
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
          <Card title={<b>关联订单明细</b>} headStyle={headStyle} className={styles.cardbottom}>
            <div>
              <Table columns={this.props.colums2} dataSource={this.props.filelist2} size="small" />
            </div>
          </Card>
          <Card title={<b>发票信息</b>} headStyle={headStyle} className={styles.cardbottom}>
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
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"发票抬头"} >
                  <Input disabled placeholder="发票抬头" id="" />
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={<b>上传文件</b>} headStyle={headStyle} className={styles.cardbottom}>
            <div style={{width:'50%'}}>
              <Table columns={this.props.colums} dataSource={this.props.filelist} size="small" />
            </div>
          </Card>
          {buttons}
        </Form>
      </div>
    )
  }

}
export default IndustrialOrderDetail
