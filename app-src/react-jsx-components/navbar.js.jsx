import React from 'react'

const NavBar = () => (
//  <p>
//  Show:
//    {" "}
//    <NavLink filter="">
//    Dashboard
//    </NavLink>
//    {", "}
//    <NavLink filter="newsfeeds">
//    Newsfeeds
//    </NavLink>
//    {", "}
//    <NavLink filter="lessons">
//    Lessons
//    </NavLink>
//  </p>
  <div>
    <nav id="c-menu--slide-left" className="c-menu c-menu--slide-left is-active">
      <div className="nav-content">
        <div className="close-section">
          <button className="ui icon button">
            <i className="angle left icon"></i>
          </button>
        </div>
        <div className="menu-header">Sportaide Menu</div>
        <ul className="c-menu__items">
          <li className="c-menu__item"><a href="#" className="c-menu__link">Newsfeed</a></li>
          <li className="c-menu__item"><a href="#" className="c-menu__link">Lessons</a></li>
          <li className="c-menu__item"><a href="#" className="c-menu__link">Quizzes</a></li>
        </ul>
      </div>
    </nav>
    <div id="c-mask" className="c-mask is-active"></div>
  </div>
  );

export default NavBar