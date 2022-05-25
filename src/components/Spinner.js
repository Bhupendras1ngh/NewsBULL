import React from 'react'
import loading from './loading1.gif'
// export class Spinner extends Component {
  const Spinner = ()=>{
  // render() {
    return (
      <div className='text-center'>
        <img className = "my-3" src= {loading} alt="loadings" />
      </div>
    )
  // }
}

export default Spinner
