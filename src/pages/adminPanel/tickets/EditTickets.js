import { Edit, SimpleForm, TextInput, NumberInput} from 'react-admin';
import '../AdminPanel.css';

const EditTickets = () => {
    return(
        <Edit title="Изменить заказ">
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="title" />
                <NumberInput source="sum" />
                <NumberInput source="count" />
            </SimpleForm>
        </Edit>
    )
}
export default EditTickets;