
import React, { useState } from 'react'
import { Button, Card, Grid } from '@mui/material'

interface IUserApi {
    profileUrl: string;
    userName: string;
    userCountry: string;
    userEmail: string;
    userPhone: string;
    handleChangeUser: () => void;
}

export function UserApi(props: IUserApi) {

    const { profileUrl, userName, userCountry, userEmail, userPhone, handleChangeUser } = props;

    const [showEmail, setShowEmail] = useState<boolean>(true);

    return (
        <Card className="rounded my-4 justify-center max-w-lg">

            <Grid container p={4}>

                <Grid item lg={4} xl={4} xs={6}>
                    <img
                        src={profileUrl}
                        alt="user-profile"
                        className="h-28 w-28 rounded-full border-2 border-pink-600 "
                    />
                </Grid>
                <Grid item lg={8} xl={8} xs={6} >
                    <span className="font-bold block text-gray-900 mt-2">Nome: {userName}</span>

                    <span className="text-gray-900 text-opacity-60">País: {userCountry}</span>

                    {
                        showEmail ? (
                            <span className="text-gray-900 text-opacity-60 block">Email: {userEmail}</span>
                        ) : (
                            <span className="text-gray-900 text-opacity-60 block">Telefone: {userPhone}</span>
                        )
                    }
                </Grid>

                <Grid item lg={6} xl={6} xs={6} mt={2}>
                    <Button
                        variant="outlined"
                        onClick={() => setShowEmail(!showEmail)}
                    >
                        Mudar informação
                    </Button>
                </Grid>

                <Grid item lg={6} xl={6} xs={6} mt={2}>
                    <Button
                        variant="contained"
                        onClick={() => handleChangeUser()}
                    >
                        Trocar Usuário
                    </Button>
                </Grid>

            </Grid>

        </Card>
    )
}
