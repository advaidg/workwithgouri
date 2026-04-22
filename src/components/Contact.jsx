import './Contact.css';

const LINKS = [
  {
    lbl: 'Email',
    value: 'gourig92@gmail.com',
    href: 'mailto:gourig92@gmail.com',
  },
  {
    lbl: 'WhatsApp',
    value: '+91 90617 06748',
    href: 'https://wa.me/919061706748',
  },
  {
    lbl: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/',
  },
  {
    lbl: 'Instagram',
    value: 'Follow on Instagram',
    href: 'https://www.instagram.com/',
  },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <span className="eyebrow reveal">Let's talk · 06</span>
        <h2 className="reveal delay-1" style={{ marginTop: 16 }}>
          Let's create
          <br />
          content that <span className="italic">connects.</span>
        </h2>

        <div className="contact-grid">
          <p className="big reveal delay-2">
            Reels editing, content creation, social media creatives — or a
            long-term project. I'm open for collaborations that help brands
            sound human and convert.
          </p>

          <div className="links reveal delay-2">
            {LINKS.map((link) => (
              <a
                key={link.lbl}
                className="link"
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  link.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                data-hover
              >
                <div>
                  <span className="lbl">{link.lbl}</span>
                  <span>{link.value}</span>
                </div>
                <span className="arr">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
