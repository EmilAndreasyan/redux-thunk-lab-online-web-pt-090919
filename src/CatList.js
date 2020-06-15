// write your CatList component here

import React, {Component} from 'react';

export default class CatList extends Component {
  render(){
<<<<<<< HEAD
    const catImages = this.props.catPics.map(cat => <img key={cat.id} src={cat.url}/>)
=======
    const catImages = this.props.catPics.map(cat => <img key={cat.id}, src={cat.url}/>)
>>>>>>> d3e51937bbeebe1410da61ef0f6fec36ecc4bde3
    return (
      <div>
      <h2>{this.props.loading}</h2>
      {catImages}
      </div>
      )
  }
}