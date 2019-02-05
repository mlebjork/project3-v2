import React, { Component } from 'react'
import axios from 'axios'



class Home extends Component {
    constructor() {
        super()


        this.state = {
            name: '',
            height: null,
            peaks: null
        }        
        axios.get('/peaks', {params:{user: sessionStorage.getItem('user')}}).then(response => {
            console.log('Get peaks response: ')
            console.log(response.data)
            this.setState({
              peaks: response.data
            })
          })

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({[name]: event.target.value});
      }
    handleFormSubmit = event =>{
        event.preventDefault();
        console.log("in the form submit");
        axios.post('/peaks/', {
            name: this.state.name,
            height: this.state.height,
            user: sessionStorage.getItem('user')
            
        }).then(response => {

          console.log('Get user response: ')
          console.log(response.data)
          this.setState({
            peaks: response.data
          })
          console.log(this.state)
        })
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
                <input className="form-input"  onChange={this.handleInputChange} type="text" id="peak" name="name" placeholder="Peak" />
                </div>
                <div className="form-group">
                <label className="form-label" htmlFor="height">Height</label>
                <input className="form-input"  onChange={this.handleInputChange} type="number" id="height" name="height" placeholder="Height"/>
                </div>
                <div className="form-group">
                <label className="form-label" htmlFor="notes">Notes</label>
                <textarea className="form-input" id="notes" placeholder="Notes about your climb. Route, weather conditions, difficulty etc." rows="3"></textarea>
                </div>
                <button className="btn btn-primary input-group-btn">Submit</button>
                </form>
                </div>  
                <ul>
               { this.state.peaks && this.state.peaks.map((peak)=>{
                    return <li key={peak._id}> {peak.name}</li>
                })
                }
            </ul>  
            </div>

        )

    }
}

export default Home
