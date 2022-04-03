import React, { useState } from "react";
import "./ReadyForm.css";
import axios from "axios";

const ReadyForm = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const [area, setArea] = useState("");
  const [period, setPeriod] = useState("");
  const [budget, setBudget] = useState("");

  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  // console.log(company);
  // console.log(period);
  // console.log(budget);

  const areas = [
    "Select an option",
    "Consulting & Advisory",
    "Prototype/MVP Development",
    "Complete product development",
    "Team extention",
  ];

  const timePeriod = [
    "Select an option",
    "As soon as possible",
    "In the upcoming month",
    "1-3 months from now",
    "I dont't have a specfic timeline",
  ];

  const budgetrange = [
    "Pick up an option",
    "Up to 10,000 EUR",
    "10,000 to 50,000 EUR",
    "50,000 to 100,000 EUR",
    "I dont't have dedicated budget yet",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const url =
      "https://sheet.best/api/sheets/6a6834f9-0c3f-4afa-807e-f0e10ce08192";
    const payload = {
      Name: name,
      Email: email,
      Contact: contact,
      Company: company,
      Area: area,
      Timeperiod: period,
      Budget: budget,
      Description: description,
    };
    // console.log(payload);
    axios
      .post(url, payload)
      .then((_res) => {
        resetForm();
        setMessage("Thank you");
      })
      .catch((err) => console.log(err));
  };

  const resetForm = () => {
    setName("");
    setArea("");
    setBudget("");
    setCompany("");
    setContact("");
    setEmail("");
    setDescription("");
    setPeriod("");
  };

  return (
    <div className="container Ready_from">
      <div className="row">
        <div className="offset-lg-3 col-lg-6 col-md-12 col-12">
          <div className="form-details">
            <div className="row">
              <div className="col-12">
                <h1 className="form_title">Get in touch</h1>
              </div>
              <div className="col-12">
                <p className="form-para">
                  If you’re considering any of the Msquare solutions or just
                  want more information, simply fill out the form and we’ll be
                  in touch.
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row mt-3">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <label htmlFor="company" className="form-label">
                      Company
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="numeric"
                      className="form-control"
                      id="phone"
                      value={contact}
                      onChange={(e) => {
                        setContact(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 d-flex flex-column">
                  <label htmlFor="process-area" className="form-label">
                    I'am looking for:
                  </label>
                  <select
                    className="form-control"
                    name="process-area"
                    id="process-area"
                    onChange={(e) => setArea(e.target.value)}
                    value={area}>
                    {areas.map((a, i) => (
                      <option key={i} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 d-flex flex-column">
                  <label htmlFor="start-time" className="form-label">
                    I would like to have:
                  </label>
                  <select
                    className="form-control"
                    name="start-time"
                    id="start-time"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}>
                    {timePeriod.map((t, i) => (
                      <option key={i} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 d-flex flex-column">
                  <label htmlFor="budgets" className="form-label">
                    My budget range is:
                  </label>
                  <select
                    className="form-control"
                    name="new-budgets"
                    id="new-budgets"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}>
                    {budgetrange.map((b, i) => (
                      <option key={i} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">
                    Project Description
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    rows="5"
                    id="description"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="text-center row">
                <h2 className="thankmsg">{message}</h2>
              </div>
              <div className="row mt-3">
                <div className="text-center">
                  <button className="btn btn-inquiry" type="submit">
                    Send Inquiry
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyForm;
