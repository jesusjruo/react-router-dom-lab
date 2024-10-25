import { Link } from "react-router-dom";

const MailboxList = (props) => {
    return (
        <>
            <main>
                <ul>
                {
                    props.mailboxes.map(mailbox => {
                        return (
                            <Link key={mailbox.id} to={`/mailboxes/${mailbox.id}`}> 
                                <li className="mail-box">
                                    <h5>{mailbox.boxholder}</h5>
                                    <p>{mailbox.boxSize}</p>
                                </li>
                             </Link>
                        )
                    })
                }
                </ul>
            </main>
        </>
    )
}

export default MailboxList;