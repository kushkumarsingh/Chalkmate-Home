import React from 'react';
import { defaults, Chart } from 'react-chartjs-2';
// defaults.plugins.legend.display = false;
// console.log(defaults)





class DoughnutChart extends React.Component {

    componentDidMount() {
        var ctx = document.getElementById(this.props.id).getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: this.props.data,
            options: {
                interaction: {
                    mode: 'index'
                },
                borderWidth: 10,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        displayColors: false,
                    },
                },
                hover: { 
                    mode: null 
                },
            },
        });
    }


    render() {
        return (

            <div style={{ height: '10em', width: '10em' }}>
                <canvas id={this.props.id}  width={this.props.width} height={this.props.height} />
            </div>
        )
    }
}

export default DoughnutChart;