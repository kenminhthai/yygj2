import React from 'react'
import { Table ,Button} from 'antd';
import FrameList from '../../../../../mock/FrameList'
function insure(){
  alert("已确认")
}
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};


class syFramePreserve extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <div>
        <div>
          <Button onClick={insure} type="primary" name="协议确认">协议确认</Button>
        </div>
        <div id={"content"}>
          <Table rowSelection={rowSelection} columns={FrameList.columns} dataSource={FrameList.data} size="small" />
        </div>
      </div>
    )
  }

}
export default (syFramePreserve)
