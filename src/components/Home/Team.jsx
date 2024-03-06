import React from "react";
import Link from "next/link";
import { data1 } from "api/MemberAPI";
import styles from "styles/Home/Team.module.css";
import Card from "./Card";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "../ui/GlowingStarsBackgroundCard";

const Team = () => {
  // Leader Card Map
  let leadCard = data1.leadList.map((lead) => {
    return <Card key={lead.id} data={lead} />;
  });

  return (
    <section id="Team">
      <div>
        <h2 className="section-title">Chapter Lead</h2>
        <div className={styles.container}>
          {<Card key={data1.chapterLead[0].id} data={data1.chapterLead[0]} />}
        </div>
        <h2 className="section-title">Team Leads</h2>
        <div className={styles.container}>{leadCard}</div>
      </div>
      <Link href="/Core-Team-22" style={{ textDecoration: "none" }}>
        <button className={styles.container1}>Previous Members</button>
      </Link>
      <h2 className=" section-title">Star Performers</h2>
      <div className={styles.container2}>
        <GlowingStarsBackgroundCard
          key={data1.chapterLead[0].id}
          data={data1.chapterLead[0] || "Namw"}
          title="NAME"
          description="Description"
        />
      </div>
      <button className={styles.container1}>Previous Performers</button>
    </section>
  );
};

export default Team;
