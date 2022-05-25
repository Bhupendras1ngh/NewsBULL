import React, {  useEffect ,useState } from 'react'
import NewItem from './NewItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

// export class News extends Component {
    // static defaultProps = {
    //     country :'in',
    //     pageSize :8,
    //     category :'general',
    // }
    //
    // static propTypes = {
    //     country :PropTypes.string,
    //     pageSize : PropTypes.number,
    //     category : PropTypes.string,
    // }
    const News =(props) =>{

    const [articles ,setArticles]  =useState([])
    const [loading ,setLoading]  =useState(true)
    const [page ,setPage]  =useState(1)
    const [totalResults ,setTotalResults]  =useState(0)
    // document.title =   `${this.capitalizeFirstLetter(props.category)} - NewsBull`;
    const capitalizeFirstLetter =(string) => {
        return string.charAt(0).toUpperCase() +string.slice(1);
    }
   
    // constructor(props){
    //     super(props);
    //     // console.log("hii i am constructor from news components");
    //     // this.state={
    //     //     articles : [] ,
    //     //     loading :true,
    //     //     page : 1,
    //     //     totalResults :0
    //     //     }
    //     // document.title =   `${this.capitalizeFirstLetter(props.category)} - NewsBull`;
       
    // }
    // async updateNews(){
        const updateNews =async() =>{
          
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        // this.setState({loading:true})
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        // this.setState({articles : parsedData.articles ,
        //     totalResults : parsedData.totalResults ,
        //     loading :false})
    }
    useEffect(() => {
        document.title =  `${capitalizeFirstLetter(props.category)} - NewsBull`;
        updateNews();
        /* eslint-disable */
    } ,[])
   
    //   async componentDidMount(){   
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    //     // this.setState({loading:true})
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json()
    //     // this.setState({articles : parsedData.articles ,
    //     //     totalArticles : parsedData.totalResults ,
    //     //     loading :false})
    //     this.updateNews();
    // }
    
  
    // const  handlePrevClick =async () =>{
    //     //  console.log("prev");
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page -1}&pageSize=${props.pageSize}`;
    //     // this.setState({loading:true})
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json()
       
    //     // this.setState({
    //     //     page :this.state.page -1,
    //     //     articles : parsedData.articles,
    //     //     loading :false
    //     // })
    //     // this.setState({page : this.state.page -1})
    //     setPage(page - 1);
    //     updateNews();

    // }
    //  const handleNextClick = async () =>{
    //     //  console.log("next");
    //     // if (this.state.page +1 > Math.ceil(this.state.totalResults/props.pageSize)){
    //     //                     //     console.log("next");
    //     //                     //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page +1}&pageSize=${props.pageSize }`;
    //     //                     //     this.setState({loading:true})
    //     //                     //     let data = await fetch(url);
    //     //                     //     let parsedData = await data.json()
    //     //                     //     this.setState({
    //     //                     //         page :this.state.page +1,
    //     //                     //         articles : parsedData.articles,
    //     //                     //         loading :false
    //     //                     //     })
    //     // }
    //     // else{
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page +1}&pageSize=${props.pageSize }`;
    //     // this.setState({loading:true})
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json();
    //     // console.log(parsedData);
    //     // this.setState({
    //     //             page :this.state.page +1,
    //     //             articles : parsedData.articles,
    //     //             loading :false,
                    
    //     //         })
    //     // }
    //     // this.setState({page : this.state.page +1});
    //      setPage(page +1);
    //     updateNews();
       
    // }

    const fetchMoreData = async () => {
    //    this.setState({page : page + 1})
       
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page +1}&pageSize=${props.pageSize}`;
        // this.setState({loading:true})
        setPage(page +1);
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        // this.setState({articles : articles.concat(parsedData.articles) ,
        //     totalResults : parsedData.totalResults })
        //     // loading :false})
      };

//   render() {
    return (
      <>
        <h1 className="text-center" style = {{margin :'35px' ,marginTop : '90px'}}>NewsBull - Top {capitalizeFirstLetter(props.category)} Headlines  </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
            // inverse={true} //
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>} >


        <div className='container'>   
        
        <div className="row ">
        {/* {!this.state.loading && this.state.articles?.map((element)=> { */}
        {articles?.map((element)=> {
            return <div className="col-md-4" key={element.url}>
                     <NewItem  title ={element.title ?element.title :""} description  = {element.description?element.description.slice(0 ,102):""} imageUrl = {element.urlToImage} newsUrl ={element.url} author = {element.author} date ={element.publishedAt} source ={element.source.name}/>
        </div>
        })}
        </div>
        </div> 
        </InfiniteScroll>
       {/* <div className="container d-flex justify-content-between">
       <button disabled = {this.state.page <=1}type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr;previous</button>
       <button disabled = {(this.state.page + 1) >= Math.ceil(this.state.totalResults/props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>next &rarr;</button>
       </div> */}
        
      </>
    )
//   }
}

News.defaultProps = {
    country :'in',
    pageSize :8,
    category :'general',
}

News.propTypes = {
    country :PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
}
export default News

