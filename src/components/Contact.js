import React from "react";
import { FcContacts } from "react-icons/fc";
export default function Contact() {
  return (
    <div className="contact">
      <div className="home-header">
        <FcContacts size={40} />
        <h1>Contact</h1>
      </div>
      <section className="about-section">
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          et velit laoreet, pretium nulla quis, mattis est. Vivamus condimentum
          sapien at quam porttitor, quis viverra orci egestas. Nullam sodales
          fringilla quam, nec mattis nunc gravida faucibus. Phasellus tempor
          pharetra felis, sed pellentesque nisi finibus a. Ut eu iaculis dui, ut
          malesuada ligula. Cras ante erat, tempor et ultricies at, tincidunt a
          tortor. Pellentesque facilisis scelerisque ante vel venenatis.
          Pellentesque suscipit suscipit magna, vitae efficitur purus dapibus
          eget. Duis ac laoreet nibh.
        </article>
      </section>
      <section className="google-maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76812.407506873!2d18.60154865!3d53.01339255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470334e1d994ec19%3A0x744a729a586a89c4!2zVG9ydcWE!5e0!3m2!1spl!2spl!4v1685910516421!5m2!1spl!2spl"
          width="300"
          height="150"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
