import React, {PropTypes} from 'react'

export class CourseTabs extends React.Component{
//  componentDidMount(){
//    $('.tab-menu .item').tab()
//  }

  componentDidUpdate(prev, next) {
    $('.tab-menu .item').tab()
  }

  createMarkup(content) {
    return {__html: content};
  }

  createQuizMarkup() {
    if(this.props.lesson.quiz){
      return ({__html: `${this.props.lesson.quiz.content}`})
    } else {
      return ({__html: `<p>There is no quiz for this lesson.</p>`})
    }
  }

  render(){
    if (this.props.isFetching == true) {
      return (
        <div className="ui segment">
          <div className="ui active centered inline loader"></div>
        </div>
      )
    } else {

      if(this.props.lesson.lesson_type == "normal"){
        return (
          <div className="ui segment">
            <div className="ui pointing secondary menu tab-menu">
              <a className="item active" data-tab="first">Content</a>
              <a className="item" data-tab="third">Overview</a>
              <a className="item" data-tab="fourth">Quiz</a>
            </div>
            <div className="ui tab active" data-tab="first">
              <div className="ui one column stackable grid segment">
                <div className="fluid column">
                  <iframe className="video-iframe" src={this.props.lesson.preferred_url} frameBorder="0" allowFullScreen="allowfullscreen"></iframe>
                </div>
              </div>
              <div className="transcript-content" dangerouslySetInnerHTML={this.createMarkup(this.props.lesson.transcript)}>
              </div>
            </div>
            <div className="ui tab" data-tab="second">
              <div className="ui one column stackable grid">
                <div className="fluid column">
                  <iframe className="video-iframe" src={this.props.lesson.preferred_url} frameborder="0" allowfullscreen="allowfullscreen"></iframe>
                </div>
              </div>
            </div>
            <div className="ui tab" data-tab="third">
              <div className="overview-content">
                <div className="ui three column stackable grid">
                  <div className="three wide column">
                    <div className="author-thumb">
                      <h5>Author</h5>
                      <a href="">
                        <img src={this.props.course.author_image} alt="Image and video hosting by TinyPic"/>
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
            <div className="ui tab" data-tab="fourth">
              <div dangerouslySetInnerHTML={this.createQuizMarkup()}>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="ui segment">
            <div className="ui pointing secondary menu tab-menu">
              <a className="item active" data-tab="fourth">Quiz</a>
            </div>
            <div className="ui tab active" data-tab="fourth">
              <div dangerouslySetInnerHTML={this.createQuizMarkup()}></div>
            </div>
          </div>
        );
      }

    }
  }
}

CourseTabs.propTypes = {
  course: PropTypes.object.isRequired,
  lesson: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
}