import React, { ChangeEvent, useState } from 'react';
import { Button, Modal, Form, Segment } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';



export default function AddLibri(){
    const[open, setOpen] = React.useState(false);
    
    const[selectedBook] = useState();

    const{mesimdhenesiStore} = useStore();
    const{createBook,loading} = mesimdhenesiStore;

    const initialState = selectedBook ?? {
      autori: '',
      title: '',
      category: '',
      descriptionB: '',
    }

    const [book, setBook] = useState(initialState);

    function handleSubmit(){
      createBook(book);
      setOpen(false);
      alert('Successfully created!');
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
      const {name, value} = event.target;
      setBook({...book,[name]:value})
    }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color='blue'>SHTO LIBRIN</Button>}
    >
    <Modal.Header>SHTO LIBRI</Modal.Header>
      <Segment clearing>
          <Form onSubmit={handleSubmit} autoComplete='off'>
     
            <Form.Input placeholder='Autori' name='autori' onChange={handleInputChange}/>
              <Form.Input placeholder='Titulli' name='title' onChange={handleInputChange}/>
              <Form.Input placeholder='Klasa' name='category' onChange={handleInputChange}/>
              <Form.Input placeholder='Pershkrimi' name='descriptionB' onChange={handleInputChange}/>
              <Button color='black' onClick={() => setOpen(false)}>
          CLOSE
        </Button>
        <Button positive type='submit'  content='Submit' onClick={() => setOpen(true)}/> 
          </Form>
      </Segment>
      <Modal.Actions>
        
      </Modal.Actions>
    </Modal>
  )
}