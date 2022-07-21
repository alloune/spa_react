import Nav from "../components/Nav";
import {useEffect, useState} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

function Home() {

    let navigate = useNavigate();

    let tempSuppliers
    const [suppliers, setSuppliers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);
    const {id} = useParams();

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

    const deleteSupplier = (event, param) => {
        axios.delete(`https://heroku-campus-suppliers.herokuapp.com/api/suppliers/` + param).then(
          //trouver comment enlever l'index de mon tableau

        )

    }
    return (
        <>
            <Nav/>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="w-1/2 mx-40">
                                <thead className="bg-white border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        #
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Supplier
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Status
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Ressellers ?
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Action
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    suppliers.map(element => {
                                        console.log(element)
                                        return (

                                            <tr className="bg-white border-b transition duration-300 ease-in-out
                                            hover:bg-gray-100">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium
                                                text-gray-900">
                                                    {element.id}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4
                                                 whitespace-nowrap">
                                                    {element.name}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4
                                                whitespace-nowrap">
                                                    {element.status ? "En stock" : "Vide"}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4
                                                whitespace-nowrap">
                                                    {element.resellers.length ? element.resellers.length : '-'}
                                                </td>
                                                <td className="flex text-sm text-gray-900 font-light px-6 py-4
                                                whitespace-nowrap gap-5">
                                                    <button
                                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold
                                                        py-2 px-4 border border-blue-700 rounded">
                                                        <Link
                                                            key={element.id} to={"/supplier/edit/" + element.id}>Editer
                                                        </Link>
                                                    </button>
                                                    <button
                                                        className={
                                                            element.resellers.length ?
                                                                "bg-gray-500 text-white " +
                                                                "font-bold py-2 px-4 border border-gray-700 rounded"
                                                                :
                                                                "bg-red-500 hover:bg-red-700 text-white font-bold py-2" +
                                                                " px-4 border border-red-700 rounded"
                                                        }
                                                        disabled={element.resellers.length ? true : false}
                                                        onClick={event => deleteSupplier(event, element.id)}
                                                    >
                                                        Supprimer
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Home;