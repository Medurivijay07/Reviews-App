// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewList: this.props.reviewsList[0]}

  onClickingLeftArrow = () => {
    const {reviewsList} = this.props
    const {reviewList} = this.state
    const index = reviewsList.findIndex(
      eachItem => eachItem.username === reviewList.username,
    )
    if (index !== -1 && index >= 1) {
      this.setState({reviewList: reviewsList[index - 1]})
    }
  }

  onClickingRightArrow = () => {
    const {reviewsList} = this.props
    const {reviewList} = this.state
    const index = reviewsList.findIndex(
      eachItem => eachItem.username === reviewList.username,
    )
    if (index !== -1 && index < reviewsList.length - 1) {
      this.setState({reviewList: reviewsList[index + 1]})
    }
  }

  render() {
    const {reviewList} = this.state
    const {imgUrl, username, companyName, description} = reviewList
    return (
      <div className="main-container">
        <div className="reviews-card">
          <h1 className="reviews">Reviews</h1>
          <img src={imgUrl} alt={username} />
          <div className="arrows-container">
            <button
              type="button"
              data-testid="leftArrow"
              className="button"
              onClick={this.onClickingLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow-style"
              />
            </button>
            <p className="user-name">{username}</p>
            <button
              type="button"
              data-testid="rightArrow"
              className="button"
              onClick={this.onClickingRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow-style"
              />
            </button>
          </div>
          <p className="company-name">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
