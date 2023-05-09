import React from 'react'
import { MDBContainer, MDBBtn } from "mdb-react-ui-kit";


import { ReactComponent as Twitter } from "../svg/twitter.svg";
import { ReactComponent as Whatsapp } from "../svg/whatsapp.svg";
import { ReactComponent as Facebook } from "../svg/facebook.svg";
import { ReactComponent as Instagram } from "../svg/instagram.svg";

const links = [
  { id: 1, page: <Twitter />, href: "https://twitter.com/" },
  { id: 2, page: <Whatsapp />, href: "https://web.whatsapp.com/" },
  { id: 3, page: <Facebook />, href: "https://www.facebook.com/" },
  { id: 4, page: <Instagram />, href: "https://www.instagram.com/" },
];


const Links = () => {
  return (
    <div>
      <MDBContainer className="p-4 d-flex icons">
        <section className="mb-4">
          {links.map((link) => (
            <MDBBtn
              key={link.id}
              outline
              color="light"
              floating
              className="m-1"
              href={link.href}
              target="_blank"
              role="button"
            >
              {link.page}
            </MDBBtn>
          ))}
        </section>
      </MDBContainer>
    </div>
  );
}

export default Links