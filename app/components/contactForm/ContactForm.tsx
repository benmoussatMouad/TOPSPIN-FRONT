import React from "react";
import classes from "./ContactForm.module.scss";
import Image from "next/image";

interface Translate {
  Header: string;
  placeHolders: {
    FirstName: string;
    Email: string;
    LastName: string;
    Phone: string;
  };
  Submit: string;
}

function ContactForm({ translate }: { translate: Translate }) {
  return (
    <section className={classes.formSection}>
      <div className={classes.formContainer}>
        <div>
          <Image
            width={1400}
            height={500}
            alt="map"
            src="https://s3-alpha-sig.figma.com/img/29bd/c619/31dce78efaf8e91ab24988b5353615e2?Expires=1702857600&Signature=eys8zwwwjuzb8r8iRdRaJ6BYhIh2EgXN79qK67IjkrNuKhFL7bn0t-MTBmhD0Y~BO-iekv4dESnzigJhhlQ9kVtRUHyAqofScAADJFoz6zQ3iQOH9s9fiCMcB914XSuqlAQUIjzIN1U4luk6vEdy3jYyRdWcNl8ARi-aujpXhHxcOPrEdK0Ws9x9zlzhu1Ndirj7d4GlmD5wYVYYH-oLwifQr~PmtSYUN4t~1WjexgfUsBV47npJ3Vs-KrEFUDGg0PGKAYdHtxd8B1fkiz7UK6xyClESM3TVj8e3q4IIaIIn219EPL5zvRlZNJRsfNyjyHbPNRLnoQRHFkIA6qrgog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
        </div>
        <div>
          <form className={classes.formContact}>
            <h3>{translate.Header}</h3>
            <div className={classes.inputs}>
              <input
                placeholder={translate.placeHolders.FirstName}
                type="text"
              />
              <input
                placeholder={translate.placeHolders.LastName}
                type="text"
              />
            </div>
            <div className={classes.inputs}>
              <input placeholder={translate.placeHolders.Email} type="text" />
              <input placeholder={translate.placeHolders.Phone} type="text" />
            </div>
            <div className={classes.inputs}>
              <textarea />
            </div>
            <div className={classes.submit}>
              <button className="button"> {translate.Submit} </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
