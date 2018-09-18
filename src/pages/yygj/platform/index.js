import React from 'react'
import { Table } from 'antd';
import CompanyList from '../../../../mock/companyList'
import {HeaderButton} from '../../../components'

function applyMember(){

}

function applyCheck(){
  alert('审核通过')
}

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
  },
};

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
          <Table columns={CompanyList.columns} dataSource={CompanyList.data} rowSelection={rowSelection} size="small" />
        </div>
      </div>
    )
  }

}
export default (Ptmember)
