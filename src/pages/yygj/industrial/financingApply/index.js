import React from 'react'
import { Table ,Button, Card} from 'antd'
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
const namespace = 'industrialFinancingData'
const mapStateToProps = (state) =>{
  const DataList = state[namespace]
  const columns  = DataList.columns_apply
  const data     = DataList.data_apply
  const buttons  = DataList.buttons_apply
  return{
    columns, data,buttons,
  }
}
@connect(mapStateToProps)
class CargoDamage extends React.Component{
  render(){
    return(
      <Card title={
        <Link to={"/yygj/industrial/financingApply/addFinancing"}>
        <Button  type="primary" style={{ marginRight:'5px',marginBottom:'10px'}}>新增申请</Button>
        </Link>
      } headStyle={headStyle}>
        <Table bordered={true} columns={this.props.columns} dataSource={this.props.data} size="small" />
      </Card>
    )
  }

}
export default CargoDamage
