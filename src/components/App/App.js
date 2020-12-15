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
			}
		]
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

	render () {
		return (
			<div className={styles.wrap}>
		    <h1 className={styles.title}>Мои списки дел:</h1>
		    <InputItem />
		    <ItemList thingToDo = {this.state.thingToDo} onClickDone = {this.onClickDone} />
		    <Footer count = {3} />
			</div>
		);
	}
};

export default App;