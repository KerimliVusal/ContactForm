import {HashRouter,Route,Routes} from 'react-router-dom'
import Contacts from '../components/createcontactList';
import UpdateContacts from '../components/updatecontactList';
import Home from '../components/home';
import NavigationBar from '../components/navigationBar';
const Container=()=>{
    return(<div>
        <NavigationBar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components/createcontactList" element={<Contacts />} />
        <Route path="/components/updatecontactList/:id" element={<UpdateContacts />} />
        </Routes>

    </div>)
};export default Container