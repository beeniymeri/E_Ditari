import { create } from 'domain';
import React from 'react';
import { Button, Segment, Table } from 'semantic-ui-react';
import { Nxenesi } from '../../../app/models/nxenesi';
import EditNxenesi from '../EditNxenesi/EditNxenesi';

interface Props{
    nxenesit: Nxenesi[];
    createOrEdit: (nxenesi: Nxenesi) => void;
}

export default function NxenesitList({nxenesit,createOrEdit}: Props){
    return (
        <Table celled inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Emri</Table.HeaderCell>
            <Table.HeaderCell>Mbiemri</Table.HeaderCell>
            <Table.HeaderCell>Datelindja</Table.HeaderCell>
            <Table.HeaderCell>Rruga</Table.HeaderCell>
            <Table.HeaderCell>Qyteti</Table.HeaderCell>
            <Table.HeaderCell>Nr. kontaktues</Table.HeaderCell>
            <Table.HeaderCell>Nr. liber ame</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
        {nxenesit.map(nxenesi => (
          <Table.Row>
            <Table.Cell>{nxenesi.nxenesiID}</Table.Cell>
            <Table.Cell>{nxenesi.emri}</Table.Cell>
            <Table.Cell>{nxenesi.mbiemri}</Table.Cell>
            <Table.Cell>{nxenesi.datelindja}</Table.Cell>
            <Table.Cell>{nxenesi.rruga}</Table.Cell>
            <Table.Cell>{nxenesi.qyteti}</Table.Cell>
            <Table.Cell>{nxenesi.numriKontaktues}</Table.Cell>
            <Table.Cell>{nxenesi.nrLiberAme}</Table.Cell>
            <Table.Cell><Button color='red'>DELETE</Button></Table.Cell>
            <Table.Cell><EditNxenesi nxenesi = {nxenesi} createOrEdit={createOrEdit}/></Table.Cell>
          </Table.Row>
          ))}
          
        </Table.Body>
        
      </Table>
    )

}