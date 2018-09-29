import React from 'react'
import { Table } from 'antd';
import { connect } from 'dva';
import {Button, message, Card} from "antd";
import  Link  from 'umi/link';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider,Query  } from "react-apollo";

const client = new ApolloClient({
  uri: 'http://192.168.30.10:5000/graphql',
})
const headStyle={
  backgroundColor:"#E8E8E8",
}

const GET_ORDER = gql`
  {
    orders {
      id
      order_date
      order_number
      buyer_organization
      seller_organization
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

const mapDispatchToProps = (dispatch) => {
  return {
    queryOrders: () => {
      dispatch({
        type: `${namespace}/queryOrders`,
      });
    },
  };
};

const ok = ()=>{
  message.info("操作完成！")
}

@connect(mapStateToProps, mapDispatchToProps)
class BusinessOrderPreserve extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  /*componentDidMount(){
    this.props.queryOrders();
  }*/
  render(){
    return(
      <div>
        <ApolloProvider client={client} >
        <Card headStyle={headStyle} title={
          <Link to={"/yygj/business/orderPreserve/addOrder"}>
            <Button type="primary">订单新增</Button>
          </Link>
        } style={{height:'100%'}} >
          <Query query={GET_ORDER}>
            {({ loading, error, data }) => {
              if (loading) return "Loading...";
              if (error) return `Error! ${error.message}`;
              data.orders.map((order, index) => {
                if(order.order_date != null ) {
                  data.orders[index].order_date = (new Date(parseInt(order.order_date))).format("yyyy-MM-dd");
                  data.orders[index].agreed_delivery_date = (new Date(parseInt(order.agreed_delivery_date))).format("yyyy-MM-dd");
                  data.orders[index].agreed_payment_date = (new Date(parseInt(order.agreed_payment_date))).format("yyyy-MM-dd");
                }
                if(order.order_status == '0'){
                  data.orders[index].order_status = '草稿'
                }else if (order.order_status == '2'){
                  data.orders[index].order_status = '已发送'
                }
              })
              return (
                <Table bordered columns={this.props.colums} dataSource={data.orders}  size="small" />
              );
            }}
          </Query>
          {/*<Table size={'small'} bordered={true} pagination={{position:'bottom'}} columns={this.props.colums} dataSource={this.props.orderlist} />
      */}  </Card>
        </ApolloProvider>
      </div>
    )
  }

}
export default BusinessOrderPreserve
