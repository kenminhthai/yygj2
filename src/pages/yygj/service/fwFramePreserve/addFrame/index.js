import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select,Cascader, Table,Button, Card } from 'antd';
import FileList from '../../../../../../mock/fileList'
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


class ApplyMember extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <div>
        {/*<HeaderButton items={CompanyList.buttons}/>*/}
        <Form >
          <Card title={"企业基本信息"}>
            <Row gutter={21}>
              <Col span={7} offset={1}>
                <FormItem {...formItemThreeLayout} label={"签订日期："} >
                  <Input  id="" />
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
              <Table columns={FileList.columns} dataSource={FileList.data} size={"small"}/>
            </div>
            <Row gutter={24}>
              <Col offset={8}>
                <ButtonGroup>
                  <Button type="dashed" size={"large"}className={styles.firstButton}>同意</Button>
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
export default ApplyMember
