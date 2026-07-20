export default function TrustBar() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold">
          Trusted by Students Worldwide
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8 text-lg font-semibold text-gray-700">
          <div>🇦🇺 Australia</div>
          <div>🇨🇦 Canada</div>
          <div>🇬🇧 United Kingdom</div>
          <div>🇺🇸 USA</div>
          <div>🇳🇿 New Zealand</div>
        </div>
      </div>
    </section>
  );
}