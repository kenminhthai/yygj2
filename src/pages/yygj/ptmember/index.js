import React from 'react'
import { Table } from 'antd';
import CompanyList from '../../../../mock/companyList'
import {HeaderButton} from '../../../components'
import ApplyMember from './applyMember'
import { Router, Route, hashHistory } from 'react-router';

const buttons = [
  {
    name:'会员申请',
    url:'/yygj/ptmember/applymember'
  },
  {
    name:'申请审核',
    url:'/yygj/ptmember/applcheck'
  }
]

function applyMember(){
  return(
    <Router history={hashHistory}>
      <Route path="/applymember" component={ApplyMember}/>
    </Router>
  )
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
        <HeaderButton items={buttons}/>
        <div id={"content"}>
          <Table columns={CompanyList.columns} dataSource={CompanyList.data} size="small" />
        </div>
      </div>
    )
  }

}
export default (Ptmember)
