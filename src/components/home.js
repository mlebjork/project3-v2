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


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <p>It's good to be home</p>
                <img style={imageStyle} src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" />
            </div>
        )

    }
}

export default Home
