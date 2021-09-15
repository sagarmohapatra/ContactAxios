import React from "react";
let Card = ({ selectedContact }) => {
    return (
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body text-center">
                                    <img src={selectedContact.picture.large} className="rounded-circle contact-img" />
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            Name:{selectedContact.name.first}{selectedContact.name.last}
                                        </li>
                                        <li className="list-group-item">
                                            {selectedContact.email}
                                        </li>
                                        <li className="list-group-item">
                                            AGE:{selectedContact.dob.age}
                                        </li>
                                        <li className="list-group-item">
                                            CITY:{selectedContact.location.city}
                                        </li>
                                        <li className="list-group-item">
                                            STATE:{selectedContact.location.state}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Card;