import React, { Fragment, useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import SideBar from './SideBar';
import MesimdhenesiDashboard from '../../features/Mesimdhenesi/dashboard/MesimdhenesiDashboard';
import BookDashboard from '../../features/Books/dashboard/BookDashboard';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router';
import HomePage from '../../features/home/HomePage';
import TestErrors from '../../features/errors/TestError';
import { ToastContainer } from 'react-toastify';
import NotFound from '../../features/errors/NotFound';
import { Switch } from 'react-router-dom';
import ServerError from '../../features/errors/ServerError';
import LoginForm from '../../features/nxenesitUsers/LoginForm';
import LoginFormMesimdhenesi from '../../features/mesimdhenesiUser/LoginFormMesimdhenesi';
import { useStore } from '../stores/store';
import LoadingComponent from './LoadingComponent';
import NxenesiDashboard from '../../features/Nxenesi/dashboard/NxenesiDashboard';
import Dashboard from '../../features/Mesimdhenesi/dashboard/Dashboard';
import RegisterForm from '../../features/nxenesitUsers/RegisterForm';
import Profile from '../../features/Profile/Profile';


function App() {
  
  const myStyle= {
    marginLeft: "7em",
    marginTop:"2em"
  };

  const {commonStore, nxenesiUserStore} = useStore();

  useEffect(() => {
    if(commonStore.token){
      nxenesiUserStore.getUser().finally(() => commonStore.setAppLoaded());
    }else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, nxenesiUserStore])

  if(!commonStore.appLoaded) return <LoadingComponent content="Duke i procesuar te dhenat..."/>
  

  return (
   
   <Fragment>
     <ToastContainer position='bottom-right' hideProgressBar/>
     {nxenesiUserStore.isLoggedIn ? (<SideBar/>):(<h1></h1>)}

     <Container style={myStyle}>
  
      
        {nxenesiUserStore.roli==1?(
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/mesimdhenesi/dashboard' component={Dashboard} />
            <Route path='/mesimdhenesi/nxenesit' component={MesimdhenesiDashboard} />
            <Route path='/mesimdhenesi/literatura' component={BookDashboard} />
            <Route path='/errors/' component={TestErrors} />
            <Route path='/server-error' component={ServerError} />
            <Route component={NotFound} />
          </Switch>
        ):(<h3></h3>)}

        {nxenesiUserStore.roli==0?(
            <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/nxenesi/dashboard' component={NxenesiDashboard} />
            <Route path='/nxenesi/notat' />
            <Route path='/nxenesi/orari' />
            <Route path='/nxenesi/literatura' />
            <Route path='/nxenesi/detyrat' />
            <Route path='/errors/' component={TestErrors} />
            <Route path='/server-error' component={ServerError} />
            <Route component={NotFound} />
            </Switch>

        ):(<h3></h3>)}

       {nxenesiUserStore.isLoggedIn?(<h3></h3>):(
          <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/nxenesiRegister' component={RegisterForm}/>
          <Route path='/nxenesiLogin' component={LoginForm} />
          <Route path='/mesimdhenesiLogin' component={LoginFormMesimdhenesi} />
          <Route path='/profili' component={Profile} />
          <Route component={NotFound} />
          </Switch>
       )}
       
      </Container>
  </Fragment>
  );
}

export default observer(App);
