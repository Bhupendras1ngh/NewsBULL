import React from 'react'

// export class NewItem extends Component {
   const NewItem = (props)=>{
  // render() {
    let { title ,description  ,imageUrl  ,newsUrl ,author ,date ,source} = props ; // java me aak concept hotahai destructureing uska means is that this.props me se title , escription ko as a title , descroption avalable kara diye jaige.
    return (
      <div className='my-3'>
        <div className="card" >
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style ={{left :'90%' ,zIndex:1} }>{source}</span>
            <img src={!imageUrl ? "https://images.livemint.com/img/2022/05/14/600x338/Lunar-Eclipse-0_1652495828620_1652495845382.jpg" :imageUrl}  className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...<span className="badge text-bg-success">new</span></h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted"> By <b>{!author?"Unknown": author}</b>  on  {new Date(date).toGMTString()} </small></p>
            <a  rel="noreferrer" href= {newsUrl} target ="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  // }
}

export default NewItem
