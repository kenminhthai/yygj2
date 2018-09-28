import React from 'react'
import { Table,Card } from 'antd';
import { connect } from 'dva';
import  Link  from 'umi/link';
import {Button} from "antd";
import styles from './index.less'
const namespace = 'platformData';
const ButtonGroup = Button.Group;

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
  },
};
const headStyle={
  backgroundColor:"#E8E8E8",
}
const mapStateToProps = (state) =>{
  const platformData = state[namespace];
  const colums = platformData.colums;
  const memberlist = platformData.memberlist;
  const buttons = platformData.buttons;
  return{
    colums, memberlist, buttons
  }
}

@connect(mapStateToProps)
class Platform extends React.Component{
  render(){
    return(
      <Card title={
        <ButtonGroup>
          <Link to={"/yygj/platform/applyMember"}>
            <Button  type="primary" style={{ marginRight:'5px',marginBottom:'10px'}}>会员申请</Button>
          </Link>
          <Link to={"/yygj/platform/applyCheck"}>
            <Button  type="primary" style={{ marginRight:'5px',marginBottom:'10px'}}>申请审核</Button>
          </Link>
        </ButtonGroup>
      } headStyle={headStyle} className={styles.cardbottom}>
        <Table bordered columns={this.props.colums} dataSource={this.props.memberlist}size="small" />
      </Card>
    )
  }

}
export default Platform
