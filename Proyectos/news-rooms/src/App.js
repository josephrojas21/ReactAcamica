import React,{ useState, useEffect} from 'react';
import {  BrowserRouter as Router,Switch, Route,    } from 'react-router-dom';
import {useHistory} from 'react-router';
import Header from './components/header/index'
import Cards from './components/cards/index'
import DataNews from './services/dataNews'
import './App.css';



 const App = (props) =>  {

  const [news, setNews] = useState([]);
  let {history} = useHistory();

  useEffect(() => {
    DataNews.getData().then(res =>{
      this.setState({
        news: res
      })
      console.log(news);
      
    }).catch( error => {
      console.log(error); 
    })
  });

  const handleOnClick = event =>{
    const {name} = event.target;
    console.log(name);
    
    DataNews.getCategory(name).then(res =>{
      setNews(res)
      console.log(news);
      
    }).catch(error =>{
      console.log(error);
      
    })
  }

  const handleOnkey = event =>{
    const{value} = event.target;
    if(event.key === 'Enter'){
      console.log(value);
      DataNews.getDataQuery(value).then(res =>{
        history.push("/search/:query")
        setNews(res)
      }).catch(error =>{
        console.log(error);
      })
    }
  }
  


    return (
      <Router history={history}>
        <div className="App">
          <Header  handleOnClick={handleOnClick} handleOnkey={handleOnkey}/>
          <Switch>
            <Route exact path="/" component={() => {return <Cards dataNews={news}/>}} />
            <Route  path="/news/category/:categoryId" component={() => {return <Cards dataNews={news}/>}} />
            <Route  path="/search/:query" component={() => {return <Cards dataNews={news}/>}} />
          </Switch>
        </div>
      </Router>
    )
}


export default App;
