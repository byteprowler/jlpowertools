import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BookOpen, Home, Info, MapPin, Menu, Package, Phone, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const NAV_LINKS = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Products', href: '/products', icon: Package },
  { name: 'Insights', href: '/insights', icon: BookOpen },
  { name: 'About', href: '/about', icon: Info },
  { name: 'Contact', href: '/contact', icon: Phone },
];

const isActivePath = (pathname, href) => {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
};

function Logo() {
  return (
    <Link href="/" aria-label="J & L Powertools home" className="inline-flex items-center">
      <span className="relative block h-[50px] w-[70px]">
        <Image
          src="/jlp.webp"
          alt="J & L Powertools LTD Logo"
          fill
          priority
          sizes="70px"
          className="object-contain"
        />
      </span>
    </Link>
  );
}

function DesktopNav({ pathname }) {
  return (
    <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
      {NAV_LINKS.map((link) => {
        const active = isActivePath(pathname, link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? 'page' : undefined}
            className={`group relative font-medium transition-colors ${
              active ? 'text-[#FACC15]' : 'text-gray-700 hover:text-[#FACC15]'
            }`}
          >
            {link.name}
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-[#FACC15] transition-all duration-300 ${
                active ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </Link>
        );
      })}

      <Link
        href="/contact"
        className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-[#FACC15] px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-[#eab308]"
      >
        Get a Quote
      </Link>
    </nav>
  );
}

function MobileDrawer({ isOpen, onClose, pathname }) {
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      return undefined;
    }

    const closeTimer = window.setTimeout(() => setShouldRender(false), 300);

    return () => window.clearTimeout(closeTimer);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousOverscroll = document.body.style.overscrollBehavior;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overscrollBehavior = 'contain';

    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overscrollBehavior = previousOverscroll;
    };
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[70] h-dvh w-[100dvw] overflow-hidden md:hidden ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!isOpen}
      inert={isOpen ? undefined : true}
    >
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-200 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        tabIndex={-1}
      />

      <aside
        ref={panelRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`absolute right-0 top-0 flex h-dvh w-[86%] max-w-sm flex-col bg-white text-gray-900 shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-6 py-4">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="text-lg font-bold tracking-tight">J&L Powertools</span>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15]"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile primary navigation" className="flex-1 overflow-y-auto px-4 py-6">
          <div className="space-y-1">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const active = isActivePath(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center gap-4 rounded-xl px-4 py-4 text-lg transition-colors ${
                    active
                      ? 'bg-[#FACC15] font-bold text-gray-900'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  {link.name}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="shrink-0 space-y-3 border-t border-gray-100 bg-gray-50 p-6">
          <div className="grid grid-cols-2 gap-3">
            <a
              href="tel:+2348035717860"
              onClick={onClose}
              className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white p-3 text-sm font-semibold transition-colors hover:border-[#FACC15]"
            >
              <Phone className="h-5 w-5 text-[#FACC15]" aria-hidden="true" />
              Call Now
            </a>
            <a
              href="https://wa.me/2348035717860"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white p-3 text-sm font-semibold transition-colors hover:border-green-500"
            >
              <FaWhatsapp className="h-5 w-5 text-green-500" aria-hidden="true" />
              WhatsApp
            </a>
          </div>

          <Link
            href="/contact"
            onClick={onClose}
            className="flex w-full items-center justify-center rounded-2xl bg-gray-900 py-4 font-bold text-white shadow-lg transition-colors hover:bg-black"
          >
            Request a Quote
          </Link>

          <a
            href="https://maps.app.goo.gl/mKRjzvTuGq9cpZHU9"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FACC15] py-4 font-bold text-gray-900 shadow-md transition-colors hover:bg-[#eab308]"
          >
            <MapPin className="h-5 w-5" aria-hidden="true" />
            Visit Showroom
          </a>
        </div>
      </aside>
    </div>
  );
}

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);

  useEffect(() => {
    closeMenu();
  }, [router.asPath, closeMenu]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-gray-100 bg-white/95 text-gray-900 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex h-[82px] w-full max-w-7xl items-center justify-between px-6 md:px-8">
          <Logo />
          <DesktopNav pathname={router.pathname} />

          <button
            type="button"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full text-gray-900 transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15] md:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-7 w-7" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      <div className="h-[82px] shrink-0" aria-hidden="true" />

      <MobileDrawer isOpen={menuOpen} onClose={closeMenu} pathname={router.pathname} />
    </>
  );
}
