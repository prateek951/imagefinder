import React, { PureComponent } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

class Search extends PureComponent {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '9522425-eea0dacafe21dcfd3c27cf331',
        images: []
    }
    onTextChange = e => {
        this.setState({[e.target.name]: e.target.value},() => {
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=phone&per_page=${this.state.amount}&safesearch=true`)
            .then(response => {
                console.log(response.data.hits);
                this.setState({
                    images: response.data.hits
                });
            }).catch(err => console.log(`An error occured while fetching the images from the api`));
        })
    
    }

    onAmountChange = (e,index,value) => this.setState({amount: value});

    renderMenuItems(){
        let items = [
        {
            limit: 5,
            placeholder: '5'
        },
        {
            limit: 10,
            placeholder: '10'
        },
        {
            limit: 15,
            placeholder: '15'
        },
        {
            limit: 20,
            placeholder: '20'
        }
    ]
    return items.map(item => <MenuItem value={item.limit} primaryText={item.placeholder}/>)
    }
    render() {
        // console.log(this.state.images);
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
                    {this.renderMenuItems()}
                </SelectField>
            </div>

        );
    }
}

Search.propTypes = {

};

export default Search;