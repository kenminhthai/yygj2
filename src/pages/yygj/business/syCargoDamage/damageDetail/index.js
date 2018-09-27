import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select, Table,Button, Card } from 'antd';
import { connect } from 'dva'
import Link from 'umi/link'
import {message} from "antd/lib/index"

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
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
}
const namespace = 'businessDamageData'
const mapStateToProps  = (state) =>{
  const DataList               = state[namespace]
  const columns_detail         = DataList.columns_detail
  const data_detail            = DataList.data_detail
  const columns_file           = DataList.columns_file_detail
  const data_file              = DataList.data_file_detail
  const buttons_demagePreserve = DataList.buttons_demagePreserve
  return{
    columns_detail,
    data_detail,
    columns_file,
    data_file,
    buttons_demagePreserve,
  }
}
const ok = ()=>{
  message.info("操作完成！")
}
@connect(mapStateToProps)

class damagePresure extends React.Component{
  render(){
    let buttons;
    if(this.props.location.status == '待发送'){
      buttons = (
        <div style={{textAlign:'center'}}>
          <Link to={"/yygj/business/syCargoDamage"}><Button  onClick={ok} type={"primary"} style={{marginRight:'20px'}}>发送</Button></Link>
          <Link  to={"/yygj/business/syCargoDamage"}><Button type={"primary"}>关闭</Button></Link>
        </div>
      )
    }else if(this.props.location.status == '发票待确认'){
      buttons = (
        <div style={{textAlign:'center'}}>
          <Link to={"/yygj/business/syCargoDamage"}><Button  onClick={ok} type={"primary"} style={{marginRight:'20px'}}>发票确认</Button></Link>
          <Link  to={"/yygj/business/syCargoDamage"}><Button type={"primary"}>关闭</Button></Link>
        </div>
      )
    }else{
      buttons = (
        <div style={{textAlign:'center'}}>
          <Button disabled  type={"primary"} style={{marginRight:'20px'}}>发送</Button>
          <Link  to={"/yygj/business/syCargoDamage"}><Button type={"primary"}>关闭</Button></Link>
        </div>
      )
    }
    return(
      <div>
        <Form >
          <Card title={<b>"基本信息"</b>} headStyle={headStyle} className={styles.cardbottom}>
            <Row >
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"货损编号："} >
                  <Input disabled id="" />
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"录入日期："} >
                  <Input disabled placeholder="20180916" id="" />
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"所属订单："} >
                  <Select disabled defaultValue="会员已有订单" >
                    <Option value="会员已有订单">会员已有订单</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row  >
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"发起机构："} >
                  <Input disabled placeholder="" id="" />
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"确认机构："} >
                  <Input disabled placeholder="" id="" />
                </FormItem>
              </Col>
            </Row>
            <Row >
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"货损价值："} >
                  <Input disabled  id="" />
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"确认日期："} >
                  <Input disabled placeholder="20180916" id="" />
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"发票确认日期："} >
                  <Input disabled placeholder="20180916" id="" />
                </FormItem>
              </Col>
            </Row>
            <Row >
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"冲正发票号："} >
                  <Input disabled placeholder="101010101010101010" id="" />
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"货损状态："} >
                  <Input  disabled placeholder="" id="" />
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={<b>"货损明细"</b>}  headStyle={headStyle} className={styles.cardbottom}>
            <Table rowSelection={rowSelection} columns={this.props.columns_detail} dataSource={this.props.data_detail} size="small" />
          </Card>
          <Card title={<b>"上传文件"</b>}  headStyle={headStyle} className={styles.cardbottom}>
            <Table rowSelection={rowSelection} columns={this.props.columns_file} dataSource={this.props.data_file} size="small" />
          </Card>
          {buttons}
        </Form>
      </div>
    )
  }
}
export default damagePresure
