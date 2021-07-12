import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Button, Grid, List } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import AddLibri from '../AddLibri/AddLibri';

import BookListR from './BookListR';

export default observer(function BookDashboard(){
    
    const{mesimdhenesiStore} = useStore();
    const {createBook, loading} = mesimdhenesiStore;
    
    useEffect(() => {
      mesimdhenesiStore.removeBooks();
      mesimdhenesiStore.loadBooks();
    }, [mesimdhenesiStore])
  
    const myStyle= {
      marginLeft: "7em",
      marginTop:"2em"
    };

    if(mesimdhenesiStore.loadingInitial) return <LoadingComponent content='Duke u ngarkuar...' />
    return(
        <Grid>
            <Grid.Column width='16'>
            <BookListR />
            <AddLibri />
            </Grid.Column>
        </Grid>
    )
})