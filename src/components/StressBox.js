import React, {useState} from 'react'
import './StressBox.css'

const StressBox = () => {

  const [checked, setChecked] = useState([false, false, false])

  const checkBox = (event) => {
    const boxNumber = event.target.innerText
    if (checked[boxNumber-1]) {
      const updatedCheckedBoxes = [...checked]
      updatedCheckedBoxes[boxNumber-1] = false
      setChecked(updatedCheckedBoxes)
    } else {
      const updatedCheckedBoxes = [...checked]
      updatedCheckedBoxes[boxNumber-1] = true
      setChecked(updatedCheckedBoxes)
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