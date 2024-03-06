import styles from "styles/Home/About.module.css";
import { Logo } from "../Logo/Logo";
import { Logo2 } from "../Logo/Logo2";
import StarIcon from "../../styles/StarButton/StarIcon";

const About = () => {
  return (
    <section id="About">
      <h2 className="section-title"> About Us</h2>

      <div className={styles.container}>
        <div className={styles.title}>
          <Logo /> <Logo2 />
        </div>

        <p>
          <strong>Hey there, </strong> <br />
          Want to outshine in your career ? or desire to give shape to your
          ideas? if yes, then you are on the right page. Achieve your dreams
          with geeksforgeeks and upgrade your skillsets consistently to become
          more confident.
          <br />
          <br />
          &emsp; Geeksforgeeks Students&apos; chapter at SRM NCR is working on
          the idea - to impart knowledge among the geeks in a fun and exciting
          way. It will be achieved through events, hackathons and webinars to
          enlighten the mates. We aim for the perfection and success of all who
          are connected with us through this chapter. So keep yourself connected
          with us to ace your career beyond the skies.
          <br />
          <br />
          <em> &emsp;&emsp;&emsp;Wishing you luck!!</em>
        </p>
      </div>
    </section>
  );
};

export default About;
