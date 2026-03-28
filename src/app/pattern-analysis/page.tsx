import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pattern Analysis | HAC Intelligence | The Rojas Report',
  description: 'Sector representation analysis of the CMS Healthcare Advisory Committee. Who benefits, who is absent, and what this means for physician-owned hospitals.',
  openGraph: {
    title: 'Pattern Analysis | HAC Intelligence | The Rojas Report',
    description: 'Who the CMS Healthcare Advisory Committee actually serves — sector breakdown, beneficiaries, and structural gaps.',
    url: 'https://hac.rojasreport.com/pattern-analysis',
    siteName: 'HAC Intelligence — The Rojas Report',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pattern Analysis | HAC Intelligence',
    description: 'Who the CMS Healthcare Advisory Committee actually serves.',
  },
  alternates: { canonical: 'https://hac.rojasreport.com/pattern-analysis' },
};

const sectorMap = [
  { sector: 'Hospital Systems / Finance', members: [
    { name: 'William J. Gassen, JD', slug: 'william-gassen', org: 'Sanford Health ($12.5B)' },
    { name: 'Dennis Laraway', slug: 'dennis-laraway', org: 'Cleveland Clinic ($18B)' },
    { name: 'Dan Liljenquist, JD', slug: 'dan-liljenquist', org: 'Intermountain Health ($15B+)' },
  ]},
  { sector: 'Value-Based Care / Managed Care', members: [
    { name: 'Robert Bessler, MD', slug: 'robert-bessler', org: 'Honest Health' },
    { name: 'David Carmouche, MD', slug: 'david-carmouche', org: 'Lumeris' },
    { name: 'Jenni Gudapati, PhD', slug: 'jenni-gudapati', org: 'Amethyst Solutions / Boise State' },
  ]},
  { sector: 'Primary Care Consolidation', members: [
    { name: 'Clive K. Fields, MD', slug: 'clive-fields', org: 'VillageMD (PE-owned)' },
  ]},
  { sector: 'Insurance-Adjacent / Claims Infrastructure', members: [
    { name: 'Kyu Rhee, MD', slug: 'kyu-rhee', org: 'NACHC / Providence Health Plan board' },
    { name: 'Russ Thomas, JD', slug: 'russ-thomas', org: 'Availity (insurer-owned)' },
  ]},
  { sector: 'For-Profit Behavioral Health', members: [
    { name: 'Andrew Lynch, PhD', slug: 'andrew-lynch', org: 'Acadia Healthcare (under DOJ investigation)' },
  ]},
  { sector: 'Government (CMS Ex Officio)', members: [
    { name: 'Kimberly Brandt, JD', slug: 'kimberly-brandt', org: 'CMS Deputy Administrator & COO' },
    { name: 'Stephanie Carlton', slug: 'stephanie-carlton', org: 'CMS Deputy Administrator & Chief of Staff' },
  ]},
  { sector: 'Venture Capital / Health Tech', members: [
    { name: 'Sebastian Caliri', slug: 'sebastian-caliri', org: '8VC ($6B+ AUM)' },
  ]},
  { sector: 'Wellness / Celebrity', members: [
    { name: 'Tony Robbins', slug: 'tony-robbins', org: 'Fountain Life / Celularity' },
  ]},
  { sector: 'State Government', members: [
    { name: 'Ursel J. McElroy, MA', slug: 'ursel-mcelroy', org: 'Ohio Department of Aging' },
    { name: 'Valerie D. Huhn', slug: 'valerie-huhn', org: 'Missouri Dept. of Mental Health' },
  ]},
  { sector: 'Safety Net / FQHCs', members: [
    { name: 'Linda Thomas-Hemak, MD', slug: 'linda-thomas-hemak', org: 'The Wright Center' },
  ]},
  { sector: 'Nursing Homes / Post-Acute Care', members: [
    { name: 'Elizabeth M. Fago', slug: 'elizabeth-fago', org: 'Home Quality Management' },
  ]},
];

const focusAreas = [
  {
    area: 'Chronic Disease Prevention',
    beneficiaries: 'Robbins (Fountain Life longevity diagnostics), Carmouche (Lumeris AI primary care), Fields (VillageMD risk-based primary care), Gudapati (population health education)',
  },
  {
    area: 'Outcomes Accountability',
    beneficiaries: 'Bessler (Honest Health value-based contracts), Liljenquist (Castell ACO $86.7M savings), Carmouche (Lumeris enablement), R. Thomas (Availity claims processing)',
  },
  {
    area: 'Real-Time Data',
    beneficiaries: 'R. Thomas (Availity: 13B transactions/year), Caliri (8VC health tech portfolio), Brandt/Carlton (CMS modernization agenda)',
  },
  {
    area: 'Vulnerable Populations',
    beneficiaries: 'Rhee (NACHC FQHCs), Thomas-Hemak (Wright Center), Lynch (Acadia behavioral health), Huhn (Missouri mental health), McElroy (Ohio aging)',
  },
  {
    area: 'Medicare Advantage Sustainability',
    beneficiaries: 'Gassen (Sanford Health + Oscar Health board), Liljenquist (SelectHealth MA insurer), Bessler (Honest Health MA risk adjustment), Laraway (Cleveland Clinic MA revenue), Fields (VillageMD MA contracts)',
  },
];

const notAtTable = [
  'Independent physician practice owners',
  'Physician-owned hospital operators',
  'Rural hospital administrators (non-system affiliated)',
  'Patient advocacy organizations (unaffiliated with industry)',
  'Healthcare antitrust experts',
  'Medical school debt / physician workforce experts',
  'Uninsured or underinsured patient representatives',
  'Direct primary care physicians',
  'Emergency medicine independent groups',
  'Physicians who have testified against hospital consolidation',
  'Academic researchers studying hospital market concentration',
  'State attorneys general staff investigating health system pricing',
];

const pohMembers = [
  { name: 'William J. Gassen, JD', slug: 'william-gassen', detail: 'AHA Chair-Elect Designate. AHA is the leading institutional opponent of POH expansion and actively opposes H.R. 3022.' },
  { name: 'Dennis Laraway', slug: 'dennis-laraway', detail: 'CFO of Cleveland Clinic. Direct financial beneficiary of Section 6001 ban and Medicare site-payment disparity (3-5x advantage over physician-owned facilities).' },
  { name: 'Dan Liljenquist, JD', slug: 'dan-liljenquist', detail: 'Intermountain Health is exactly the type of large nonprofit system whose market dominance was protected by the POH ban.' },
  { name: 'Robert Bessler, MD', slug: 'robert-bessler', detail: 'Honest Health\'s value-based model is built on hospital system partnerships, not physician ownership.' },
  { name: 'David Carmouche, MD', slug: 'david-carmouche', detail: 'Every career role has served payer-aligned consolidation — the antithesis of physician ownership.' },
  { name: 'Clive K. Fields, MD', slug: 'clive-fields', detail: 'VillageMD represents the corporate aggregation of independent practices — displacing physician-owned independent medicine.' },
  { name: 'Kyu Rhee, MD', slug: 'kyu-rhee', detail: 'Former Aetna CMO, current Providence Health Plan board. Represents payer-integrated medicine, not physician ownership.' },
  { name: 'Kimberly Brandt, JD', slug: 'kimberly-brandt', detail: 'Led Stark Law reform at CMS. Controls the regulatory architecture governing physician ownership.' },
  { name: 'Sebastian Caliri', slug: 'sebastian-caliri', detail: '8VC portfolio serves platform companies capturing CMS payment categories, not physician owners.' },
];

export default function PatternAnalysis() {
  return (
    <article className="py-12 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-cormorant text-4xl sm:text-[56px] leading-[1.1] font-bold text-cream mb-4">
          Pattern Analysis
        </h1>
        <p className="font-cormorant text-xl sm:text-2xl text-cream/70 mb-12">
          Who This Committee Actually Serves
        </p>

        {/* Sector Representation */}
        <section className="mb-16" aria-label="Sector Representation">
          <p className="section-number mb-3">01 &mdash; Sector Representation</p>
          <h2 className="font-cormorant text-2xl sm:text-[32px] text-cream font-semibold mb-8">All 18 Members Mapped</h2>

          <div className="space-y-6">
            {sectorMap.map((group) => (
              <div key={group.sector} className="bg-navy-light rounded border-t-2 border-orange p-5 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-source text-sm font-semibold text-orange uppercase tracking-wider">{group.sector}</h3>
                  <span className="font-cormorant text-2xl font-bold text-cream">{group.members.length}</span>
                </div>
                <div className="space-y-2">
                  {group.members.map((m) => (
                    <div key={m.slug} className="flex items-center justify-between">
                      <Link href={`/members/${m.slug}`} className="font-source text-sm text-cream hover:text-orange transition-colors">
                        {m.name}
                      </Link>
                      <span className="font-source text-xs text-cream/50">{m.org}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Five Priority Areas */}
        <section className="mb-16" aria-label="Priority Areas Analysis">
          <p className="section-number mb-3">02 &mdash; Priority Areas</p>
          <h2 className="font-cormorant text-2xl sm:text-[32px] text-cream font-semibold mb-8">Who Benefits from Each Focus Area</h2>

          <div className="space-y-4">
            {focusAreas.map((fa) => (
              <div key={fa.area} className="bg-navy-dark border border-white/10 p-5 sm:p-6 rounded">
                <h3 className="font-cormorant text-xl text-orange font-semibold mb-2">{fa.area}</h3>
                <p className="font-source text-sm text-cream/75 leading-relaxed">{fa.beneficiaries}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who Is NOT at the Table */}
        <section className="mb-16" aria-label="Who Is NOT at the Table">
          <p className="section-number mb-3">03 &mdash; Structural Gaps</p>
          <h2 className="font-cormorant text-2xl sm:text-[32px] text-cream font-semibold mb-8">Who Is NOT at the Table</h2>

          <div className="bg-navy-light border-l-4 border-orange p-6 sm:p-8 rounded-r">
            <ul className="space-y-3">
              {notAtTable.map((item) => (
                <li key={item} className="font-source text-sm text-cream/80 flex items-start gap-3">
                  <span className="text-orange mt-0.5 text-lg">&times;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* POH Relevance */}
        <section id="poh" className="mb-16" aria-label="POH Relevance">
          <p className="section-number mb-3">04 &mdash; Physician-Owned Hospital Relevance</p>
          <h2 className="font-cormorant text-2xl sm:text-[32px] text-cream font-semibold mb-8">Members with Direct POH Impact</h2>

          <div className="space-y-4">
            {pohMembers.map((pm) => (
              <div key={pm.slug} className="bg-navy-light border-l-4 border-orange p-5 sm:p-6 rounded-r">
                <Link href={`/members/${pm.slug}`} className="font-source text-orange hover:text-orange/80 font-semibold transition-colors">
                  {pm.name}
                </Link>
                <p className="font-source text-sm text-cream/75 mt-2 leading-relaxed">{pm.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dominant Gravity */}
        <section className="mb-16" aria-label="The Dominant Gravity">
          <p className="section-number mb-3">05 &mdash; The Dominant Gravity</p>
          <h2 className="font-cormorant text-2xl sm:text-[32px] text-cream font-semibold mb-8">Structural Conclusion</h2>

          <div className="bg-navy-dark border border-orange/30 p-6 sm:p-8 rounded">
            <p className="font-source text-cream/85 leading-relaxed mb-4">
              The gravitational center of this committee is the Medicare Advantage and value-based care industrial complex. At least 10 of 18 members have direct financial interests in MA payment rates, value-based care contracts, or the claims infrastructure that processes them.
            </p>
            <p className="font-source text-cream/85 leading-relaxed mb-4">
              The hospital system bloc (Gassen, Laraway, Liljenquist) represents $45.5B+ in combined system revenue. The incoming AHA chairman (Gassen) sits alongside the CFO of Cleveland Clinic (Laraway) and the chief strategist of Intermountain (Liljenquist). All three systems are direct beneficiaries of the Section 6001 physician-owned hospital ban.
            </p>
            <p className="font-source text-cream/85 leading-relaxed mb-4">
              The value-based care corridor (Bessler, Carmouche, Fields) represents companies whose revenue models depend entirely on Medicare Advantage risk adjustment and CMS payment innovation. Bessler&apos;s company was founded by the current and former heads of CMMI.
            </p>
            <p className="font-source text-cream/85 leading-relaxed">
              Zero members represent independent physician practice. Zero members represent physician-owned hospitals. Zero members have publicly advocated for Section 6001 reform. The committee&apos;s charter includes &ldquo;Medicare Advantage sustainability&rdquo; as a stated priority. The roster is designed to sustain it.
            </p>
          </div>
        </section>

        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-cream/30 text-cream font-source font-semibold text-sm rounded hover:border-orange hover:text-orange transition-colors"
            aria-label="Back to Committee Overview"
          >
            &larr; Back to Committee Overview
          </Link>
        </div>
      </div>
    </article>
  );
}
