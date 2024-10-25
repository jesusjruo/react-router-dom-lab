import { useState } from "react";

const MailboxForm = (props) => {

    const [formData , setFormData] = useState({
        boxSize: "",
        boxholder: ""
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.handleAddMailbox(formData);
    }

    return (
        <>
            <main>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="boxSize">Box Size</label>
                    <input
                        name="boxSize"
                        type="text"
                        id="boxSize-input"
                        value={FormData.boxSize}
                        onChange={handleChange}
                    />
                    <label htmlFor="boxholder">Box Holder</label>
                    <input 
                        name="boxholder"
                        type="text"
                        id="boxholder-input"
                        value={FormData.boxholder}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </main>
        </>
    )
}

export default MailboxForm;