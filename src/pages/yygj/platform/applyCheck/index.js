import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select,Cascader, Table,Button, Card } from 'antd';
import { connect } from 'dva';
import  Link  from 'umi/link';
import {message} from "antd/lib/index";
const headStyle={
  backgroundColor:"#E8E8E8",
}
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
          <Card title={"企业基本信息"} headStyle={headStyle} bordered={true} className={styles.cardbottom}>
            <FormItem {...formItemOneLayout} label={"企业名称"} >
              <Input disabled  placeholder="企业名称" id="" />
            </FormItem>
            <FormItem {...formItemOneLayout} label={"企业英文名称"} >
              <Input disabled  placeholder="企业英文名称" id="" />
            </FormItem>
            <FormItem {...formItemOneLayout} label={"企业简称"} >
              <Input disabled  placeholder="企业简称" id="" />
            </FormItem>
            <Row >
              <Col span={16} offset={1}>
                <FormItem {...formItemTwoLayout_1} label={"所在地区"} >
                  <Cascader options={options} placeholder="所在地区" disabled/>
                </FormItem>
              </Col>
              <Col span={7} pull={1}>
                <FormItem {...formItemTwoLayout_2} label={"企业会员类型"} >
                  <Select defaultValue="shagnye" disabled>
                    <Option value="shagnye">医药商业</Option>
                    <Option value="gongye">医药工业</Option>
                    <Option value="fuwu">医药服务</Option>
                    <Option value="pingtai">医药平台</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row >
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"所属行业"} >
                  <Select defaultValue="xin" disabled>
                    <Option value="nong">农、林、牧、渔业</Option>
                    <Option value="cai">采矿业</Option>
                    <Option value="zhi">制造业</Option>
                    <Option value="xin">信息传输、计算机服务和软件业</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"企业性质"} >
                  <Select defaultValue="guoyou" disabled>
                    <Option value="guoyou">国有企业</Option>
                    <Option value="jiti">集体企业</Option>
                    <Option value="lianyin">联营企业</Option>
                    <Option value="siyin">私营企业</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"企业规模"} >
                  <Select defaultValue="td" disabled>
                    <Option value="td">特大型</Option>
                    <Option value="d">大型</Option>
                    <Option value="z">中型</Option>
                    <Option value="x">小型</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row >
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"组织机构代码"} >
                  <Input disabled placeholder="组织机构代码" id="" />
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"登记注册号"} >
                  <Input disabled placeholder="工商登记注册号" id="" />
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"机构信用代码"} >
                  <Input disabled placeholder="机构信用代码 " id="" />
                </FormItem>
              </Col>
            </Row>
            <Row >
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"企业注册日期"} >
                  <Input disabled placeholder="企业注册日期" id="" />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"企业联系电话"} >
                  <Input disabled placeholder="企业联系电话" id="" />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"企业传真"} >
                  <Input disabled placeholder="企业传真 " id="" />
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={"企业法人信息"} headStyle={headStyle} bordered={true} className={styles.cardbottom}>
            <Row >
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"企业法人"} >
                  <Input disabled placeholder="企业法人" id="" />
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout}  label={"法人证件类型"} >
                  <Select defaultValue="jack" disabled>
                    <Option value="jack">身份证</Option>
                    <Option value="lucy">居住证</Option>
                    <Option value="disabled" >签证</Option>
                    <Option value="Yiminghe">护照</Option>
                    <Option value="Yiminghe">军人证</Option>
                    <Option value="Yiminghe">驾驶证</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"法人证件号码"} >
                  <Input disabled placeholder="法人证件号码" id="" />
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={"企业法人信息"} headStyle={headStyle} bordered={true} className={styles.cardbottom}>
            <Row >
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"企业联系人"} >
                  <Input disabled placeholder="企业联系人" id="" />
                </FormItem>
              </Col>
              <Col span={8} >
                <FormItem {...formItemThreeLayout} label={"企业联系人职务"} >
                  <Input disabled placeholder="企业联系人职务" id="" />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem {...formItemThreeLayout} label={"联系人手机"} >
                  <Input disabled placeholder="联系人手机" id="" />
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={"文件列表"} headStyle={headStyle} bordered={true} className={styles.cardbottom}>
            <div style={{paddingLeft:'120px',paddingRight:'120px'}}>
              <Table columns={this.props.colums} dataSource={this.props.filelist} size="small" />
            </div>
          </Card>
          <div style={{textAlign:'center'}}>
          <ButtonGroup>
            <Button type="primary" className={styles.firstButton} onClick={agree}>同意</Button>
            <Button type="primary" className={styles.firstButton}>拒绝</Button>
            <Link to={"/yygj/platform"}>
            <Button type="primary">关闭</Button>
            </Link>
          </ButtonGroup>
          </div>
        </Form>
      </div>
    )
  }

}
export default ApplyCheck
