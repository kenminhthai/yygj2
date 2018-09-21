import React from 'react'
import { Table } from 'antd';
import { connect } from 'dva';
import  Link  from 'umi/link';
import {Button} from "antd";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider,Query } from "react-apollo";

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

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

const DogPhoto = ({ breed }) => (
  <Query query={GET_DOG_PHOTO} variables={{ breed }}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      return (
        <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
      );
    }}
  </Query>
);

const Dogs = ({ onDogSelected }) => (
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


const namespace = 'platformData';
const ButtonGroup = Button.Group;

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
  },
};

const mapStateToProps = (state) =>{
  const platformData = state[namespace];
  const colums = platformData.colums;
  const memberlist = platformData.memberlist;
  const buttons = platformData.buttons;
  return{
    colums, memberlist, buttons
  }
}

@connect(mapStateToProps)
class Platform extends React.Component{
  render(){
    return(
      <ApolloProvider client={client}>
      <div>
        <ButtonGroup>
          {this.props.buttons.map((item, index) => {
            return(
              <Link to={item.url}>
                <Button  type="primary" style={{ marginRight:'5px',marginBottom:'10px'}} key={index}>{item.name}</Button>
              </Link>
            )
          })}
        </ButtonGroup>
        <Table columns={this.props.colums} dataSource={this.props.memberlist} rowSelection={rowSelection} size="small" />
      </div>
      </ApolloProvider>
    )
  }

}
export default Platform
