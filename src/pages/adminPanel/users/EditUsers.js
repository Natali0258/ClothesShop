import { Edit, SimpleForm, TextInput} from 'react-admin';
import '../AdminPanel.css';

const EditUsers = () => {
    return(
        <Edit title="Изменить пользователя">
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="password" />
                <TextInput source="email" />
                <TextInput source="login" />
                <TextInput source="phone" />
            </SimpleForm>
        </Edit>
    )
}
export default EditUsers;