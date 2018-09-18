import React from 'react'
import { Table } from 'antd';
import { connect } from 'dva';
import  Link  from 'umi/link';
import {Button} from "antd";

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
    )
  }

}
export default Platform
