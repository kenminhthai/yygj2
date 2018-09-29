import React from 'react'
import { Table } from 'antd';
import { connect } from 'dva';
import {Button, message, Card} from "antd";
import  Link  from 'umi/link';
const headStyle={
  backgroundColor:"#E8E8E8",
}



const ButtonGroup = Button.Group;
const namespace = "businessOrderData"

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

const mapDispatchToProps = (dispatch) => {
  return {
    queryOrders: () => {
      dispatch({
        type: `${namespace}/queryOrders`,
      });
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class BusinessOrderPreserve extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  componentDidMount(){
    this.props.queryOrders();
  }
  render(){
    return(
      <div>
        <Card headStyle={headStyle} title={
          <Link to={"/yygj/business/orderPreserve/addOrder"}>
            <Button type="primary">订单新增</Button>
          </Link>
        } style={{height:'100%'}} >
          <Table size={'small'} bordered={true} pagination={{position:'bottom'}} columns={this.props.colums} dataSource={this.props.orderlist} />
        </Card>
      </div>
    )
  }

}
export default BusinessOrderPreserve
