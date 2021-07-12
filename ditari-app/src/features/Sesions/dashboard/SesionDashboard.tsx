import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import {  Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import AddSesion from '../AddSesion/AddSesion';
import SesionListR from './SesionListR';


export default observer(function SesionDashboard(){

    const {mesimdhenesiStore} = useStore();
  

    useEffect(() => {
     mesimdhenesiStore.removeSesions();
     mesimdhenesiStore.loadSesions();
    }, [mesimdhenesiStore]);

    if (mesimdhenesiStore.loadingInitial) return <LoadingComponent content='Duke u ngarkuar...' />
    
    return(
        <Grid>
            <Grid.Column width='16'>
                
            <SesionListR />
            <AddSesion />
            </Grid.Column>
        </Grid>
    )
})