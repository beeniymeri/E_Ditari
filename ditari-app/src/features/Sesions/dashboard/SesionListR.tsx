import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Button, Checkbox, Icon, Menu, Segment, Table } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import EditSesion from '../EditSesion/EditSesion';


export default observer(function SesionListR() {
  const [target, setTarget] = useState('');

  const { mesimdhenesiStore } = useStore();
  const { deleteSesion, loading } = mesimdhenesiStore;

  function handleDeleteSesion(e: SyntheticEvent<HTMLButtonElement>, id: string) {
    setTarget(e.currentTarget.name)
    deleteSesion(id);
  }

  return (

    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Autori</Table.HeaderCell>
          <Table.HeaderCell>Klasa</Table.HeaderCell>
          <Table.HeaderCell>Lenda</Table.HeaderCell>
          <Table.HeaderCell>Linku</Table.HeaderCell>
          <Table.HeaderCell>Konfirmo linkun</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {mesimdhenesiStore.sesions.map((sesion) => (

          <Table.Row key={sesion.id}>
            <Table.Cell>{sesion.id}</Table.Cell>
            <Table.Cell>{sesion.autori}</Table.Cell>
            <Table.Cell>{sesion.klasa}</Table.Cell>
            <Table.Cell>{sesion.lenda}</Table.Cell>
            <Table.Cell>{sesion.linku}</Table.Cell>
            <Table.Cell>

              <Segment compact>
                <Checkbox toggle />
              </Segment>
            </Table.Cell>

            <Table.Cell>
              <Button name={sesion.id}
                loading={loading && target === sesion.id}
                onClick={(e) => handleDeleteSesion(e, sesion.id!)} color='red'>DELETE</Button>
            </Table.Cell>
            <Table.Cell><EditSesion sesion={sesion} /></Table.Cell>
          </Table.Row>
        ))}

      </Table.Body>
      <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='8'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>

    </Table>
  )

})