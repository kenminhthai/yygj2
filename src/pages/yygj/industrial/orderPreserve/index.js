import React from 'react'
import { Table, Button } from 'antd';
import { connect } from 'dva';
import  Link  from 'umi/link';
import {message} from "antd/lib/index";

const ButtonGroup = Button.Group;
const namespace = "industrialOrderData";

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
  },
};
const mapStateToProps = (state) =>{
  const industralOrderData = state[namespace];
  const colums = industralOrderData.colums;
  const orderlist = industralOrderData.orderlist;
  const buttons = industralOrderData.buttons;
  return{
    colums, orderlist, buttons
  }
}

const ok = () =>{
  message.info('操作完成');
}

@connect(mapStateToProps)
class IndustrialOrderPreserve extends React.Component{
  render(){
    return(
      <div>
        <ButtonGroup>
          {this.props.buttons.map((item, index) => {
            if(item.url != ''){
              return(
                <Link to={item.url}>
                  <Button type="primary" style={{ marginRight:'5px',marginBottom:'10px'}} key={index}>{item.name}</Button>
                </Link>
              )
            }else{
              return(
                  <Button onClick={ok} type="primary" style={{ marginRight:'5px',marginBottom:'10px'}} key={index}>{item.name}</Button>
              )
            }

          })}
        </ButtonGroup>
        <div>
          <Table columns={this.props.colums} dataSource={this.props.orderlist} rowSelection={rowSelection} size="small" />
        </div>
      </div>
    )
  }

}
export default IndustrialOrderPreserve
