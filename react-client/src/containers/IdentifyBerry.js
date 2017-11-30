import React, { Component } from 'react';
import Axios from 'axios';

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

    postBerry(status) {
        Axios
            .post('https://www3x50dra.execute-api.us-east-1.amazonaws.com/dev/berries', {
                notes : {
                    pickStatus: status
                }
            }).then((res) => {
                console.log('berry saved in database');
            }).catch((err) => {

            })
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
        const img_1 = imgUrl + 'PerfectStrawberry.jpg';
        const img_2 = imgUrl + '2.jpg';
        return (
            <div>
                <img src={img_1} />
                <div>
                    <p>File Url: {img_1}</p>
                    <button type="button" className="btn btn-success" onClick={() => {this.postBerry('ready to pick')}}>Ready to Pick!</button>
                    <button type="button" className="btn btn-danger" onClick={() => {this.postBerry('this berry is not ripe')}}>Unripe</button>
                </div>
            </div>
        );
    }
}

export default IdentifyBerry;
