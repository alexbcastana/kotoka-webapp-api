import React, { Component } from 'react';
import Axios from 'axios';
import '../styles/identifyBerry.css'

class IdentifyBerry extends Component {
   constructor(props) {
      super(props);

      this.state = {
         berries: [],
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
   }

   renderImageIfExists(url) {
      const html = (
         <div>
            <img src={url} className='img' alt='strawberry' />
            <div>
               <p>File Url: {url}</p>
               <button type="button" className="btn btn-success" onClick={() => { this.postBerry('ready to pick', { url }) }}>Ready to Pick!</button>
               <button type="button" className="btn btn-danger" onClick={() => { this.postBerry('this berry is not ripe', { url }) }}>Unripe</button>
            </div>
            <br />
            <br />
         </div>
      );
      Axios
         .get(url)
         .then((res) => {
            console.log('img exists');
            return html;
         }).catch((err) => {
            console.log('no image...', err.reponse);
            if (err.response.status === 404) {
               console.log('returning null');
               return null;
            }
            else {
               return html;
            }
         })
      return html;
   }

   // render() {
   //     const renderBerries = this.state.berries.map(function(berry, i) {
   //         if (berry.id === 'b5948160-d420-11e7-86db-c74281cc3118') {
   //             return(
   //                 <div key={i}>
   //                     <p>FileName: {berry.notes.filename}</p>
   //                     <p>pickStatus: {berry.notes.pickStatus}</p>
   //                 </div>
   //             );
   //         }
   //     });
   //     return (
   //         <div className="container">
   //             <img src="https://s3.amazonaws.com/kotoka-berry-images/PerfectStrawberry.jpg" />
   //             { renderBerries }
   //             <button type="button" className="btn btn-success" onClick={() => {this.postBerry()}}>Ready to Pick!</button>
   //             <button type="button" className="btn btn-danger">Unripe</button>
   //         </div>
   //     )
   // }

   render() {
      const imgUrl = 'https://s3.amazonaws.com/kotoka-berry-images/';
      const img_1 = imgUrl + '1.jpg';
      const img_2 = imgUrl + '2.jpg';
      const img_3 = imgUrl + '3.jpg';
      const img_4 = imgUrl + '4.jpg';
      const img_5 = imgUrl + '5.jpg';

      // return (
      //     <div>
      //         if (checkIfImageExists(img_1)) {
      //             <img src={img_1} />
      //             <div>
      //                 <p>File Url: {img_1}</p>
      //                 <button type="button" className="btn btn-success" onClick={() => {this.postBerry('ready to pick', {img_1})}}>Ready to Pick!</button>
      //                 <button type="button" className="btn btn-danger" onClick={() => {this.postBerry('this berry is not ripe', {img_1})}}>Unripe</button>
      //             </div>
      //             <br />
      //             <br />
      //         }
      //
      //         <img src={img_2} />
      //         <div>
      //             <p>File Url: {img_2}</p>
      //             <button type="button" className="btn btn-success" onClick={() => {this.postBerry('ready to pick', {img_2})}}>Ready to Pick!</button>
      //             <button type="button" className="btn btn-danger" onClick={() => {this.postBerry('this berry is not ripe', {img_2})}}>Unripe</button>
      //         </div>
      //         <br />
      //         <br />
      //
      //         <img src={img_3} />
      //         <div>
      //             <p>File Url: {img_3}</p>
      //             <button type="button" className="btn btn-success" onClick={() => {this.postBerry('ready to pick', {img_3})}}>Ready to Pick!</button>
      //             <button type="button" className="btn btn-danger" onClick={() => {this.postBerry('this berry is not ripe', {img_3})}}>Unripe</button>
      //         </div>
      //         <br />
      //         <br />
      //
      //         <img src={img_4} />
      //         <div>
      //             <p>File Url: {img_4}</p>
      //             <button type="button" className="btn btn-success" onClick={() => {this.postBerry('ready to pick', {img_4})}}>Ready to Pick!</button>
      //             <button type="button" className="btn btn-danger" onClick={() => {this.postBerry('this berry is not ripe', {img_4})}}>Unripe</button>
      //         </div>
      //     </div>
      // );
      return (
         <div>
            {this.renderImageIfExists(img_1)}
            {this.renderImageIfExists(img_2)}
            {this.renderImageIfExists(img_3)}
            {this.renderImageIfExists(img_4)}
            {this.renderImageIfExists(img_5)}
         </div>
      )
   }
}

export default IdentifyBerry;
