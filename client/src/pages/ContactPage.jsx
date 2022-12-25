import React, { useState } from "react";
import "../style/pages/ContactUs.scss";
import BgImageWithText from "../components/common/BgImageWithText";
import ContactImage from "../images/contactImage.avif";

const ContactUs = () => {
    const [active, setActive] = useState([true, true, true]);
    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
    });

    const handleOnSubmit = (event) => {
        /**
         * todo disable button while submitting, and then later, when it's done, turn it back.
         */
        event.preventDefault();
        fetch(`${process.env.REACT_APP_BACKEND_URI}/contact`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ contact: form }),
        })
            .then((resp) => {
                resp.json().then((data) => {
                    console.log(data);
                    alert("Message Sent!");
                });
            })
            .catch((err) => {
                console.log(err);
                alert("There was an error while submitting the form.");
            });
    };
    const handleOnChange = (event) => {
        setForm((oldVal) => {
            const temp = { ...oldVal, [event.target.id]: event.target.value };
            console.log(temp);
            return temp;
        });
    };

    const handleToggleFaq = (index) => {
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
                    <form action="">
                        <h3>send us message</h3>
                        <input
                            type="text"
                            name="name"
                            required
                            maxLength="50"
                            placeholder="enter your name"
                            className="box"
                            value={form.name || ""}
                            id="name"
                            onChange={handleOnChange}
                        />
                        <input
                            type="email"
                            name="email"
                            required
                            maxLength="50"
                            placeholder="enter your email"
                            className="box"
                            value={form.email || ""}
                            id="email"
                            onChange={handleOnChange}
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
                            value={form.number || ""}
                            id="number"
                            onChange={handleOnChange}
                        />
                        <textarea
                            name="msg"
                            className="box"
                            required
                            maxLength="1000"
                            placeholder="enter your message"
                            cols="30"
                            rows="10"
                            value={form.message || ""}
                            id="message"
                            onChange={handleOnChange}
                        ></textarea>
                        <input
                            type="submit"
                            value="Send Message"
                            name="send"
                            className="btn"
                            onClick={handleOnSubmit}
                        />
                    </form>

                    <div className="faq">
                        <h3 className="title">frequently asked questions</h3>
                        <div
                            className={active[0] ? "box active" : "box"}
                            onClick={handleToggleFaq(0)}
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
                            onClick={handleToggleFaq(1)}
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
                            onClick={handleToggleFaq(2)}
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
