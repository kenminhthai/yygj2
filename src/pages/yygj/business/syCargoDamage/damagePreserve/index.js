import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select, Table,Button, Card ,DatePicker} from 'antd';
import { connect } from 'dva'
import  Link  from 'umi/link'
import moment from 'moment';
const date = new Date()
const dateFormat = 'YYYY-MM-DD'
const FormItem = Form.Item;
const ButtonGroup = Button.Group
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
const headStyle={
  backgroundColor:"#E8E8E8",
}
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
  const columns_file           = DataList.columns_file
  const data_file              = DataList.data_file
  const buttons_demagePreserve = DataList.buttons_demagePreserve
  return{
    columns_detail,
    data_detail,
    columns_file,
    data_file,
    buttons_demagePreserve,
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
            <Row gutter={21}>
              <Col span={7} offset={1}>
                <FormItem {...formItemThreeLayout} label={"货损维护："} >
                  <Input  id="" />
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"录入日期："} >
                  <DatePicker disabled={true} defaultValue={moment(date, dateFormat)}/>
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"所属订单："} >
                  <Select  defaultValue="会员已有订单" >
                    <Option value="会员已有订单">会员已有订单</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row gutter={21} >
              <Col span={7} offset={1}>
                <FormItem {...formItemThreeLayout} label={"发起机构："} >
                  <Input disabled placeholder="" id="" />
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"确认机构："} >
                  <Input disabled placeholder="" id="" />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={21}>
              <Col span={7} offset={1}>
                <FormItem {...formItemThreeLayout} label={"货损价值："} >
                  <Input   id="" />
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"确认日期："} >
                  <DatePicker disabled={true} defaultValue={moment(date,dateFormat)}/>
                </FormItem>
              </Col>
              <Col span={7} offset={1}>
                <FormItem {...formItemThreeLayout} label={"发票确认日期："} >
                  <DatePicker disabled={true} defaultValue={moment(date,dateFormat)}/>
                </FormItem>
              </Col>
            </Row>
            <Row gutter={21}>
              <Col span={7} offset={1}>
                <FormItem {...formItemThreeLayout} label={"冲正发票号："} >
                  <Input disabled placeholder="101010101010101010" id="" />
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
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
          <div align={"center"}>
                <ButtonGroup >
                  {
                    this.props.buttons_demagePreserve.map((item, index) => {
                      return(
                        <Link to={item.url}>
                          <Button  type="primary"  onClick={item.fun} style={{ marginRight:'5px',marginBottom:'10px'}} key={index}>{item.name}</Button>
                        </Link>
                      )
                    })
                  }
                </ButtonGroup>
          </div>
        </Form>
      </div>
    )
  }
}
export default damagePresure
