import React from 'react'
import { connect } from 'react-redux';
import Page from '../components/page';

const Home = (props) => {
  console.log(props)
  return(
      <div>
          <div>
              <h1>Home Page</h1>
          </div>
          <style jsx>{`
          `}</style>
      </div>
  )
}

export default Page(connect(state=>state)(Home))
