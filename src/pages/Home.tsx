import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'

import { AreaChart, BarChart, CollumChart, LineChart, PieChart } from '../components/Charts'

import {
  AreaChartData, AreaChartOptions, BarChartData, BarChartOptions,
  CollumChartData, CollumChartOptions, LineChartData, LineChartOptions,
  PieChartData, PieChartOptions, PieChartoptions3D
} from '../mocks/ChartMock'
import { initialPosition, markers, polygon } from '../mocks/MapMock'
import { Header } from '../components/Header'
import { MapCard } from '../components/MapCard'
import { getRandomUser } from '../services/RandomUser'
import { UserApi } from '../components/UserApi'

export function Home() {


  const [user, setUser] = useState<any>();

  useEffect(() => {
    componentMount();
  }, [])

  function componentMount() {
    getUser();
  }

  function getUser() {
    getRandomUser().then((user) => {
      if (user.data) {
        setUser(user.data.results[0]);

      } else {
        console.log("error")
      }
    });
  }

  return (
    <div className="min-h-screen">
      <Header />

      <div className="px-16 py-8 h-screen bg-gray-700 justify-center">
        <span className="text-xl font-bold">Componente de mapa - Tarefa 1</span>
        <MapCard initialPosition={initialPosition} markers={markers} polygon={polygon} />
      </div>

      <div className="px-16 py-8 bg-gray-900 justify-center">
        <span className="text-xl font-bold ">Componente de gráfico - Tarefa 2</span>

        <Grid container spacing={2} pt={2} pb={6}>

          <Grid item lg={4} xl={4} xs={12}>
            <PieChart options={PieChartOptions} data={PieChartData} />
          </Grid>

          <Grid item lg={4} xl={4} xs={12}>
            <BarChart options={BarChartOptions} data={BarChartData} />
          </Grid>

          <Grid item lg={4} xl={4} xs={12}>
            <CollumChart options={CollumChartOptions} data={CollumChartData} />
          </Grid>

          <Grid item lg={12} xl={12} xs={12}>
            <LineChart options={LineChartOptions} data={LineChartData} />
          </Grid>

          <Grid item lg={6} xl={6} xs={12}>
            <AreaChart options={AreaChartOptions} data={AreaChartData} />
          </Grid>

          <Grid item lg={6} xl={6} xs={12}>
            <PieChart options={PieChartoptions3D} data={PieChartData} />
          </Grid>

        </Grid>

      </div>

      <div className="px-16 py-8 bg-gray-700 justify-center">
        <span className="text-xl font-bold ">Componente de API - Tarefa 3</span>
        {
          user && (
            <UserApi
              userName={user.name?.first + " " + user.name?.last}
              profileUrl={user.picture?.medium}
              userCountry={user.location?.country}
              userEmail={user.email}
              userPhone={user.cell}
              handleChangeUser={getUser}
            />
          )
        }
      </div>

    </div>
  )
}
