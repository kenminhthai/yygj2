import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select,Button, Card ,DatePicker} from 'antd';
import { connect } from 'dva'
import Link from 'umi/link'
import {message} from "antd/lib/index"
import moment from 'moment';
const date = new Date()
const dateFormat = 'YYYY-MM-DD'
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
const namespace = 'businessFrameData'
const mapStateToProps = (state) =>{
  const DataList               = state[namespace]
  const columns                = DataList.columns
  const data                   = DataList.data
  const buttons                = DataList.buttons
  const options_frameType      = DataList.options_frameType
  const options_frameCharacter = DataList.options_frameCharacter
  return{
    columns, data,buttons,options_frameType,options_frameCharacter,
  }
}
const ok=()=>{
  message.info("发送成功！")
}
@connect(mapStateToProps)

class damagePresure extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    let buttons;
    if(this.props.location.status == '待发送'){
      buttons = (
        <div style={{textAlign:'center'}}>
          <Link to={"/yygj/business/syFramePreserve"}><Button  onClick={ok} type={"primary"} style={{marginRight:'20px'}}>发送</Button></Link>
          <Link  to={"/yygj/business/syFramePreserve"}><Button type={"primary"}>关闭</Button></Link>
        </div>
      )
    }else{
      buttons = (
        <div style={{textAlign:'center'}}>
          <Button disabled  type={"primary"} style={{marginRight:'20px'}}>发送</Button>
          <Link  to={"/yygj/business/syFramePreserve"}><Button type={"primary"}>关闭</Button></Link>
        </div>
      )
    }
    return(
      <div>
        <Form >
          <Card title={"基本信息"} headStyle={headStyle} className={styles.cardbottom}>
            <Row >
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"签订日期："} >
                  <DatePicker disabled defaultValue={moment(date, dateFormat)}/>
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"合同类型："} >
                  <Select disabled defaultValue="框架协议" >
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
                  <Select disabled defaultValue="医药服务" >
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
                  <Input disabled placeholder="医药工业" id="" />
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"合同编号："} >
                  <Input  disabled id="" />
                </FormItem>
              </Col>
            </Row>
            <Row >
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"合同文本："} >
                  <Input  disabled id="" />
                </FormItem>
              </Col>
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
            </Row>
          </Card>
          <Card title={"日期和用户"} headStyle={headStyle} className={styles.cardbottom}>
            <Row >
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"录入日期："} >
                  <Input disabled placeholder="2018/9/16" id="" />
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
                  <Input disabled placeholder="2018/9/16" id="" />
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"确认用户："} >
                  <Input disabled placeholder="" id="" />
                </FormItem>
              </Col>
            </Row>
          </Card>
          {buttons}
        </Form>
      </div>
    )
  }
}
export default damagePresure
