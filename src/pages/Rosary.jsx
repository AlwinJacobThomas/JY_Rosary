
import { useEffect, useState } from 'react';
import firebase from './../firebase/config';
import { useParams } from 'react-router-dom';
import { Button, Form, Input, Tag } from 'antd';

const customizeRequiredMark = (label, { required }) => (
    <>
        {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
        {label}
    </>
);

const Rosary = () => {
    const { token } = useParams();
    const [rosaries, setRosaries] = useState(null);
    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState('optional');

    const onRequiredTypeChange = ({ requiredMarkValue }) => {
        setRequiredMarkType(requiredMarkValue);
    };

    const fetchRosaryData = async () => {
        try {
            if (token) {
                const snapshot = await firebase.firestore().collection('rosary').doc(token).get();
                const allDocs = snapshot.data();

                setRosaries(allDocs);
                console.log(allDocs);
            } else {
                console.log('Token is undefined');
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchRosaryData();
    }, [token]);

    const handleFormSubmit = async (values) => {
        try {
            if (token) {
                await firebase.firestore().collection('rosary').doc(token).set({
                    name: rosaries.name,
                    decades: parseInt(rosaries.decades) + parseInt(values.decades),
                    zone: rosaries.zone,
                    location: rosaries.location,

                    users: Array.isArray(rosaries.users)
                        ? [...rosaries.users, { name: values.name, decades: values.decades }]
                        : [{ name: values.name, decades: values.decades }],
                });



                fetchRosaryData();
            } else {
                console.log('Token is undefined');
            }
        } catch (err) {
            console.error(err);
        }
    };

    

    return (
        <>
            <div className="form">
                <h1>Save Data to Firebase Firestore</h1>
                <Form
                    form={form}
                    layout="vertical"
                    initialValues={{
                        requiredMarkValue: requiredMark,
                    }}
                    onValuesChange={onRequiredTypeChange}
                    requiredMark={requiredMark === 'customize' ? customizeRequiredMark : requiredMark}
                    onFinish={handleFormSubmit}
                >
                    <Form.Item label="Name" name="name" required tooltip="This is a required field">
                        <Input placeholder="Full name" />
                    </Form.Item>
                    <Form.Item
                        label="Decades"
                        name="decades"
                        required
                        tooltip={{
                            title: 'Tooltip with customize icon',
                        }}
                    >
                        <Input placeholder="Decades" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>

            <div className="data">
                <h2>Your Rosary</h2>
                {rosaries === null ? (
                    <p>Loading...</p>
                ) : (
                    <ul>
                        <li>Name: {rosaries?.name}, Decades: {rosaries.decades}, Zone: {rosaries.zone}</li>
                    </ul>
                )}

                <h1>Rosary:</h1>
                <h3>Zone:</h3>
               
         
                <ul>
                    <li>lat:{ } long:</li>
                </ul>
            </div>
        </>
    );
}

export default Rosary;

