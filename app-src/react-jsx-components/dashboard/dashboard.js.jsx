import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

export class Dashboard extends React.Component{

  render(){
    return (
      <div>
        <NavBar/>
        <div className="mainWrap ui container">
          <div className="ui equal width left aligned padded grid stackable">
      <div className="stretched row">
      <div className="sixteen wide tablet ten wide computer column">
      <div className="ui segments">
      <div className="ui segment no-padding-bottom">
      <h5 className="ui left floated header">
      Populer Browsers
    </h5>
    <h5 className="ui right floated header">
      <i className="ion-ios-arrow-up icon link" />
      <i className="ion-ios-refresh-empty refreshing icon link" />
      <i className="ion-ios-close-empty icon link" />
      </h5>
    <div className="clearfix" />
      </div>
    <div className="ui segment left aligned">
      <table className="ui very basic center aligned  celled table">
      <thead>
      <tr>
      <th>#</th>
    <th>Project Name</th>
    <th>Date</th>
    <th>Accept</th>
    <th>Status</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>1</td>
    <td>Chrome</td>
    <td>10 July 2014</td>
    <td><i className="green check icon" /></td>
    <td><a className="ui blue mini basic label">Update</a></td>
    </tr>
    <tr>
    <td>2</td>
    <td>Mozilla</td>
    <td>2 Feb 2010</td>
    <td><i className="red close icon" /></td>
    <td><a className="ui green mini basic label">Upgrade</a></td>
    </tr>
    <tr>
    <td>3</td>
    <td>Yandex</td>
    <td>29 Aug 2012</td>
    <td><i className="green check icon" /></td>
    <td><a className="ui purple mini basic label">Coming Soon</a></td>
    </tr>
    <tr>
    <td>4</td>
    <td>Internet Explorer</td>
    <td>5 Sep 2005</td>
    <td><i className="red close icon" /></td>
    <td><a className="ui red mini basic label">Released</a></td>
    </tr>
    <tr>
    <td>5</td>
    <td>Safari</td>
    <td>1 Jan 2002</td>
    <td><i className="red close icon" /></td>
    <td><a className="ui yellow mini basic label">Upgrade</a></td>
    </tr>
    </tbody>
    </table>
    <div className="ui inverted dimmer">
      <div className="ui text loader">Loading</div>
    </div>
    </div>
    </div>
    </div>
    <div className="sixteen wide tablet six wide computer column">
      <div className="ui segment">
      <h2 className="ui   center aligned header">
      <div className="content">
      Melbourne
      <div className="sub header">Thursday, 29 November</div>
    </div>
    </h2>
    <h3 className="ui center aligned header">14 °</h3>
    <div className="ui divider" />
      <div className="ui five column centered grid">
      <div className="column center aligned">
      <p>Wed</p>
    <p><i className="wi wi-day-cloudy" /></p>
    <p>12°</p>
    </div>
    <div className="column center aligned">
      <p>Thu</p>
    <p><i className="wi wi-day-sleet" /></p>
    <p>10°</p>
    </div>
    <div className="column center aligned">
      <p>Fri</p>
    <p><i className="wi wi-day-cloudy-gusts" /></p>
    <p>8°</p>
    </div>
    <div className="column center aligned">
      <p>Sat</p>
    <p><i className="wi wi-day-sprinkle" /></p>
    <p>-5°</p>
    </div>
    <div className="column center aligned">
      <p>Sun</p>
    <p><i className="wi wi-day-lightning" /></p>
    <p>14°</p>
    </div>
    </div>
    <div id="flot-weather" className="flotchart" style={{padding: 0, position: 'relative'}}><canvas className="flot-base" width={718} height={200} style={{direction: 'ltr', position: 'absolute', left: 0, top: 0, width: 359, height: 100}} /><canvas className="flot-overlay" width={718} height={200} style={{direction: 'ltr', position: 'absolute', left: 0, top: 0, width: 359, height: 100}} /></div>
</div>
</div>
</div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}