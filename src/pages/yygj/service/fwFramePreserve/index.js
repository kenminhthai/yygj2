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
      <Card title={<ButtonGroup>
        {
          this.props.buttons.map((item, index) => {
            return(
              <Link to={item.url}>
                <Button  type="primary" onClick={item.fun} style={{ marginRight:'5px',marginBottom:'10px'}} key={index}>{item.name}</Button>
              </Link>
            )
          })
        }
      </ButtonGroup>} headStyle={headStyle}>

        <Table columns={this.props.columns} dataSource={this.props.data} size="small" bordered/>
      </Card>
    )
  }

}
export default CargoDamage
