import {Component} from 'react';
import styles from './style/SubContents.module.css';

class SubContents extends Component {
    render(){
        return (<sub className={styles.subCont}></sub>);
    }
}

export default SubContents;