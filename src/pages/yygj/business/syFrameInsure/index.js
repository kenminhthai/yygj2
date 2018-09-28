import React from 'react'
import { Table ,Button,Card} from 'antd'
import { connect } from 'dva'
import  Link  from 'umi/link'
import styles from './index.less'
const ButtonGroup = Button.Group

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  type:'radio',
}
const headStyle={
  backgroundColor:"#E8E8E8",
}

const namespace = 'businessFrameData'
const mapStateToProps = (state) =>{
  const DataList = state[namespace]
  const columns  = DataList.columns_insure
  const data     = DataList.data_insure
  const buttons  = DataList.buttons_Insure
  return{
    columns, data,buttons,
  }
}
@connect(mapStateToProps)
class CargoDamage extends React.Component{
  render(){
    return(
      <Card title={<b>协议确认</b>} headStyle={headStyle}>
        <Table columns={this.props.columns} dataSource={this.props.data} size="small" onHeaderRow={(clumns)=>{return{backgroundColor:"blue"}}}/>
      </Card>
    )
  }

}
export default CargoDamage
