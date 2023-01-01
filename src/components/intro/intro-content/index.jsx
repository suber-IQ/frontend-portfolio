import React from "react";
import "./style.scss";
import handIcon from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import girl from '../../../images/girl.png'
import { BsAwardFill } from "react-icons/bs";
import {  FaUsers } from "react-icons/fa";


const IntroContent = () => {
    return (
        <div className="intro_content">
            <div className="layout">
                <div className="left_col">
                    <h1 className="title">
                        <span className="small_text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img
                                    src={handIcon}
                                    alt="handIcon"
                                />
                            </span>
                            <span>, I Am</span>
                        </span>
                        <span className="big_text"> Suber-IQ </span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. At reiciendis fugiat illo! Provident perferendis
                        aspernatur nesciunt officiis. Quas, libero. Eveniet,
                        mollitia fuga. Eos eveniet illo ea non odio
                        necessitatibus ipsa.
                    </p>
                    <CallToAction text="Contact Me" />
                </div>
                <div className="right_col">
                    <img src={girl} alt="girlImage" />
                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">
                          Best Design Award
                        </div>
                    </div>
                    <div className="highlights verticle">
                        <div className="icon">
                              <FaUsers />
                        </div>
                        <div className="text">
                            <span>4k+</span>
                            Happy Customers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
