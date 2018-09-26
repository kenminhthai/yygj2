import React from 'react'
import { Table } from 'antd';
import { connect } from 'dva';
import {Button, Card} from "antd";
import  Link  from 'umi/link';

const ButtonGroup = Button.Group;
const namespace = "businessOrderAffirm"
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
        <Card title={
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
                  <Button  type="primary" style={{ marginRight:'5px',marginBottom:'10px'}} key={index}>{item.name}</Button>
                )
              }
            })}
          </ButtonGroup>}>
          <Table columns={this.props.colums} dataSource={this.props.orderlist} rowSelection={rowSelection} size="small" />
        </Card>
      </div>
    )
  }

}
export default BusinessOrderAffirmList
