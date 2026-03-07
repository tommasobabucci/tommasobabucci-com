import { useState } from 'react';

interface Skill {
  name: string;
  description: string;
  tags?: string[];
}

interface SkillAccordionProps {
  skills: Skill[];
}

export default function SkillAccordion({ skills }: SkillAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {skills.map((skill, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            borderBottom: '1px solid rgba(0,0,0,0.07)',
            ...(i === 0 ? { borderTop: '1px solid rgba(0,0,0,0.07)' } : {}),
          }}
        >
          <button
            onClick={() => toggle(i)}
            style={{
              flex: 1,
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 0',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            <span
              style={{
                fontFamily: '"Krona One", sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                color: '#1C1917',
                lineHeight: 1.3,
              }}
            >
              {skill.name}
            </span>
            <span
              style={{
                transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)',
                transition: 'transform 0.35s ease',
                fontSize: '24px',
                color: '#B53B2E',
                flexShrink: 0,
                marginLeft: '16px',
                lineHeight: 1,
              }}
            >
              +
            </span>
          </button>

          <div
            style={{
              maxHeight: openIndex === i ? '400px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.35s ease',
            }}
          >
            <div style={{ paddingBottom: '24px' }}>
              <p
                style={{
                  fontFamily: '"Sora", sans-serif',
                  fontSize: '15px',
                  lineHeight: 1.65,
                  fontWeight: 300,
                  color: '#57534E',
                }}
              >
                {skill.description}
              </p>
              {skill.tags && skill.tags.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    marginTop: '14px',
                    flexWrap: 'wrap',
                  }}
                >
                  {skill.tags.map((tag, j) => (
                    <span
                      key={j}
                      style={{
                        fontFamily: '"Sora", sans-serif',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                        color: '#B53B2E',
                        background: 'rgba(181,59,46,0.06)',
                        padding: '4px 10px',
                        borderRadius: '4px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
