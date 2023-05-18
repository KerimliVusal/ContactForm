import { Button, Checkbox, Form, Input, Select, Radio } from 'antd';
import './contactlist.scss';
import { useContext, useState } from 'react';
import MyContext from "../../context";
import { useNavigate } from 'react-router-dom'
import { onFinishFailed, onReset, SuccessNotification } from '../../utils';
import { v4 as uuidv4 } from 'uuid';
const Contacts = () => {
  const [selectedproffesion, setSelectedproffesion] = useState('Web Developer')
  const navigate = useNavigate()
  const { contactdata, setContactdata } = useContext(MyContext);
  const onFinish = (values) => {
    const { name, surname } = values;

    if (name === surname && (name || surname)) {
      onFinishFailed('Ad və Soyad eyni ola bilməz!')
      return;
    }

    const hasSameNameSurname = contactdata.map(
      (data) => data.name === name && data.surname === surname).includes(true);

    if (hasSameNameSurname) {
      onFinishFailed('Data artıq movcuddur!')
      return;
    }
    const id = uuidv4();
    setContactdata([...contactdata, { ...values, id: id }]);
    SuccessNotification();
    navigate('/')
  }


  return (<div className='newcontacts'>

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
      // onFinishFailed={onFinishFailed}
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
            min: 3
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
            min: 3
          },
        ]}
      >
        <Input placeholder='Soyad daxil edin' />
      </Form.Item>
      <Form.Item
        label="Ata adı"
        name="father"
        rules={[
          {
            required: true,
            message: 'Ata adını daxil edin!',
            min: 3

          },
        ]}
      >
        <Input placeholder='Ata adını daxil edin' />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Email unvanını daxil edin!',
            type: 'email',
            min: 3

          },
        ]}
      >
        <Input placeholder='Email unvanını daxil edin!' />
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
        <Input.TextArea placeholder='Əlavə məlumatları daxil edin!' />
      </Form.Item>
      <Form.Item
        initialValue='Web Developer'
        label="Ixtisas"
        name="profession"
        rules={[
          {
            required: true,
            message: 'Ixtisas daxil edin!',
          },
        ]}
      >
        <Select >
          <Select.Option value="developer">Web Developer</Select.Option>
          <Select.Option value="muhasib">Muhasib</Select.Option>
          <Select.Option value="analitik">Data Analitik</Select.Option>
          <Select.Option value="operator">Operator</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Cins" name='gender'>
        <Radio.Group className='genderbutton' defaultValue='kişi' >
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
  </div>);

}; export default Contacts