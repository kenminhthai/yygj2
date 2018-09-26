import React from 'react'
import { Table ,Button} from 'antd'
import { connect } from 'dva'
import  Link  from 'umi/link'

const ButtonGroup = Button.Group
const tableChoose =[]
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect:(record, selected, selectedRows, nativeEvent) => {

    console.log("choose:",record, selected, selectedRows, nativeEvent)
  },
}

function insure(){
  console.log('selectedRows: ', selectedRows);
}
  function sendone () {
  console.log('selectedRowKeys: ',rowSelection.selectedRowKeys);
}
const namespace = 'businessDamageData'
const mapStateToProps = (state) =>{
  const businessDamageData = state[namespace]
  const columns = businessDamageData.columns
  const data = businessDamageData.data
  const buttons = businessDamageData.buttons
  return{
    columns, data,buttons,
  }
}

@connect(mapStateToProps)
class CargoDamage extends React.Component{
  render(){
    return(
      <div>
        <ButtonGroup>
          <Link to={'/yygj/business/syCargoDamage/damagePreserve'}>
          <Button  type="primary"  style={{ marginRight:'5px',marginBottom:'10px'}} >货损维护</Button>
          </Link>
          <Link to={'/yygj/business/syCargoDamage'}>
          <Button  type="primary" style={{ marginRight:'5px',marginBottom:'10px'}} >货损发送</Button>
          </Link>
          <Link to={'/yygj/business/syCargoDamage'}>
          <Button  type="primary"  style={{ marginRight:'5px',marginBottom:'10px'}} >货损删除</Button>
          </Link>
          <Link to={'/yygj/business/syCargoDamage/billInsure'}>
          <Button  type="primary"  style={{ marginRight:'5px',marginBottom:'10px'}} >发票确认</Button>
          </Link>
        </ButtonGroup>
        <Table rowSelection={rowSelection} columns={this.props.columns} dataSource={this.props.data} key={this.props.data.date_typeIn} size="small" />
      </div>
    )
  }

}
export default CargoDamage
