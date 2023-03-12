import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  //   let array = [1, 2, 3, 4, 5, 5, 5];
  //   let array1 = [6, 6, 7, 8, 9];
  //   const newarray = [...array, ...array1];
  //   console.log(newarray, "sfhg");
  //   var arr = newarray.sort((a, b) => a - b);
  //   var uniqueVal = new Set(arr);
  //   console.log(uniqueVal);

  return (
    <div className="container-fluid">
      <div className="row text-center justify-content-center">
        <div className=" bg-img col-6 col-md-6 mt-4 text-white">
          <div className="contentDiv">
            <h1 className="text-uppercase ">urbab influence</h1>
            <hr />
            <div
              style={{
                fontSize: "1.5rem",
                textAlign: "left",
                paddingLeft: "0rem",
              }}
            >
              <p>
                1508 10th ave. <br />
                seatle, WA 98122
              </p>
              <p> jeuyhock1999@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mt-4 ml-4 bg-body-tertiary">
          <section className="mb-6">
            <h2 className="h1-responsive font-weight-bold text-center my-2">
              Contact us
            </h2>
            <p className="text-center w-responsive mx-auto mb-5">
              Do you have any questions? Please do not hesitate to contact us
              directly.
            </p>
            <div className="row">
              <div
                className="col-md-9 mb-md-0 mb-5 "
                style={{ margin: "0 auto" }}
              >
                <form id="contact-form" name="contact-form">
                  <div className="row form">
                    <div className="col-md-6">
                      <label htmlFor="name"></label>
                      <input
                        type="text"
                        className="ring form-control"
                        placeholder="Your Name"
                        id="name"
                        name="name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="name"></label>
                      <input
                        type="email"
                        className="ring form-control"
                        placeholder="Your email"
                        id="email"
                        name="email"
                      />
                    </div>
                  </div>

                  <div className="row form">
                    <div className="col-md-6">
                      <label htmlFor="useeName"></label>
                      <input
                        type="text"
                        className="ring form-control"
                        placeholder="Enter UseeName"
                        id="useeName"
                        name="useeName"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="contact"></label>
                      <input
                        type="tel"
                        className="ring form-control"
                        placeholder="Enter contact"
                        id="contact"
                        name="contact"
                      />
                    </div>
                  </div>
                </form>

                <div className="text-center text-md-left">
                  <Link className="btn btn-primary" to="#">
                    Submit
                  </Link>
                </div>
                <div className="status"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
