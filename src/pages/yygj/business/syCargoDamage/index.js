import React from 'react'
import { Table ,Button} from 'antd';
import cargoList from '../../../../../mock/cargoList'
import styles from './index.less'

function send() {
  alert("已发送")
}
function del(){
  alert("已删除")
}
class CargoDamage extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <div>
        <div>
          <Button href={"/yygj/business/syCargoDamage/damagePreserve"} name="货损维护" type="primary" className={styles.button}>货损维护</Button>
          <Button onClick={send} type="primary" name="货损发送" className={styles.button}>货损发送</Button>
          <Button onClick={del} type="primary" name="货损删除" className={styles.button}>货损删除</Button>
          <Button href={"/yygj/business/syCargoDamage/billInsure"} name="发票确认" type="primary" className={styles.button}>发票确认</Button>

        </div>
        <div id={"content"}>
          <Table columns={cargoList.columns} dataSource={cargoList.data} size="small" />
        </div>
      </div>
    )
  }

}
export default (CargoDamage)
