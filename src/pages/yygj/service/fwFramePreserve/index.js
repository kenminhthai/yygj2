import React from 'react'
import { Table } from 'antd';
import FrameList from '../../../../../mock/FrameList'
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
        <HeaderButton items={FrameList.buttons}/>
        <div id={"content"}>
          <Table columns={FrameList.columns} dataSource={FrameList.data} size="small" />
        </div>
      </div>
    )
  }

}
export default (Ptmember)
