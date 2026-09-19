const credentials = [
  {
    value: "26+",
    label: "Years of experience",
    detail: "Clinical practice since 1998",
  },
  {
    value: "200+",
    label: "Implants placed",
    detail: "In practice",
  },
  {
    value: "Eastman",
    label: "Dental Institute, UK",
    detail: "Postgraduate training",
  },
  {
    value: "BICON",
    label: "Institute, USA",
    detail: "Implant specialisation",
  },
];

export default function TrustStats() {
  return (
    <section
      className="border-y border-[#E2DFD9] bg-white py-9 lg:py-11"
      aria-label="Gilgal Dental Clinics — clinical credentials"
    >
      <div className="container-site">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {credentials.map(({ value, label, detail }, i) => (
            <div
              key={label}
              className={[
                "text-left",
                i > 0 ? "lg:pl-10 lg:border-l lg:border-[#E2DFD9]" : "",
              ].join(" ")}
            >
              <p
                className="text-[#013565] font-bold mb-1"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                {value}
              </p>
              <p className="text-slate-700 text-sm font-medium leading-snug">{label}</p>
              <p className="text-slate-400 text-xs mt-0.5 hidden lg:block">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
