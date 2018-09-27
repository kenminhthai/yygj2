import React from 'react'
import { Table,Card } from 'antd';
import { connect } from 'dva';
import {Button} from "antd";
import  Link  from 'umi/link';

const ButtonGroup = Button.Group;
const namespace = "serviceOrderAffirm"
const headStyle={
  backgroundColor:"#E8E8E8",
}
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
  },
};
const mapStateToProps = (state) =>{
  const BusinessOrderData = state[namespace];
  const colums = BusinessOrderData.colums;
  const orderlist = BusinessOrderData.orderlist;
  const buttons = BusinessOrderData.buttons;
  return{
    colums, orderlist, buttons
  }
}

@connect(mapStateToProps)
class ServiceOrderAffirmList extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <Card title={<b>订单确认</b>} headStyle={headStyle} >
        <Table bordered columns={this.props.colums} dataSource={this.props.orderlist}  size="small" />
      </Card>
    )
  }

}
export default ServiceOrderAffirmList
