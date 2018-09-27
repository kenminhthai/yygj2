import React from 'react'
import { Table ,Button,Card} from 'antd'
import { connect } from 'dva'
const ButtonGroup = Button.Group
import  Link  from 'umi/link'

const headStyle={
  backgroundColor:"#E8E8E8",
}
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
}

const namespace = 'businessPayData'
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
      <Card title={<b>贸易订单付款</b>} headStyle={headStyle} >
        <Table bordered={true}  columns={this.props.columns} dataSource={this.props.data} size="small" />
      </Card>
    )
  }

}
export default CargoDamage
