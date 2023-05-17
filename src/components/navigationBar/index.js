import { Button } from 'antd';
import '../navigationBar/navigation.scss'
import { Link } from 'react-router-dom';
const NavigationBar=()=>{
    return(<div className="navigationbar">
<h1>Contact Details</h1>
<Button type='primary' className='createbutton' ><Link to='/components/createcontactList'>Əlaqə Yarat</Link></Button>

    </div>)
};export default NavigationBar