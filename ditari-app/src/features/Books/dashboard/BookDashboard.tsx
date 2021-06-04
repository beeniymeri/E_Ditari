import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Grid, List } from 'semantic-ui-react';
import { Book } from '../../../app/models/book';
import AddLibri from '../../AddLibri/AddLibri';
import BookListR from './BookListR';


interface Props {
    books: Book[];
    createOrEdit: (book: Book) => void;
}

export default function BookDashboard({books,createOrEdit}: Props){
    return(
        <Grid>
            <Grid.Column width='16'>
            <BookListR books={books} createOrEdit={createOrEdit}/>
            <AddLibri/>
            </Grid.Column>
        </Grid>
    )
}