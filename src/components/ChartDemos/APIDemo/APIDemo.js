import React, {Component} from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';


export default class APIDemos extends Component {
  constructor() {
    super()
    this.state = {
      data: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        datasets: [

        ]
      }
    }
    this.handleRequest = this.handleRequest.bind(this);
  }

  handleRequest = () => {
    let currentData = Object.assign({}, this.state.data);
    let newSet = {
      label: `Rand Nums ${this.state.data.datasets.length + 1}`,
      backgroundColor: [],
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: []
    }
    axios.get('https://qrng.anu.edu.au/API/jsonI.php?length=10&type=uint8')
      .then(nums => {
        axios.get('https://qrng.anu.edu.au/API/jsonI.php?length=10&type=hex16&size=3')
          .then(colors => {
            let colorSet = [...colors.data.data];
            colorSet.forEach((c,i,a) => {a[i] = '#' + c});
            newSet.data = nums.data.data;
            newSet.backgroundColor = colorSet;
            currentData.datasets.push(newSet)
            this.setState({
              data: currentData
            })
          })
      })
  }

  handleRemoveSet = () => {
    let newSets = Object.assign({}, this.state.data)
    newSets.datasets = newSets.datasets.filter((c,i,a) => i !== a.length - 1)
    this.setState({data: newSets})
  }

  render() {

    return (
      <main className="demo_wrapper">
      <header className="demo_header">
        <h1>react-chartjs-2</h1>
          <p>{'Click \'Add Dataset\' to send API request...'}</p>
        <button onClick={this.handleRequest}>Add Dataset</button>
        <button onClick={this.handleRemoveSet}>Remove Dataset</button>
      </header>
      <Bar data={this.state.data} />
      </main>

    )
  }
}
