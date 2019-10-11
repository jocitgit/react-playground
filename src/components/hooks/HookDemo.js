import React, { useState, useEffect } from 'react';
import useTitleHook from './TitleHook.js';

function StateExample() {
    const [count, setCount] = useState(0); // initial value
    const [person, setPerson] = useState({ name: 'Someone', age: 0 });
    const calcValue = (person.age % 3 === 0);

    // Called every time component rendered - equivalent to componentDidMount and componentDidUpdate
    useEffect(() => {
        console.log(`perform useEffect action ${person.age}`);
        return () => {
            // any cleanup code goes here - equivalent to componentWillUnmount
            // also called to cleanup previous render before effect happens for next render - can override
            console.log('cleaning up');
        }
    });

    useEffect(() => {
        console.log(`Current value is ${calcValue}`);
    }, [calcValue, person.name] // only run the effect if calcValue OR person.name has changed 
    ); // (similar to comparing current props/state to prevProps/prevState in componentDidMount)

    const handleClick = () => {
        setCount(count + 1);
        setPerson({ name: person.name, age: person.age + 1 });
    }

    useTitleHook(person.name);

    return (
        <div >
            <p>{person.name} is {person.age} years old</p>
            <p data-testid='counter'>Button clicked {count} times</p>
            <button onClick={handleClick}>Increment age</button>
        </div >
    );
}

function HookDemo() {


    return (
        <StateExample />
    );
}

export default HookDemo;