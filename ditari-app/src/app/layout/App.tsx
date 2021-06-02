import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Nxenesi } from '../models/nxenesi';
import SideBar from './SideBar';
import MesimdhenesiDashboard from '../../features/Mesimdhenesi/dashboard/MesimdhenesiDashboard';
import NxenesitList from '../../features/Mesimdhenesi/dashboard/NxenesitList';
import {v4 as uuid} from 'uuid';

function App() {
  const [nxenesit, setNxenesit] = useState<Nxenesi[]>([]);
  const [editMode,setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Nxenesi[]>('http://localhost:5000/api/nxenesi').then(response => {
      setNxenesit(response.data);
    })
  }, [])

  const myStyle= {
    marginLeft: "7em",
    marginTop:"2em"
  };

  function handleCreateOrEditNxenesi(nxenesi: Nxenesi){
    nxenesi.nxenesiID ? setNxenesit([...nxenesit.filter(x=>x.nxenesiID !== nxenesi.nxenesiID), nxenesi])
    : setNxenesit([...nxenesit,{...nxenesi,nxenesiID: uuid()}]);
  }

  return (
   
   <Fragment>
     <SideBar/>
     <Container style={myStyle}>
       <MesimdhenesiDashboard nxenesit={nxenesit} createOrEdit={handleCreateOrEditNxenesi}/>
      </Container>
  </Fragment>
  );
}

export default App;
