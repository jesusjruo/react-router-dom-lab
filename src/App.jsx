import { useState } from 'react'
import { Router , Route, Routes, useNavigate } from 'react-router-dom'
import NavBar from './components/Navbar'
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'
import MailboxDetails from './components/MailboxDetails'


const App = () => {
  const [mailboxes , setMailBoxes] = useState([]);
  const navigate = useNavigate();

  const handleAddMailbox = (formData) => {
    const increment = mailboxes.length + 1;
    const newBox = {
      id: increment,
      boxSize: formData.boxSize,
      boxholder: formData.boxholder
  }
    setMailBoxes([newBox , ...mailboxes]);
    navigate('/mailboxes');
}

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/mailboxes" element={ <MailboxList mailboxes={mailboxes} /> }/>
        <Route path="/new-mailbox" element={ <MailboxForm handleAddMailbox={handleAddMailbox}/>} />
        <Route path="/mailboxes/:mailboxId" element={ <MailboxDetails mailboxes={mailboxes} /> }/>
      </Routes>
    </>
  )
};

export default App;