import { Card } from "@mui/material";
import React from "react";
import { Chart } from "react-google-charts";


interface IAreaChart {
    data: (string | number)[][];
    options: {
        title: string;
        hAxis: { title: string; titleTextStyle: { color: string; }; }; vAxis: { minValue: number; };
        chartArea: { width: string; height: string; };
    }
}

export function AreaChart(props: IAreaChart) {

    const { data, options } = props;

    return (
        <Card className="h-96 w-full p-4 rounded">

            <Chart
                chartType="AreaChart"
                height="100%"
                width="100%"
                data={data}
                options={options}
            />
        </Card>
    );
}