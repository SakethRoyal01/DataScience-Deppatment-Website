import { SectionHeader } from "./SectionHeader";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="px-3 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* MAIN HEADING */}
        <SectionHeader
          eyebrow="Get in Touch"
          title={<>Contact</>}
        />

        <div className="grid gap-6 lg:grid-cols-12">
          
          {/* MAP */}
          <div className="container-card col-span-12 overflow-hidden p-0 lg:col-span-7">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4699090923823!2d80.17538597532132!3d13.069377987255066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261504145fe7d%3A0x58810f43c3a748ae!2sDr.%20M.G.R.%20Educational%20And%20Research%20Institute!5e0!3m2!1sen!2sin!4v1759068441193!5m2!1sen!2sin"
              className="h-full w-full min-h-[350px] border-0"
              loading="lazy"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="col-span-12 grid gap-5 lg:col-span-5">
            
            {/* CARD 1 → VENUE */}
            <div className="container-soft p-6 lift-on-hover">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </span>

              <h4 className="mt-4 font-display text-lg font-bold">
                Conference Venue
              </h4>

              <p className="mt-2 text-sm text-muted-foreground">
                Dr. MGR Educational and Research Institute
              </p>
              <p className="text-sm text-muted-foreground">
                Poonamallee High Rd, Maduravoyal
              </p>
              <p className="text-sm text-muted-foreground">
                Chennai, Tamil Nadu - 600095
              </p>
            </div>

            {/* CARD 2 → CONTACT */}
            <div className="container-soft p-6 lift-on-hover">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Phone className="h-5 w-5" />
              </span>

              <h4 className="mt-4 font-display text-lg font-bold">
                Contact
              </h4>

              {/* COORDINATORS */}
<div className="mt-3 space-y-3 text-sm text-muted-foreground">
  
  <div>
    <p className="font-medium text-foreground">
      Dr. V. RAMESHBABU{" "}
      <span className="text-xs text-muted-foreground/80 font-normal">
        - Professor & Dean (UJ)
      </span>
    </p>
    <p>+91 73973 04620</p>
  </div>

  <div>
    <p className="font-medium text-foreground">
      Mrs. P.C. AKHILA{" "}
      <span className="text-xs text-muted-foreground/80 font-normal">
        - Assistant Professor
      </span>
    </p>
    <p>+91 95662 56879</p>
  </div>

</div>

              {/* MAIL AT END */}
              <div className="mt-5 border-t pt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>ncyukti@drmgrdu.ac.in</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}