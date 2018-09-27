import React from 'react'
import { Table ,Button,Card} from 'antd'
import { connect } from 'dva'
const ButtonGroup = Button.Group
import  Link  from 'umi/link'

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
}

const namespace = 'industralDamageData'
const mapStateToProps = (state) =>{
  const industralDamageData = state[namespace]
  const columns = industralDamageData.columns
  const data = industralDamageData.data
  const buttons = industralDamageData.buttons
  return{
    columns, data,buttons,
  }
}
const headStyle={
  backgroundColor:"#E8E8E8",
}
@connect(mapStateToProps)
class CargoDamage extends React.Component{
  render(){
    return(
      <Card title={<b>货损确认</b>} headStyle={headStyle}>
        <Table columns={this.props.columns} dataSource={this.props.data} size="small" bordered/>
      </Card>
    )
  }

}
export default CargoDamage
