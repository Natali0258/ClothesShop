import { List, Datagrid, NumberField, TextField, EditButton, DeleteButton} from 'react-admin';
import '../AdminPanel.css';

const ListTickets=()=>{
    return(
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <NumberField source="sum" />
                <NumberField source="count" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
    </List>
    )
}
export default ListTickets;