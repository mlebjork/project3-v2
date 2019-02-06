import React, { Component } from 'react'
import axios from 'axios'



class Home extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            height: '',
            date: '2019-02-12',
            notes: '',
            peaks: null,
            editing: false,
            id: null
        }        
        axios.get('/peaks', {params:{user: sessionStorage.getItem('user')}}).then(response => {
            console.log('Get peaks response: ')
            console.log(response.data)
            this.setState({
              peaks: response.data
            })
          })

        this.handleInputChange = this.handleInputChange.bind(this);
        this.clear = this.clear.bind(this);

    }
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({[name]: event.target.value});
      }
    handleFormSubmit = event =>{
        event.preventDefault();
        console.log("in the form submit");
        if(!this.state.editing) {
            axios.post('/peaks/', {
                name: this.state.name,
                height: this.state.height,
                user: sessionStorage.getItem('user'),
                date: this.state.date,
                notes: this.state.notes
                
            }).then(response => {
              this.setState({
                peaks: response.data,
                name: '',
                height: '',
                notes: ''
              })
              console.log(this.state)
            })
        } else {
            axios.put(`/peaks/${this.state.id}`, {
                name: this.state.name,
                height: this.state.height,
                user: sessionStorage.getItem('user'),
                date: this.state.date,
                notes: this.state.notes
            }).then(response => {
                this.setState({
                    peaks: response.data,
                    name: '',
                    height: '',
                    date: '2019-02-12',
                    notes: '',
                    editing: false,
                    id: null
                })
            })
        }

    }
    delete(id){
        console.log(id)
        axios.delete(`/peaks?id=${id}&user=${sessionStorage.getItem('user')}`).then(response => {
          this.setState({
            peaks: response.data,
            name: '',
            height: 0
          })
        })
    }
    clear() {
        this.setState({
            name: '',
            height: '',
            date: '2019-02-12',
            notes: '',
            editing: false,
            id: null
        }  );
        console.log(this.state)
    }
    update(peak){
        this.setState({
            name: peak.name,
            height: peak.height,
            notes: peak.notes,
            date: peak.date,
            id: peak._id,
            editing: true
          })
        console.log(peak)

    }
    render() {
        const imageStyle = {
            width: 400
        }

        
        // You're off to Great Places! Today is your day! Your mountain is waiting, So... get on your way!


        return (
            <div>
                <h3>Add the peak you climbed.</h3>
            <div className="container">
            <div class="columns">
                <div className="column col-3">
                    <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                    <label className="form-label" htmlFor="date">Date</label>
                    <input className="form-input"  value={this.state.date} onChange={this.handleInputChange} name="date" type="date" id="date" min="1918-01-01" max="2040-12-31" defaultValue="2019-02-12"/>
                    </div>
                    <div className="form-group">
                    <label className="form-label" htmlFor="peak">Peak</label>
                    <input className="form-input"  value={this.state.name} onChange={this.handleInputChange} type="text" id="peak" name="name" placeholder="Peak" />
                    </div>
                    <div className="form-group">
                    <label className="form-label" htmlFor="height">Height</label>
                    <input className="form-input" value={this.state.height} onChange={this.handleInputChange} type="number" id="height" name="height" placeholder="Height"/>
                    </div>
                    <div className="form-group">
                    <label className="form-label" htmlFor="notes">Notes</label>
                    <textarea className="form-input" id="notes" name="notes" value={this.state.notes} onChange={this.handleInputChange} placeholder="Notes about your climb. Route, weather conditions, difficulty etc." rows="3"></textarea>
                    </div>
                    <div class="btn-group btn-group-block">
                    <button className="btn btn-primary input-group-btn" disabled={this.state.name.length === 0 && this.state.height.length === 0 || this.state.editing} type="submit">Submit</button>
                    <button className="btn btn-primary input-group-btn" disabled={this.state.name.length === 0 && this.state.height.length === 0 || !this.state.editing} type="update">Update</button>
                    <button className="btn btn-primary input-group-btn" onClick={this.clear} type="clear">Clear changes</button>
</div>
                  
                    </form>
                </div>
                <div className="column col-6 col-mx-auto">
                { this.state.peaks && this.state.peaks.map((peak)=>{
                    return (
                            <div class="accordion">
                                <input type="checkbox" id={peak.name} name="accordion-checkbox" hidden />
                                <label class="accordion-header" for={peak.name}>
                                    <i class="icon icon-arrow-right mr-1"></i>
                                    {peak.date} <b>{peak.name}</b>  {peak.height} ft   
                                    <button className="btn btn-error float-right" onClick={()=>{this.delete(peak._id)}}>delete</button>
                                    <span className="btn btn-success float-right" onClick={()=>{this.update(peak)}}>update</span>
                                </label>
                                <div class="accordion-body">
                                    <p>{peak.notes}</p>
                                </div>
                            </div>
                            )
                        })
                }
                </div>
                </div>
                </div>
            </div>

        )

    }
}

export default Home
