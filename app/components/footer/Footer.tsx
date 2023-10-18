import React from "react";
import classes from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div>
        <ul>
          <li>
            <h3>OUR CAMPS</h3>
            <Link href={""}>Junior camps</Link>
            <Link href={""}>Adult camps</Link>
            <Link href={""}>Training center</Link>
            <Link href={""}>Tennis holiday</Link>
          </li>
          <li>
            <h3>OUR VALUES</h3>
            <Link href={""}>Head Coaches</Link>
            <Link href={""}>Coaching strategy</Link>
          </li>
          <li>
            <h3>HIGH PERFORMANCE</h3>
            <Link href={""}>Pro base</Link>
            <Link href={""}>Elite team</Link>
          </li>
          <li>
            <h3>HELPFUL LINKS</h3>
            <Link href={""}>The academy</Link>
            <Link href={""}>Contact</Link>
            <Link href={""}>Privacy Policy</Link>
            <Link href={""}>League</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={""}>
              <Image
                width={30}
                height={30}
                alt="facebook logo"
                src={"/assets/facebook.svg.svg"}
              />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <Image
                width={30}
                height={30}
                alt="instagram logo"
                src={"/assets/insta.svg.svg"}
              />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <Image
                width={30}
                height={30}
                alt="twitter logo"
                src={"/assets/twitter.svg.svg"}
              />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <Image
                width={30}
                height={30}
                alt="email logo"
                src={"/assets/mail.svg"}
              />
            </Link>
          </li>
        </ul>
        <div>
          <p>Üniversiteler, İhsan Doğramacı Blv no:1, 06800 Çankaya/Ankara</p>
          <p>Tel : +90 312 909 3333</p>
        </div>
        <ul>
          <li>
            <Link href={""}>SITEMAP</Link>
          </li>
          <li>
            <Link href={""}>TERMS & CONDITIONS</Link>
          </li>
          <li>
            <Link href={""}>PRIVACY POLICY</Link>
          </li>
          <li>
            <Link href={""}>CONTACT</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
