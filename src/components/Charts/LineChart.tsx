import React from "react";
import { Card } from '@mui/material';
import { Chart } from "react-google-charts";

interface IPieChart {
    data: (string | number)[][];
    options: {
        chart: {
            title: string;
        }
    }
}

export function LineChart(props: IPieChart) {

    const {data, options} = props;

    return (
        <Card className="h-96 w-full p-4 rounded">

            <Chart
                chartType="Line"
                height="100%"
                width="100%"
                data={data}
                options={options}
            />
        </Card>
    );
}
