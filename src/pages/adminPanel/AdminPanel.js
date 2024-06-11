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
import ListTickets from './tickets/ListTickets';
import EditTickets from './tickets/EditTickets';
import CreateTickets from './tickets/CreateTickets';

const AdminPanel=()=>{
    return(
        <div className="container">
            <section className="admin">
                <Admin dataProvider={simpleRestProvider('http://localhost:3000/')}>
                    <Resource name="clothes" list={ListClothes} edit={EditClothes} />
                    <Resource name="users" list={ListUsers} edit={EditUsers} create={CreateUsers} />
                    <Resource name="orders" list={ListOrders} edit={EditOrders} />
                    <Resource name="tickets" list={ListTickets} edit={EditTickets} create={CreateTickets} />
                </Admin>
            </section>
        </div>
    )
}
export default AdminPanel;