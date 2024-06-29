import {Component} from 'react'

import './index.css'
import {Link} from 'react-router-dom'
import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <div className="home-data">
            <h1 className="home-heading">Find The Job That Fits Your Life</h1>
            <p className="home-paragraph">
              Millions of people are searching for jobs, salary , information,
              company reviews. Find the jobs that fits your ability and
              potential.
            </p>
            <Link to="/jobs">
              <button type="button" className="find-job-button">
                Find Jobs
              </button>
            </Link>
          </div>
        </div>
      </>
    )
  }
}

export default Home
