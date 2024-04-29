import React from "react"
import Data from "./Data.json"

function Table1() {
  return (
    <div>
      <table1>
        <thead>
            <tr>
                <th>userID</th>
                <th>id</th>
                <th>title</th>
                <th>body</th>
                
            </tr>
        </thead>
        <tbody>
            {Data.map((data,index)=>(
                <tr key ={index}>
                    <td>{data.userID}</td>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.body}</td>
                </tr>
            ))}

        </tbody>
      </table1>
    </div>
  )
}

export default Table1
