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

const namespace = 'serviceFrameData'
const mapStateToProps = (state) =>{
  const DataList = state[namespace]
  const columns =DataList.columns_insure
  const data = DataList.data_insure
  const buttons = DataList.buttons_Insure
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
      <Card title={<b>协议确认</b>} headStyle={headStyle}>

        <Table  columns={this.props.columns} dataSource={this.props.data} size="small" bordered/>
      </Card>
    )
  }

}
export default CargoDamage
