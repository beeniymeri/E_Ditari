import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Grid, List } from 'semantic-ui-react';
import { Nxenesi } from '../../../app/models/nxenesi';
import AddNxenesi from '../AddNxenesi/AddNxenesi';
import NxenesitList from './NxenesitList';

interface Props {
    nxenesit: Nxenesi[];
    createOrEdit: (nxenesi: Nxenesi) => void;
}

export default function ActivityDashboard({nxenesit,createOrEdit}: Props){
    return(
        <Grid>
            <Grid.Column width='16'>
            <NxenesitList nxenesit={nxenesit} createOrEdit={createOrEdit}/>
            <AddNxenesi/>
            </Grid.Column>
        </Grid>
    )
}