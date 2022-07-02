import React from 'react'
import { Card } from '@mui/material';

import { Chart } from "react-google-charts";

interface IPieChart {
    data: (string | number)[][];
    options: {
        title: string;
        is3D: boolean;
    }
}

export function PieChart(props: IPieChart) {

    const { options, data } = props;

    return (
        <Card className="h-96 w-full p-4 rounded">
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                height="100%"
                width="100%"
            />
        </Card>
    )
}
