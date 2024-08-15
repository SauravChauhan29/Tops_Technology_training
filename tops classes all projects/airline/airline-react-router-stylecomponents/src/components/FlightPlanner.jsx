import React from 'react'

const FlightPlanner = () => {
  return (
    <div>
      <div className="container parameter-checker left-side">
  <h2>Your Flight Planner</h2>
  <form action="">
    <div className="trip-selector">
      <input type="radio" name="trip" id="round-trip" />
      <label htmlFor="round-trip">Round-Trip</label>
      <input type="radio" name="trip" id="empty-leg" />
      <label htmlFor="empty-leg">Empty-leg</label>
      <br />
      <input type="radio" name="trip" id="one-way" />
      <label htmlFor="one-way">One-way</label>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <input type="radio" name="trip" id="multi-leg" />
      <label htmlFor="multi-leg">Multi-leg</label>
    </div>
    <div className="data-inputing">
      <label htmlFor="leaving-from">Leaving From:</label>
      <br />
      <input type="text" id="leaving-from" placeholder="Enter City" />
      <br />
      <label htmlFor="going-to">Going To:</label>
      <br />
      <input type="text" id="going-to" placeholder="Enter City" />
      <br />
      <label htmlFor="departure-date">Departure Date &amp; Time:</label>
      <br />
      <input type="date" id="departure-date" />
      <br />
      <label htmlFor="return-date">Return Date &amp; Time:</label>
      <br />
      <input type="date" id="return-date" />
      <br />
      <label htmlFor="passengers">Passenger(s):</label>
      <br />
      <input type="number" id="passengers" placeholder="Enter Number" />
      <br />
      <span>
        <button id="formsubmitting">GO</button>
      </span>
    </div>
  </form>
  <br />
  <br />
  <br />
  <br />
  <div className="recentnews">
    <h2>Recent News</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <h5>November 5, 2010</h5>
    <hr />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <h5>November 5, 2010</h5>
    <hr />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <h5>November 5, 2010</h5>
    <hr />
  </div>
</div>

    </div>
  )
}

export default FlightPlanner
