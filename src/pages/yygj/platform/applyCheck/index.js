import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select,Cascader, Table,Button, Card } from 'antd';
import { connect } from 'dva';
import  Link  from 'umi/link';
import {message} from "antd/lib/index";

const namespace = 'commonData';
const ButtonGroup = Button.Group;
const FormItem = Form.Item;
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
const agree = () => {
  message.info('审核通过！');
};

const mapStateToProps = (state) =>{
  const commonData = state["commonData"];
  const colums = commonData.file.colums;
  const filelist = commonData.file.filelist;
  const platformData = state["platformData"];
  const buttons = platformData.buttons;
  const citychoice = platformData.citychoice
  return{
    colums, buttons, filelist, citychoice
  }
}

@connect(mapStateToProps)
class ApplyCheck extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <div>
        <Form >
          <Card title={"企业基本信息"}>
            <FormItem {...formItemOneLayout} label={"企业名称"} >
              <Input disabled  placeholder="企业名称" id="" />
            </FormItem>
            <FormItem {...formItemOneLayout} label={"企业英文名称"} >
              <Input disabled  placeholder="企业英文名称" id="" />
            </FormItem>
            <FormItem {...formItemOneLayout} label={"企业简称"} >
              <Input disabled  placeholder="企业简称" id="" />
            </FormItem>
            <Row gutter={24}>
              <Col span={12}>
                <FormItem {...formItemTwoLayout} label={"所在地区"} >
                  <Cascader disabled options={this.props.citychoice} placeholder="所在地区" />
                </FormItem>
              </Col>
              <Col span={12} >
                <FormItem {...formItemTwoLayout} label={"企业会员类型"} >
                  <Select defaultValue="shagnye" >
                    <Option value="shagnye">医药商业</Option>
                    <Option value="gongye">医药工业</Option>
                    <Option value="fuwu">医药服务</Option>
                    <Option value="pingtai">医药平台</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row gutter={21}>
              <Col span={7} offset={1}>
                <FormItem {...formItemThreeLayout} label={"所属行业"} >
                  <Select defaultValue="xin" >
                    <Option value="nong">农、林、牧、渔业</Option>
                    <Option value="cai">采矿业</Option>
                    <Option value="zhi">制造业</Option>
                    <Option value="xin">信息传输、计算机服务和软件业</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"企业性质"} >
                  <Select defaultValue="guoyou" >
                    <Option value="guoyou">国有企业</Option>
                    <Option value="jiti">集体企业</Option>
                    <Option value="lianyin">联营企业</Option>
                    <Option value="siyin">私营企业</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"企业规模"} >
                  <Select defaultValue="td" >
                    <Option value="td">特大型</Option>
                    <Option value="d">大型</Option>
                    <Option value="z">中型</Option>
                    <Option value="x">小型</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row gutter={21} >
              <Col span={7} offset={1}>
                <FormItem {...formItemThreeLayout} label={"组织机构代码"} >
                  <Input disabled placeholder="组织机构代码" id="" />
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"登记注册号"} >
                  <Input disabled placeholder="工商登记注册号" id="" />
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"机构信用代码"} >
                  <Input disabled placeholder="机构信用代码 " id="" />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={21}>
              <Col span={7} offset={1}>
                <FormItem {...formItemThreeLayout} label={"企业注册日期"} >
                  <Input disabled placeholder="企业注册日期" id="" />
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"企业联系电话"} >
                  <Input disabled placeholder="企业联系电话" id="" />
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"企业传真"} >
                  <Input disabled placeholder="企业传真 " id="" />
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={"企业法人信息"}>
            <Row gutter={24}>
              <Col span={12}>
                <FormItem {...formItemTwoLayout} label={"企业法人"} >
                  <Input disabled placeholder="企业法人" id="" />
                </FormItem>
              </Col>
              <Col span={12} >
                <FormItem {...formItemTwoLayout} label={"法人证件类型"} >
                  <Select disabled defaultValue="lucy" >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <FormItem {...formItemTwoLayout} label={"法人证件号码"} >
                  <Input disabled placeholder="法人证件号码" id="" />
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={"企业法人信息"}>
            <Row gutter={24}>
              <Col span={12}>
                <FormItem {...formItemTwoLayout} label={"企业联系人"} >
                  <Input disabled placeholder="企业联系人" id="" />
                </FormItem>
              </Col>
              <Col span={12} >
                <FormItem {...formItemTwoLayout} label={"企业联系人职务"} >
                  <Input disabled placeholder="企业联系人职务" id="" />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <FormItem {...formItemTwoLayout} label={"联系人手机"} >
                  <Input disabled placeholder="联系人手机" id="" />
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={"文件列表"}>
            <div style={{paddingLeft:'120px',paddingRight:'120px'}}>
              <Table columns={this.props.colums} dataSource={this.props.filelist} size="small" />
            </div>
            <Row gutter={24}>
              <Col offset={8}>
                <ButtonGroup>
                  <Button type="dashed" size={"large"}className={styles.firstButton} onClick={agree}>同意</Button>
                  <Button type="danger" size={"large"}>拒绝</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Card>
        </Form>
      </div>
    )
  }

}
export default ApplyCheck
