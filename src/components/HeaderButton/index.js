import React from 'react'
import { Button } from 'antd';
import styles from './index.less'
import  Link  from 'umi/link';

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
              <Button  className={styles.buttons}  key={index}>{item.name}</Button>
            </Link>
          )
        })}
      </ButtonGroup>
    )
  }
}

export default HeaderButtons
