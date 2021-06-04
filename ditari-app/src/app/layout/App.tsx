import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Nxenesi } from '../models/nxenesi';
import SideBar from './SideBar';
import MesimdhenesiDashboard from '../../features/Mesimdhenesi/dashboard/MesimdhenesiDashboard';
import {v4 as uuid} from 'uuid';
import { idText } from 'typescript';
import { randomInt } from 'crypto';

function App() {
  const [nxenesit, setNxenesit] = useState<Nxenesi[]>([]);

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
    // nxenesi.nxenesiID ? setNxenesit([...nxenesit.filter(x=>x.nxenesiID !== nxenesi.nxenesiID), nxenesi])
    // : setNxenesit([...nxenesit,{...nxenesi,nxenesiID: uuid()}]);

    nxenesi.nxenesiID ? setNxenesit([...nxenesit.filter(x=>x.nxenesiID !== nxenesi.nxenesiID), nxenesi])
    : setNxenesit([...nxenesit,{...nxenesi,nxenesiID: '10'}]);
  }

  function handleDeleteNxenesi(id: string){
    setNxenesit([...nxenesit.filter(x=>x.nxenesiID !== id)]);
  }

  return (
   
   <Fragment>
     <SideBar/>
     <Container style={myStyle}>
       <MesimdhenesiDashboard nxenesit={nxenesit} createOrEdit={handleCreateOrEditNxenesi} deleteNxenesi={handleDeleteNxenesi}/>
      </Container>
  </Fragment>
  );
}

export default App;
