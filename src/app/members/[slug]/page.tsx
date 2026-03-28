import { Metadata } from 'next';
import Link from 'next/link';
import { members, getMemberBySlug, getAdjacentMembers } from '@/data/members';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const member = getMemberBySlug(params.slug);
  if (!member) return {};

  const title = `${member.name} | HAC Intelligence | The Rojas Report`;
  const description = `${member.nickname}. ${member.title} at ${member.org}. CMS Healthcare Advisory Committee member profile, conflicts, and POH relevance.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://hac.rojasreport.com/members/${member.slug}`,
      siteName: 'HAC Intelligence — The Rojas Report',
      type: 'article',
    },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: `https://hac.rojasreport.com/members/${member.slug}` },
  };
}

export default function MemberPage({ params }: { params: { slug: string } }) {
  const member = getMemberBySlug(params.slug);
  if (!member) notFound();

  const { prev, next } = getAdjacentMembers(params.slug);

  return (
    <article className="py-12 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 font-source text-sm text-cream/50">
            <li><Link href="/" className="hover:text-orange transition-colors">Committee</Link></li>
            <li>/</li>
            <li><Link href="/#members" className="hover:text-orange transition-colors">Members</Link></li>
            <li>/</li>
            <li className="text-cream">{member.name}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="font-cormorant text-4xl sm:text-[56px] leading-[1.1] font-bold text-cream">{member.name}</h1>
          <p className="font-cormorant italic text-orange text-lg sm:text-xl mt-2">{member.nickname}</p>
          <p className="font-source text-cream/80 mt-4">{member.title}, {member.org}</p>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="inline-block px-3 py-1 text-xs font-source border border-orange/40 text-orange rounded-full">
              {member.sector}
            </span>
            {member.base && (
              <span className="font-source text-sm text-cream/50">{member.base}</span>
            )}
          </div>
          <div className="w-16 h-0.5 bg-orange mt-8" />
        </header>

        {/* Overview */}
        <section className="mb-12" aria-label="Overview">
          <p className="section-number mb-3">Overview</p>
          <p className="font-source text-cream/85 leading-relaxed">{member.overview}</p>
        </section>

        {/* Career Arc */}
        <section className="mb-12" aria-label="Career Arc">
          <p className="section-number mb-3">Career Arc</p>
          <h2 className="font-cormorant text-2xl sm:text-[28px] text-cream font-semibold mb-6">Professional Timeline</h2>
          <div className="relative pl-8 border-l-2 border-orange/30">
            {member.careerArc.map((stop, i) => (
              <div key={i} className="mb-6 relative">
                <div className="absolute -left-[25px] top-2 w-3 h-3 rounded-full bg-orange border-2 border-navy" />
                {stop.period && (
                  <p className="font-source text-xs text-orange uppercase tracking-wider mb-1">{stop.period}</p>
                )}
                <p className="font-source text-cream font-semibold">{stop.role}</p>
                {stop.org && <p className="font-source text-sm text-cream/60">{stop.org}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Business Interests */}
        {member.businessDetails && member.businessDetails.length > 0 && (
          <section className="mb-12" aria-label="Business Interests and Affiliations">
            <p className="section-number mb-3">Business Interests &amp; Affiliations</p>
            <ul className="space-y-3">
              {member.businessDetails.map((detail, i) => (
                <li key={i} className="font-source text-sm text-cream/80 flex items-start gap-2">
                  <span className="text-orange mt-0.5">&bull;</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Red Flags */}
        <section className="mb-12" aria-label="Red Flags">
          <p className="section-number mb-3">Red Flags</p>
          <h2 className="font-cormorant text-2xl sm:text-[28px] text-cream font-semibold mb-6">Conflicts &amp; Concerns</h2>
          <div className="space-y-4">
            {member.redFlags.map((flag, i) => (
              <div key={i} className="bg-navy-light border-l-4 border-orange p-4 sm:p-5 rounded-r">
                <p className="font-source text-sm text-cream/85 leading-relaxed">{flag}</p>
              </div>
            ))}
          </div>
        </section>

        {/* POH Relevance */}
        <section className="mb-12" aria-label="Physician-Owned Hospital Relevance">
          <p className="section-number mb-3">Physician-Owned Hospital Relevance</p>
          <div className="bg-navy-dark border border-orange/20 p-6 sm:p-8 rounded">
            <p className="font-source text-cream/85 leading-relaxed">{member.pohRelevance}</p>
          </div>
        </section>

        {/* Sources */}
        <section className="mb-16" aria-label="Sources">
          <p className="section-number mb-3">Sources</p>
          <ol className="space-y-2 list-decimal list-inside">
            {member.sources.map((src, i) => (
              <li key={i} className="font-source text-sm text-cream/70">
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange hover:text-orange/80 underline underline-offset-2 transition-colors"
                >
                  {src.label}
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t border-white/10" aria-label="Member navigation">
          {prev ? (
            <Link
              href={`/members/${prev.slug}`}
              className="font-source text-sm text-cream/60 hover:text-orange transition-colors"
              aria-label={`Previous member: ${prev.name}`}
            >
              &larr; {prev.name}
            </Link>
          ) : <div />}
          {next ? (
            <Link
              href={`/members/${next.slug}`}
              className="font-source text-sm text-cream/60 hover:text-orange transition-colors text-right"
              aria-label={`Next member: ${next.name}`}
            >
              {next.name} &rarr;
            </Link>
          ) : <div />}
        </nav>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: `${member.name} — CMS Healthcare Advisory Committee`,
              description: `${member.nickname}. ${member.title} at ${member.org}.`,
              url: `https://hac.rojasreport.com/members/${member.slug}`,
              publisher: {
                '@type': 'Organization',
                name: 'The Rojas Report',
                url: 'https://rojasreport.com',
              },
              datePublished: '2026-03-28',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: member.name,
              jobTitle: member.title,
              worksFor: { '@type': 'Organization', name: member.org },
            },
          ]),
        }}
      />
    </article>
  );
}
