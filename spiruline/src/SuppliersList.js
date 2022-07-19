import Nav from "./Nav";
import Supplier from "./Supplier";
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function SuppliersList() {
    const [suppliers, setSuppliers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://heroku-campus-suppliers.herokuapp.com/api/suppliers`)
            .then(res => {
                setSuppliers(res.data.data)
                setLoading(false);
            })
    }, [])


    return (
        <div>
            <Nav/>
            <h1>Liste des fournisseurs</h1>
            <div className={'flex flex-wrap gap-x-10'}>
                {
                    loading ? <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                            <div className="animate-pulse flex space-x-4">
                                <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                                <div className="flex-1 space-y-6 py-1">
                                    <div className="h-2 bg-slate-200 rounded"></div>
                                    <div className="space-y-3">
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                        </div>
                                        <div className="h-2 bg-slate-200 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        suppliers.map(element => {

                            return (

                                <Supplier
                                    {...element}
                                />
                            )

                        })

                }
            </div>
        </div>
    )

}


export default SuppliersList