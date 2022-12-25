import React, { useState } from "react";
import "../style/pages/ContactUs.scss";
import BgImageWithText from "../components/common/BgImageWithText";
import ContactImage from "../images/contactImage.avif";

const ContactUs = () => {
    const [active, setActive] = useState([true, true, true]);

    const handleOnClick = (index) => {
        return () => {
            setActive((oldVal) => {
                const temp1 = oldVal.slice(0, index);
                const temp2 = !oldVal[index];
                const temp3 = oldVal.slice(index + 1);
                return [...temp1, temp2, ...temp3];
            });
        };
    };

    return (
        <>
            <BgImageWithText text="Contact Us" src={ContactImage} />
            <section className="contact" id="contact">
                <div className="row">
                    <form action="" method="post">
                        <h3>send us message</h3>
                        <input
                            type="text"
                            name="name"
                            required
                            maxLength="50"
                            placeholder="enter your name"
                            className="box"
                        />
                        <input
                            type="email"
                            name="email"
                            required
                            maxLength="50"
                            placeholder="enter your email"
                            className="box"
                        />
                        <input
                            type="number"
                            name="number"
                            required
                            maxLength="10"
                            min="0"
                            max="9999999999"
                            placeholder="enter your number"
                            className="box"
                        />
                        <textarea
                            name="msg"
                            className="box"
                            required
                            maxLength="1000"
                            placeholder="enter your message"
                            cols="30"
                            rows="10"
                        ></textarea>
                        <input
                            type="submit"
                            value="Send Message"
                            name="send"
                            className="btn"
                        />
                    </form>

                    <div className="faq">
                        <h3 className="title">frequently asked questions</h3>
                        <div
                            className={active[0] ? "box active" : "box"}
                            onClick={handleOnClick(0)}
                        >
                            <h3>Why do we do what we do?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Natus sunt aspernatur
                                excepturi eos! Quibusdam, sapiente.
                            </p>
                        </div>
                        <div
                            className={active[1] ? "box active" : "box"}
                            onClick={handleOnClick(1)}
                        >
                            <h3>Who chooses the best places?</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ipsa ipsam neque quaerat
                                mollitia ratione? Soluta!
                            </p>
                        </div>
                        <div
                            className={active[2] ? "box active" : "box"}
                            onClick={handleOnClick(2)}
                        >
                            <h3>What is the best place according to you?</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ipsa ipsam neque quaerat
                                mollitia ratione? Soluta!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
