import React, {PropTypes} from 'react'

export class CourseTabs extends React.Component{
//  componentDidMount(){
//    $('.tab-menu .item').tab()
//  }

  componentDidUpdate(prev, next) {
    $('.tab-menu .item').tab()
  }
  render(){
    if (this.props.isFetching == true) {
      return (
        <div className="ui segment">
          <div className="ui active centered inline loader"></div>
        </div>
      )
    } else {
      return (
        <div className="ui segment">
          <div className="ui pointing secondary menu tab-menu">
            <a className="item active" data-tab="first">Overview</a>
            <a className="item" data-tab="second">Video</a>
            <a className="item" data-tab="third">Transcript</a>
          </div>
          <div className="ui tab active" data-tab="first">
            <div className="overview-content">
              <div className="ui three column stackable grid">
                <div className="three wide column">
                  <div className="author-thumb">
                    <h5>Author</h5>
                    <a href="">
                      <img src="https://preview.ibb.co/g1CTrF/fullsizeoutput_3e1.jpg" alt="Image and video hosting by TinyPic"/>
                      <cite className="author-name">{this.props.course.author}</cite>
                    </a>
                  </div>
                </div>
                <div className="ten wide column course-description">
                  <h6> Released</h6>
                  <span className="release-date">{this.props.course.release_date}</span>
                  <div className="overview-description">
                    {this.props.course.overview}
                  </div>
                </div>
                <div className="three wide column">
                  <div className="course-info-stat-cont duration">
                    <span className="course-info-stat">{this.props.course.duration + "m"}</span>
                    <h6>Duration</h6>
                  </div>
                  <div className="course-info-stat-cont viewers">
                    <span className="course-info-stat">{this.props.course.view}</span>
                    <h6>Views</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ui tab" data-tab="second">
            <div className="ui one column stackable grid">
              <div className="fluid column">
                <iframe className="video-iframe" src={this.props.lesson.preferred_url} frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div className="ui tab" data-tab="third">
            <div className="transcript-content">
              {this.props.lesson.transcript}
            </div>
          </div>
        </div>
      );
    }
  }
}

CourseTabs.propTypes = {
  course: PropTypes.object.isRequired,
  lesson: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
}