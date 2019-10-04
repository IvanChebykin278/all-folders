import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { fetchEntries, filterEntries, getEntryById } from "../store/app/actions";
//import { ODataModel, Filter, FilterOperator } from "../sap/ODataModel";

class Page extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onClickButtoms = this.onClickButtoms.bind(this);
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchEntries();
        // var oModel = new ODataModel('https://services.odata.org/V2/OData/OData.svc/');
        // var o = oModel.getObject('/Products', {select: 'Products/Category, Products', extend: 'Products'});
        // this.setState({prop: o});
    }

    onClick() {
        this.props.filterEntries();
        console.log(123);
    }

    onClickButtoms(event) {
        this.props.getEntryById(event.target.value);
    }

    render() {
           const buttomList = this.props.entries.map(entry => (
                <button onClick={this.onClickButtoms} value={entry.ID}>{entry.ID}</button>
            )); 
        return (
            <div>
                <button onClick = {this.onClick}>Filter</button>
                {buttomList}
            </div>
        )
    }
}

Page.propTypes = {
    filterEntries: PropTypes.func.isRequired,
    fetchEntries: PropTypes.func.isRequired,
    getEntryById: PropTypes.func.isRequired,
    entries: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    entries: state.app.items
});

export default connect(mapStateToProps, {fetchEntries, filterEntries, getEntryById})(Page);
