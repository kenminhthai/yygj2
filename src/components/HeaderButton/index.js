import React from 'react'
import { Button } from 'antd';
import styles from './index.less'
import { Link } from "react-router-dom";

const ButtonGroup = Button.Group;
class HeaderButtons extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <ButtonGroup>
        {this.props.items.map((item, index) => {
            return(
                <Link to={item.url}>
                  <Button type="primary" size={"large"} className={styles.buttons}  key={index}>{item.name}</Button>
                  </Link>
            )
        })}
      </ButtonGroup>
    )
  }
}

export default HeaderButtons
