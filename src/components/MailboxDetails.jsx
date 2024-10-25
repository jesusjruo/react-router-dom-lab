import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {

    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find(
        (mailbox) => mailbox.id === Number(mailboxId)
    );

    return (
       <>
            {selectedBox ? (
                <div className="mail-box">
                    <h5>{selectedBox.boxholder}</h5>
                    <p>{selectedBox.boxSize}</p>
                    <p>ID: {selectedBox.id}</p>
                </div>
            ) : (
                <div className="mail-box">
                    <h2>Mailbox Not Found!</h2>
                </div>
             )}
       </>
    )
}

export default MailboxDetails;

