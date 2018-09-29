import React from 'react'
import { Table,Card } from 'antd';
import { connect } from 'dva';
import  Link  from 'umi/link';
import {Button} from "antd";
import styles from './index.less'
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider,Query  } from "react-apollo";
const namespace = 'platformData';
const ButtonGroup = Button.Group;

const headStyle={
  backgroundColor:"#E8E8E8",
}
const mapStateToProps = (state) =>{
  const platformData = state[namespace];
  const colums = platformData.colums;
  const memberlist = platformData.memberlist;
  const buttons = platformData.buttons;
  return{
    colums, memberlist, buttons
  }
}
const client = new ApolloClient({
  //uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
  uri: "http://192.168.30.10:5000/graphql"
});
const query = gql`{
  getEnterpriseMemberApplications{
  id
  entry_person
  application_number
  source_of_application
  date_of_application
  application_status
  reviewer
  audit_date
}

}`

@connect(mapStateToProps)
class Platform extends React.Component{
  render(){
    return(
      <Card title={
        <ButtonGroup>
          <Link to={"/yygj/platform/applyMember"}>
            <Button  type="primary" style={{ marginRight:'5px',marginBottom:'10px'}}>会员申请</Button>
          </Link>
          <Link to={"/yygj/platform/applyCheck"}>
            <Button  type="primary" style={{ marginRight:'5px',marginBottom:'10px'}}>申请审核</Button>
          </Link>
        </ButtonGroup>
      } headStyle={headStyle} className={styles.cardbottom}>
        <ApolloProvider client={client}>
        <Query query={query}>
            {({ loading, error, data }) => {
              if (loading) return "Loading...";
              if (error) return `Error! ${error.message}`;
              console.log(data)
              return (
                <Table columns={this.props.colums} dataSource={data.getEnterpriseMemberApplications} size="small" bordered/>
              );
            }}
          </Query>
        </ApolloProvider>
      </Card>
    )
  }

}
export default Platform
