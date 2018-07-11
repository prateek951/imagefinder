import React, { PureComponent } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Search extends PureComponent {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '9522425-eea0dacafe21dcfd3c27cf331',
        images: []
    }
    render() {
        return (
            <div>
                <TextField
                name="searchText"
                value={this.state.searchText}
                onChange={this.onTextChange}
                floatingLabelText="Search"
                fullWidth={true}
                />
                <br/>
                <SelectField
                    name="amount"
                    floatingLabelText="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    >
                    <MenuItem value={5} primaryText="5" />
                    <MenuItem value={10} primaryText="10" />
                    <MenuItem value={15} primaryText="15" />
                    <MenuItem value={20} primaryText="20" />
                    <MenuItem value={25} primaryText="25" />
                </SelectField>
            </div>

        );
    }
}

Search.propTypes = {

};

export default Search;