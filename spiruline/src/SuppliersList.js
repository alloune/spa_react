import Nav from "./Nav";
import Supplier from "./Supplier";
import React, { useState } from 'react';

function SuppliersList() {
    const [data] = React.useState({
        name: 'Oxford',
        status: true,
        checkedAt: new Date()
    })
    return (
        <div>
            <Nav/>
            <h1>Liste des fournisseurs</h1>
            <Supplier name={ data.name } status={ data.status } checkedAt = { data.checkedAt }>
            </Supplier>
        </div>
    )
}

export default SuppliersList