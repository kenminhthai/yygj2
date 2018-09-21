import React from 'react'
import { Table } from 'antd';
import { connect } from 'dva';
import {Button, message} from "antd";
import  Link  from 'umi/link';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider,Query  } from "react-apollo";


const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

const Dogs  = () => (
  <Query query={GET_DOGS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <select name="dog" onChange={onDogSelected}>
          {data.dogs.map(dog => (
            <option key={dog.id} value={dog.breed}>
              {dog.breed}
            </option>
          ))}
        </select>
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
      <ApolloProvider client={client}>
      <div>
        <ButtonGroup>
          {this.props.buttons.map((item, index) => {
            if(item.url != ''){
              return(
                <Link to={item.url}>
                  <Button type="primary" style={{ marginRight:'5px',marginBottom:'10px'}} key={index}>{item.name}</Button>
                </Link>
              )
            }else{
              return(
                <Button onClick={ok} type="primary" style={{ marginRight:'5px',marginBottom:'10px'}} key={index}>{item.name}</Button>
              )
            }
          })}
        </ButtonGroup>
        <div id={"content"}>
          <Table columns={this.props.colums} dataSource={this.props.orderlist} rowSelection={rowSelection} size="small" />
        </div>
      </div>
      </ApolloProvider>
    )
  }

}
export default BusinessOrderPreserve
