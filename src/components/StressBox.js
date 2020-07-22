import React, { useEffect } from 'react'
import './StressBox.css'

const StressBox = () => {

  let checked = [false, false, false]

  useEffect(() => {
    if(!localStorage.getItem('checkedBoxes')) {
      localStorage.setItem('checkedBoxes', JSON.stringify(checked))
      console.log(`no local storage, items set to ${checked}`)
    } else {
      checked = JSON.parse(localStorage.getItem('checkedBoxes'))
      console.log(`checked is now ${checked}`)
    }
  })

  const checkBox = (event) => {
    const boxNumber = event.target.innerText
    if (checked[boxNumber-1]) {
      checked[boxNumber-1] = false
      console.log(`box numbers ${boxNumber} are now ${checked[boxNumber-1]}`)
      localStorage.setItem('checkedBoxes', JSON.stringify(checked))
    } else {
      checked[boxNumber-1] = true
      console.log(`box numbers ${boxNumber} are now ${checked}`)
      localStorage.setItem('checkedBoxes', JSON.stringify(checked[boxNumber-1]))
    }
  }

  return (
    <table>
      <caption>Stress</caption>
      <tbody>
        <tr>
          <td onClick={checkBox} className={`stress-box ${checked[0] ? "checked-box" : ""}`}>1</td>
          <td onClick={checkBox} className={`stress-box ${checked[1] ? "checked-box" : ""}`}>2</td>
          <td onClick={checkBox} className={`stress-box ${checked[2] ? "checked-box" : ""}`}>3</td>
        </tr>
      </tbody>
    </table>
  )
}

export default StressBox