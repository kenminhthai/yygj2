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
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
        <Form >
          <Card title={"基本信息"} headStyle={headStyle} className={styles.cardbottom}>
            <Row gutter={21}>
              <Col span={7} offset={1}>
                <FormItem {...formItemThreeLayout} label={"货损编号："} >
                  {getFieldDecorator('id', {
                  })(
                  <Input />
                  )}
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"录入日期："} >
                  {getFieldDecorator('gmt_create', {
                    initialValue:moment(date, dateFormat),
                  })(
                  <DatePicker disabled={true}/>
                  )}
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"所属订单："} >
                  {getFieldDecorator('belonging_order', {
                    initialValue:"会员已有订单"
                  })(
                  <Select  >
                    <Option value="会员已有订单">会员已有订单</Option>
                  </Select>
                  )}
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
                  {getFieldDecorator('loss_value', {
                  })(
                  <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"确认日期："} >
                  {getFieldDecorator('date_of_confirmation_of_damage', {
                    initialValue:moment(date, dateFormat),
                  })(
                  <DatePicker disabled={true} />
                  )}
                </FormItem>
              </Col>
              <Col span={7} offset={1}>
                <FormItem {...formItemThreeLayout} label={"发票确认日期："} >
                  {getFieldDecorator('confirmation_date_of_reversing_invoice', {
                    initialValue:moment(date, dateFormat),
                  })(
                  <DatePicker disabled={true} />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={21}>
              <Col span={7} offset={1}>
                <FormItem {...formItemThreeLayout} label={"冲正发票号："} >
                  {getFieldDecorator('correct_invoice_number', {
                  })(
                  <Input disabled placeholder="101010101010101010" id="" />
                  )}
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"货损状态："} >
                  {getFieldDecorator('damage_order_status', {
                  })(
                  <Input  disabled placeholder="" id="" />
                  )}
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={"货损明细"}  headStyle={headStyle} className={styles.cardbottom}>
            <Table  columns={this.props.columns_detail} dataSource={this.props.data_detail} size="small" bordered/>
          </Card>
          <Card title={"上传文件"}  headStyle={headStyle} className={styles.cardbottom}>
            <Table  columns={this.props.columns_file} dataSource={this.props.data_file} size="small" bordered />
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
export default Form.create()(damagePresure)
