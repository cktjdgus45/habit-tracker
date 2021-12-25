import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {

    handleIncreament = (habit) => {
        this.props.onIncreament(habit);
    };
    handleDecreament = (habit) => {
        this.props.onDecreament(habit);
    };
    handleDelete = (habit) => {
        this.props.onDelete(habit);
    };
    handleAdd = (name) => {
        this.props.onAdd(name);
    };
    render() {
        return (
            <>
                <HabitAddForm onAdd={this.handleAdd} />
                <ul>
                    {this.props.habits.map(habit => (
                        <Habit
                            key={habit.id}
                            habit={habit}
                            onIncreament={this.handleIncreament}
                            onDecreament={this.handleDecreament}
                            onDelete={this.handleDelete} />
                    )
                    )}
                </ul>
                <button className='habit-reset' onClick={this.props.onReset}>
                    Reset All
                </button>
            </>
        )
    }
}

export default Habits;