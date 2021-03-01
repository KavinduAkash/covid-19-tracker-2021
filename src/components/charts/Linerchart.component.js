import React from 'react';
import { Line } from 'react-chartjs-2';

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

        const data = {
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