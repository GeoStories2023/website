import React from 'react'
import "@/style/Badges.scss";

function Badges() {
  return (
    <div className="badges-container">
      <h1>Badges</h1>
      <section className="badges-collected-container">
        <span>Collected badges:</span>
        <div className="badges-collected"></div>
      </section>
      <section className="badges-available-container">
        <span>Available badges:</span>
        <div className="badges-available"></div>
      </section>
    </div>
  )
}

export default Badges;
