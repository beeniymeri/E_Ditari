import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Grid, List } from 'semantic-ui-react';
import { Book } from '../../../app/models/book';
import AddLibri from '../../AddLibri/AddLibri';
import BookListR from './BookListR';


interface Props {
    books: Book[];
    createOrEdit: (book: Book) => void;
    deleteBook: (id: string) => void;
    editMode: boolean;
    submitting: boolean;
}

export default function BookDashboard({books,createOrEdit,deleteBook,submitting,editMode}: Props){
    return(
        <Grid>
            <Grid.Column width='16'>
            <BookListR books={books}
                
             createOrEdit={createOrEdit}
             deleteBook={deleteBook}
            submitting={submitting}
             />
            <AddLibri/>
            </Grid.Column>
        </Grid>
    )
}