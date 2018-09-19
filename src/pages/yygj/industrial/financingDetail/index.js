import React from 'react'
import styles from './index.less';
import { Form, Input, Col,Row,Select,Button, Card ,Table} from 'antd';
import { connect } from 'dva'
const FormItem = Form.Item;
const formItemOneLayout = {
  labelCol: {
    sm: { span: 2 },
  },
  wrapperCol: {
    sm: { span: 22 },
  },
};
const formItemTwoLayout = {
  labelCol: {
    sm: { span: 4 },
  },
  wrapperCol: {
    sm: { span: 20 },
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
const formItemFourLayout = {
  labelCol: {
    sm: { span: 8 },
  },
  wrapperCol: {
    sm: { span: 16 },
  },
};
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
}
const namespace = 'industrialFinancingData'
const mapStateToProps = (state) =>{
  const DataList                    = state[namespace]
  const cloumns_financing_detail              = DataList.cloumns_financing_detail
  const data_financing_detail                = DataList.data_financing_detail
  const buttons                     = DataList.buttons
  const options_apply_capitalName   = DataList.options_apply_capitalName
  const options_apply_orderSuperior = DataList.options_apply_orderSuperior
  return{
    cloumns_financing_detail,
    data_financing_detail,
    buttons,
    options_apply_capitalName,
    options_apply_orderSuperior,
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
          <Card>
            <Row gutter={24}>
              <Col span={12} >
                <FormItem {...formItemTwoLayout} label={"申请机构："} >
                  <Input disabled placeholder="登录会员" id={""}/>
                </FormItem>
              </Col>
              <Col span={12} className={styles.formItemTwoLayout}>
                <FormItem {...formItemTwoLayout} label={"资金方："} >
                  <Select disabled  >
                    {
                      this.props.options_apply_capitalName.map((item, index) => {
                        return(
                          <Option value={item.value} key={index} >{item.name}</Option>
                        )
                      })
                    }
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row gutter={24} >
              <Col span={6} >
                <FormItem {...formItemFourLayout} label={"申请日期："} >
                  <Input disabled  id="" />
                </FormItem>
              </Col>
              <Col span={6} >
                <FormItem {...formItemFourLayout} label={"融资类型："} >
                  <Input disabled  id="" />
                </FormItem>
              </Col>
              <Col span={6} className={styles.formItemFourLayout}>
                <FormItem {...formItemFourLayout} label={"所属订单："} >
                  <Select disabled  >
                    {
                      this.props.options_apply_orderSuperior.map((item, index) => {
                        return(
                          <Option value={item.value} key={index} >{item.name}</Option>
                        )
                      })
                    }
                  </Select>
                </FormItem>
              </Col>
              <Col span={6} >
                <FormItem {...formItemFourLayout} label={"关联订单："} >
                  <Input disabled  id="" />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={24} >
              <Col span={6} >
                <FormItem {...formItemFourLayout} label={"订单金额："} >
                  <Input disabled  id="" />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem {...formItemFourLayout} label={"剩余金额："} >
                  <Input disabled  id="" />
                </FormItem>
              </Col>
              <Col span={6} className={styles.formItemFourLayout}>
                <FormItem {...formItemFourLayout} label={"申请金额："} >
                  <Input disabled placeholder="123321" id="" />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={24} >
              <Col span={6} >
                <FormItem {...formItemFourLayout} label={"受理日期："} >
                  <Input disabled  id="" />
                </FormItem>
              </Col>
              <Col span={6} >
                <FormItem {...formItemFourLayout} label={"审批日期："} >
                  <Input disabled  id="" />
                </FormItem>
              </Col>
              <Col span={6} className={styles.formItemFourLayout}>
                <FormItem {...formItemFourLayout} label={"申请状态："} >
                  <Input disabled placeholder="待发送" id="" />
                </FormItem>
              </Col>
            </Row>
          </Card>
          <Card>
            <Table  columns={this.props.cloumns_financing_detail} dataSource={this.props.data_financing_detail} size="small" />
          </Card>
          <Card>
            <Row gutter={24}>
              <Col offset={8}>
                <div>
                  <Button href={"/yygj/industrail/financingApply"} type="primary" name="确定" className={styles.button}>保存</Button>
                  <Button href={"/yygj/industrail/financingApply"} type="primary" name="确定" className={styles.button}>保存并发送</Button>
                  <Button href={"/yygj/industrail/financingApply"} type="primary" name="确定" className={styles.button}>取消</Button>
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
