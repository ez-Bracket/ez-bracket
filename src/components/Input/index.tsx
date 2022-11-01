interface iPropsInput {
    placeholder: string,
    type?: string,
    name?: string
}

export const Input = ({placeholder, type, name}: iPropsInput) => {
    return (
        <input 
            className="w-4/5 max-w-[495px] h-[60px] bg-gray-200 rounded-lg c-gray-100 text-white placeholder:text-gray-100"
            type="text"
            placeholder={placeholder}
        />  
    )
}