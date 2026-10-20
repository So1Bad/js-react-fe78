import styled from 'styled-components'
import './App.css'
import { MenuButton } from './components/MenuButton/MenuButton'
import { Title } from './components/Title'

function App() {

   return (
      <><Header><MenuButton variant='menu' /><MenuButton variant='close' /></Header>
         <Title title='Sing Up' />
      </>
   )
}

const Header = styled.header`
   display: flex;
   gap: 20px;
`
export default App
