import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import './AdminPanel.scss';
import ListClothes from './clothes/ListClothes';
import EditClothes from './clothes/EditClothes';
//import CreateClothes from './clothes/CreateClothes';
import ListUsers from './users/ListUsers';
import EditUsers from './users/EditUsers';
import CreateUsers from './users/CreateUsers';
import ListOrders from './orders/ListOrders';
import EditOrders from './orders/EditOrders';

const AdminPanel=()=>{
    return(
        <div className="container">
            <section className="admin">
                <Admin dataProvider={simpleRestProvider('http://localhost:3000/')}>
                    <Resource name="clothes" list={ListClothes} edit={EditClothes} />
                    <Resource name="users" list={ListUsers} edit={EditUsers} create={CreateUsers} />
                    <Resource name="orders" list={ListOrders} edit={EditOrders} />
                </Admin>
            </section>
        </div>
    )
}
export default AdminPanel;