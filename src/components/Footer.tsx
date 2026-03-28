import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <p className="font-source text-cream/70 text-sm leading-relaxed">
              The definitive open-source intelligence file on the 18 members of the CMS Healthcare Advisory Committee.
            </p>
          </div>

          <div>
            <h4 className="font-source text-xs uppercase tracking-widest text-orange mb-4">Committee</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="font-source text-sm text-cream/70 hover:text-orange transition-colors">Committee Overview</Link></li>
              <li><Link href="/#members" className="font-source text-sm text-cream/70 hover:text-orange transition-colors">All Members</Link></li>
              <li><Link href="/pattern-analysis" className="font-source text-sm text-cream/70 hover:text-orange transition-colors">Pattern Analysis</Link></li>
              <li><Link href="/pattern-analysis#poh" className="font-source text-sm text-cream/70 hover:text-orange transition-colors">POH Relevance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-source text-xs uppercase tracking-widest text-orange mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="https://dutchrojas.substack.com" target="_blank" rel="noopener noreferrer" className="font-source text-sm text-cream/70 hover:text-orange transition-colors">Newsletter</a></li>
              <li><a href="https://youtube.com/@DutchRojas" target="_blank" rel="noopener noreferrer" className="font-source text-sm text-cream/70 hover:text-orange transition-colors">YouTube</a></li>
              <li><a href="https://rojasreport.com/about" target="_blank" rel="noopener noreferrer" className="font-source text-sm text-cream/70 hover:text-orange transition-colors">About Dutch Rojas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-source text-xs uppercase tracking-widest text-orange mb-4">Ecosystem</h4>
            <ul className="space-y-2">
              <li><a href="https://medmerge.co" target="_blank" rel="noopener noreferrer" className="font-source text-sm text-cream/70 hover:text-orange transition-colors">MedMerge</a></li>
              <li><a href="https://phycapfund.com" target="_blank" rel="noopener noreferrer" className="font-source text-sm text-cream/70 hover:text-orange transition-colors">PhyCap Fund</a></li>
              <li><a href="https://physiciansled.com" target="_blank" rel="noopener noreferrer" className="font-source text-sm text-cream/70 hover:text-orange transition-colors">Physician Led Healthcare for America</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="font-source text-xs text-cream/40 text-center">
            &copy; 2026 The Rojas Report. All rights reserved. Built for physicians, executives &amp; lawmakers.
          </p>
        </div>
      </div>
    </footer>
  );
}
