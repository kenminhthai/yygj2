import React from 'react'
import { Table,Button } from 'antd';
import { connect } from 'dva';
import  Link  from 'umi/link';

const namespace = 'serviceOrderData';
const ButtonGroup = Button.Group;

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
  },
};

const mapStateToProps = (state) =>{
  const serviceOrderData = state[namespace];
  const colums = serviceOrderData.colums;
  const orderlist = serviceOrderData.orderlist;
  const buttons = serviceOrderData.buttons;
  return{
    colums, orderlist, buttons
  }
}

@connect(mapStateToProps)
class ServiceOrderPreserve extends React.Component{
  render(){
    return(
      <div>
        <ButtonGroup>
          {this.props.buttons.map((item, index) => {
            return(
              <Link to={item.url}>
                <Button  type="primary" style={{ marginRight:'5px',marginBottom:'10px'}} key={index}>{item.name}</Button>
              </Link>
            )
          })}
        </ButtonGroup>
        <div>
          <Table columns={this.props.colums} dataSource={this.props.orderlist} rowSelection={rowSelection} size="small" />
        </div>
      </div>
    )
  }

}
export default ServiceOrderPreserve