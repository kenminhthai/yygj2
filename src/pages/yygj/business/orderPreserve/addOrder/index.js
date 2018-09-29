import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select,DatePicker,  Button, Table, Card, message,Upload,AutoComplete,Icon } from 'antd';
import Link from 'umi/link'
import { connect } from 'dva';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: 'http://192.168.30.10:5000/graphql',
})

const file_type_colums=[
  {
    title: '文件类型',
    align:'center',
    dataIndex: 'file_type',
  },
  {
    title: '文件',
    align:'center',
    dataIndex: 'file_name',
  },
]
const file_list = [
  {
    file_type:'发票',
    file_name:'111.doc'
  },
  {
    file_type:'订单',
    file_name:'222.doc'
  }
]
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
function RndNum(n){
  var rnd="";
  for(var i=0;i<n;i++)
    rnd+=Math.floor(Math.random()*10);
  return rnd;
}

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
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
  const seller_organization = businessOrderData.seller_organization;
  return{
    colums, buttons, filelist, buttons,colums2,filelist2, seller_organization
  }
}



const ADD_Member = gql`
   mutation createOrder($order:OrderInput){
   createOrder(order:$order){
      id
      gmt_create
      gmt_modified
      purchase_order_no
      sales_number
      order_number
      order_amount
      order_date
      order_file
      financing_status
      belonging_contract
      agreed_payment_method
      agreed_payment_date
      agreed_delivery_date
      text_of_order_agreement
      order_status
      associated_order
      entry_party
      buyer_organization
      seller_organization
   }
 }
 `;

@connect(mapStateToProps)
class BusinessAddOrder extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isSend:'0',
      order_number:100000
    };
    this.props = {

    }
  }

   ok =()=>{
    message.info("操作完成")
  }

   saveAndSend =()=>{
    this.state.isSend = '2'
     message.info("操作完成")
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <ApolloProvider client={client} >
        <Mutation mutation={ADD_Member}>
          {(createOrder, { data }) => (
        <Form onSubmit={e => {
          e.preventDefault();
          this.props.form.validateFields((err, values) => {
            console.log(typeof (values.order_date.format('YYYY-MM-DD')))
            if(!err){
              createOrder({variables:{order:{
                    order_number:String(RndNum(5)),
                    buyer_organization:values.buyer_organization,
                    seller_organization:values.seller_organization,
                    belonging_contract:values.belonging_contract,
                    order_date: values.order_date,
                    agreed_delivery_date: values.agreed_delivery_date,
                    agreed_payment_date: values.agreed_payment_date,
                    order_status:this.state.isSend,
                  }}})
            }
          });
        }}>
          <Card title={<b>订单信息</b>} headStyle={headStyle} className={styles.cardbottom}>
            <Row >
              <Col span={8}>
                <FormItem  {...formItemThreeLayout} label={"买方机构"} >
                  {getFieldDecorator('buyer_organization', {
                    initialValue:'test23',
                  })(
                  <Input disabled placeholder={"默认当前登录会员"} id=""/>
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"卖方机构"} >
                  {getFieldDecorator('seller_organization', {
                  })(
                    <AutoComplete dataSource={this.props.seller_organization}
                                  filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                    />
                  )}
                </FormItem>
              </Col>
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
            </Row>
            <Row >
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
                  <Input />
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"约定交货日"} >
                  {getFieldDecorator('agreed_delivery_date', {
                  })(
                  <DatePicker />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row >
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"约定付款日"} >
                  {getFieldDecorator('agreed_payment_date', {
                  })(
                    <DatePicker />
                  )}
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={<b>明细信息</b>} headStyle={headStyle}  className={styles.cardbottom}>
            <div>
              <Table columns={this.props.colums2} dataSource={this.props.filelist2} size="small" />
            </div>
          </Card>
          <Card title={<b>发票信息</b>} headStyle={headStyle}  className={styles.cardbottom}>
            <Row >
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"出票日期"} >
                  {getFieldDecorator('date_of_issue', {
                    initialValue:'',
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
                  <Input disabled/>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
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
          <Card title={<b>上传文件</b>} headStyle={headStyle} className={styles.cardbottom}>
            <div >
                <ButtonGroup >
                  <Button type="primary"  className={styles.buttons}>添加</Button>
                  <Button type="primary"  className={styles.buttons}>删除</Button>
                  <Button type="primary"  className={styles.buttons}>查看</Button>
                </ButtonGroup>
            </div>
            <Row>
              <Col span={6}>
              <FormItem {...formItemThreeLayout} label={"文件类型"} >
                {getFieldDecorator('file_type', {
                  initialValue:'hetong1',
                })(
                  <Select >
                    <Option value="hetong1">发票</Option>
                    <Option value="hetong2">订单</Option>
                    <Option value="hetong3">物流信息</Option>
                  </Select>
                )}
              </FormItem>
              </Col>
              <Col span={6}>
                <FormItem {...formItemThreeLayout} label={"文件"} >
                  <Upload fileList={[]}>
                    <Button>
                      <Icon type="upload" /> 点击上传
                    </Button>
                  </Upload>
                </FormItem>
              </Col>
            </Row>
            <div style={{width:'50%'}}>
              <Table rowSelection={rowSelection} bordered columns={file_type_colums} dataSource={file_list} size="small" />
            </div>
          </Card>
          <div style={{textAlign:'center'}}>
            <ButtonGroup >
              <Button onClick={this.ok} type="primary"  htmlType="submit" className={styles.buttons}>保存</Button>
              <Button onClick={this.saveAndSend} type="primary" htmlType="submit" className={styles.buttons}>保存并发送</Button>
              <Link to={"/yygj/business/orderPreserve"}>
                <Button type="primary"  className={styles.buttons}>关闭</Button>
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
export default  Form.create()(BusinessAddOrder)
