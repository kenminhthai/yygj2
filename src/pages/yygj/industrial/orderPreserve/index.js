import React from 'react'
import { Table, Button,Card } from 'antd';
import { connect } from 'dva';
import  Link  from 'umi/link';
import {message} from "antd/lib/index";

const ButtonGroup = Button.Group;
const namespace = "industrialOrderData";

const headStyle={
  backgroundColor:"#E8E8E8",
}
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
  },
};
const mapStateToProps = (state) =>{
  const industralOrderData = state[namespace];
  const colums = industralOrderData.colums;
  const orderlist = industralOrderData.orderlist;
  const buttons = industralOrderData.buttons;
  return{
    colums, orderlist, buttons
  }
}

const ok = () =>{
  message.info('操作完成');
}

@connect(mapStateToProps)
class IndustrialOrderPreserve extends React.Component{
  render(){
    return(
      <div >
        <Card title={
          <Link to={"/yygj/industrial/orderPreserve/addOrder"}>
            <Button  type="primary" style={{ marginRight:'5px',marginBottom:'10px'}}>新增申请</Button>
          </Link>
        } headStyle={headStyle}>
          <Table bordered={true} columns={this.props.colums} dataSource={this.props.orderlist} size="small" />
        </Card>
      </div>
    )
  }

}
export default IndustrialOrderPreserve
