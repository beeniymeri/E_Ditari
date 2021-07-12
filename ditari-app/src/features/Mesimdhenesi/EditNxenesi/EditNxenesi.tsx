import React, { ChangeEvent, useState } from 'react';
import { Button, Modal, Header, Image, Form, Segment } from 'semantic-ui-react';
import { Nxenesi } from '../../../app/models/nxenesi';

interface Props{
  nxenesi: Nxenesi | undefined;
  createOrEdit: (nxenesi: Nxenesi) => void
}


export default function EditNxenesi({nxenesi: selectedNxenesi,createOrEdit}: Props){
    const[open, setOpen] = React.useState(false);
    
    const initialState = selectedNxenesi ?? {
      nxenesiID: '',
      emri: '',
      mbiemri: '',
      datelindja: '',
      rruga: '',
      qyteti: '',
      numriKontaktues: '',
      nrLiberAme: '',
      photo: '',
      email: '',
      prindi: '',
      klasaID: ''
    }

    const [nxenesi, setNxenesi] = useState(initialState);

    function handleSubmit(){
      createOrEdit(nxenesi);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
      const {name, value} = event.target;
      setNxenesi({...nxenesi,[name]:value})
    }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color='orange'>EDIT</Button>}
    >
    <Modal.Header>EDIT STUDENT</Modal.Header>
      <Segment clearing>
          <Form onSubmit={handleSubmit} autoComplete='off'>
     
              <Form.Input placeholder='Emri' value={nxenesi.emri} name='emri' onChange={handleInputChange}/>
              <Form.Input placeholder='Mbiemri' value={nxenesi.mbiemri} name='mbiemri' onChange={handleInputChange}/>
              <Form.Input placeholder='Datelindja' value={nxenesi.datelindja} name='datelindja' onChange={handleInputChange}/>
              <Form.Input placeholder='Rruga' value={nxenesi.rruga} name='rruga' onChange={handleInputChange}/>
              <Form.Input placeholder='Qyteti' value={nxenesi.qyteti} name='qyteti' onChange={handleInputChange}/>
              <Form.Input placeholder='Numri kontaktues' value={nxenesi.numriKontaktues} name='numriKontaktues' onChange={handleInputChange}/>
              <Form.Input placeholder='Nr. ne liber ame' value={nxenesi.nrLiberAme} name='nrLiberAme' onChange={handleInputChange}/>
              <Button color='black' onClick={() => setOpen(false)}>
          CLOSE
        </Button>
        <Button positive type='submit' content='Submit'/> 
          </Form>
      </Segment>
      <Modal.Actions>
        
      </Modal.Actions>
    </Modal>
  )
}