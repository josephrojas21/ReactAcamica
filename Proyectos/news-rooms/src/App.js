import React, {Component} from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Header from './components/header/index'
import Cards from './components/cards/index'
import DataNews from './services/dataNews'
import './App.css';



 class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      news: [],
       message: 'funciona'
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  componentDidMount(){
    DataNews.getData().then(res =>{
      this.setState({
        news: res
      })
      console.log(this.state.news);
      
    }).catch( error => {
      console.log(error); 
    })
  }

  handleOnClick = event =>{
    const {name} = event.target;
    console.log(name);
    
    DataNews.getCategory(name).then(res =>{
      console.log(res);
      
    }).catch(error =>{
      console.log(error);
      
    })
  }
  

  render() {
    const {news} = this.state
    return (
      <BrowserRouter>
        <div className="App">
          <Header  handleOnClick={this.handleOnClick}/>
          <Switch>
            <Route exact path="/" component={() => {return <Cards dataNews={news}/>}} />
            <Route  path="/news/category/:categoryId" component={() => {return <Cards dataNews={news}/>}} />
            <Route  path="/search/:query" component={() => {return <Cards dataNews={news}/>}} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
