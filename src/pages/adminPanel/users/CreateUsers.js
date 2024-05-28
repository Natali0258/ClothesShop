import { Create, SimpleForm, TextInput} from 'react-admin';
import '../AdminPanel.css';

const CreateUsers = (props) => (
    <Create>
        <SimpleForm>
            <TextInput source="email" />
            <TextInput source="login" />
            <TextInput source="phone" />
            <TextInput source="password" />
        </SimpleForm>
    </Create>
);
export default CreateUsers;