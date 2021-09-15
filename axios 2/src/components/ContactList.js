
import React, { useState, useEffect } from "react";
import axios from 'axios';
let Sagar = ({ sendData }) => {
    let [start, setstart] = useState(
        {
            user: []
        }
    )
    let selectContact = (contact) => {
        sendData(contact)
    }

    useEffect(() => {
        let dataURL = ('https://gist.githubusercontent.com/reddyyuvakishore1211/a09aebc03a7e970f42e221e6caf3a2a6/raw/63c8d269e1c4b68f9874e81af2e2a51f24e09349/contact270521');
        axios.get(dataURL).then((res) => {
            setstart(
                {
                    user: res.data
                }
            )
        }).catch((error) => {
            console.error(error)
        })
    })
    return (
        <React.Fragment>
            <section className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="table table-hover table-striped bg-primary text-center">
                            <thead>
                                <tr>
                                    <th>Sno</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    start.user.length > 0 &&
                                    start.user.map((did) => {
                                        return (
                                            <tr key={did.login.uuid} onClick={selectContact.bind(this, did)}>
                                                <td>{did.login.uuid.substr(did.login.uuid.length - 5)}</td>
                                                <td>{did.name.first}{did.name.last}</td>
                                                <td>{did.email}</td>
                                                <td>{did.phone}</td>
                                                <td>{did.location.city}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )

}
export default Sagar;