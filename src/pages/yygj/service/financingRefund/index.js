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
const headStyle={
  backgroundColor:"#E8E8E8",
}
const namespace = 'serviceRefundData'
const mapStateToProps = (state) =>{
  const DataList = state[namespace]
  const columns  = DataList.columns
  const data     = DataList.data
  const buttons  = DataList.buttons
  return{
    columns, data,buttons,
  }
}
@connect(mapStateToProps)
class CargoDamage extends React.Component{
  render(){
    return(
      <Card title={<b>融资还款</b>} headStyle={headStyle} >
        <Table bordered columns={this.props.columns} dataSource={this.props.data} size="small" />
      </Card>
    )
  }

}
export default CargoDamage
