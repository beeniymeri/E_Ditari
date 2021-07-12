import { observer } from 'mobx-react-lite';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Menu,Container,Icon, Image } from 'semantic-ui-react'
import { useStore } from '../stores/store'

export default observer(function SideBar(){
  const {mesimdhenesiStore} = useStore(); 
  const {nxenesiUserStore} = useStore();
  const {user,logout} = nxenesiUserStore;
  return (
        <Menu inverted pointing vertical>      
        {nxenesiUserStore.roli==1?( <Container>
              <Menu.Item header>
                <Image src={user?.image || '/assets/prof_avatar.png'} style={{marginBottom: '10px',marginLeft: '58px'}}/>
              </Menu.Item>

              <h4 style={{color: 'white',alignSelf: 'center'}}>Logged in as: {user?.displayName}</h4>

              <Menu.Item as={NavLink} to='/mesimdhenesi/dashboard' exact name='DASHBOARD'>
                  <Icon.Group size='small'>
                    <Icon name='box' />
                  </Icon.Group>
                      DASHBOARD
               </Menu.Item>

              <Menu.Item>
                <Menu.Header>NXENESI</Menu.Header>
                <Menu.Menu>
                  <Menu.Item as={NavLink} to='/mesimdhenesi/nxenesit'> 
                    <Icon.Group size='small'>
                      <Icon name='list alternate' />
                    </Icon.Group>
                        LISTA
                  </Menu.Item>
                  
                  <Menu.Item>
                    <Icon.Group size='small'>
                      <Icon name='lightbulb outline' />
                    </Icon.Group>
                        NOTAT
                  </Menu.Item>
                  
                </Menu.Menu>
              </Menu.Item>

              <Menu.Item>
                    <Icon.Group size='small'>
                      <Icon name='calendar alternate outline' />
                    </Icon.Group>
                        ORARI
              </Menu.Item>
  
              <Menu.Item as={NavLink} to='/mesimdhenesi/literatura'>
                  <Icon.Group size='small'>
                      <Icon name='book' />
                    </Icon.Group>
                        LITERATURA
               </Menu.Item>
                
              <Menu.Item as={NavLink} to={`/profile/${user?.username}`}>
                  <Icon.Group size='small'>
                      <Icon name='user' />
                    </Icon.Group>
                        PROFILI IM
              </Menu.Item>
                 
              <Menu.Item as={NavLink} to='/errors'
                  name='Errors'
              />

              <Menu.Item onClick={logout} name='Logout'>
                  <Icon.Group size='small'>
                      <Icon name='log out' />
                    </Icon.Group>
                        Log out
              </Menu.Item>
       </Container>)
        :(<Container>
          <Menu.Item header>
            <Image src={user?.image || '/assets/avatar.png'} style={{marginBottom: '10px',marginLeft: '58px'}}/>
          </Menu.Item>
   
          <h4 style={{color: 'white',alignSelf: 'center'}}>Logged in as: {user?.displayName}</h4>
   
          <Menu.Item as={NavLink} to='/nxenesi/dashboard' exact>
              <Icon.Group size='small'>
                <Icon name='box' />
              </Icon.Group>
                  Dashboard
          </Menu.Item>
           
   
          <Menu.Item>
              <Icon.Group size='small'>
                <Icon name='lightbulb outline' />
              </Icon.Group>
                  NOTAT
          </Menu.Item>
   
          <Menu.Item>
            <Icon.Group size='small'>
              <Icon name='calendar alternate outline' />
            </Icon.Group>
            ORARI IM
          </Menu.Item>
   
          <Menu.Item>
            <Icon.Group size='small'>
              <Icon name='book' />
            </Icon.Group>
            LITERATURA
          </Menu.Item>
   
          <Menu.Item>
            <Icon.Group size='small'>
              <Icon name='book' />
            </Icon.Group>
            DETYRAT E SHTEPISE
          </Menu.Item>
   
          <Menu.Item as={NavLink} to={`/profile/${user?.username}`}>
            <Icon.Group size='small'>
              <Icon name='user' />
            </Icon.Group>
            PROFILI IM
          </Menu.Item>

          <Menu.Item as={NavLink} to='/errors'
              name='Errors'
          />
   
          <Menu.Item onClick={logout} name='Logout'>
            <Icon.Group size='small'>
              <Icon name='log out' />
            </Icon.Group>
            Log out
          </Menu.Item>
   </Container>)}

     </Menu>
    )
})
