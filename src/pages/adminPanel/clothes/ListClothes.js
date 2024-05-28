import { List, Datagrid, NumberField, DateField, TextField, EditButton, DeleteButton} from 'react-admin';
//import './PostListClothes.css';
import '../AdminPanel.css';

const ListClothes=(props)=>{
    return(
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <NumberField source="price" />
                <NumberField source="priceSale" />
                <TextField source="category" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
    </List>
    )
}
export default ListClothes;