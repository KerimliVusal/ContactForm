import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Contacts from '../components/createcontactList';
import UpdateContacts from '../components/updatecontactList';
import Home from '../components/home';
import NavigationBar from '../components/navigationBar';
const Container=()=>{
    return(<div>
        <BrowserRouter>
        <NavigationBar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components/createcontactList" element={<Contacts />} />
        <Route path="/components/updatecontactList/:id" element={<UpdateContacts />} />
        </Routes>
        </BrowserRouter>
    </div>)
};export default Container