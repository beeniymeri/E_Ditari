import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Modal, Form, Segment } from 'semantic-ui-react';
import { Book } from '../../../app/models/book';
import { useStore } from '../../../app/stores/store';


interface Props{
  book: Book | undefined;
}

export default observer(function EditBook({book: selectedBook}: Props){
    const[open, setOpen] = React.useState(false);
    const{mesimdhenesiStore} = useStore();
    const{updateBook,loading} = mesimdhenesiStore;
    const history = useHistory();

    const initialState = selectedBook ?? {
      id: '',
      autori: '',
      title: '',
      category: '',
      descriptionB: ''
    }

    const [book, setBook] = useState(initialState);

    function handleSubmit(){
      updateBook(book).then(() => history.push(`/`)).then(() => history.push(`/literatura`));
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
              <Form.Input placeholder='Titulli' value={book.title} name='title' onChange={handleInputChange}/>
              <Form.Input placeholder='Klasa' value={book.category} name='category' onChange={handleInputChange}/>
              <Form.Input placeholder='Pershkrimi' value={book.descriptionB} name='descriptionB' onChange={handleInputChange}/>
              <Button color='black' onClick={() => setOpen(false)}>
          CLOSE
        </Button>
        <Button loading={loading} positive type='submit' content='Submit' /> 
          </Form>
      </Segment>
      <Modal.Actions>
        
      </Modal.Actions>
    </Modal>
  )
})