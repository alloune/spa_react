import React, { useState } from 'react';
import Moment from 'moment';
import Toto from './leaf.png'


function Supplier() {
    // Déclare une nouvelle variable d'état, que nous appellerons « count »
    const [data] = React.useState({
        name: 'Mon fournisseur',
        status: false, // est ce qu'il y a du stock
        checkedAt: new Date() // date de la dernière mise à jour du stock
    })
    const formatedDate =  Moment().format('DD-MM-YYYY');
    return(
        <div>
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div className="shrink-0">
                    <img className="h-12 w-12" src={ Toto } alt="ChitChat Logo"/>
                </div>
                <div>
                    <div className="text-xl font-medium text-black">{ data.name }</div>
                    <p className="text-slate-500">En stock : <span class = {  data.status ? 'text-green-400' : 'text-red-800' }>{ data.status ? 'Oui' : 'Non' }</span></p>
                    <p className="text-slate-500">MàJ : { formatedDate }</p>
                </div>
            </div>

        </div>
    )
}

export default Supplier