import {Component} from 'react';
import styles from './style/Main.module.css';

class Main extends Component {
    render(){
        return (<main className={styles.main}>{this.props.children}</main>);
    }
}

export default Main;