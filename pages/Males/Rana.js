import React, { Component } from "react";
import Link from "next/link";

export default class Dylan extends Component {
  render() {
    return (
      <div>
        <div className="person">
          <div className="text">You are...</div>
          <div className="box">
            <div className="name">RANA</div>
            <img src="/static/rana.PNG" />
          </div>
          <Link href="../first">
            <a>Start Over</a>
          </Link>
        </div>

        <style jsx>{`
          .person {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            background-color: #1f2833;

            position: fixed;
            right: 0;
            bottom: 0;
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            background-size: cover;
            margin: 0 auto;
          }
          .box {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            width: 70%;
            height: 60%;
            background-color: #c5c6c7;
            border-radius: 30px 70px;
            box-shadow: 5px 5px 4px #1a1a1d;
          }
          .text {
            font-family: Roboto, sans-serif;
            font-size: 4em;
            color: #c5c5c7;
          }
          .name {
            font-family: Roboto, sans-serif;
            font-size: 6em;
            color: #66fcf1;
            text-shadow: 2px 0 black, 0 2px black, 2px 0 black, 0 2px black;
          }
          a {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            width: 200px;
            border: none;
            height: 100px;
            border-radius: 30px;
            margin-right: 5px;
            margin-left: 5px;
            font-family: Roboto, sans-serif;
            font-size: 2.5em;
            background-color: #c5c6c7;
            text-decoration: none;
            border: solid 1px #45a293;
            color: #0b0c10;
          }
        `}</style>
      </div>
    );
  }
}
