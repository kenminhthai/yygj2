import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select, Table,Button, Card ,DatePicker} from 'antd';
import moment from 'moment';
const date = new Date()
const dateFormat = 'YYYY-MM-DD'

const FormItem = Form.Item;
const headStyle={
  backgroundColor:"#E8E8E8",
}
import cargoList from "../../../../../../mock/cargoList";
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

function save(){
  alert("已保存")
}

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
                  <Input disabled id="" />
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"录入日期："} >
                  <DatePicker defaultValue={moment(date, dateFormat)}/>
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"所属订单："} >
                  <Select disabled defaultValue="会员已有订单" >
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
                  <Input  disabled id="" />
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"确认日期："} >
                  <DatePicker defaultValue={moment(date, dateFormat)}/>

                </FormItem>
              </Col>
              <Col span={7} offset={1}>
                <FormItem {...formItemThreeLayout} label={"发票确认日期："} >
                  <DatePicker defaultValue={moment(date, dateFormat)}/>
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
            <Table columns={cargoList.columns_detail} dataSource={cargoList.data_detail} size="small" />
          </Card>
          <Card title={"上传文件"}  headStyle={headStyle} className={styles.cardbottom}>
            <Table columns={cargoList.columns_insure_bill} dataSource={cargoList.data_insure_bill} size="small" />
          </Card>

                <div align="center">
                  <Button onClick={save} name="确认" type="primary" className={styles.button}>确认</Button>
                  <Button href={"/yygj/business/syCargoDamage"} type="primary" name="关闭" className={styles.button}>关闭</Button>
                </div>

        </Form>
      </div>
    )
  }
}
export default damagePresure
