const pillars = [
  {
    number: "01",
    title: "Comfortable care",
    body: "We understand that dental visits can feel daunting. Every aspect of your visit — from the environment to the way we communicate — is shaped around your comfort and wellbeing.",
  },
  {
    number: "02",
    title: "Clear communication",
    body: "Before any treatment begins, we explain what we have found and discuss your options clearly. You will never be rushed or left without answers.",
  },
  {
    number: "03",
    title: "Comprehensive dentistry",
    body: "From routine check-ups to restorative work and cosmetic treatments, Gilgal offers a broad range of services so patients can receive consistent, joined-up care across every stage of life.",
  },
];

export default function AboutPhilosophy() {
  return (
    <section className="section-padding bg-white" aria-labelledby="philosophy-heading">
      <div className="container-site">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <p className="text-overline mb-5">Our Approach</p>
          <h2
            id="philosophy-heading"
            className="text-slate-900"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            At Gilgal, every decision is made with the patient in mind.
          </h2>
          <p className="text-slate-500 mt-4" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
            Good dentistry begins with listening, continues with honest assessment,
            and is delivered with care throughout.
          </p>
        </div>

        {/* Ruled pillar rows */}
        <div className="border-t border-[#E2DFD9]">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className={`grid grid-cols-1 lg:grid-cols-[3rem_14rem_1fr] gap-4 lg:gap-10 py-8 ${
                i < pillars.length - 1 ? "border-b border-[#E2DFD9]" : ""
              }`}
            >
              <p
                className="text-[#013565]/20 font-bold tabular-nums"
                style={{ fontSize: "0.75rem", letterSpacing: "0.1em", lineHeight: 2 }}
                aria-hidden="true"
              >
                {pillar.number}
              </p>
              <h3
                className="text-slate-900 font-semibold"
                style={{ fontSize: "0.9375rem", lineHeight: 1.5 }}
              >
                {pillar.title}
              </h3>
              <p className="text-slate-500" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
