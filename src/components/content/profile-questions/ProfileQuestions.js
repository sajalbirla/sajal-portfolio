import React from "react";
import questions from "../../../data/profile-questions.json";
import { config } from "../../../constant/config";

export default function ProfileQuestions() {
  return (
    <section className="profile-questions" id="profile-questions" aria-labelledby="questions-heading">
      <h2 id="questions-heading">Questions about Sajal Birla</h2>
      {questions.map(({ id, question, answer }) => (
        <article key={id} id={id}>
          <h3>{question}</h3>
          <p>{answer}</p>
        </article>
      ))}
      <p>Read my <a href="#experience">professional experience</a>, download my <a href={config.resumeUrl}>resume</a>, or <a href="#contact">get in touch</a>.</p>
    </section>
  );
}
