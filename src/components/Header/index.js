import React, { Component } from "react";
import styled from "styled-components";
import { Motion, spring } from "react-motion";
import "./style.css";
import { Link as LinkDom } from "react-router-dom";
import Projects from "../../pages/Projects";

const Drawer = styled.div`
  position: absolute;
  height: 100%;
  // background: rgb(0, 68, 129);
  background: black;
  width: 100vw;
  left: ${(props) => props.left}vh;
`;

const Link = styled.div`
  cursor: pointer;
  font-size: 44px;
  padding: 1em 1em 1em 3em;
  color: white;
  font-weight: bold;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleState: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.refs.menu.classList.toggle("change");
    this.setState({
      toggleState: this.state.toggleState ? 0 : 1,
    });
  }
  render() {
    return (
      <div id="parent" className="">
        <div className="logo  d-flex justify-content-center">&lt;G/P&gt;</div>
        <div
          id="nav-bar"
          className="navbar navbar-expand-lg d-flex justify-content-end"
        >
          <div className="menu" ref="menu" onClick={this.handleClick}>
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
            <div className="bar4" />
          </div>
        </div>

        <Motion
          defaultStyle={{ left: -500, height:"100vh" }}
          // can change the side it comes slides from 500 or -500
          style={{
            left: spring(this.state.toggleState ? 0 : 500, {
              stiffness: 200,
              damping: 30,
            }),
          }}
        >
          {(style) => (
            <Drawer left={style.left}>
              {/* may not need items wrapper */}
              <div className="items">
                <Link>
                  <LinkDom
                    to="/home"
                    // className={
                    //   window.location.pathname === "/home"
                    //     ? "nav-link active"
                    //     : "nav-link"
                    // }
                  >
                    Home
                  </LinkDom>
                </Link>

                <Link>
                  <LinkDom to="/projects">Projects</LinkDom>
                </Link>
                <Link>
                  <LinkDom to="/about">About</LinkDom>
                </Link>
                <Link>
                  <LinkDom to="/contact">Contact</LinkDom>
                </Link>
              </div>
            </Drawer>
          )}
        </Motion>
      </div>
    );
  }
}

export default Header;
