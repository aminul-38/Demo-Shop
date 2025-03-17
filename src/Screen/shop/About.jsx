const About = () => {
  return (
    <>
      <div className="container about mt-3 p-3 fw-medium fs-4">
        <h1>About Us</h1>
        <p className="">
          Welcome to Demo Shop! <br /> At Demo Shop, we&apos;re more than just
          an online store, we&apos;re your go-to destination for all gadgets.
          Our journey began with a simple idea: to provide our customers with
          the best quality products, outstanding service, and a shopping
          experience that&apos;s both convenient and enjoyable.
        </p>
        <h2>Our Mission</h2>
        <p className="fw-medium fs-1">
          Our mission is to offer a curated selection of premium gadgets
          products. We believe that access to quality products can enhance your
          daily life.
        </p>
        <h2>What Sets Us Apart</h2>
        <ul>
          <li>
            <b>Quality Assurance:</b> We take pride in the quality of every
            product we offer. Each item undergoes rigorous quality checks to
            ensure it meets our standards.
          </li>
          <li>
            <b>Expert Curation:</b> Our team of experts carefully selects and
            curates every item in our collection. We believe in offering
            products that we would use ourselves.
          </li>
          <li>
            <b>Customer-Centric Approach</b> Your satisfaction is our top
            priority. We&apos;re here to assist you at every step, from product
            selection to post-purchase support.
          </li>
          <li>
            <b>Community Engagement:</b> We love our community, and we&apos;re
            committed to giving back. We donate a portion of our proceeds to
            local charities. We also organize regular events for our customers.
          </li>
        </ul>
        <h2>Our Team</h2>
        <p className="fw-medium fs-3">
          Meet the passionate individuals behind Demo Shop. We&apos;re a diverse
          team of tech-savvy experts and dedicated customer service
          professionals who share a common goal: to exceed your expectations.
        </p>
        <h2>Contact Us</h2>
        <p className="fw-medium fs-3">
          Have a question, feedback, or just want to say hello? We&apos;d love
          to hear from you! Feel free to{" "}
          <a
            href="mailto:aminulimam409@gmail.com?Subject=Reservation"
            target="_blank"
            rel="noreferrer"
          >
            Mail
          </a>
          .<br /> Thank you for choosing Demo Shop. We&apos;re honored to be a
          part of your shopping journey. <b>Happy Shopping!</b>
        </p>
      </div>
    </>
  );
};

export default About;
