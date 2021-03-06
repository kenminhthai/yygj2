import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select,Button, Card ,DatePicker} from 'antd';
import {Upload} from "antd/lib/index";
import { connect } from 'dva'
import  Link  from 'umi/link'
import moment from 'moment';
const headStyle={
  backgroundColor:"#E8E8E8",
}
const ButtonGroup = Button.Group
const FormItem = Form.Item;
const Dragger = Upload.Dragger;
const { MonthPicker, RangePicker } = DatePicker;
const date = new Date()
const dateFormat = 'YYYY-MM-DD';

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

const namespace = 'industrialFrameData'
const mapStateToProps = (state) =>{
  const DataList               = state[namespace]
  const columns                = DataList.columns
  const data                   = DataList.data
  const buttons                = DataList.buttons
  const options_frameType      = DataList.options_frameType
  const options_frameCharacter = DataList.options_frameCharacter
  const buttons_page_addFrame  = DataList.buttons_page_addFrame
  return{
    columns,
    data,
    buttons,
    options_frameType,
    options_frameCharacter,
    buttons_page_addFrame,
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
                <FormItem {...formItemThreeLayout} label={"签订日期："} >
                  <DatePicker defaultValue={moment(date, dateFormat)}/>
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"合同类型："} >
                  <Select  defaultValue="框架协议" >
                    {
                      this.props.options_frameType.map((item, index) => {
                        return(
                          <Option value={item.value} key={index} >{item.name}</Option>
                        )
                      })
                    }
                  </Select>
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"合同性质："} >
                  <Select  defaultValue="医药服务" >
                    {
                      this.props.options_frameCharacter.map((item, index) => {
                        return(
                          <Option value={item.value} key={index} >{item.name}</Option>
                        )
                      })
                    }
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row  >
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"合同维护方："} >
                  <Input disabled placeholder="登录会员" id="" />
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"合同确认方："} >
                  <Input  placeholder="" id="" />
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"合同编号："} >
                  <Input   id="" />
                </FormItem>
              </Col>
            </Row>
            <Row >
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"合同开始日期："} >
                  <DatePicker disabled defaultValue={moment(date, dateFormat)}/>

                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"结束日期："} >
                  <DatePicker disabled defaultValue={moment(date, dateFormat)}/>

                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"合同文本："} >
                  <Dragger className={styles.D}>
                    点击上传合同电子文档
                  </Dragger>
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={"日期和用户"} headStyle={headStyle} className={styles.cardbottom}>
            <Row >
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"录入日期："} >
                  <DatePicker disabled defaultValue={moment(date, dateFormat)}/>

                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"录入用户："} >
                  <Input disabled placeholder="登录会员" id="" />
                </FormItem>
              </Col>
            </Row>
            <Row >
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"确认日期："} >
                  <DatePicker disabled defaultValue={moment(date, dateFormat)}/>

                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"确认用户："} >
                  <Input disabled placeholder="" id="" />
                </FormItem>
              </Col>
            </Row>
          </Card>
          <div align="center">
            <ButtonGroup>
              {
                this.props.buttons_page_addFrame.map((item, index) => {
                  return(
                    <Link to={item.url}>
                      <Button  type="primary" onClick={item.fun} style={{ marginRight:'5px',marginBottom:'10px'}} key={index}>{item.name}</Button>
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
