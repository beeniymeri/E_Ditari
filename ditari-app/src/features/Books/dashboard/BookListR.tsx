import { create } from 'domain';
import React from 'react';
import { Button, Segment, Table } from 'semantic-ui-react';
import { Book } from '../../../app/models/book';
import EditLibri from '../../EditLibri/EditLibri';


interface Props{
    books: Book[];
    createOrEdit: (book: Book) => void;
}

export default function BookListR({books,createOrEdit}: Props){
    return (
        <Table celled inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Autori</Table.HeaderCell>
            <Table.HeaderCell>Titulli</Table.HeaderCell>
            <Table.HeaderCell>Klasa</Table.HeaderCell>
            <Table.HeaderCell>Pershkrimi</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
        {books.map(book => (
          <Table.Row>
            <Table.Cell>{book.id}</Table.Cell>
            <Table.Cell>{book.autori}</Table.Cell>
            <Table.Cell>{book.title}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>{book.descriptionB}</Table.Cell>
            <Table.Cell><Button color='red'>DELETE</Button></Table.Cell>
            <Table.Cell><EditLibri book = {book} createOrEdit={createOrEdit}/></Table.Cell>
          </Table.Row>
          ))}
          
        </Table.Body>
        
      </Table>
    )

}