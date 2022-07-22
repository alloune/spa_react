import {useRef} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";

export default function CreateForm(props) {

    let createSupplierDate = new Date;
    let navigate = useNavigate();
    const inputSupplier = useRef(null);
    const inputStatus = useRef(null);
    const inputLatitude = useRef(null);
    const inputLongitude = useRef(null);

    function createSupplier() {
        axios.post(`https://heroku-campus-suppliers.herokuapp.com/api/suppliers`,
            {
                name: inputSupplier.current.value,
                latitude: inputLatitude.current.value,
                longitude: inputLongitude.current.value,
                status: inputStatus.current.value,
                checkedAt: createSupplierDate
            }
        ).then(navigate('/', { replace : true }))
    }

    return (
        <>
            <div className="w-full max-w-lg ">
                <div className="flex flex-wrap -mx-3 mb-6 j ">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                            Fournisseur
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200
                        rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            ref={inputSupplier} name="supplier" defaultValue={props.name} type="text"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                            Status
                        </label>
                        <select id="countries"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
                            p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                ref={inputStatus}
                                name="status">
                            <option disabled>Choisissez les disponibilités</option>
                            <option value="true">En stock</option>
                            <option value="false">En rupture</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                            Latitude
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            ref={inputLatitude} name="latitude" type="text" defaultValue={props.latitude}/>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-city">
                            Longitude
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            ref={inputLongitude} name="longitude" type="text" defaultValue={props.longitude}/>
                    </div>
                </div>
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold
                 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={createSupplier}>
                    Créer
                </button>
            </div>
        </>
    )
}