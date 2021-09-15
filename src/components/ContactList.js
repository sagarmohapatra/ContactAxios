import axios from 'axios';

import React, { useState, useEffect } from 'react';
let ContactList = ({ sendData }) => {
    let [Start, setStart] = useState(
        {
            contacts: []
        }
    )
    let selectContact = (contact) => {
        sendData(contact)
    }
    useEffect(() => {
        let url = 'https://gist.githubusercontent.com/reddyyuvakishore1211/a09aebc03a7e970f42e221e6caf3a2a6/raw/63c8d269e1c4b68f9874e81af2e2a51f24e09349/contact270521';
        axios.get(url).then((res) => {
            setStart(
                {
                    contacts: res.data
                }
            )
        }).catch((error) => {
            console.error(error)
        })


    })
    return (
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover text-center table-striped bg-primary text-white">
                                <thead>
                                    <th>Sno</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Location</th>
                                </thead>
                                <tbody>
                                    {
                                        Start.contacts.length > 0 &&
                                        Start.contacts.map((contact) => {
                                            return (
                                                <tr key={contact.login.uuid} onClick={selectContact.bind(this, contact)}>
                                                    <td>{contact.login.uuid.substr(contact.login.uuid.length - 5)}</td>
                                                    <td>{contact.name.first}{contact.name.last}</td>
                                                    <td>{contact.email}</td>
                                                    <td>{contact.phone}</td>
                                                    <td>{contact.location.city}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default ContactList;