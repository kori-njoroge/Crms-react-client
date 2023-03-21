import React from 'react';
import { salesObject } from './testData/salestextdata'

export default function ExistingSales({ search }) {
    salesObject.sort((a, b) => (a.id > b.id) ? 1 : -1)

    const filteredSales = salesObject.filter((sale) => {
        if (search) {
            return (
                sale.customer.name.toLowerCase().includes(search.toLowerCase())
            );
        } else {
            return (salesObject)
        }
    });

    return (
        <div className='sales-lisitng-container'>
            <h2>Sales Table</h2>
            <table className='sales-table'>
                <thead className='sales-table-header'>
                    <tr>
                        <th>#</th>
                        <th>Customer</th>
                        <th>Employee</th>
                        <th>Total Amount</th>
                        <th>products</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSales.map((sale) => (
                        sale.items.map((item, index) => (
                            <tr key={`${sale.id}-${index}`} className={item.status === 'Refunded' ? 'refunded-item' : ''}>
                                {index === 0 && (
                                    <>
                                        <td rowSpan={sale.items.length} >{sale.id}</td>
                                        <td rowSpan={sale.items.length} >{`${sale.customer.name}`}</td>
                                        <td rowSpan={sale.items.length} >{`${sale.employee.name}`}</td>
                                        <td rowSpan={sale.items.length} >{`$${sale.totalAmount.toFixed(2)}`}</td>
                                    </>
                                )}
                                <td >{item.productName}</td>
                                <td >{item.status}</td>
                            </tr>
                        ))
                    ))}
                </tbody>
            </table>
        </div>
    );
}
