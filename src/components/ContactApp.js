import React, { useState } from "react";
import ContactList from "./ContactList";
import Card from "./CardList";
let ContactApp = () => {
    let [Start, setStart] = useState(
        {
            selectedContact: {}
        }
    )
    let receiveData = (contact) => {
        setStart(
            {
                selectedContact: contact
            }
        )
    }
    return (
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className="text-primary">contact app</h3>
                            <p>lorem shdfdh dghgdehdgf gefehdefeg geyegfeh hgyyty gfyetety gheg</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="row">
                    <div className="col-md-8">
                        <ContactList sendData={receiveData} />
                    </div>
                    <div className="col-md-4">
                        {
                            Object.keys(Start.selectedContact).length > 0 &&
                            <Card selectedContact={Start.selectedContact} />
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    )

}
export default ContactApp;