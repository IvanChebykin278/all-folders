import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { fetchEntries } from "../store/table/actions";

import "@ui5/webcomponents/dist/Table";

class Table extends Component {

    componentWillMount() {
        this.props.fetchEntries();
    }

    componentWillReceiveProps(nextEntries) {
        if(nextEntries.newEntry) {
            this.props.entries.unshift(nextEntries.newEntry);
        }
    }

    render() {

        const entriesItems = this.props.entries.map(entry =>(
            <ui5-table-row>
                <i5-table-cell>{entry.state}</i5-table-cell>
                <i5-table-cell>{entry.detalNumber}</i5-table-cell>
                <i5-table-cell>{entry.height}</i5-table-cell>
                <i5-table-cell>{entry.step}</i5-table-cell>
                <i5-table-cell>{entry.kone}</i5-table-cell>
                <i5-table-cell>{entry.angel}</i5-table-cell>
            </ui5-table-row>
        ));

        return (
            <div>
                <h2>Entries</h2>
                <ui5-table id="table">
                    <ui5-table-column slot="columns">
                        <span>State</span>
                    </ui5-table-column>
                    <ui5-table-column slot="columns">
                        <span>Detal numder</span>
                    </ui5-table-column>
                    <ui5-table-column slot="columns">
                        <span>Height</span>
                    </ui5-table-column>
                    <ui5-table-column slot="columns">
                        <span>Step</span>
                    </ui5-table-column>
                    <ui5-table-column slot="columns">
                        <span>Kone</span>
                    </ui5-table-column>
                    <ui5-table-column slot="columns">
                        <span>Angel</span>
                    </ui5-table-column>
                    {entriesItems}
                </ui5-table>
            </div>
        )
    }
}

Table.propTypes = {
    fetchEntries: PropTypes.func.isRequired,
    entries: PropTypes.array.isRequired,
    newEntry: PropTypes.object
}

const mapStateToProps = state => ({
    entries: state.table.items,
    newEntry: state.entryForm.item
});

export default connect(mapStateToProps, {fetchEntries})(Table);
