import React from 'react'
import { Table ,Button,Card} from 'antd'
import { connect } from 'dva'
import  Link  from 'umi/link'

const ButtonGroup = Button.Group

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
}

const namespace = 'industrialPayData'
const mapStateToProps = (state) =>{
  const DataList = state[namespace]
  const columns =DataList.columns
  const data = DataList.data
  const buttons = DataList.buttons
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
      <Card title={<b>贸易订单付款</b>} headStyle={headStyle}>

        <Table columns={this.props.columns} dataSource={this.props.data} size="small" bordered/>
      </Card>
    )
  }

}
export default CargoDamage
