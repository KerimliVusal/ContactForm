import { Button, Checkbox, Form, Input, Select, Radio } from 'antd';
import '../createcontactList/contactlist.scss';
import 'sweetalert2/src/sweetalert2.scss';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useMemo } from 'react';
import MyContext from "../../context";
import { useNavigate } from 'react-router-dom';
import { onFinishFailed } from '../../utils';

const Swal = require('sweetalert2')

const UpdateContacts = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate()
  const { contactdata, setContactdata } = useContext(MyContext);
  const { id } = useParams();
  const editedData = useMemo(() => contactdata?.find(data => data?.id === id), [id]);
  const onFinish = (formData) => {
    const { name, surname } = formData;
    if (name === surname && (name || surname)) {
      onFinishFailed('Ad və Soyad Eyni ola Bilməz!')
      return;
    }
    setContactdata(prevContacts =>
      prevContacts.map(contact =>
        contact.id === id
          ? { ...contact, ...formData }
          : contact
      )
    );
    Swal.fire({
      title: 'Dəyismek istəyirsiz??',
      text: "Razısiz!!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Razıyam!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Dəyisdi!',
          'Data Ugurla Dəyisdirildi.',
          'success'
        )
        navigate('/');
      }
    })

  };
  useEffect(() => {
    if (editedData) {
      form.setFieldsValue(editedData)
    }
  }, [editedData]);

  return (<div className='newcontacts'>

    <Form className='newform'
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      form={form}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <div className='newcontactheader'><h2>Əlaqələri Yenilə</h2></div>

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
        <Select  >
          <Select.Option value="developer">Web Developer</Select.Option>
          <Select.Option value="muhasib">Muhasib</Select.Option>
          <Select.Option value="analitik">Data Analitik</Select.Option>
          <Select.Option value="operator">Operator</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Cins" name='gender'>
        <Radio.Group className='genderbutton' >
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

}; export default UpdateContacts