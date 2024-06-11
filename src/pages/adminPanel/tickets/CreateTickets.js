import { Create, SimpleForm, TextInput, NumberInput} from 'react-admin';
import '../AdminPanel.css';

const CreateTickets = (props) => {
    
return (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <NumberInput source="sum" />
            <NumberInput source="count" />
        </SimpleForm>
    </Create>
    )
}
export default CreateTickets;