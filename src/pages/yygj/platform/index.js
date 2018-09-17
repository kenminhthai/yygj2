import React from 'react'
import { Table } from 'antd';
import CompanyList from '../../../../mock/companyList'
import {HeaderButton} from '../../../components'

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
        <HeaderButton items={CompanyList.buttons}/>
        <div id={"content"}>
          <Table columns={CompanyList.columns} dataSource={CompanyList.data} size="small" />
        </div>
      </div>
    )
  }

}
export default (Ptmember)
