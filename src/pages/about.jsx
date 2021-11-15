import * as React from "react";
/* ADD IMPORTS FROM TODO ON THE NEXT LINE */


/**
* The About function defines the component that makes up the About page
* This component is attached to the /about path in router.jsx
*/

export default function About() {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */
  
  return (
    <div className="page">
      {/* REPLACE H1 ELEMENT BELOW WITH CODE FROM TODO */}
      <h1 className="title">
        About Us
      </h1>
      {/* REPLACE OPENING P TAG BELOW WITH CODE FROM TODO */}
      <h2 className="p1title">
        The Project
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce consequat fringilla urna auctor porta.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra,
        per inceptos himenaeos. Ut consectetur, risus sed elementum pulvinar,
        odio odio pharetra nibh, sollicitudin dapibus orci est at purus.
      </p>
      <h2 className="teamdesc">
        Meet the Team
      </h2>
 
    </div>
  );
}
