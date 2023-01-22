import React, { useEffect, PropsWithChildren } from 'react'
import { Box, CircularProgress, Container, Grid } from '@mui/material'
import AdminLayout, { AdminLayoutProps } from './admin'
import {useRouter} from "next/router";
import Guest from './guest'
import { useSession } from '../../store/session/useSession';

export type AppLayoutProps = AdminLayoutProps;

const AppLayout: React.FC<PropsWithChildren<Omit<AppLayoutProps, 'header' | 'drawer'>>>  = (props) => {
  const {site} = props
  //const role: any = 'Customer'
  const router = useRouter();
  const {layout} = useSession()
  const [role, setRole] = React.useState('guest');

  useEffect(()=>{
    console.log('layout', layout)
  },[])

   if (site){
     return (
    <>
      <Container maxWidth="xs">
        <Box height="45vh"/>
        <Box my={5}>
          <Grid container>
            <CircularProgress color="secondary"/>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

    switch (layout) {
    case "session": {
      return (
        <>
          <AdminLayout>
            {props.children}
          </AdminLayout>
        </>
      )
    }
    default : {
      return (
        <AdminLayout>
        {props.children}
      </AdminLayout>
      )
    }

  }
}

export default AppLayout
