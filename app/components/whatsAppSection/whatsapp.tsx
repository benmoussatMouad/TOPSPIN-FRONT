import React from "react";
import classes from "./whatsapp.module.scss";
import Link from "next/link";

const Whatsapp = () => {
  return (
    <section className={classes.contactUsSection}>
      <h2>Contact our experts on WhatsApp</h2>
      <div>
        <span className={classes.topOverlay} />
        <div>
          <h3>
            Would you like to know <br /> more about the <br /> Topspin Academy?{" "}
          </h3>
          <p>Our team of experts is available to answer your questions.</p>
          <div>
            <Link href={""}>CONTACT US</Link>
          </div>
        </div>
        <span className={classes.bottomOverlay} />
      </div>
    </section>
  );
};

export default Whatsapp;
