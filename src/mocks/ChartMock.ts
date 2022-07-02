export const PieChartData = [
    ["Usuários", "Tipos de Usuários plataforma"],
    ["Premium", 11],
    ["Free", 24]
];

export const PieChartOptions = {
    title: "Tipos de usuário da plataforma",
    is3D: false,
};

export const PieChartoptions3D = {
    title: "Tipos de usuário da plataforma",
    is3D: true,
};

export const LineChartData = [
    [
        "Dia",
        "Unidade norte",
        "Unidade leste",
        "Unidade sul",
    ],
    [1, 37.8, 80.8, 41.8],
    [2, 30.9, 69.5, 32.4],
    [3, 25.4, 57, 25.7],
    [4, 11.7, 18.8, 10.5],
    [5, 11.9, 17.6, 10.4],
    [6, 8.8, 13.6, 7.7],
    [7, 7.6, 12.3, 9.6],
    [8, 12.3, 29.2, 10.6],
    [9, 16.9, 42.9, 14.8],
    [10, 12.8, 30.9, 11.6],
    [11, 5.3, 7.9, 4.7],
    [12, 6.6, 8.4, 5.2],
    [13, 4.8, 6.3, 3.6],
    [14, 4.2, 6.2, 3.4],
];

export const LineChartOptions = {
    chart: {
        title: "Média de celulares vendidos em nossas unidades"
    },
};

export const CollumChartData = [
    ["Mês", "Vendas", { role: "style" }],
    ["Janeiro", 19.3, "green"], 
    ["Março", 10.49, "red"], 
    ["Maio", 8.94, "gold"],
    ["Agosto", 21.45, "blue"], 
];

export const CollumChartOptions = {
    title: "Vendas por mês",
};


export const BarChartData = [
    ["Cidades", "Pesquisa de 2010"],
    ["São Paulo, SP", 12396372],
    ["Rio de Janeiros, RJ", 6775561],
    ["Brasília, DF", 3094325],
    ["Salvador, BA", 2900319],
    ["Fortaleza, CE", 2703391],
    ["Belo Horizonte, MG", 2530701]
];

export const BarChartOptions = {
    chart: {
        title: "População maiores cidades do brasil",
        subtitle: "Comparação entre os dois últimos censos",
    },
    hAxis: {
        title: "Total Population",
        minValue: 0,
    },
    bars: "horizontal",
    axes: {
        y: {
            0: { side: "right" },
        },
    }
};

export const AreaChartData = [
    ["Ano", "Vendas", "Gastos"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
];

export const AreaChartOptions = {
    title: "Perfomance da empresa",
    hAxis: { title: "Ano", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "50%", height: "70%" },
};



