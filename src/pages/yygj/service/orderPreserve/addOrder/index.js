import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select, DatePicker, Button, Table, Card,Upload,message,Icon,AutoComplete } from 'antd';
import Link from 'umi/link'
import { connect } from 'dva';
const Dragger = Upload.Dragger;
const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const headStyle={
  backgroundColor:"#E8E8E8",
}
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
  const serviceOrderData = state["serviceOrderData"];
  const seller_organization = serviceOrderData.seller_organization;
  const buttons = serviceOrderData.buttons;
  return{
    colums,  filelist, buttons, colums2, filelist2,seller_organization
  }
}

const ok = () =>{
  message.info("操作完成")
}

@connect(mapStateToProps)
class ServiceAddOrder extends React.Component{
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
          <Card title={<b>订单信息</b>} headStyle={headStyle} className={styles.cardbottom}>
            <Row >
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"买方机构"} >
                  {getFieldDecorator('buyer_organization', {
                    initialValue:'industrial',
                  })(
                  <Select >
                    <Option value="industrial">医药工业</Option>
                    <Option value="bussiness">医药商业</Option>
                    <Option value="service">医药服务</Option>
                    <Option value="platform">医药平台</Option>
                  </Select>
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
                    initialValue:'hetong1',
                  })(
                  <Select>
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
            </Row>
            <Row>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"关联订单"} >
                  {getFieldDecorator('associated_order', {
                    initialValue:'industrial',
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
          <Card title={<b>关联订单明细</b>} headStyle={headStyle} className={styles.cardbottom}>
            <div>
              <Table columns={this.props.colums2} dataSource={this.props.filelist2} size="small" />
            </div>
          </Card>
          <Card title={<b>发票信息</b>} headStyle={headStyle} className={styles.cardbottom}>
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
                  <Input  />
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"出票人"} >
                  {getFieldDecorator('drawer', {
                    initialValue:'',
                  })(
                  <Input disabled placeholder="默认为当前会员" id="" />
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
            <ButtonGroup>
              <Button onClick={ok} type="primary"  htmlType="submit" className={styles.buttons}>保存</Button>
              <Button onClick={ok}  type="primary"  className={styles.buttons}>保存并发送</Button>
              <Link to={"/yygj/service/orderPreserve"}>
                <Button type="primary" className={styles.buttons}>关闭</Button>
              </Link>
            </ButtonGroup>
          </div>
        </Form>
      </div>
    )
  }

}
export default Form.create()(ServiceAddOrder)
