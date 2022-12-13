import React from "react";
import { Link } from "wouter";

export default function Home({}) {
  return (
    <section id="home_section">
      <div className="icon tilt-effect">
        <Link href="/sobre-mi">
          <a>
            <img src="/lowstsky-icon.png"></img>
          </a>
        </Link>
      </div>
    </section>
  );
}
