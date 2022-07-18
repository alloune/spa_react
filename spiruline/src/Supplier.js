import React, { useState } from 'react';
import Moment from 'moment';
import Toto from './leaf.png'


function Supplier(props) {
     const formatedDate =  Moment(props.checkedAt).format('DD-MM-YYYY');
    return(
        <div>
            <div className="p-6 max-w-sm my-10 mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div className="shrink-0">
                    <img className="h-12 w-12" src={ Toto } alt="ChitChat Logo"/>
                </div>
                <div>
                    <div className="text-xl font-medium text-black">{ props.name }</div>
                    <p className="text-slate-500">En stock : <span class = {  props.status ? 'text-green-400' : 'text-red-800' }>{ props.status ? 'Oui' : 'Non' }</span></p>
                    <p className="text-slate-500">MàJ : { formatedDate }</p>
                </div>
            </div>

        </div>
    )
}

export default Supplier