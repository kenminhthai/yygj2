import React from 'react'
import { Table } from 'antd';
import { connect } from 'dva';
import {Button, Card} from "antd";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider,Query  } from "react-apollo";
import  Link  from 'umi/link';

const ButtonGroup = Button.Group;
const namespace = "businessOrderAffirm"


const headStyle={
  backgroundColor:"#E8E8E8",
}
function applyMember(){

}

function applyCheck(){
  alert('审核通过')
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
class BusinessOrderAffirmList extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <div>
        <Card title={<b>订单确认</b>} headStyle={headStyle}>
          <Table bordered columns={this.props.colums} dataSource={this.props.orderlist} size="small" />
        </Card>
      </div>
    )
  }

}
export default BusinessOrderAffirmList
