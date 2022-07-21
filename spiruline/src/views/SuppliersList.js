import Nav from "../components/Nav";
import Supplier from "../components/Supplier";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ErrorsHandler from "../components/ErrorsHandler";
import Loading from "../components/Loading";


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
            <h1 className="text-center text-5xl font-bold mt-20 mb-6">Liste des fournisseurs</h1>
            <div className={'ml-40 mr-40 flex flex-wrap gap-20'}>
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