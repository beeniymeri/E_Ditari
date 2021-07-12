import React from 'react';
import { Button, Modal, Header, Image, Segment, Form } from 'semantic-ui-react';


export default function AddNxenesi(){
    const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color='blue'>SHTO NXENESIN</Button>}
    >
      <Modal.Header>SHTO NJE NXENES</Modal.Header>
      <Segment clearing>
          <Form>
              <Form.Input placeholder='Emri'/>
              <Form.Input placeholder='Mbiemri'/>
              <Form.Input placeholder='Datelindja'/>
              <Form.Input placeholder='Adresa'/>
              <Form.Input placeholder='Qyteti'/>
              <Form.Input placeholder='Numri kontaktues'/>
              <Form.Input placeholder='Nr. ne liber ame'/>
          </Form>
      </Segment>
      
      
      
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          CLOSE
        </Button>
        <Button color='green'>SHTO NXENESIN</Button>
      </Modal.Actions>
    </Modal>
  )
}