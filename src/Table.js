import React from 'react'
import Data from "./Data.json"
function Table() {
   
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>albumId</th>
                <th>id</th>
                <th>title</th>
                <th>url</th>
                <th>thumbnailUrl</th>
            </tr>
        </thead>
        <tbody>
            {Data.map((dataa,index)=>(
                <tr key={index}>
                    <td>{dataa.albumId}</td>
                    <td>{dataa.id}</td>
                    <td>{dataa.title}</td>
                    <td>{dataa.url}</td>
                    <td>{dataa.thumbnailUrl}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
