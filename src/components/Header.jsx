import {Component} from 'react';
import styles from './style/Header.module.css';

class Header extends Component {
    render(){
        return (<header className={styles.head}></header>);
    }
}

export default Header;