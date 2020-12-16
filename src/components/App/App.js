import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
	state = {
		thingToDo: [
			{
				task: 'Сдать урок по React',
				done: false,
				id: 1
			},
			{
				task: 'Прочитать книгу',
				done: false,
				id: 2
			},
			{
				task: 'Посмотреть фильм',
				done: true,
				id: 3
			},
			{
				task: 'Сходить за продуктами',
				done: true,
				id: 4
			}
		],
		count: 3
	};

	onClickDone = id => {
		const newItemList = this.state.thingToDo.map(item => {
			const newItem = { ...item };
			if (item.id === id) {
				newItem.done = !item.done
			};
			return newItem;
		});
		this.setState ({ thingToDo: newItemList });
	};

	onClickDelete = id => {
		const newItemList = this.state.thingToDo.filter(item => item.id !== id );
		this.setState({ thingToDo: newItemList });
	}

	render () {
		return (
			<div className={styles.wrap}>
		    <h1 className={styles.title}>Мои списки дел:</h1>
		    <InputItem />
		    <ItemList 
		    	thingToDo = {this.state.thingToDo}
		    	onClickDone = {this.onClickDone} 
		    	onClickDelete = {this.onClickDelete} 
		    />
		    <Footer count = {this.state.count} />
			</div>
		);
	}
};

export default App;