import React, { Component } from "react";
import styled from "styled-components";
import { Motion, spring } from "react-motion";
import "./style.css";

const Drawer = styled.div`
  position: absolute;
  height: 100%;
  background: black;
  width: 100vw;
  left: ${(props) => props.left}vh;
`;

const Link = styled.div`
  cursor: pointer;
  padding: 1em 1em 1em 3em;
  color: white;
  font-weight: bold;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleState: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.refs.container.classList.toggle("change");
    this.setState({
      toggleState: this.state.toggleState ? 0 : 1,
    });
  }
  render() {
    return (
      <div id="parent">
        <div id="nav-bar" className="navbar navbar-expand-lg">
          <div className="logo justify-content-between">
            G/P
            <div
              className="container"
              ref="container"
              onClick={this.handleClick}
            >
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
              <div className="bar4" />
            </div>
          </div>
        </div>

        <Motion
          defaultStyle={{ left: -500 }}
          // can change the side it comes slides from 500 or -500
          style={{
            left: spring(this.state.toggleState ? 0 : 500, {
              stiffness: 200,
              damping: 30,
            }),
          }}
        >
          {style => (
            <Drawer left={style.left}>
              <Link>Home</Link>
              <Link>Projects</Link>
              <Link>About</Link>
              <Link>Contact</Link>
            </Drawer>
          )}
        </Motion>
      </div>
    );
  }
}

export default Header;
