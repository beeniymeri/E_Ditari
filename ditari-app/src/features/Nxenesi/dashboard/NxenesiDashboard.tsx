import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
export default observer(function NxenesiDashboard(){
    
    const{mesimdhenesiStore} = useStore();
    const {createNxenesi, loading} = mesimdhenesiStore;
    

    useEffect(() => {
      mesimdhenesiStore.removeNxenesit();
      mesimdhenesiStore.loadNxenesit();
    }, [mesimdhenesiStore])
  
    const myStyle= {
      marginLeft: "7em",
      marginTop:"2em"
    };
  
    if(mesimdhenesiStore.loadingInitial) return <LoadingComponent content='Duke u ngarkuar...' />

    return(
        <Grid>
           <h4>THIS IS NXENESI DASHBOARD</h4>
        </Grid>
    )
})