import { ImageResponse } from 'next/og';

export const alt = 'Saga AI — AI Agents for Healthcare Operations';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#f5f0ea',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Top border accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #2b7a78, #1f5f5d)',
            display: 'flex',
          }}
        />

        {/* Logo */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: '#2d2926',
            marginBottom: 32,
            display: 'flex',
            fontStyle: 'italic',
          }}
        >
          saga
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: '#2d2926',
            lineHeight: 1.15,
            marginBottom: 24,
            maxWidth: '900px',
            display: 'flex',
          }}
        >
          AI Agents for Healthcare Operations
        </div>

        {/* Subheadline */}
        <div
          style={{
            fontSize: 26,
            color: '#6d635a',
            lineHeight: 1.5,
            maxWidth: '750px',
            display: 'flex',
          }}
        >
          Scheduling, outreach, and follow-ups — with full EHR context on every call.
        </div>

        {/* Bottom badges */}
        <div
          style={{
            display: 'flex',
            gap: 16,
            position: 'absolute',
            bottom: 80,
            left: 80,
          }}
        >
          {['HIPAA Compliant', 'BAA Included', '24/7 Coverage'].map((badge) => (
            <div
              key={badge}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: '#e0f0ef',
                color: '#2b7a78',
                padding: '10px 20px',
                borderRadius: 100,
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {badge}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: 80,
            right: 80,
            fontSize: 22,
            color: '#9c948b',
            display: 'flex',
          }}
        >
          usesaga.ai
        </div>
      </div>
    ),
    { ...size }
  );
}
