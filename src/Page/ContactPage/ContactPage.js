import React, {useState} from "react";

function ContactsPage() {
    const [input, setInput] = useState("");

    const changeInput = (event) => {
        setInput(event.target.value)
    }

    const addInput = () => {
        console.log(input)
        setInput("")
    }
    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={changeInput}
                placeholder="contact"/>
            <button onClick={addInput}>add</button>
            <button onClick={() => setInput("")}>clear</button>
        </div>
    )
}

export default ContactsPage;