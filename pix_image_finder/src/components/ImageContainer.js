import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTitle } from 'material-ui/GridList';
import IconButton  from 'material-ui/IconButton';

export default class ImageContainer extends PureComponent {
  render() {
    // console.log(this.props.images);
    return (
      <div>
          <h1>Images</h1>
      </div>
    )
  }
}

ImageContainer.PropTypes = {
    images: PropTypes.array
}