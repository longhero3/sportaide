import React from 'react'

export class CourseTabs extends React.Component{
  componentDidMount(){
    $('.tab-menu .item').tab()
  }
  render(){
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
                    <cite className="author-name">Arvind</cite>
                  </a>
                </div>
              </div>
              <div className="ten wide column course-description">
                <h6> Released</h6>
                <span className="release-date">30/03/2017</span>
                <div className="overview-description">
                  Every AFL game takes place on a grass oval which does not have to be a specific size, but must fit into a certain category; 135 to 185 metres in length and 110 to 155 metres wide. There are four posts at either end of the oval, with the inner two being the goal posts, and the outer two the behind posts.
                </div>
              </div>
              <div className="three wide column">
                <div className="course-info-stat-cont duration">
                  <span className="course-info-stat">25m</span>
                  <h6>Duration</h6>
                </div>
                <div className="course-info-stat-cont viewers">
                  <span className="course-info-stat">2</span>
                  <h6>Views</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui tab" data-tab="second">
          <div className="ui one column stackable grid">
            <div className="fluid column">
              <iframe className="video-iframe" src="https://www.youtube.com/embed/XMZYZcoAcU0" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className="ui tab" data-tab="third">
          <div className="transcript-content">
          When a player is running while holding the ball they must perform what is known as a running bounce at least every 15 metres. If a player fails to do so, the umpire calls a free kick for the opposing team at the point where the player overstepped the mark.  The ‘running too far’ signal by the umpire is indicated by rolling clenched fists around each other. Running bounces are normally carried out by attacking half-back flankers, or link-men, who would receive the ball off a rebound and attack into wide space allowing their team mates to create playing options. Due to the odd shape of the ball, the running bounce is quite a skill, and some players prefer to touch the ball to the ground which is considered the same technically, however slows momentum.
          One of the major AFL rules is holding the ball which helps prevent players from deliberately slowing down the play. This is put into practice when a player is tackled and they must dispose of the ball by either kicking it or handballing it, and is usually interpreted by the umpire as to whether or not it is a held ball. If it is called as a hold ball the team who performed the tackle is awarded a free kick.
          When handballing, the ball must be punched from one hand with the alternate fist, and is not allowed to be punched like a volleyball serve. The ball is also not allowed to be simply handed to a teammate.
          The ball cannot be thrown.
          In AFL there is no offside rule, so all 18 players on both teams are allowed on any part of the oval at any point in the match.
          </div>
        </div>
      </div>
    );
  }
}