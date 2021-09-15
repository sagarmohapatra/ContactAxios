import React from "react";
let Card = ({ pass }) => {
    return (
        <React.Fragment>
            <section className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body text-center">
                                <img src={pass.picture.large} className="rounded-circle contact-img" />
                                <ul className="list-group">
                                    <li className="list-group-item">{pass.name.first}{pass.name.last}</li>
                                    <li className="list-group-item">{pass.email}</li>
                                    <li className="list-group-item">
                                        AGE:{pass.dob.age}</li>
                                    <li className="list-group-item">
                                        CITY:{pass.location.city}</li>
                                    <li className="list-group-item">
                                        State:{pass.location.state}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Card;