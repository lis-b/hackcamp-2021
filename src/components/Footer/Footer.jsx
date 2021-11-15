import * as React from "react";
import { Link } from "wouter";
import { FooterItems } from "./FooterItems";
import "./Footer.sass";

class Footer extends React.Component {
  render() {
    return (<>
      <div className="footer">
        {FooterItems.map((item, i) => (
          <Link
            href={item.url}
            className={item.className}
            key={i}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </>);
  }
}

export default Footer;