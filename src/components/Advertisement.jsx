import {Component} from 'react';
import styles from './style/Advertisement.module.css';

class Advertisement extends Component {
    render(){
        return (<sub className={styles.ad}></sub>);
    }
}

export default Advertisement;