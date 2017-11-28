import React, { Component } from 'react';
import Axios from 'axios';

class IdentifyBerry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            berries: [],
            berry: []
        }
    }

    componentDidMount() {
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

    putsSomething() {
        console.log("ASDF");
    }

    render() {
        const renderBerries = this.state.berries.map(function(berry, i) {
            if (berry.id === 'b5948160-d420-11e7-86db-c74281cc3118') {
                return(
                    <div key={i}>
                        <p>FileName: {berry.notes.filename}</p>
                        <p>pickStatus: {berry.notes.pickStatus}</p>
                    </div>
                );
            }
        });
        return (
            <div className="container">
                <img src="https://s3.amazonaws.com/kotoka-berry-images/PerfectStrawberry.jpg" />
                { renderBerries }
                <button type="button" className="btn btn-success" onClick={() => {this.putsSomething()}}>Ready to Pick!</button>
                <button type="button" className="btn btn-danger">Unripe</button>
            </div>
        )
    }
}

export default IdentifyBerry;
