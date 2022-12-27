import { useState } from "react";


const Form = () => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setInput({
            ...input,
            [property]: value
        })

    }
    const submit = (event) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={submit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={input.name} onChange={handleChange}/>

            <label htmlFor="email">Email:</label>
            <input type="text" name="email" value={input.email} onChange={handleChange}/>

            <label htmlFor="phone">Phone:</label>
            <input type="text" name="phone" value={input.phone} onChange={handleChange}/>
        </form>
    )
}

export default Form;