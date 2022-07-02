import React from "react";
import { Card } from "@mui/material";
import { Chart } from "react-google-charts";

interface ICollumChart {
    data: ((string | number)[] | (string | { role: string; })[])[];
    options: {
        title: string;
    }
}

export function CollumChart(props: ICollumChart) {

    const { data, options } = props;

    return (
        <Card className="h-96 w-full p-4 rounded">
            <Chart
                chartType="ColumnChart"
                height="100%"
                width="100%"
                data={data}
                options={options}
            />
        </Card>
    );
}