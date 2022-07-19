import Nav from "./Nav";
import Supplier from "./Supplier";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ErrorsHandler from "./ErrorsHandler";
import Loading from "./Loading";

function SuppliersList() {
    const [suppliers, setSuppliers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        axios.get(`https://heroku-campus-suppliers.herokuapp.com/api/suppliers`)
            .then(res => {
                setSuppliers(res.data.data)
                setLoading(false);
            }).catch(function (e) {
            setLoading(false);
            setErrors(e);
        })
    }, [])

    return (
        <div>
            <Nav/>
            <h1>Liste des fournisseurs</h1>
            <div className={'flex flex-wrap gap-x-10'}>
                {
                    loading ? <Loading/>
                        :
                        errors ?
                            <ErrorsHandler
                                message={errors.message}
                            />
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