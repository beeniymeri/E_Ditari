import { profile } from 'console';
import { Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Modal, Form, Segment, Header } from 'semantic-ui-react';
import { Profile } from '../../app/models/user';
import { useStore } from '../../app/stores/store';


interface Props{
  profile: Profile;
}


export default observer(function ProfileDetails({profile}: Props){
    const[open, setOpen] = React.useState(false);
    const history = useHistory();
    const {profileStore} = useStore();


  return (
    <Segment>
        <h1>{profile.emri}</h1>
    </Segment>
  )
})