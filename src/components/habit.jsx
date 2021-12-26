import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    componentDidMount() {
        console.log(`habit:${this.props.habit.name} mounted`)
    }
    componentWillUnmount() {
        console.log(`habit:${this.props.habit.name} will unmount`)
    }
    handleIncreament = () => {
        this.props.onIncreament(this.props.habit);
    };
    handleDecreament = () => {
        this.props.onDecreament(this.props.habit);
    };
    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };
    render() {
        const { name, count } = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button onClick={this.handleIncreament} className="habit-button habit-increase">
                    <i className="fas fa-plus-square"></i>
                </button>
                <button onClick={this.handleDecreament} className="habit-button habit-decrease">
                    <i className="fas fa-minus-square "></i>
                </button>
                <button onClick={this.handleDelete} className="habit-button habit-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;