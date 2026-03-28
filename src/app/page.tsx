import Link from 'next/link';
import { members } from '@/data/members';

const rosterData = [
  { name: 'Elizabeth M. Fago', title: 'Founder', org: 'Home Quality Management / Palm Health Partners', sector: 'Nursing Homes & Post-Acute Care' },
  { name: 'Robert Bessler, MD', title: 'CEO', org: 'Honest Health', sector: 'Value-Based Care' },
  { name: 'David Carmouche, MD', title: 'EVP & Chief Clinical Transformation Officer', org: 'Lumeris', sector: 'Value-Based Care / Managed Care' },
  { name: 'Clive K. Fields, MD', title: 'Co-Founder & CMO', org: 'VillageMD', sector: 'Primary Care Consolidation' },
  { name: 'Kyu Rhee, MD', title: 'President & CEO', org: 'NACHC', sector: 'Insurer-Aligned / Community Health' },
  { name: 'Linda Thomas-Hemak, MD', title: 'President & CEO', org: 'The Wright Center', sector: 'Safety Net / FQHCs' },
  { name: 'William J. Gassen, JD', title: 'President & CEO', org: 'Sanford Health', sector: 'Integrated Hospital System' },
  { name: 'Dennis Laraway', title: 'EVP & CFO', org: 'Cleveland Clinic', sector: 'Hospital System Finance' },
  { name: 'Dan Liljenquist, JD', title: 'EVP & Chief Strategy Officer', org: 'Intermountain Health', sector: 'Hospital System Strategy / MA' },
  { name: 'Andrew Lynch, PhD', title: 'Chief Strategy Officer', org: 'Acadia Healthcare', sector: 'For-Profit Behavioral Health' },
  { name: 'Russ Thomas, JD', title: 'CEO', org: 'Availity', sector: 'Health IT / Claims Processing' },
  { name: 'Kimberly Brandt, JD', title: 'Deputy Administrator & COO', org: 'CMS', sector: 'Government / Lobbying' },
  { name: 'Stephanie Carlton', title: 'Deputy Administrator & Chief of Staff', org: 'CMS', sector: 'Government / Consulting' },
  { name: 'Sebastian Caliri', title: 'Partner', org: '8VC', sector: 'Venture Capital / Health Tech' },
  { name: 'Tony Robbins', title: 'Author / Investor', org: 'Fountain Life / Celularity', sector: 'Wellness / Longevity' },
  { name: 'Ursel J. McElroy, MA', title: 'Director', org: 'Ohio Department of Aging', sector: 'State Government' },
  { name: 'Valerie D. Huhn', title: 'Director', org: 'Missouri Dept. of Mental Health', sector: 'State Government' },
  { name: 'Jenni Gudapati, PhD', title: 'CEO / Director', org: 'Amethyst Solutions / Boise State', sector: 'Home Health / Education' },
];

const stats = [
  { number: '18', label: 'Committee Members Selected' },
  { number: '0', label: 'With stated interest in physician ownership' },
  { number: '400+', label: 'Nominations reviewed' },
  { number: '$29M+', label: 'AHA lobbying spend by incoming committee chair' },
];

const sectorBreakdown = [
  { sector: 'Hospital Systems / Finance', count: 3, members: 'Gassen, Laraway, Liljenquist' },
  { sector: 'Value-Based Care / Managed Care', count: 3, members: 'Bessler, Carmouche, Gudapati' },
  { sector: 'Primary Care Consolidation', count: 1, members: 'Fields' },
  { sector: 'Insurance-Adjacent / Claims', count: 2, members: 'Rhee, R. Thomas' },
  { sector: 'For-Profit Behavioral Health', count: 1, members: 'Lynch' },
  { sector: 'Government (CMS)', count: 2, members: 'Brandt, Carlton' },
  { sector: 'Venture Capital / Health Tech', count: 1, members: 'Caliri' },
  { sector: 'Wellness / Celebrity', count: 1, members: 'Robbins' },
  { sector: 'State Government', count: 2, members: 'McElroy, Huhn' },
  { sector: 'Safety Net / FQHCs', count: 1, members: 'Thomas-Hemak' },
  { sector: 'Nursing Homes / Post-Acute', count: 1, members: 'Fago' },
];

const notAtTable = [
  'Independent physician practice owners',
  'Physician-owned hospital operators',
  'Rural hospital administrators (non-system)',
  'Patient advocacy organizations',
  'Healthcare antitrust experts',
  'Medical school debt / workforce experts',
  'Uninsured or underinsured patient representatives',
  'Direct primary care physicians',
  'Emergency medicine independent groups',
  'Physicians who have testified against hospital consolidation',
];

export default function Home() {
  return (
    <article>
      {/* Hero */}
      <section className="grain-texture py-20 sm:py-32 px-4" aria-label="Hero">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="section-number mb-6">Intelligence Briefing</p>
          <h1 className="font-cormorant text-5xl sm:text-[64px] leading-[1.1] font-bold text-cream mb-6">
            The CMS Healthcare Advisory Committee
          </h1>
          <p className="font-source text-lg sm:text-xl text-cream/80 max-w-2xl mx-auto mb-10">
            18 members selected from 400+ nominations. Zero with stated interest in expanding physician ownership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#members"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange text-cream font-source font-semibold text-sm rounded hover:bg-orange/90 transition-colors"
              aria-label="View All Members"
            >
              View All Members &rarr;
            </Link>
            <Link
              href="/pattern-analysis"
              className="inline-flex items-center justify-center px-6 py-3 border border-cream/30 text-cream font-source font-semibold text-sm rounded hover:border-orange hover:text-orange transition-colors"
              aria-label="Pattern Analysis"
            >
              Pattern Analysis &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-navy-dark py-12 px-4 border-y border-white/10" aria-label="Key statistics">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-cormorant text-4xl sm:text-5xl font-bold text-orange">{stat.number}</p>
              <p className="font-source text-sm text-cream/70 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 01 — Committee Overview */}
      <section className="py-16 sm:py-24 px-4" aria-label="Committee Overview">
        <div className="max-w-5xl mx-auto">
          <p className="section-number mb-3">01 &mdash; Committee Overview</p>
          <h2 className="font-cormorant text-3xl sm:text-[42px] text-cream font-semibold mb-10">Committee Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-navy-light p-6 rounded border-t-2 border-orange">
              <p className="font-source text-xs uppercase tracking-widest text-orange mb-2">Announced</p>
              <p className="font-source text-cream">March 27, 2026</p>
            </div>
            <div className="bg-navy-light p-6 rounded border-t-2 border-orange">
              <p className="font-source text-xs uppercase tracking-widest text-orange mb-2">Authority</p>
              <p className="font-source text-cream">Public Health Service Act, FACA</p>
            </div>
            <div className="bg-navy-light p-6 rounded border-t-2 border-orange">
              <p className="font-source text-xs uppercase tracking-widest text-orange mb-2">Reports To</p>
              <p className="font-source text-cream">HHS Secretary RFK Jr. and CMS Administrator Dr. Mehmet Oz</p>
            </div>
            <div className="bg-navy-light p-6 rounded border-t-2 border-orange">
              <p className="font-source text-xs uppercase tracking-widest text-orange mb-2">Stated Focus Areas</p>
              <p className="font-source text-cream text-sm">Chronic disease prevention, outcomes accountability, real-time data, vulnerable populations, Medicare Advantage sustainability</p>
            </div>
          </div>

          {/* Roster Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left" aria-label="Full 18-member roster">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="font-source text-xs uppercase tracking-widest text-orange py-3 pr-4">#</th>
                  <th className="font-source text-xs uppercase tracking-widest text-orange py-3 pr-4">Name</th>
                  <th className="font-source text-xs uppercase tracking-widest text-orange py-3 pr-4 hidden sm:table-cell">Title</th>
                  <th className="font-source text-xs uppercase tracking-widest text-orange py-3 pr-4 hidden md:table-cell">Organization</th>
                  <th className="font-source text-xs uppercase tracking-widest text-orange py-3">Sector</th>
                </tr>
              </thead>
              <tbody>
                {rosterData.map((row, i) => (
                  <tr key={row.name} className="border-b border-white/5 hover:bg-navy-light/50 transition-colors">
                    <td className="font-source text-sm text-cream/50 py-3 pr-4">{String(i + 1).padStart(2, '0')}</td>
                    <td className="font-source text-sm text-cream py-3 pr-4 font-semibold">{row.name}</td>
                    <td className="font-source text-sm text-cream/70 py-3 pr-4 hidden sm:table-cell">{row.title}</td>
                    <td className="font-source text-sm text-cream/70 py-3 pr-4 hidden md:table-cell">{row.org}</td>
                    <td className="font-source text-xs text-orange py-3">{row.sector}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 02 — The 18 Members */}
      <section id="members" className="py-16 sm:py-24 px-4 bg-navy-dark" aria-label="The 18 Members">
        <div className="max-w-6xl mx-auto">
          <p className="section-number mb-3">02 &mdash; The 18 Members</p>
          <h2 className="font-cormorant text-3xl sm:text-[42px] text-cream font-semibold mb-10">Member Profiles</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <Link
                key={member.slug}
                href={`/members/${member.slug}`}
                className="bg-navy-light rounded border-t-2 border-orange p-6 card-hover block"
                aria-label={`View profile for ${member.name}`}
              >
                <h3 className="font-cormorant text-xl text-cream font-semibold">{member.name}</h3>
                <p className="font-cormorant italic text-orange text-sm mt-1">{member.nickname}</p>
                <p className="font-source text-sm text-cream/70 mt-3">{member.title}, {member.org}</p>
                <span className="inline-block mt-3 px-3 py-1 text-xs font-source border border-orange/40 text-orange rounded-full">
                  {member.sector}
                </span>
                <p className="font-source text-sm text-orange mt-4">View Profile &rarr;</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03 — Pattern Analysis Preview */}
      <section className="py-16 sm:py-24 px-4" aria-label="Pattern Analysis Preview">
        <div className="max-w-5xl mx-auto">
          <p className="section-number mb-3">03 &mdash; Pattern Analysis Preview</p>
          <h2 className="font-cormorant text-3xl sm:text-[42px] text-cream font-semibold mb-10">Who This Committee Actually Serves</h2>

          <div className="overflow-x-auto mb-12">
            <table className="w-full text-left" aria-label="Sector breakdown">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="font-source text-xs uppercase tracking-widest text-orange py-3 pr-4">Sector</th>
                  <th className="font-source text-xs uppercase tracking-widest text-orange py-3 pr-4">Count</th>
                  <th className="font-source text-xs uppercase tracking-widest text-orange py-3">Members</th>
                </tr>
              </thead>
              <tbody>
                {sectorBreakdown.map((row) => (
                  <tr key={row.sector} className="border-b border-white/5">
                    <td className="font-source text-sm text-cream py-3 pr-4">{row.sector}</td>
                    <td className="font-source text-sm text-orange font-semibold py-3 pr-4">{row.count}</td>
                    <td className="font-source text-sm text-cream/70 py-3">{row.members}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-navy-light p-6 sm:p-8 rounded border-l-4 border-orange mb-10">
            <h3 className="font-cormorant text-2xl text-cream font-semibold mb-4">Who Is NOT at the Table</h3>
            <ul className="space-y-2">
              {notAtTable.map((item) => (
                <li key={item} className="font-source text-sm text-cream/80 flex items-start gap-2">
                  <span className="text-orange mt-1">&bull;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/pattern-analysis"
            className="inline-flex items-center px-6 py-3 bg-orange text-cream font-source font-semibold text-sm rounded hover:bg-orange/90 transition-colors"
            aria-label="Read Full Pattern Analysis"
          >
            Read Full Pattern Analysis &rarr;
          </Link>
        </div>
      </section>

      {/* Section 04 — The Thesis */}
      <section className="py-16 sm:py-24 px-4 bg-navy-dark" aria-label="The Thesis">
        <div className="max-w-4xl mx-auto">
          <p className="section-number mb-3">04 &mdash; The Thesis</p>
          <h2 className="font-cormorant text-3xl sm:text-[42px] text-cream font-semibold mb-10">The Structural Conclusion</h2>

          <blockquote className="border-l-4 border-orange pl-6 sm:pl-8">
            <p className="font-cormorant text-xl sm:text-2xl text-cream/90 italic leading-relaxed">
              &ldquo;The committee is structurally designed to protect the incumbent healthcare industrial complex: large hospital systems, Medicare Advantage insurers, value-based care platforms, and the health IT infrastructure that serves them. The &lsquo;Make Healthcare Great Again&rsquo; branding suggests disruption. The roster guarantees continuity.&rdquo;
            </p>
            <footer className="mt-6">
              <p className="font-source text-sm text-orange">The Rojas Report, March 28, 2026</p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'HAC Intelligence — The Rojas Report',
            url: 'https://hac.rojasreport.com',
            description: 'Open-source intelligence on all 18 members of the CMS Healthcare Advisory Committee.',
            publisher: {
              '@type': 'Organization',
              name: 'The Rojas Report',
              url: 'https://rojasreport.com',
            },
          }),
        }}
      />
    </article>
  );
}
