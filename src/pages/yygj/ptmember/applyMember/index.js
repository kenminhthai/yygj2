import React from 'react'
import {HeaderButton} from '../../../../components'
import CompanyList from '../../../../../mock/companyList'
class ApplyMember extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <div>
        <HeaderButton items={CompanyList.buttons}/>
      </div>
    )
  }

}
export default ApplyMember
