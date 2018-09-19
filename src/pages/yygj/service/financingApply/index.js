import React from 'react'
import { Table ,Button} from 'antd'
import { connect } from 'dva'
import  Link  from 'umi/link'
const ButtonGroup = Button.Group

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
}

const namespace = 'serviceFinancingData'
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
      <div>
        <ButtonGroup>
          {
            this.props.buttons.map((item, index) => {
              return(
                <Link to={item.url}>
                  <Button  type="primary" onClick={item.fun} style={{ marginRight:'5px',marginBottom:'10px'}} key={index}>{item.name}</Button>
                </Link>
              )
            })
          }
        </ButtonGroup>
        <Table rowSelection={rowSelection} columns={this.props.columns} dataSource={this.props.data} size="small" />
      </div>
    )
  }

}
export default CargoDamage
