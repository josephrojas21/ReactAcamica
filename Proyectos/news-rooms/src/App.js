import React,{ useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter as Router,Switch, Route, Redirect   } from 'react-router-dom';
import {Container,Pagination } from 'react-bootstrap'
import {useHistory} from 'react-router';
import Header from './components/header/index'
import Cards from './components/cards/index'
import DataNews from './services/dataNews'
import './App.css';

const App = () =>  {

  const basename = process.env.NODE_ENV === "production" ? "/news-rooms" : "";
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

  useEffect(() => {
    getNews()
  }, []);

  const getNews =() =>{
    DataNews.getData().then(res =>{
      setNews(res.data);
      setLoader(false);     
    }).catch( error => {
      console.log(error); 
    })
  }

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

  const [searchValue,setSearchValue] = useState("")

  const handleChange = (e) =>{
      const {value} = e.target;
      setSearchValue(value)
  }



  const handleOnkey = () =>{
      console.log(searchValue);
      // history.push(`/search/${searchValue}`);
      setLoader(true);
      DataNews.getDataQuery(searchValue).then(res =>{
        setNews(res.data);
      setLoader(false);
      }).catch(error =>{
        console.log(error);
      })
  }


    return (
      <Router basename={basename}>
        <div className="App">
          <Header  
            handleOnClick={handleOnClick} 
            handleOnkey={handleOnkey} 
            handleChange={handleChange}
            getNews={getNews}/>
          <Container>
              <Switch>
                <Route exact path="/" component={() => {return <Cards  dataNews={currentNews} loader={loader} paginate={paginate} currentPage={currentPage} pages={pages}/> }}/>
                <Route  path="/news/category/:categoryId" component={() => {return <Cards  dataNews={currentNews} loader={loader}  paginate={paginate} currentPage={currentPage} pages={pages}/> }}/>
                <Route  path="/search/:query" component={() => {return <Cards  dataNews={currentNews} loader={loader}  paginate={paginate} currentPage={currentPage} pages={pages}/> }}/>
                <Redirect to="/" />
              </Switch>
          </Container>
        </div>
      </Router>
    )
}

export default App;
