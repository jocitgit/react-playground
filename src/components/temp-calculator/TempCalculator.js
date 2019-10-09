import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function BoilingVerdict(props) {
    const verdict = props.celsius >= 100 ? 'would' : 'would not';
    return (
        <p>
            The water {verdict} boil
        </p>
    );
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onTempChange(event.target.value);
    }

    render() {
        const scale = this.props.scale;
        const temperature = this.props.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input type='text' value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class TempCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '', 
            scale: ''
        };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(tempC) {
        this.setState({
            temperature: tempC,
            scale: 'c'
        });
    }
    handleFahrenheitChange(tempF){
        this.setState({
            temperature: tempF,
            scale: 'f'
        });
    }

    render() {
        const scale = this.state.scale;
        const temp = this.state.temperature;
        const celsius = scale === 'c' ? temp : convertTemp(temp, toCelsius);
        const fahrenheit = scale === 'f' ? temp : convertTemp(temp, toFahrenheit);

        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTempChange={this.handleCelsiusChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} onTempChange={this.handleFahrenheitChange} />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5 + 32);
}
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
function convertTemp(temp, convertFn) {
    if (Number.isNaN(parseFloat(temp))) return '';
    return ((Math.round(convertFn(temp)*1000))/1000).toString(); // 3 decimal places
}

export default TempCalculator;