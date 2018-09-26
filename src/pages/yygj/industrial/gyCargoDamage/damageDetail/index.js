import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select, Table,Button, Card } from 'antd';
import { connect } from 'dva'
import  Link  from 'umi/link'

const FormItem = Form.Item;
const ButtonGroup = Button.Group
const headStyle={
  backgroundColor:"#E8E8E8",
}
const formItemThreeLayout = {
  labelCol: {
    sm: { span: 7 },
  },
  wrapperCol: {
    sm: { span: 17 },
  },
};
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
}

const namespace = 'industralDamageData'
const mapStateToProps  = (state) =>{
  const DataList               = state[namespace]
  const columns_detail         = DataList.columns_detail
  const data_detail            = DataList.data_detail
  const columns_file           = DataList.columns_file_detail
  const data_file              = DataList.data_file_detail
  const buttons                = DataList.buttons
  return{
    columns_detail,
    data_detail,
    columns_file,
    data_file,
    buttons,
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
          <Card title={"基本信息"} headStyle={headStyle} className={styles.cardbottom}>
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
          <Card title={"货损明细"}  headStyle={headStyle} className={styles.cardbottom}>
            <Table rowSelection={rowSelection} columns={this.props.columns_detail} dataSource={this.props.data_detail} size="small" />
          </Card>
          <Card title={"上传文件"}  headStyle={headStyle} className={styles.cardbottom}>
            <Table rowSelection={rowSelection} columns={this.props.columns_file} dataSource={this.props.data_file} size="small" />
          </Card>

          <div align="center">
            <Link to={"/yygj/industrial/gyCargoDamage"}>
              <Button  type="primary" name="确定" className={styles.button}>关闭</Button>
            </Link>
          </div>

        </Form>
      </div>
    )
  }
}
export default damagePresure
