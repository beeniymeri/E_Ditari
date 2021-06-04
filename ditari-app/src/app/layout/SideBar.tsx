import React from 'react'
import { Menu,Container } from 'semantic-ui-react'

export default function SideBar(){
    return (
        <Menu inverted pointing vertical>
        <Container>
        <Menu.Item header>
           <img src="/assets/avatar.png" alt="avatar" style={{marginBottom: '10px'}}/>
         </Menu.Item>
       <Menu.Item
         name='Dashboard'
       />
       <Menu.Item
         name='Lista e nxenesve'
       />
       <Menu.Item
         name='Orari'
       />
       <Menu.Item
         name='Vendos notat'
       />
       <Menu.Item
         name='Ngarko material'
       />
       <Menu.Item
         name='Profili im'
       />
     </Container>
     </Menu>
    )
}

/*
<Menu inverted pointing vertical>
        <Container>
           <Menu.Item header>
              <img src="/assets/avatar.png" alt="avatar" style={{marginBottom: '10px'}}/>
            </Menu.Item>
          <Menu.Item
            name='home'
          />
          <Menu.Item
            name='messages'
          />
          <Menu.Item
            name='friends'
          />
        </Container>
        </Menu>*/

/*
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='wide'
    >
      <Menu.Item as='a'>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='gamepad' />
        Games
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        Channels
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic>
        <Header as='h3'>Application Content</Header>
        <Image src='/images/wireframe/paragraph.png' />
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>*/