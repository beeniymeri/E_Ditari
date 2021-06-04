import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Nxenesi } from '../../../app/models/nxenesi';
import AddNxenesi from '../AddNxenesi/AddNxenesi';
import NxenesitList from './NxenesitList';

interface Props {
    nxenesit: Nxenesi[];
    createOrEdit: (nxenesi: Nxenesi) => void;
    deleteNxenesi: (id: string) => void
}

export default function ActivityDashboard({nxenesit,createOrEdit, deleteNxenesi}: Props){
    return(
        <Grid>
            <Grid.Column width='16'>
            <NxenesitList nxenesit={nxenesit} createOrEdit={createOrEdit} deleteNxenesi={deleteNxenesi}/>
            <AddNxenesi nxenesi={undefined} createOrEdit={createOrEdit}/>
            </Grid.Column>
        </Grid>
    )
}