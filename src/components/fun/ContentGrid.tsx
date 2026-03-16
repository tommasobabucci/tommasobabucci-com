import { useState, useMemo, useEffect, useRef, useSyncExternalStore } from 'react';

interface ContentItem {
  slug: string;
  title: string;
  description: string;
  date: string | null;
  contentType: 'Article' | 'Project';
  subjectTags: string[];
  coverImage?: string;
  externalUrl?: string;
  href: string;
}

interface ContentGridProps {
  items: ContentItem[];
}

/* ---- Mobile detection via matchMedia ---- */
function subscribeToMedia(callback: () => void) {
  const mql = window.matchMedia('(max-width: 639px)');
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
}

function getIsMobile() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(max-width: 639px)').matches;
}

function useIsMobile() {
  return useSyncExternalStore(subscribeToMedia, getIsMobile, () => false);
}

/* ---- Desktop card (full vertical layout) ---- */
function DesktopCard({ item }: { item: ContentItem }) {
  const isExternal = !!item.externalUrl && item.externalUrl.startsWith('http');
  const formattedDate = item.date
    ? new Date(item.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : null;

  return (
    <a
      href={item.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: '#181A18',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        overflow: 'hidden',
        transition:
          'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,45,111,0.35)';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow =
          '0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,45,111,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {item.coverImage && (
        <div style={{ aspectRatio: '16/9', overflow: 'hidden', flexShrink: 0 }}>
          <img
            src={item.coverImage}
            alt={item.title}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.4s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        </div>
      )}

      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Type badge + date */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '14px',
          }}
        >
          <span
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase' as const,
              color: '#FF2D6F',
              background: 'rgba(255,45,111,0.08)',
              padding: '4px 10px',
              borderRadius: '4px',
            }}
          >
            {item.contentType}
          </span>
          {formattedDate && (
            <span
              style={{
                fontFamily: '"Sora", sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                color: '#5C5A56',
              }}
            >
              {formattedDate}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: '"Krona One", sans-serif',
            fontSize: '17px',
            fontWeight: 400,
            color: '#E8E6E1',
            marginBottom: '10px',
            lineHeight: 1.35,
          }}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: '"Sora", sans-serif',
            fontSize: '14px',
            lineHeight: 1.6,
            color: '#9B9892',
            marginBottom: '12px',
          }}
        >
          {item.description}
        </p>

        {/* Subject tags — pushed to bottom */}
        {item.subjectTags.length > 0 && (
          <div
            style={{
              display: 'flex',
              gap: '6px',
              flexWrap: 'wrap' as const,
              marginTop: 'auto',
              paddingTop: '4px',
            }}
          >
            {item.subjectTags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: '"Sora", sans-serif',
                  fontSize: '10px',
                  fontWeight: 500,
                  color: '#5C5A56',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '3px 8px',
                  borderRadius: '3px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {isExternal && (
          <span
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: '11px',
              color: '#5C5A56',
              marginTop: '10px',
              display: 'inline-block',
            }}
          >
            External link &#8599;
          </span>
        )}
      </div>
    </a>
  );
}

/* ---- Mobile card (compact horizontal layout) ---- */
function MobileCard({ item }: { item: ContentItem }) {
  const isExternal = !!item.externalUrl && item.externalUrl.startsWith('http');
  const formattedDate = item.date
    ? new Date(item.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
      })
    : null;

  return (
    <a
      href={item.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
        background: '#181A18',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '10px',
        padding: '14px',
        transition: 'border-color 0.2s ease',
      }}
    >
      {item.coverImage && (
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '8px',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          <img
            src={item.coverImage}
            alt={item.title}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      )}

      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Type + date row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '6px',
          }}
        >
          <span
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: '9px',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase' as const,
              color: '#FF2D6F',
            }}
          >
            {item.contentType}
          </span>
          {formattedDate && (
            <>
              <span style={{ color: '#5C5A56', fontSize: '8px' }}>&bull;</span>
              <span
                style={{
                  fontFamily: '"Sora", sans-serif',
                  fontSize: '11px',
                  fontWeight: 400,
                  color: '#5C5A56',
                }}
              >
                {formattedDate}
              </span>
            </>
          )}
          {isExternal && (
            <span
              style={{
                fontFamily: '"Sora", sans-serif',
                fontSize: '10px',
                color: '#5C5A56',
                marginLeft: 'auto',
              }}
            >
              &#8599;
            </span>
          )}
        </div>

        {/* Title — clamped to 2 lines */}
        <h3
          style={{
            fontFamily: '"Krona One", sans-serif',
            fontSize: '13px',
            fontWeight: 400,
            color: '#E8E6E1',
            lineHeight: 1.35,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical' as const,
          }}
        >
          {item.title}
        </h3>
      </div>
    </a>
  );
}

export default function ContentGrid({ items }: ContentGridProps) {
  const isMobile = useIsMobile();
  const [activeType, setActiveType] = useState<string>('All');
  const [activeSubject, setActiveSubject] = useState<string>('All');
  const [filterKey, setFilterKey] = useState(0);
  const prevFilterRef = useRef({ type: 'All', subject: 'All' });

  useEffect(() => {
    const prev = prevFilterRef.current;
    if (prev.type !== activeType || prev.subject !== activeSubject) {
      setFilterKey((k) => k + 1);
      prevFilterRef.current = { type: activeType, subject: activeSubject };
    }
  }, [activeType, activeSubject]);

  const subjectTags = useMemo(() => {
    const all = items.flatMap((item) => item.subjectTags);
    const unique = [...new Set(all)].sort();
    return ['All', ...unique];
  }, [items]);

  const typeFilters = ['All', 'Article', 'Project'];

  const filtered = items
    .filter((item) => activeType === 'All' || item.contentType === activeType)
    .filter(
      (item) =>
        activeSubject === 'All' || item.subjectTags.includes(activeSubject)
    );

  const sorted = [...filtered].sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    if (a.date && !b.date) return -1;
    if (!a.date && b.date) return 1;
    return a.title.localeCompare(b.title);
  });

  const tabStyle = (isActive: boolean) => ({
    fontFamily: '"Sora", sans-serif',
    fontSize: '12px',
    fontWeight: 500 as const,
    letterSpacing: '0.04em',
    padding: '8px 16px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer' as const,
    transition: 'background 0.2s ease, color 0.2s ease',
    background: isActive ? '#FF2D6F' : 'rgba(255,255,255,0.06)',
    color: isActive ? '#ffffff' : '#9B9892',
  });

  return (
    <div>
      {/* Type filters */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '16px',
          flexWrap: 'wrap' as const,
        }}
      >
        {typeFilters.map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            style={tabStyle(activeType === type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Subject filters */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '40px',
          flexWrap: 'wrap' as const,
        }}
      >
        {subjectTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveSubject(tag)}
            style={{
              ...tabStyle(activeSubject === tag),
              background:
                activeSubject === tag
                  ? 'rgba(255,45,111,0.15)'
                  : 'rgba(255,255,255,0.04)',
              color: activeSubject === tag ? '#FF2D6F' : '#5C5A56',
              fontSize: '11px',
              padding: '6px 12px',
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '12px' : '28px',
        }}
      >
        {sorted.map((item, i) => (
          <div
            key={`${filterKey}-${item.contentType}-${item.slug}`}
            style={{
              opacity: 0,
              transform: 'translateY(12px)',
              animation: `gridCardIn 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.06}s forwards`,
            }}
          >
            {isMobile ? (
              <MobileCard item={item} />
            ) : (
              <DesktopCard item={item} />
            )}
          </div>
        ))}
      </div>

      {sorted.length === 0 && (
        <div
          style={{
            textAlign: 'center',
            padding: '64px 24px',
            border: '1px dashed rgba(255,255,255,0.1)',
            borderRadius: '12px',
          }}
        >
          <p
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: '14px',
              color: '#5C5A56',
            }}
          >
            No items match the selected filters.
          </p>
        </div>
      )}
    </div>
  );
}
