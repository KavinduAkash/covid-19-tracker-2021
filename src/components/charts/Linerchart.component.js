import React from 'react';
import { Line } from 'react-chartjs-2';
import * as utils from '../../utils/prepare_line_chart_data.util';

class Linerchart extends React.Component {
    render() {

        // let options = {
        //     type: 'line',
            let options= {
                legend: {
                    display: false
                },
            }
        // };

        let data = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
                {
                    // label: "First dataset",
                    data: [33000, 53000, 85000, 410000, 44000, 650],
                    fill: true,
                    backgroundColor: "rgba(75,192,192,0.2)",
                    borderColor: "rgba(75,192,192,1)"
                }
            ]
        };

            let prop_data = this.props.data;
            if(prop_data) {
                let prepareLineChartData = utils.prepare_line_chart_data(prop_data);
                let labels = prepareLineChartData.labels;
                let data_set = prepareLineChartData.data;
                data = {
                    labels: labels,
                    datasets: [
                        {
                            // label: "First dataset",
                            data: data_set,
                            fill: true,
                            backgroundColor: "rgba(75,192,192,0.2)",
                            borderColor: "rgba(75,192,192,1)"
                        }
                    ]
                };
            }

        return(
            <div>
                <Line
                    data={data}
                    // width={100}
                    // height={50}
                    options={options}
                />
            </div>
        )
    }
}

export default Linerchart;