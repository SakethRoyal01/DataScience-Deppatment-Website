import {
  GraduationCap,
  Globe,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="px-3 pb-6 sm:px-6">
      <div className="mx-auto max-w-full">
        <div className="container-deep p-8 sm:p-10">
          
          {/* TOP GRID */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* EVENT INFO */}
            <div>
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-secondary text-primary">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <span className="font-display text-base font-bold">
                  Yukti'26
                </span>
              </div>

              <p className="mt-4 text-sm text-secondary/85">
                National Level Conference <br />
                By INFYNEX <br />
                14–15th May 2026 <br />
                Dr. MGR Educational and Research Institute
              </p>
            </div>

            {/* NAVIGATE */}
            <FooterCol
              title="Navigate"
              links={[
                ["About", "#about"],
                ["Call for Papers", "#papers"],
                ["Speakers", "#speakers"],
                ["Schedule", "#schedule"],
              ]}
            />

            {/* ATTEND */}
            <FooterCol
              title="Attend"
              links={[
                ["Registration Fee", "#Registration"],
                ["Gallery", "#Gallery"],
                ["Contact", "#contact"],
              ]}
            />

            {/* SOCIAL */}
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-secondary/80">
                Connect
              </p>

              <div className="mt-4 flex items-center gap-3 flex-wrap">
                <SocialBtn icon={Globe} href="#" />
                <SocialBtn icon={Linkedin} href="https://www.linkedin.com/in/ds-department-mgreri-17b960378" />
                <SocialBtn icon={Facebook} href="https://www.facebook.com/mgreri.ds/" />
                <SocialBtn icon={Instagram} href="https://www.instagram.com/mgreri.ds/" />
                <SocialBtn icon={Youtube} href="https://www.youtube.com/@mgrdsai" />
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-secondary/70 text-center">
            © Yukti'26 · Department of Data Science, Dr. MGR Educational and Research Institute.
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <p className="font-display text-sm font-semibold uppercase tracking-wider text-secondary/80">
        {title}
      </p>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map(([label, href]) => (
          <li key={href}>
            <a
              href={href}
              className="text-secondary/85 transition-colors hover:text-secondary"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialBtn({
  icon: Icon,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20"
    >
      <Icon className="h-5 w-5 text-secondary" />
    </a>
  );
}