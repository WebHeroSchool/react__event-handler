import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
  state = {
    inputTask: ''
  };

  onButtonClick = () => {
    if (this.state.inputTask == false) {
      this.setState({error: true, helperText: 'Введите задание!'});
    } else {
      this.setState({
        inputTask: '',
        error: false,
        helperText: ''
      });
      this.props.onClickAdd(this.state.inputTask);
    }
  };

  render() {
    const { onClickAdd } = this.props;
    const errors = this.props.error;
    console.log(errors);
    return (<div className={styles.input}>
      <TextField
        className={styles.inputTask}
        id="outlined-full-width"
        style={{ margin: 0 }}
        placeholder="Добавить задание"
        fullWidth
        margin="normal"
        variant="outlined"
        error = {this.state.error}
        helperText = {this.state.helperText}
        value = {this.state.inputTask}
        onChange = {event => this.setState({ inputTask: event.target.value.toUpperCase() })}
      />
      <Button 
        variant="contained"
        color="primary"
        fullWidth
        onClick = {this.onButtonClick}
      >
        Добавить задание
      </Button>
    </div>); 
  }
}

export default InputItem;

