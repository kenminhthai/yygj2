import React from 'react'
import { Table } from 'antd';
import { connect } from 'dva';
import {Button, message, Card} from "antd";
import  Link  from 'umi/link';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider,Query  } from "react-apollo";
const headStyle={
  backgroundColor:"#E8E8E8",
}
/*const client = new ApolloClient({
  //uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
  uri: "http://192.168.30.10:5000/graphql"
});*/

const GET_ORDER = gql`
  {
    orders {
      id
      order_date
      order_number
      buyer_organization
      seller_organizatio
      order_amount
      belonging_contract
      agreed_delivery_date
      agreed_payment_date
      order_status
    }
  }
`;

const Order  = () => (
  <Query query={GET_ORDER}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      console.log(data)
      return (
        <Table columns={this.props.colums} dataSource={data.order} rowSelection={rowSelection} size="small" />
      );
    }}
  </Query>
);


const ButtonGroup = Button.Group;
const namespace = "businessOrderData"

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
const ok = ()=>{
  message.info("操作完成！")
}

@connect(mapStateToProps)
class BusinessOrderPreserve extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <div>

        <Card headStyle={headStyle} title={
          <Link to={"/yygj/business/orderPreserve/addOrder"}>
            <Button type="primary">订单新增</Button>
          </Link>
        } style={{height:'100%'}} >
          {/*<Query query={GET_ORDER}>
            {({ loading, error, data }) => {
              if (loading) return "Loading...";
              if (error) return `Error! ${error.message}`;
              console.log(data)
              return (
                <Table columns={this.props.colums} dataSource={data.orders} rowSelection={rowSelection} size="small" />
              );
            }}
          </Query>*/}
          <Table size={'small'} bordered={true} pagination={{position:'bottom'}} columns={this.props.colums} dataSource={this.props.orderlist} />
        </Card>
      </div>
    )
  }

}
export default BusinessOrderPreserve
