import React from 'react'
// import PropTypes from 'prop-types'

export default function About(props) {
    return (
        <>
        <div className="container">
            <h1 className="my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>About Us</h1>

            <div className="accordion " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Why we created it?</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        TextHR.com was born in 2023 as part of a learning exercise to practice our programming skills.<strong> We continue to refactor, redesign, improve, and implement new features.</strong> And we could say that we learned a lot since we started, by including the experience here and in the overall development world. As long our spirit allows us to continue learning and coding, we will continue improving this website.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>What does it do?</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        TextHR.com is described as a <strong>central repository of tools for helping with developer activities.</strong> It includes tools such as for <strong>formatting JSON, XML, HTML, CSS, JavaScript, multiple text tools such as to convert case, remove accents, line breaks, extra space, also regular expressions tools for extracting elements from text such as IPs and e-mail addresses. </strong>And this is actually only a subset of what we have.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Why is it different?</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Fast, secure and easy.</strong> This is a summary of what Text-Utils.com is. All we design is intended to be fast, really fast. Other than that, all <strong>our utilities are client-side,</strong> meaning your data will not go through our servers to be processed. <strong>Your data is secure. </strong>Finally, Text-Utils.com is also <strong> quite easy. </strong>Everything can be found on the page very quickly, in just a few clicks.


                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}



