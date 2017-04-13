import React, {PropTypes} from 'react'
import { connect } from 'react-redux'

export class CourseNav extends React.Component {

  componentDidUpdate(prev, next) {
    $('.accordion').accordion()
  }

  chapterAccordion(chapter){
    return(
      <div className="title" key={"chapter_" + chapter.id}>
        <i className="dropdown icon"></i>
        {chapter.title}
      </div>
    )
  }

  lessonsAccordion(chapter){
    return (
      <div className="content">
        <div className="accordion">
          {chapter.lessons.map(function(lesson,index) {
            return <div className="title" key={"lesson_" + index} onClick={ () => store.dispatch(selectLesson(lesson)) }>{lesson.title}</div>
          })}
        </div>
      </div>
    )
  }

  activeChapterAccordion(chapter){
    return(
      <div className="title active" key={"chapter_" + chapter.id}>
        <i className="dropdown icon"></i>
        {chapter.title}
      </div>
    )
  }

  activeLessonsAccordion(chapter) {
    return (
      <div className="content active">
        <div className="accordion transition visible" style={{display: "block !important"}}>
          {chapter.lessons.map(function(lesson,index) {
            return <div className="title" key={"lesson_" + index} onClick={() => store.dispatch(selectLesson(lesson))}>{lesson.title}</div>
          })}
        </div>
      </div>
    )
  }

  render(){
    if(this.props.isFetching == true) {
      return (
        <div className="chapter-navigation"><div className="ui active centered inline loader"></div></div>
      )
    } else {
      return (
        <div className="chapter-navigation">
      {/*<div className="search-navigation">
            <div className="ui icon input fluid">
              <i className="search icon"></i>
              <input type="text" placeholder="Search for specific chapter..."/>
            </div>
          </div>*/}
          <div className="chapter-wrapper">
            <div className="chapter-content">
              <div className="ui styled accordion">
                {this.props.course.chapters.map(function(chapter, index){
                  var tempChapter = null
                  var tempLesson = null
                  if(index == 0){
                    tempChapter = this.activeChapterAccordion(chapter)
                    tempLesson = this.activeLessonsAccordion(chapter)
                  } else {
                    tempChapter = this.chapterAccordion(chapter)
                    tempLesson = this.lessonsAccordion(chapter)
                  }
                  return [tempChapter, tempLesson]
                }.bind(this))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

CourseNav.propsTypes = {
  course: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
}
