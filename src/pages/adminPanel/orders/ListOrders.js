import { List, Datagrid, DateField, TextField, EditButton, DeleteButton} from 'react-admin';
import '../AdminPanel.css';

const ListOrders=()=>{
    return(
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="email" />
                <TextField source="phone" />
                <TextField source="country" />
                <DateField source="date" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
    </List>
    )
}
export default ListOrders;