import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select,Button, Card } from 'antd';
import { connect } from 'dva'
import  Link from 'umi/link'
const FormItem = Form.Item;
const headStyle={
  backgroundColor:"#E8E8E8",
}
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
const namespace = 'serviceFrameData'
const mapStateToProps = (state) =>{
  const DataList = state[namespace]
  const columns =DataList.columns
  const data = DataList.data
  const buttons = DataList.buttons
  const options_FrameType = DataList.options_frameType
  const options_FrameCharacter = DataList.options_frameCharacter
  return{
    columns, data,buttons,options_FrameType,options_FrameCharacter,
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
                  <Input disabled id={""}/>
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"合同类型："} >
                  <Select disabled defaultValue="框架协议" >
                    {
                      this.props.options_FrameType.map((item, index) => {
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
                      this.props.options_FrameCharacter.map((item, index) => {
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
                  <Input  disabled id="" />
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"结束日期："} >
                  <Input disabled id="" />
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
          <div align="center">
            <Link to={"/yygj/service/fwFrameInsure"}>
              <Button type="primary" name="确定" className={styles.button}>关闭</Button>
            </Link>
          </div>
        </Form>
      </div>
    )
  }
}
export default damagePresure
