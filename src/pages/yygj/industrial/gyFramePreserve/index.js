import React from 'react'
import { Table ,Button} from 'antd'
import { connect } from 'dva'
const ButtonGroup = Button.Group
import  Link  from 'umi/link'

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
}

const namespace = 'industralFrameData'
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
