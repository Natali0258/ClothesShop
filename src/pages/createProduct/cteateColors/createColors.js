const CreateColors = ({colors,setColors,color}) => {
    return(
        <li onClick={()=>{
            if (colors.includes(color)){
                setColors(colors.filter(el=> el!==color ))
            }else{
                setColors([...colors, color])
            }
        }} style={{ background: color}} 
        className={`create__form-color ${color!=="black" && colors.includes(color) ? 'create__form-color-select' :
        color==="black" && colors.includes(color) ? 'create__form-color-black' :''}`} />
    )
}
export default CreateColors;