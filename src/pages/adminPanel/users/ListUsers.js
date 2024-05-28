import { List, Datagrid, TextField, EditButton, DeleteButton} from 'react-admin';
import '../AdminPanel.css';

const ListUsers=(props)=>{
    return(
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="email" />
                <TextField source="login" />
                <TextField source="phone" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
    </List>
    )
}
export default ListUsers;