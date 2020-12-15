import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Checkbox from "@material-ui/core/Checkbox";

const ItemList = ({ thingToDo, onClickDone }) => (
	<div>
		{thingToDo.map(item => <div className={styles.item} key={item.task}>
			<Checkbox
        color="primary"
				checked={item.done}
      	tabIndex={-1}
        onClick={() => onClickDone(item.id)}
      />
      <Item task={item.task} done={item.done} />
		</div>)}
	</div>
);

export default ItemList;
