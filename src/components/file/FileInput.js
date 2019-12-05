import React from 'react';


class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.fileRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const files = this.fileRef.current.files;
        const filename = (files && files.length > 0) ? files[0].name : 'no file selected';
        console.log(`Selected file - ${filename}`);
    }

    // input type 'file' is uncontrolled component as value must come from user not state
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='fileInput'>
                    <input name='fileInput' type='file' ref={this.fileRef} />
                </label>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default FileInput;