import { Button, Checkbox, Form, Input, Select,Radio} from 'antd';
import './contactlist.scss';
import { useContext } from 'react';
import MyContext from "../../context"; 
import {useNavigate} from 'react-router-dom'
import {onFinishFailed,onReset,SuccessNotification } from '../../utils';
import { v4 as uuidv4 } from 'uuid';
const Contacts=()=>{
  const navigate=useNavigate()
    const [form] = Form.useForm();
    const {contactdata,setContactdata} = useContext(MyContext);
 const onFinish = (values) => {
  const id = uuidv4();
  const newFormValue = {...values,id:id}
  setContactdata([...contactdata,newFormValue]);
SuccessNotification();
navigate('/')
}
  
 
    return(<div className='newcontacts'>
      
        <Form className='newform'
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className='newcontactheader'><h2>Yeni Əlaqə Formu</h2></div>
         
        <Form.Item
          label="Ad"
          name="name"
          rules={[
            {
              required: true,
              message: 'Ad daxil edin!',
            },
          ]}
        >
          <Input placeholder='Ad daxil edin' />
        </Form.Item>
    
        <Form.Item
          label="Soyad"
          name="surname"
          rules={[
            {
              required: true,
              message: 'Soyad daxil edin!',
            },
          ]}
        >
          <Input placeholder='Soyad daxil edin'/>
        </Form.Item>
        <Form.Item
          label="Ata adı"
          name="father"
          rules={[
            {
              required: true,
              message: 'Ata adını daxil edin!',
            },
          ]}
        >
          <Input placeholder='Ata adını daxil edin'/>
        </Form.Item>
       
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Email unvanını daxil edin!',
              type:'email'
            },
          ]}
        >
          <Input placeholder='Email unvanını daxil edin!'/>
        </Form.Item>
        <Form.Item
          label="Əlavə məlumat"
          name="description"
          rules={[
            {
              required: true,
              message: 'Əlavə məlumatları daxil edin!',
              
            },
          ]}
        >
          <Input.TextArea placeholder='Əlavə məlumatları daxil edin!'/>
        </Form.Item>
        <Form.Item
          label="Ixtisas"
          name="profession"
          rules={[
            {
              required: true,
              message: 'Ixtisas daxil edin!',
            },
          ]}
        >
          <Select defaultValue='developer'>
          <Select.Option value="developer">Web Developer</Select.Option>
          <Select.Option value="muhasib">Muhasib</Select.Option>
          <Select.Option value="analitik">Data Analitik</Select.Option>
          <Select.Option value="operator">Operator</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Cins">
          <Radio.Group className='genderbutton' defaultValue='kişi'>
            <Radio value="kişi">Kişi </Radio>
            <Radio value="qadın"> Qadin </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Yenilikləri xatirlat!</Checkbox>
        </Form.Item>
        <div className='contactbuttons'>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
          
        >
          <Button type="primary" htmlType="reset">
            Sıfırla
          </Button>
          
          
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Təsdiq et
          </Button>
          
          
        </Form.Item>
        </div>
      </Form>
</div>    );
    
};export default Contacts