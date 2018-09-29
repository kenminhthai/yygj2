import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select, DatePicker, Button, Table, Card,message } from 'antd';
import { connect } from 'dva';
import  Link  from 'umi/link';
import moment from 'moment'
import { Mutation } from "react-apollo";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: 'http://192.168.30.10:5000/graphql',
})

const sendOrder = gql`
   mutation sendOrder($id:Int){
   sendOrder(id:$id){
      id
   }
 }
 `;
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
  const businessOrderData = state["businessOrderData"];
  const buttons = businessOrderData.buttons;
  return{
    colums, filelist, buttons, colums2, filelist2
  }
}

const ok=()=>{
  message.info("发送成功！")
}

@connect(mapStateToProps)
class BusinessOrderDetail extends React.Component{
  render(){
    let buttons;
    if(this.props.location.order_status == '草稿'){
      buttons = (
        <div style={{textAlign:'center'}}>
          <Button onClick={ok} type={"primary"} htmlType="submit" style={{marginRight:'20px'}}>发送订单</Button>
          <Link  to={"/yygj/business/orderPreserve"}><Button type={"primary"}>关闭</Button></Link>
        </div>
      )
    }else{
      buttons = (
        <div style={{textAlign:'center'}}>
          <Link to={"/yygj/business/orderPreserve"}><Button disabled onClick={ok} type={"primary"} style={{marginRight:'20px'}}>发送订单</Button></Link>
          <Link  to={"/yygj/business/orderPreserve"}><Button type={"primary"}>关闭</Button></Link>
        </div>
      )
    }
    return(
        <ApolloProvider client={client} >
          <Mutation mutation={sendOrder}>
            {(sendOrder, { data }) => (
              <Form onSubmit={e => {
                e.preventDefault();
                this.props.form.validateFields((err, values) => {
                  if(!err){
                    sendOrder({variables:{id:this.props.location.data.id}})
                  }
                });
              }}>
          <Card title={<b>订单信息</b>} headStyle={headStyle} className={styles.cardbottom}>
            <Row >
              <Col span={8}>
                <FormItem  {...formItemThreeLayout} label={"买方机构"} >
                  <Input disabled placeholder={"默认当前会员"} id=""/>
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"卖方机构"} >
                  <Input disabled value={this.props.location.data.seller_organization} />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"所属合同"} >
                  <Select disabled defaultValue={this.props.location.data.belonging_contract}>
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
                  <DatePicker disabled defaultValue={ moment(this.props.location.data.order_date,'YYYY-MM-DD')} />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"订单金额"} >
                  <Input disabled placeholder="订单金额" id="" />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"约定交货日"} >
                  <DatePicker disabled defaultValue={ moment(this.props.location.data.agreed_delivery_date,'YYYY-MM-DD')} />
                </FormItem>
              </Col>
            </Row>
            <Row >
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"约定付款日"} >
                  <DatePicker disabled defaultValue={ moment(this.props.location.data.agreed_payment_date,'YYYY-MM-DD')} />
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={<b>明细信息</b>} headStyle={headStyle} className={styles.cardbottom}>
            <div>
              <Table columns={this.props.colums2} dataSource={this.props.filelist2} size={"small"}/>
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
            </Row>
            <Row>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"发票抬头"} >
                  <Input disabled placeholder="发票抬头" id="" />
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={<p>上传文件</p>} headStyle={headStyle} className={styles.cardbottom}>
            <div >
              <Table columns={this.props.colums} dataSource={this.props.filelist} size={"small"}/>
            </div>
          </Card>
          {buttons}
        </Form>
            )}
          </Mutation>
        </ApolloProvider>
    )
  }

}
export default Form.create()(BusinessOrderDetail)
