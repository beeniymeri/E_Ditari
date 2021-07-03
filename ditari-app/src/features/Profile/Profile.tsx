import { profile, profileEnd } from 'console';
import { ErrorMessage, Form, Formik } from 'formik';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Grid, Header, Label, Segment } from 'semantic-ui-react';
import MyTextInput from '../../app/common/form/MyTextInput';
import { useStore } from '../../app/stores/store';
import ProfileDetails from './ProfileDetails';

export default observer(function Profile(){
    const { userid } = useParams<{ userid: string }>();
    const {nxenesiUserStore,profileStore} = useStore();

    const {getProfile,profile} = profileStore;

    useEffect(() => {
        getProfile(userid);
    }, [getProfile, userid])

    return (
       <Segment>
           
           <Grid>
           <Button color='red' onClick={() => console.log(toJS({profile}))}>DELETE</Button> 
           </Grid>

       </Segment>
       
    )
})