import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select,Cascader,Upload, Button,  Card } from 'antd';

const namespace = "platformData"
const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const Dragger = Upload.Dragger;
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

class ApplyMember extends React.Component{
  render(){
    return(
      <div>
        <Form>
          <Card title={"企业基本信息"}>
            <FormItem {...formItemOneLayout} label={"企业名称"} >
              <Input placeholder="企业名称" id="" />
            </FormItem>
            <FormItem {...formItemOneLayout} label={"企业英文名称"} >
              <Input placeholder="企业英文名称" id="" />
            </FormItem>
            <FormItem {...formItemOneLayout} label={"企业简称"} >
              <Input placeholder="企业简称" id="" />
            </FormItem>
            <Row gutter={24}>
              <Col span={12}>
                <FormItem {...formItemTwoLayout} label={"所在地区"} >
                  <Cascader options={options} placeholder="所在地区" />
                </FormItem>
              </Col>
              <Col span={12} >
                <FormItem {...formItemTwoLayout} label={"企业会员类型"} >
                  <Select defaultValue="lucy" >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row gutter={21}>
              <Col span={7} offset={1}>
                <FormItem {...formItemThreeLayout} label={"所属行业"} >
                  <Select defaultValue="lucy" >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"企业性质"} >
                  <Select defaultValue="lucy" >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"企业规模"} >
                  <Select defaultValue="lucy" >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row gutter={21} >
              <Col span={7} offset={1}>
                <FormItem {...formItemThreeLayout} label={"组织机构代码"} >
                  <Input placeholder="组织机构代码" id="" />
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"工商登记注册号"} >
                  <Input placeholder="工商登记注册号" id="" />
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"机构信用代码"} >
                  <Input placeholder="机构信用代码 " id="" />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={21}>
              <Col span={7} offset={1}>
                <FormItem {...formItemThreeLayout} label={"企业注册日期"} >
                  <Input placeholder="企业注册日期" id="" />
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"企业联系电话"} >
                  <Input placeholder="企业联系电话" id="" />
                </FormItem>
              </Col>
              <Col span={7} className={styles.formItemThreeLayout}>
                <FormItem {...formItemThreeLayout} label={"企业传真"} >
                  <Input placeholder="企业传真 " id="" />
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={"企业法人信息"}>
            <Row gutter={24}>
              <Col span={12}>
                <FormItem {...formItemTwoLayout} label={"企业法人"} >
                  <Input placeholder="企业法人" id="" />
                </FormItem>
              </Col>
              <Col span={12} >
                <FormItem {...formItemTwoLayout} label={"法人证件类型"} >
                  <Select defaultValue="lucy" >
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
                  <Input placeholder="法人证件号码" id="" />
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={"企业法人信息"}>
            <Row gutter={24}>
              <Col span={12}>
                <FormItem {...formItemTwoLayout} label={"企业联系人"} >
                  <Input placeholder="企业联系人" id="" />
                </FormItem>
              </Col>
              <Col span={12} >
                <FormItem {...formItemTwoLayout} label={"企业联系人职务"} >
                  <Input placeholder="企业联系人职务" id="" />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <FormItem {...formItemTwoLayout} label={"联系人手机"} >
                  <Input placeholder="联系人手机" id="" />
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card title={"上传文件"}>
            <FormItem {...formItemOneLayout}  label={"营业执照"} >
              <Dragger  >
                <p className="ant-upload-text">点击上传营业执照</p>
              </Dragger>
            </FormItem>
            <FormItem {...formItemOneLayout}  label={"营业执照"} >
              <Dragger  >
                <p className="ant-upload-text">点击上传营业执照</p>
              </Dragger>
            </FormItem>
            <FormItem {...formItemOneLayout}  label={"营业执照"} >
              <Dragger  >
                <p className="ant-upload-text">点击上传营业执照</p>
              </Dragger>
            </FormItem>
            <FormItem {...formItemOneLayout}  label={"营业执照"} >
              <Dragger >
                <p>点击上传营业执照</p>
              </Dragger>
            </FormItem>
            <Row gutter={24}>
              <Col offset={9}>
                <ButtonGroup>
                  <Button type="primary" size={"large"}className={styles.firstButton}>保存</Button>
                  <Button type="primary" size={"large"}>取消</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Card>
        </Form>
      </div>
    )
  }

}
export default ApplyMember
