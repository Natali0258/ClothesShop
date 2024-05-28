import { Edit, SimpleForm, TextInput, NumberInput, SelectInput, SelectArrayInput, DateInput} from 'react-admin';
import '../AdminPanel.css';

const EditClothes = () => {
    return(
        <Edit title="Изменить товар">
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput disabled source="title" />
                <NumberInput source="priceSale" />
                <TextInput disabled source="image" />
                <NumberInput source="price" />
                <NumberInput source="inStock" />
                <SelectInput source="category" choices={[
                    {id:"skirt", name:"skirt"},
                    {id:"shirt", name:"shirt"},
                    {id:"coat", name:"coat"},
                    {id:"costume", name:"costume"},
                    {id:"jeans", name:"jeans"}
                ]} />
                <SelectArrayInput source="sizes" choices={[
                    {id:"XS", name:"XS"},
                    {id:"S", name:"S"},
                    {id:"M", name:"M"},
                    {id:"L", name:"L"},
                    {id:"XL", name:"XL"},
                    {id:"XXL", name:"XXL"}
                ]} />
                <SelectArrayInput source="colors" choices={[
                    {id:"black", name:"black"},
                    {id:"white", name:"white"},
                    {id:"gainsboro", name:"gainsboro"},
                    {id:"beige", name:"beige"},
                    {id:"steelblue", name:"steelblue"},
                    {id:"powderblue", name:"powderblue"},
                    {id:"lightblue", name:"lightblue"},
                    {id:"blue", name:"blue"},
                    {id:"blueviolet", name:"blueviolet"},
                    {id:"wheat", name:"wheat"},
                    {id:"green", name:"green"},
                    {id:"brown", name:"brown"},
                    {id:"grey", name:"grey"},
                    {id:"pink", name:"pink"},
                    {id:"red", name:"red"},
                    {id:"orange", name:"orange"}
                ]} />
            </SimpleForm>
        </Edit>
    )
}
export default EditClothes;