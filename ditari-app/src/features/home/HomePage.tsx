import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Statistic } from 'semantic-ui-react';
import agent from '../../app/API/agent';
import { Nxenesi } from '../../app/models/nxenesi';
import { useStore } from '../../app/stores/store';

export default observer(function HomePage(){

    async function numri(){
        return (await agent.Nxenesit.list()).length;
    }

    function getNumri(){
        numri().then(function(result) {
        })
    }
    
    const {nxenesiUserStore} = useStore();

    return(
        <Container style={{marginTop: '9em',marginRight: '10em'}}>
            {nxenesiUserStore.isLoggedIn?(<h3>You are currently logged in</h3>):(<h3>NOT LOGGED IN</h3>)}
            <Button as={Link} to='/nxenesiLogin' size='huge' color='blue' inverted>LOGIN AS STUDENT</Button>
            <Button as={Link} to='/mesimdhenesiLogin' size='huge' color='red' inverted>LOGIN AS TEACHER</Button>
        </Container>

    )
})