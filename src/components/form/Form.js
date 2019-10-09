import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            textValue: 'Initial text...',
            selectValue: '',
            multiSelectValues: [],
            checkedValue: false
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleTextChange = this.handleTextChange.bind(this);
        // this.handleSelectChange = this.handleSelectChange.bind(this);
        // this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
        this.handleAnyChange = this.handleAnyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(event) {
    //     this.setState({value: event.target.value.toUpperCase()});
    // }
    // handleTextChange(event) {
    //     this.setState({textValue: event.target.value});
    // }
    // handleSelectChange(event) {
    //     this.setState({selectValue: event.target.value});
    // }
    // handleMultiSelectChange(event) {
    //     this.setState({multiSelectValues: Array.from(event.target.selectedOptions, (option) => option.value)});
    // }

    handleAnyChange(event) {
        const inputType = event.target.type;
        var value;
        switch (inputType) {
            case 'text':
                value = event.target.value.toUpperCase();
                break;
            case 'select-multiple':
                value = Array.from(event.target.selectedOptions, (option) => option.value);
                break;
            case 'checkbox':
                value = event.target.checked;
                break;
            default:
                value = event.target.value;
        }
        this.setState({[event.target.name]: value});
    }

    handleSubmit(event) {
        console.log('Name submitted was: ' + this.state.value);
        console.log('Text submitted was: ' + this.state.textValue);
        console.log('Selected option was: ' + this.state.selectValue);
        console.log('Multi selected options were: ' + this.state.multiSelectValues);
        console.log('Checked was: ' + this.state.checkedValue);
        event.preventDefault();
    }

    render() {
        const options = ['red', 'blue', 'green'];
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Uneditable:
                    <input type='text' value='do not edit' readOnly/>
                </label><br />
                <label>
                    Name:
                    <input type='text' name='value' value={this.state.value} onChange={this.handleAnyChange} />
                </label><br />
                <label>
                    Text:
                    <textarea name='textValue' value={this.state.textValue} onChange={this.handleAnyChange} />
                </label><br />
                <label>
                    Select one:
                    <select name='selectValue' value={this.state.selectValue} onChange={this.handleAnyChange}>
                        <option key={0} value=''>Please select</option>
                        {options.map((color, index) => 
                          <option key={index+1} value={color}>{color}</option> 
                        )}
                    </select>
                </label><br />
                <label>
                    Select multiple:
                    <select name='multiSelectValues' multiple={true} value={this.state.multiSelectValues} onChange={this.handleAnyChange}>
                        <option key={0} value=''>Please select</option>
                        {options.map((color, index) => 
                          <option key={index+1} value={color}>{color}</option> 
                        )}
                    </select>
                </label><br />
                <label>
                    Checkbox:
                    <input type='checkbox' name='checkedValue' value={this.state.checkedValue} onChange={this.handleAnyChange} />
                </label><br />
                <input type='submit' value='Submit' />
            </form>
        );
    }
}

export default Form;