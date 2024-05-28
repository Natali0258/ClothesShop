import { Edit, SimpleForm, TextInput, NumberInput, DateInput} from 'react-admin';
import '../AdminPanel.css';

const EditOrders = () => {
    return(
        <Edit title="Изменить заказ">
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="email" />
                <TextInput source="phone" />
                <TextInput source="country" />
                <TextInput source="city" />
                <TextInput source="street" />
                <NumberInput source="house" />
                <NumberInput source="apartment" />
                <DateInput disabled source="date" />
            </SimpleForm>
        </Edit>
    )
}
export default EditOrders;