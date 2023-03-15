import React, { useState } from 'react'
import "./mealplanner.css"
function Mealplanner() {

    return (
        <table>
          <thead>
            <tr>
              <th></th>
              <th>PONIEDZIALEK</th>
              <th>WTOREK</th>
              <th>SRODA</th>
              <th>CZWARTEK</th>
              <th>PIATEK</th>
              <th>SOBOTA</th>
              <th>NIEDZIELA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SNIADANIE</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>LUNCH</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>OBIADO-KOLACJA</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      );
    }
    
  

export default Mealplanner