export default function AboutPage() {
  return (
    <main>
      <section className="about-hero">
        <h1>About This Project</h1>
        <p>
          This is my first Next.js dashboard. I am building it step by step
          to learn routing, layouts, components and data fetching.
        </p>
      </section>

      <section className="about-grid">
        <div className="about-box">
          <h3>What it is</h3>
          <p>A student dashboard built with the Next.js App Router.</p>
        </div>

        <div className="about-box">
          <h3>Tech used</h3>
          <p>Next.js, React, TypeScript and CSS.</p>
        </div>

        <div className="about-box">
          <h3>Goal</h3>
          <p>Learn Next.js properly by implementing every concept.</p>
        </div>
      </section>
    </main>
  );
}