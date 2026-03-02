import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const alt = 'Saga AI — Turn Every Conversation Into Growth';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const [playfairBold, playfairBoldItalic] = await Promise.all([
    readFile(join(process.cwd(), 'src/app/fonts/PlayfairDisplay-Bold.ttf')),
    readFile(join(process.cwd(), 'src/app/fonts/PlayfairDisplay-BoldItalic.ttf')),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          background: '#f5f0ea',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          position: 'relative',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '5px',
            background: '#2b7a78',
            display: 'flex',
          }}
        />

        {/* Logo */}
        <div
          style={{
            fontFamily: 'Playfair Display',
            fontSize: 36,
            fontWeight: 700,
            color: '#2d2926',
            display: 'flex',
          }}
        >
          saga
        </div>

        {/* Middle: headline + subtitle */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              fontFamily: 'Playfair Display',
              fontSize: 72,
              fontWeight: 700,
              color: '#2d2926',
              lineHeight: 1.05,
              letterSpacing: '-1px',
              display: 'flex',
              flexWrap: 'wrap',
              maxWidth: '850px',
            }}
          >
            Turn every conversation into{' '}
            <span style={{ color: '#2b7a78', fontStyle: 'italic' }}>growth.</span>
          </div>

          <div
            style={{
              fontSize: 24,
              color: '#6d635a',
              lineHeight: 1.5,
              display: 'flex',
              maxWidth: '640px',
            }}
          >
            AI voice agents that handle scheduling, outreach, and follow-ups — with full EHR context on every call.
          </div>
        </div>

        {/* Bottom: badges + domain */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', gap: 12 }}>
            {['HIPAA Compliant', 'BAA Included', '24/7 Coverage'].map((badge) => (
              <div
                key={badge}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: '#e0f0ef',
                  color: '#2b7a78',
                  padding: '8px 18px',
                  borderRadius: 100,
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                {badge}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 20, color: '#9c948b', display: 'flex' }}>
            usesaga.ai
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Playfair Display',
          data: playfairBold,
          style: 'normal',
          weight: 700,
        },
        {
          name: 'Playfair Display',
          data: playfairBoldItalic,
          style: 'italic',
          weight: 700,
        },
      ],
    }
  );
}
