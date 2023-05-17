import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import '../home/home.scss'
import { ShowContactDetails } from '../../utils'; 
import {IconComponent1,IconComponent2,IconComponent3} from "../icon";
import MyContext from "../../context";
const Home=()=>{
  const {contactdata,setContactdata} = useContext(MyContext);
  const RemoveFromContact=(id)=>{
setContactdata(prevContacts => prevContacts.filter(contact => contact.id !== id))
  }


    return(<div className="home">
      {!contactdata.length?<h1>Əlaqələr Siyahısı Boşdur!</h1>
      :
      <>
        <h1>Əlaqələr Siyahısı</h1>
        <table>
      <thead>
        <tr>
          <th>Ad</th>
          <th>Soyad</th>
          <th>Ata adı</th>
          <th>İxtisas</th>
          <th>Əməliyyatlar</th>
        </tr>
      </thead>
      <tbody>
        {contactdata?.map((employ,index)=>(
        <tr key={index}>
          <td>{employ.name}</td>
          <td>{employ.surname}</td>
          <td>{employ.father}</td>
          <td>{employ.profession}</td>
          <td className="tableicons"><Link to={`/components/updatecontactList/${employ.id}`}><IconComponent3/></Link><IconComponent2 onClick={()=>ShowContactDetails(employ)}/><IconComponent1 fill='red' onClick={()=>RemoveFromContact(employ.id)} /></td>
        </tr>
        ))}
      </tbody>
    </table>
        </>}
        
    </div>)
};export default Home