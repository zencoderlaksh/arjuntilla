export default function About() {
  return (
    <section className="py-24 px-6 lg:px-20 max-w-[1280px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Images */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="pt-12">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjBVlbFH1W4OQmFP_enFM683O6AHRDyyz_bc6n5k_B9DFCFmGWByp73uijqhsNhJU3tZt82U3Cl4sAF5kpMaEzPCIU6SSQXE_6a1nyJGLyND7uPdKLi9G9ozpk0iku-R4IVA2rRF0ZJfszvBuvjy-GXYk4NRaUxx9D0co6CUl5OcC5DBdh8RmdWZHnSlC1uqVHaTo1rcXIV6iu8a_NCww7PSYvCOI57b6nDZE8CcbJzb3kukK9zRO7E_rp01a27HP6Jd7cCVo3TLlk"
                alt=""
                className="rounded-xl shadow-lg w-full h-[400px] object-cover"
              />
            </div>

            <div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKg1Ri-H0CzJLnWUcxBSRNx2dxmNeFlOWGHuaWGskS8ZO-dcL4tMY9OBdvHeibuTJolQ1Ry2cXZf-x2OWOBHAP7Wr1EmEW54jeZcCEgPMPmUmR--0K4K176MiHAVR2k5jfm4wSrkRNZoDDuOKhPHD2-ngt3sQlGlC5r_7cFlBfRznKGwonZSAyfELEcUB4AV8oP2O8-agWxGl5Jv9kNfdIFec2Ndz3-8hL2xBI4bGLiMkjmbFElY8mENsbnpbWLRiFiKqUzrXvxort"
                alt=""
                className="rounded-xl shadow-lg w-full h-[450px] object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-sand p-6 rounded-xl border border-primary/20 shadow-xl hidden md:block">
            <p className="serif-heading text-primary text-4xl font-bold italic">
              1924
            </p>
            <p className="text-xs uppercase tracking-widest font-bold">
              Heritage Est.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            A Legacy of Luxury
          </span>

          <h2 className="serif-heading text-4xl md:text-5xl font-bold leading-tight">
            The Heritage Haven Story
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Once the private residence of Jaipur&apos;s royalty, Heritage Haven
            has been meticulously restored to offer an intimate escape. Our
            design philosophy merges warm terracotta tones with sand-beige
            aesthetics, creating a dialogue between Rajasthan&apos;s
            architectural soul and modern boutique luxury.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            Every corner tells a story—from the hand-carved pillars in the
            central courtyard to the custom-woven textiles that adorn our six
            exclusive suites.
          </p>

          <div className="pt-4">
            <button className="flex items-center gap-2 text-primary font-bold border-b-2 border-primary pb-1 hover:gap-4 transition-all">
              Explore Our Architecture
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
