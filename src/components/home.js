import React, { Component } from 'react'



class Home extends Component {
    constructor() {
        super()

        // axios.get('/peaks/').then(response => {
        //   console.log('Get user response: ')
        //   console.log(response.data)
        //   this.setState({
        //     peaks: response.data.peaks
        //   })
        // })
    }
    handleFormSubmit = event =>{
        event.preventDefault();
        console.log("in the form submit");
        
    }

    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <p>It's good to be home</p>
                <img style={imageStyle} src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" />
            <div>
                <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                <label className="form-label" htmlFor="date">Date</label>
                <input className="form-input" type="date" id="date" min="1918-01-01" max="2040-12-31" defaultValue="2019-02-12"/>
                </div>
                <div className="form-group">
                <label className="form-label" htmlFor="peak">Peak</label>
                <input className="form-input" type="text" id="peak" placeholder="Peak"/>
                </div>
                <div className="form-group">
                <label className="form-label" htmlFor="height">Height</label>
                <input className="form-input" type="number" id="height" placeholder="Height"/>
                </div>
                <div className="form-group">
                <label className="form-label" htmlFor="notes">Notes</label>
                <textarea className="form-input" id="notes" placeholder="Notes about your climb. Route, weather conditions, difficulty etc." rows="3"></textarea>
                </div>
                <button className="btn btn-primary input-group-btn">Submit</button>
                </form>
                </div>    
            </div>
        )

    }
}

export default Home
