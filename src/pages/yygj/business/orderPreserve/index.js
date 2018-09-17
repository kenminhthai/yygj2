import React from 'react'
import { Table } from 'antd';
import ServiceOrderList from '../../../../../mock/bussinessOrderList'
import {HeaderButton} from '../../../../components'

function applyMember(){

}

function applyCheck(){
  alert('审核通过')
}

class Ptmember extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <div>
        <HeaderButton items={ServiceOrderList.buttons}/>
        <div id={"content"}>
          <Table columns={ServiceOrderList.columns} dataSource={ServiceOrderList.data} size="small" />
        </div>
      </div>
    )
  }

}
export default (Ptmember)
