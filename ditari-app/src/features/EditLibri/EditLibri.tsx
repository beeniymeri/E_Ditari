import React, { ChangeEvent, useState } from 'react';
import { Button, Modal, Form, Segment } from 'semantic-ui-react';
import { Book } from '../../app/models/book';


interface Props{
  book: Book | undefined;
  createOrEdit: (book: Book) => void
}


export default function EditBook({book: selectedBook,createOrEdit}: Props){
    const[open, setOpen] = React.useState(false);
    
    const initialState = selectedBook ?? {
      id: '',
      autori: '',
      title: '',
      category: '',
      descriptionB: '',
    }

    const [book, setBook] = useState(initialState);

    function handleSubmit(){
      createOrEdit(book);
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
      trigger={<Button color='orange'>EDIT</Button>}
    >
    <Modal.Header>EDIT LIBRI</Modal.Header>
      <Segment clearing>
          <Form onSubmit={handleSubmit} autoComplete='off'>
     
            <Form.Input placeholder='Autori' value={book.autori} name='autori' onChange={handleInputChange}/>
              <Form.Input placeholder='Titulli' value={book.title} name='titulli' onChange={handleInputChange}/>
              <Form.Input placeholder='Klasa' value={book.category} name='klasa' onChange={handleInputChange}/>
              <Form.Input placeholder='Pershkrimi' value={book.descriptionB} name='pershkrimi' onChange={handleInputChange}/>
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