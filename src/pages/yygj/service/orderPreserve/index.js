import React from 'react'
import { Table,Button,message,Card } from 'antd';
import { connect } from 'dva';
import  Link  from 'umi/link';

const namespace = 'serviceOrderData';
const ButtonGroup = Button.Group;

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
  },
};

const ok = () =>{
  message.info("操作完成")
}

const headStyle={
  backgroundColor:"#E8E8E8",
}

const mapStateToProps = (state) =>{
  const serviceOrderData = state[namespace];
  const colums = serviceOrderData.colums;
  const orderlist = serviceOrderData.orderlist;
  const buttons = serviceOrderData.buttons;
  return{
    colums, orderlist, buttons
  }
}

@connect(mapStateToProps)
class ServiceOrderPreserve extends React.Component{
  render(){
    return(
      <Card title={
        <Link to={"/yygj/service/orderPreserve/addOrder"}>
          <Button type="primary" style={{ marginRight:'5px',marginBottom:'10px'}}>订单新增</Button>
        </Link>
      } headStyle={headStyle}>
        <div>
          <Table bordered={true} columns={this.props.colums} dataSource={this.props.orderlist} size="small" />
        </div>
      </Card>
    )
  }

}
export default ServiceOrderPreserve
