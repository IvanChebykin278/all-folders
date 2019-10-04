import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { createEntry } from "../store/entryForm/action";

import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/Button"; 
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js"

class EntryForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            state: '',
            detalNumber: '',
            height: '',
            step: '',
            kone: '',
            angel: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.bindHandler = this.bindHandler.bind(this);

        this.aRef = [
            'stateInput',
            'detalNumberInput',
            'heightInput',
            'stepInput',
            'koneInput',
            'angelInput'
        ];

        for(var i = 0; i < this.aRef.length; i++) {
            this[this.aRef[i]] = React.createRef();
        }
    }

    bindHandler(sRef) {
        this[sRef].current.addEventListener('change', event => {
            this.onChange(event);
        });
    }

    componentDidMount() {
        for(var i = 0; i < this.aRef.length; i++) {
            this.bindHandler(this.aRef[i]);
        }
    }



    onChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();

        const entry = {
            state: this.state.state,
            detalNumber: this.state.detalNumber,
            height: this.state.height,
            step: this.state.step,
            kone: this.state.kone,
            angel: this.state.angel
        }

        this.props.createEntry(entry);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h2>Add Entry</h2>
                <div>
                    <ui5-label>State</ui5-label><br />
                    <ui5-input name="state" ref={this.stateInput} value={this.state.state} placeholder="Enter state"></ui5-input>
                </div>
                <div>
                    <ui5-label>Detal number</ui5-label><br />
                    <ui5-input name="detalNumber" ref={this.detalNumberInput} value={this.state.detalNumber} placeholder="Enter detal number"></ui5-input>
                </div>
                <div>
                    <ui5-label>Height</ui5-label><br />
                    <ui5-input name="height" ref={this.heightInput} value={this.state.height} placeholder="Enter height"></ui5-input>
                </div>
                <div>
                    <ui5-label>Step</ui5-label><br />
                    <ui5-input name="step" ref={this.stepInput} value={this.state.step} placeholder="Enter state"></ui5-input>
                </div>
                <div>
                    <ui5-label>Kone</ui5-label><br />
                    <ui5-input name="kone" ref={this.koneInput} value={this.state.kone} placeholder="Enter kone"></ui5-input>
                </div>
                <div>
                    <ui5-label>Angel</ui5-label><br />
                    <ui5-input name="angel" ref={this.angelInput} value={this.state.angel} placeholder="Enter angel"></ui5-input>
                </div><br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

EntryForm.propTypes = {
    createEntry: PropTypes.func.isRequired
}

export default connect(null, { createEntry })(EntryForm);
