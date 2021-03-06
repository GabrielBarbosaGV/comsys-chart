import React, { Component } from 'react';
import { Line as LineChart } from 'react-chartjs-2';

class Graph extends Component {
    render() {
        return this.drawGraph();
    }

    drawGraph() {
        if (this.props.data) {
            var drawData = {
                labels: this.props.data[0].tagCount,
                datasets: this.props.data.map((estimatorData) => {
                    return {
                        label: estimatorData.estimatorName,
                        data: estimatorData[this.props.datatype],
                        backgroundColor: this.getBackgroundColor(estimatorData.estimatorName),
                        borderColor: this.getBorderColor(estimatorData.estimatorName)
                    }
                })
            }

            var drawOptions = {
                title: {
                    display: true,
                    text: this.getTitle(this.props.datatype)
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {

                            }
                        }
                    ]
                }
            }

            return <LineChart data={ drawData } options={ drawOptions } width={ 15 } height={ 5 } />
        } else return null;
    }

    getBackgroundColor(estimatorName) {
        switch(estimatorName) {
            case 'Eom-Lee':
            return 'rgba(64, 64, 128, 0.5)';
            case 'Lower Bound':
            return 'rgba(64, 128, 64, 0.5)';
            default:
            break;
        }
    }

    getBorderColor(estimatorName) {
        switch (estimatorName) {
            case 'Eom-Lee':
            return 'rgba(64, 64, 128, 1)';
            case 'Lower Bound':
            return 'rgba(64, 128, 64, 1)';
            default:
            break;
        }
    }

    getTitle(datatype) {
        switch(datatype) {
            case 'slotCount':
            return 'Total Slot Count';
            case 'collisionCount':
            return 'Total Collision Number';
            case 'efficiency':
            return 'Efficiency';
            case 'emptySlots':
            return 'Total Empty Slots';
            case 'ellapsedTime':
            return 'Identification Time (Nanoseconds)';
            default:
            break;
        }
    }

    getMaxValue(datatype) {
        switch (datatype) {
            case 'slotCount':
            return 3500;
            case 'emptySlots':
            return 1100;
            case 'collisionCount':
            return 1800;
            default:
            break;
        }
    }
}

export default Graph;