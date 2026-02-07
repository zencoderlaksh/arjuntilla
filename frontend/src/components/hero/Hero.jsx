import HeroSearch from "./HeroSearch";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)),
            url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgARLDHGrjLl7_VYcF63E7GL8zuKv77VsRekal27LRX0h6RBUAxtPcL5aZvgopL9wHr65p7e7QdmQmAlRGQs_9QDlZGqqa8tlDHtx7hry9uzcbObi168kN_pVA-EZ1DUWuAzz0uty_KTTB0ZXhglGUq7PAmxS9uWOInSFYpUOPTH8w9vTCOyWjfQTv8I6BJPoc73ikNZVi3G8yoCSVBVi02gz0H1PLiOlq9vSOLSn_SMWTmZU88bSS9xmZMLq36zbyW2IxuYtY93iP")
          `,
        }}
      />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <span className="text-white/90 uppercase tracking-[0.3em] text-sm font-semibold mb-6">
          Private Luxury In Jaipur
        </span>

        <h1 className="serif-heading text-white text-5xl md:text-7xl font-bold leading-tight max-w-4xl mb-8">
          Experience Royal Living in the Heart of Rajasthan
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-2xl font-light mb-12">
          A meticulously restored private sanctuary where heritage architecture
          meets sun-drenched boutique elegance.
        </p>

        <HeroSearch />
      </div>
    </section>
  );
}
