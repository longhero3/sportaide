import React, {PropTypes} from 'react'

export class CourseTabs extends React.Component{
//  componentDidMount(){
//    $('.tab-menu .item').tab()
//  }

  constructor(props){
    super(props)
    this.state = {
      binded: false
    }
  }

  componentDidUpdate(prev, next) {
    $('.tab-menu .tab-item').tab()
    if(this.state.binded == false){
      this.state.binded = true;
      $(".not").on("click", function () {
        var a, b, c, d, e, f, g, h, i, j, k;
        d = $(this).attr("data-size");
        e = $(this).attr("data-message");
        c = $(this).attr("data-type");
        f = $(this).attr("data-icon");
        g = $(this).attr("data-title");
        h = $(this).attr("data-image");
        i = $(this).attr("data-sound");
        a = $(this).attr("data-show-animation");
        b = $(this).attr("data-hide-animation");
        j = $(this).attr("data-position");
        k = $(this).attr("data-delay");
        Lobibox.notify(c, {
          size: d,
          rounded: false,
          delayIndicator: true,
          msg: e,
          icon: f,
          title: g,
          showClass: a,
          hideClass: b,
          sound: i,
          img: h,
          delay: 1500
        });
      });
    }
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

  nextLesson(){
    store.dispatch(nextLesson())
    $('html,body').animate({ scrollTop: 0 }, 400);
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
              <a className="item tab-item active" data-tab="first">Content</a>
              <a className="item tab-item" data-tab="third">Overview</a>
              <a className="item tab-item" data-tab="fourth">Quiz</a>
            </div>
            <div className="ui tab active" data-tab="first">
              <div className="ui one column stackable grid segment">
                <div className="fluid column">
                  <iframe className="video-iframe" src={this.props.lesson.preferred_url} frameBorder="0" allowFullScreen="allowfullscreen"></iframe>
                </div>
              </div>
              <div className="transcript-content" dangerouslySetInnerHTML={this.createMarkup(this.props.lesson.transcript)}>
              </div>
              <button className="ui right labeled icon green button not next-lesson-btn" data-animation data-type="success" data-title="Hoorays!" data-size="normal" data-message="Moving to the next lesson" onClick={this.nextLesson.bind(this)}>
                Next Lesson
                <i className="right chevron icon"/>
              </button>
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
            <div className="ui pointing secondary menu">
              <a className="item active" data-tab="fourth">Quiz</a>
            </div>
            <div className="content" data-tab="fourth">
              <button className="ui right labeled icon green button not next-lesson-btn" data-animation data-type="success" data-title="Hoorays!" data-size="normal" data-message="Moving to the next lesson" onClick={this.nextLesson.bind(this)}>
                Next Lesson
                <i className="right chevron icon"/>
              </button>
              <br/>
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