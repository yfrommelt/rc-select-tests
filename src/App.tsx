import {Form, Input, Select} from "antd";
import {DefaultOptionType} from "antd/es/select";

function App() {
    const [form] = Form.useForm()

    const filterOption = (input: string, option?: DefaultOptionType) => String(option?.label).toLowerCase().indexOf(input.toLowerCase()) >= 0

    return (
        <Form form={form}>
            <Form.Item name="name" label="Name">
                <Input />
            </Form.Item>
            <Form.Item name="gender" label="Gender">
                <Select options={[
                    {value: 1, label: 'Male'},
                    {value: 2, label: 'Female'},
                    {value: 3, label: 'Prefer not to say'}
                ]} showSearch filterOption={filterOption} />
            </Form.Item>
            <Form.Item name="nationality" label="Nationality">
                <Select options={[
                    {value: 'en', label: 'English'},
                    {value: 'fr', label: 'French'},
                    {value: 'de', label: 'German'}
                ]} showSearch filterOption={filterOption} />
            </Form.Item>
        </Form>
    )
}

export default App
