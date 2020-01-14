import React,{ useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter as Router,Switch, Route,    } from 'react-router-dom';
import {Container,Pagination } from 'react-bootstrap'
//import {useHistory} from 'react-router';
import Header from './components/header/index'
import Cards from './components/cards/index'
import DataNews from './services/dataNews'
import './App.css';

const App = (props) =>  {

  const [news, setNews] = useState([]);
  const [loader, setLoader] = useState(true);
  //paginator
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage,setNewsPerPage] = useState(15);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const pages = Math.ceil(news.length / newsPerPage);
  const pageNumbers = [];
  let firstIndex = currentPage - 2 >= 1 ? currentPage - 2 : 1;
  let lastIndex = firstIndex + 4 < pages ? firstIndex + 4 : pages - 1;
  firstIndex = lastIndex === pages - 1 ? lastIndex - 4 : firstIndex;
  firstIndex = firstIndex < 1 ? 1 : firstIndex;

  for (let i = firstIndex; i <= lastIndex; i++) {
      pageNumbers.push(<Pagination.Item disabled={currentPage !== i? false:true} key={i} onClick={() => paginate(i)} >
        {i}
      </Pagination.Item>);
  }
  const Paginator = (
      <Pagination>
        <Pagination.First onClick={() => paginate(1)} />
        <Pagination.Prev disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage-1)} />
        {pageNumbers}
        <Pagination.Next disabled={currentPage === pages - 1 } onClick={() => setCurrentPage(currentPage+1)} />
        <Pagination.Last onClick={() => paginate(pages-1)} />
      </Pagination>
  ) 
 
  useEffect(() => {
    DataNews.getData().then(res =>{
      setNews(res.data);
      setLoader(false);     
    }).catch( error => {
      console.log(error); 
    })
  }, []);

  const handleOnClick = event =>{
    setLoader(true);
    const {name} = event.target;
    DataNews.getCategory(name).then(res =>{
      setNews(res.data);
      setLoader(false);
    }).catch(error =>{
      console.log(error);
    })
  }

  const handleOnkey = event =>{
    const{value} = event.target;
    
    if(event.key === 'Enter'){
      console.log(value);
      setLoader(true);
      DataNews.getDataQuery(value).then(res =>{
        setNews(res.data);
      setLoader(false);
      }).catch(error =>{
        console.log(error);
      })
    }
  }


    return (
      <Router >
        <div className="App">
          <Header  handleOnClick={handleOnClick} handleOnkey={handleOnkey}/>
          <Container>
              <Switch>
                <Route exact path="/" component={() => {return <Cards  dataNews={currentNews} loader={loader} paginator={Paginator}/> }}/>
                <Route  path="/news/category/:categoryId" component={() => {return <Cards  dataNews={currentNews} loader={loader}  paginator={Paginator}/> }}/>
                <Route  path="/search/:query" component={() => {return <Cards  dataNews={currentNews} loader={loader}  paginator={Paginator}/> }}/>
              </Switch>
          </Container>
        </div>
      </Router>
    )
}

export default App;
