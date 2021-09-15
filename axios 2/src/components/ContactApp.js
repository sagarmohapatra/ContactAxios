import React, { useState } from "react";
import Sagar from './CardList';
import Card from './CardList'
let Contactapp = () => {
    let [start, setstart] = useState(
        {
            pass: {}
        }
    )
    let receiveData = (contact) => {
        setstart({
            pass: contact
        })
    }
    return (
        <React.Fragment>
            <section className="container mt-3">
                <div className="row">
                    <div className="col-md">
                        <h3 className="text-primary">contact App</h3>
                        < p>lorem did it ..... may be i can do it but my gap also increase</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="row">
                    <div className="col-md-8">
                        <Sagar sendData={receiveData} />
                    </div>
                    <div className="col-md-4">
                        {
                            Object.keys(start.pass).length > 0 &&
                            <Card pass={start.pass} />
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Contactapp;