import React, {PropTypes} from 'react'
import { connect } from 'react-redux'

export class CourseNav extends React.Component {

  componentDidUpdate(prev, next) {
    $('.accordion').accordion({
      animateChildren: false,
      animate: false,
      collapsible: false,
      duration: 0,
      closeNested: false
    })
  }

  activeClassName(chapterIndex, lessonIndex) {
    var tempClass = ""
    if(chapterIndex == this.props.chapterIndex && lessonIndex == this.props.lessonIndex) {
      tempClass = " active"
    }
    return tempClass;
  }

  markedLesson(lesson){
    if(lesson.completed == true){
      return (<i className="checkmark icon green float-right"/>);
    } else {
      return (<div></div>);
    }

  }

  chapterAccordion(chapter){
    return(
      <div className="title active" key={"chapter_" + chapter.id}>
        <i className="dropdown icon"></i>
        {chapter.title}
      </div>
    )
  }

  lessonsAccordion(chapter, chapterIndex){
    return (
      <div className="content active">
        <div className="accordion">
          {chapter.lessons.map(function(lesson,index) {
            return <div className={"title" + this.activeClassName(chapterIndex, index)} key={"lesson_" + index} onClick={ () => store.dispatch(selectLesson(lesson, chapterIndex, index)) }>{lesson.title}
                    {this.markedLesson(lesson)}
                   </div>
          }.bind(this))}
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

  activeLessonsAccordion(chapter, chapterIndex) {
    return (
      <div className="content active">
        <div className="accordion transition visible" style={{display: "block !important"}}>
          {chapter.lessons.map(function(lesson,index) {
            return <div className={"title" + this.activeClassName(chapterIndex, index)} key={"lesson_" + index} onClick={() => store.dispatch(selectLesson(lesson, chapterIndex, index))}>{lesson.title}
                    {this.markedLesson(lesson)}
                   </div>
          }.bind(this))}
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
                    tempLesson = this.activeLessonsAccordion(chapter,index)
                  } else {
                    tempChapter = this.chapterAccordion(chapter)
                    tempLesson = this.lessonsAccordion(chapter,index)
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
  isFetching: PropTypes.bool.isRequired,
  chapterIndex: PropTypes.any,
  lessonIndex: PropTypes.any
}
