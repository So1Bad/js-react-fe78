import styled from 'styled-components'
import './App.css'
import { Button } from './components/button/Button'
import { User } from './components/User/User'

function App() {
   const handleClick = () => {
      console.log('clicked')
   }
   return (
      <>
         <User username='Artem Malkin' />
         <Button content='Primary' variant='primary' isActive onClick={handleClick} />
         <Button content='Secondary' variant='secondary' isActive onClick={handleClick} />
         <Button content='Secondary 2' variant='secondary2' onClick={handleClick} />
         <Button content='Primary' variant='secondary2' isActive onClick={handleClick} />
         <p>test</p>
         <Field>sadasqd</Field>

      </>
   )
}

const Field = styled.div`
margin: 100px 0;
width: 100%;
font-size: 200px;
`
export default App
