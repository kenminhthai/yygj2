import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select,Button, Card ,Table,DatePicker} from 'antd';
import { connect } from 'dva'
const FormItem = Form.Item;
import Link from 'umi/link'

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
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
}
const namespace = 'industrialFinancingData'
const mapStateToProps = (state) =>{
  const DataList  = state[namespace]
  const cloumns_financing_detail = DataList.cloumns_financing_detail
  const data_financing_detail = DataList.data_financing_detail
  const buttons = DataList.buttons
  const options_apply_capitalName  = DataList.options_apply_capitalName
  const options_apply_orderSuperior = DataList.options_apply_orderSuperior
  return{
    cloumns_financing_detail,
    data_financing_detail,
    buttons,
    options_apply_capitalName,
    options_apply_orderSuperior,
  }
}
@connect(mapStateToProps)

class damagePresure extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render(){
    return(
      <div>
        <Form >
          <Card title={<b>申请信息</b>} headStyle={headStyle} className={styles.cardbottom}>
            <Row >
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"申请机构："} >
                  <Input disabled placeholder="登录会员" id={""}/>
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"资金方"} >
                  <Select disabled defaultValue="nong" >
                    <Option value="nong">资金方1</Option>
                    <Option value="cai">资金方2</Option>
                    <Option value="zhi">资金方3</Option>
                    <Option value="xin">资金方4</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"申请日期："} >
                  <DatePicker disabled />
                </FormItem>
              </Col>
            </Row>
            <Row  >

              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"融资类型："} >
                  <Input disabled  id="" placeholder={"应收款融资"} />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"所属订单"} >
                  <Select disabled defaultValue="nong" >
                    <Option value="nong">订单1</Option>
                    <Option value="cai">订单2</Option>
                    <Option value="zhi">订单3</Option>
                    <Option value="xin">订单4</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"关联订单："} >
                  <Input disabled  id="" />
                </FormItem>
              </Col>
            </Row>
            <Row  >
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"订单金额："} >
                  <Input disabled  id="" />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"剩余金额："} >
                  <Input disabled  id="" />
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"申请金额："} >
                  <Input disabled  id="" />
                </FormItem>
              </Col>
            </Row>
            <Row >
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"受理日期："} >
                  <DatePicker disabled />
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"审批日期："} >
                  <DatePicker disabled />
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"申请状态："} >
                  <Input disabled placeholder="待发送" id="" />
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={<b>申请文件</b>} headStyle={headStyle} className={styles.cardbottom}>
            <Table  columns={this.props.cloumns_financing_detail} dataSource={this.props.data_financing_detail} size="small" />
          </Card>
          <div style={{textAlign:'center'}}>
            <Link to={"/yygj/industrial/financingRefund"}>
              <Button  type="primary" name="确定" style={{marginRight:'20px'}} >确定</Button>
            </Link>
          </div>
        </Form>
      </div>
    )
  }
}
export default damagePresure
