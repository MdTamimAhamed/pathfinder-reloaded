
const InputHandler = ({state,setState,type,autoComplete,name,placeholder})=>{

    return(
        <>
            <div className="w-ful" >
                <input
                className="pl-4 py-[12px] w-full border border-grayBorder my-1 rounded-md outline-primary"
                value={state}
                onChange={(e)=>{setState(e.target.value)}}
                type={type}
                name={name}
                placeholder={placeholder}
                autoComplete={autoComplete || 'off'}
                />
            </div>
        </>
    );
}
export default InputHandler;