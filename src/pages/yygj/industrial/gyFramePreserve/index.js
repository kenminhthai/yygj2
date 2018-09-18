import React from 'react'
import { Table,Button } from 'antd';
import FrameList from '../../../../../mock/FrameList'
import {HeaderButton} from '../../../../components'
import styles from './index.less'

function applyMember(){

}

function applyCheck(){
  alert('审核通过')
}
function send() {
  alert("已发送")
}
function del(){
  alert("已删除")
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


class Ptmember extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <div>
        {/*<HeaderButton items={FrameList.buttons}/>*/}
        <div>
          <Button href={"/yygj/service/fwFramePreserve/addFrame"} name="添加协议" type="primary" className={styles.button}>添加协议</Button>
          <Button onClick={send} type="primary" name="发送协议" className={styles.button}>发送协议</Button>
          <Button onClick={del} type="primary" name="删除协议" className={styles.button}>删除协议</Button>
        </div>
        <div id={"content"}>
          <Table rowSelection={rowSelection} columns={FrameList.columns} dataSource={FrameList.data} size="small" />
        </div>
      </div>
    )
  }
}
export default (Ptmember)
