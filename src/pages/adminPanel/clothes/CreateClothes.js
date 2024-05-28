import { Create, SimpleForm, TextInput, NumberInput, FileInput, ImageField, SelectInput, SelectArrayInput } from 'react-admin';
import '../AdminPanel.css';

const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        
        if (file instanceof File) {
            reader.readAsDataURL(file);
        } else {
            reject(new Error('File is not a Blob'));
        }
    });
}

const CreateClothes = (props) => {

    const handleFileChange = async (file) => {
        let base64Image;
    
        if (file.rawFile instanceof File) {
            base64Image = await convertFileToBase64(file.rawFile);
        } else if (file.src) {
            // If the file is a Blob URL
            base64Image = file.src;
        } else {
            console.error('File is not a Blob or Blob URL');
            return;
        }
    
        props.setResource(props.resource, 'pictures', {
            ...props.formData.pictures,
            src: base64Image
        });
    };
    
return (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            {/* <FileInput source="pictures" label="Related pictures" accept="image/*" multiple> */}
            <FileInput
                source="pictures"
                label="Related pictures"
                accept="image/*"
                onDrop={handleFileChange}
            >
                <ImageField source="src" title="title" />
            </FileInput>
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
    </Create>
    )
}
export default CreateClothes;