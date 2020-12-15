import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';

const Item = ({ task, done}) => (
	<div className = {
		classnames({
			[styles.task]: true,
			[styles.done]: done
		})
	}>{task}</div>
);

export default Item;