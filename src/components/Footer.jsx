const LINK_GROUPS = [
  {
    title: 'Product',
    links: ['Home', 'Technologies', 'Projects'],
  },
  {
    title: 'Company',
    links: ['About', 'Contact', 'Careers'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service'],
  },
];

const SOCIALS = ['GitHub', 'Twitter', 'LinkedIn'];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="about" className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg brand-gradient-bg text-white font-bold text-sm flex items-center justify-center">
                DS
              </span>
              <span className="font-bold text-lg text-slate-900">
                Dev <span className="brand-gradient-text">Stack</span>
              </span>
            </a>
            <p className="text-sm text-slate-500 max-w-xs">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="flex gap-4 mt-4">
              {SOCIALS.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm font-medium text-slate-600 hover:text-slate-900"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900 mb-3">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-400">
            © {year} Dev Stack. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
              Privacy
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
