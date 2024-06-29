import {MdStar, MdLocationOn} from 'react-icons/md'
import {BsFillBagFill} from 'react-icons/bs'
import './index.css'

const JobItem = props => {
  const {jobsData} = props
  const {
    title,
    rating,
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
  } = jobsData
  return (
    <li className="full-job-container">
      <div className="logo-data">
        <div className="each-job">
          <img
            className="company-logo"
            src={companyLogoUrl}
            alt="company logo"
          />
          <div className="each-job-name-rating">
            <h1>{title}</h1>
            <p>
              <span>
                <MdStar color="#fbbf24" aria-label="close" />
              </span>
              {rating}
            </p>
          </div>
        </div>
        <div className="package-details">
          <p>
            <span>
              <MdLocationOn aria-label="close" />
            </span>
            {location}
          </p>
          <p>
            <span>
              <BsFillBagFill aria-label="close" />
            </span>
            {employmentType}
          </p>
          <p>{packagePerAnnum}</p>
        </div>
      </div>
      <hr className="horizontal-line" />
      <p>{jobDescription}</p>
    </li>
  )
}

export default JobItem
