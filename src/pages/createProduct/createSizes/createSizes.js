const CreateSizes = ({sizes,setSizes,size}) => {
    return(
        <li onClick={()=>{
            if (sizes.includes(size)){
                setSizes(sizes.filter(el=> el!==size ))
            }else{
                setSizes([...sizes, size])
            }
        }}  
        className={`create__form-size ${sizes.includes(size) ? 'create__form-size-select' : ''}`}>{size}</li>
    )
}
export default CreateSizes;