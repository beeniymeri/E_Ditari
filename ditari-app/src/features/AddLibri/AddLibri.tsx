import React from 'react';
import { Button, Modal, Header, Image, Segment, Form } from 'semantic-ui-react';


export default function AddLibri(){
    const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color='blue'>SHTO LIBRIN</Button>}
    >
      <Modal.Header>SHTO NJE NXENES</Modal.Header>
      <Segment clearing>
          <Form>
              <Form.Input placeholder='Autori'/>
              <Form.Input placeholder='Titulli'/>
              <Form.Input placeholder='Klasa'/>
              <Form.Input placeholder='Pershkrimi'/>
          </Form>
      </Segment>
      
      
      
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          CLOSE
        </Button>
        <Button color='green'>SHTO LIBRIN</Button>
      </Modal.Actions>
    </Modal>
  )
}