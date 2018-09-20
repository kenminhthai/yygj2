import React from 'react'
import { Table ,Button} from 'antd'
import Link from 'umi/link'

class industrialFinancingProtocol extends React.Component{
  render(){
    return(
      <div>
        <Link to="/yygj/industrial/financingRefund/financingProtocol">
          <Button  type="primary" style={{ marginRight:'5px',marginBottom:'10px'}} >还款</Button>
        </Link>
        <div style={{width:'50%',height:'200px',marginLeft:'250px',marginTop:'100px',border:'1px black solid'}}>
          <Link to="/yygj/industrial/financingRefund">
            <Button  type="primary" style={{ marginLeft:'10px',marginTop:'10px'}} >关闭</Button>
          </Link>
        </div>
      </div>
    )
  }

}
export default industrialFinancingProtocol
