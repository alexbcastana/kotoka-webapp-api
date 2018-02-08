import React, { Component } from 'react';
import Axios from 'axios';

class IdentifyBerry extends Component {
   constructor(props) {
      super(props);

      this.state = {
         berries: [],
         currImage: 1
      }
   }

   componentDidMount() {
      //get all berries from db and set component state
      Axios
         .get('https://www3x50dra.execute-api.us-east-1.amazonaws.com/dev/berries')
         .then((res) => {
            console.log(res.data);
            this.setState({
               berries: res.data
            });
         }).catch((err) => {
            console.log(err);
         });
   }

   postBerry(status, url) {
      Axios
         .post('https://www3x50dra.execute-api.us-east-1.amazonaws.com/dev/berries', {
            notes: {
               pickStatus: status,
               url: url
            }
         }).then((res) => {
            console.log('berry saved in database');
         }).catch((err) => {

         })

      this.setState({ currImage: this.state.currImage === 5 ? 1 : this.state.currImage + 1 });
   }

   render() {
      const imgUrl = 'https://s3.amazonaws.com/kotoka-berry-images/' + this.state.currImage + '.jpg';
      const height = {
         objectFit: "cover",
         width: "500px",
         height: "100%"
      };
      const width = {
         width: "500px",
         display: "inline-block"
      }

      return (
         <div className="container center">
            <div className="card" style={width}>
               <div className="card-image">
                  <img className="materialboxed" style={height} src={imgUrl} alt='strawberry' />
               </div>
               <div className="card-action">
                  <button href="" className="btn-flat waves-effect waves-teal" onClick={() => { this.postBerry('ready to pick', { imgUrl }) }}>Pick!</button>
               </div>
            </div>
         </div>
      )
   }
}

export default IdentifyBerry;
