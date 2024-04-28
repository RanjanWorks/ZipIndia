import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import CopyrightIcon from "@mui/icons-material/Copyright";
const Footer = () => {
  return (
    <>
      <footer>
        <div class="footer-content">
          <h3>ZipIndia</h3>

          <p>
            ZipIndia: Simplifying postal code searches across India. From
            letters to parcels, find addresses with ease in our comprehensive
            database.
          </p>

          <ul class="socials">
            <li>
              <a target="_blank" href="https://github.com/vebpath/ZipIndia">
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/mr_ranjankashyap?igsh=MTFqNm51OHNrb2Jo"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://wa.me/qr/I75N3ARC5XNSL1">
                <WhatsAppIcon />
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-bottom">
          <p className="copyri">
            {" "}
            <CopyrightIcon /> <span id="year">2024</span>{" "}
            <a href="#">Ranjan</a>{" "}
          </p>

          <div class="footer-menu">
            <p>Made with Next.js</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
