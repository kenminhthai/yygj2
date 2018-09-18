import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select,Cascader, Table,Button, Card ,DatePicker} from 'antd';
import {Upload} from "antd/lib/index";
import FrameList from "../../../../../../mock/FrameList";
const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const Dragger = Upload.Dragger;
import moment from 'moment';
const { MonthPicker, RangePicker } = DatePicker;
const date = new Date()

const dateFormat = 'YYYY-MM-DD';

const formItemOneLayout = {
  labelCol: {
    sm: { span: 3 },
  },
  wrapperCol: {
    sm: { span: 20 },
  },
};
const formItemTwoLayout = {
  labelCol: {
    sm: { span: 6 },
  },
  wrapperCol: {
    sm: { span: 16 },
  },
};
const formItemThreeLayout = {
  labelCol: {
    sm: { span: 7 },
  },
  wrapperCol: {
    sm: { span: 17 },
  },
};

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];


function save(){
  alert("已保存")
}
function saveAndsend(){
  alert("已保存，已发送")
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
          <Card>
            <Row gutter={21}>
              <Col span={7} offset={1}>
                <FormItem {...formItemThreeLayout} label={"签订日期："} >
                  <DatePicker defaultValue={moment(date, dateFormat)}/>
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"合同类型："} >
                  <Select  defaultValue="框架协议" >
                    <Option value="框架协议">Jack</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"合同性质："} >
                  <Select  defaultValue="医药服务" >
                    <Option value="医药服务">Jack</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row gutter={21} >
              <Col span={7} offset={1}>
                <FormItem {...formItemThreeLayout} label={"合同维护方："} >
                  <Input disabled placeholder="登录会员" id="" />
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"合同确认方："} >
                  <Input disabled placeholder="医药工业" id="" />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={21}>
              <Col span={7} offset={1}>
                <FormItem {...formItemThreeLayout} label={"合同编号："} >
                  <Input   id="" />
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"合同文本："} >
                  <Dragger className={styles.D}>
                    点击上传合同电子文档
                  </Dragger>
                </FormItem>
              </Col>
            </Row>
            <Row gutter={21}>
              <Col span={7} offset={1}>
                <FormItem {...formItemThreeLayout} label={"合同开始日期："} >
                  <Input   id="" />
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"结束日期："} >
                  <Input  id="" />
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card >
            <Row gutter={24}>
              <Col span={12}>
                <FormItem {...formItemTwoLayout} label={"录入日期："} >
                  <Input disabled placeholder="2018/9/16" id="" />
                </FormItem>
              </Col>
              <Col span={12} >
                <FormItem {...formItemTwoLayout} label={"录入用户："} >
                  <Input disabled placeholder="登录会员" id="" />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <FormItem {...formItemTwoLayout} label={"确认日期："} >
                  <Input disabled placeholder="2018/9/16" id="" />
                </FormItem>
              </Col>
              <Col span={12} >
                <FormItem {...formItemTwoLayout} label={"确认用户："} >
                  <Input disabled placeholder="" id="" />
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card>
            <Row gutter={24}>
              <Col offset={8}>
                <div>
                  <Button onClick={save} name="保存" type="primary" className={styles.button}>保存</Button>
                  <Button onClick={saveAndsend} type="primary" name="保存并发送" className={styles.button}>保存并发送</Button>
                  <Button href={"/yygj/service/fwFramePreserve/addFrame"} type="primary" name="取消" className={styles.button}>取消</Button>
                </div>
              </Col>
            </Row>
          </Card>
        </Form>
      </div>
    )
  }
}
export default damagePresure
