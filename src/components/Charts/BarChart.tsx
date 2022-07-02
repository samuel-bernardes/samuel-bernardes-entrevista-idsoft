import React from 'react'
import { Card } from '@mui/material';
import { Chart } from "react-google-charts";

interface IBarChart {
    data: ((string | number)[] | (string | { role: string; })[])[];
    options: {
        chart: {
            title: string,
            subtitle: string,
        },
        hAxis: {
            title: string,
            minValue: number,
        },
        bars: string,
        axes: {
            y: {
                0: { side: string },
            },
        }
    }
}

export function BarChart(props: IBarChart) {

    const { data, options } = props;

    return (

        <Card className="h-96 w-full p-4 rounded">

            <Chart
                chartType="Bar"
                height="100%"
                width="100%"
                data={data}
                options={options}
            />
        </Card>

    );
}

