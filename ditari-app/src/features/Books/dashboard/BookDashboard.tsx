import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import {  Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import AddLibri from '../../AddLibri/AddLibri';


import BookListR from './BookListR';

export default observer(function BookDashboard(){

    const {mesimdhenesiStore} = useStore();
  

    useEffect(() => {
     mesimdhenesiStore.loadBooks();
    }, [mesimdhenesiStore]);

    if (mesimdhenesiStore.loadingInitial) return <LoadingComponent content='Duke u ngarkuar...' />
    
    return(
        <Grid>
            <Grid.Column width='16'>
            <BookListR />
            <AddLibri />
            </Grid.Column>
        </Grid>
    )
})