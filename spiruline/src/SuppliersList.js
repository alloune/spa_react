import Nav from "./Nav";
import Supplier from "./Supplier";
import React, {useState} from 'react';

function SuppliersList() {
    const [data] = React.useState({
            suppliers: [
                {
                    id: "2",
                    name: 'Oxford',
                    status: true,
                    checkedAt: new Date()
                },
                {
                    id: "1",
                    name: 'Toto',
                    status: false,
                    checkedAt: new Date()
                },
            ],
        }
    )
    return (
        <div>
            <Nav/>
            <h1>Liste des fournisseurs</h1>

            {data.suppliers.map(element => {
                return (
                    <Supplier
                        { ...element }
                    />
                )

            })

            }
        </div>
    )
}

export default SuppliersList