import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Betting Bonuses & Casino Promotions',
  description: 'Exclusive welcome bonuses, free bets, and no-deposit offers from top rated operators.',
};

const promos = [
  {
    operator: 'Bet365',
    offer: '100% Welcome Bonus up to $200',
    type: 'Welcome Bonus',
    code: 'BET200',
    wagering: '3x',
    expires: '2025-12-31',
    rating: 5,
    tags: ['Sports', 'Casino'],
    color: '#22c55e',
    description: 'Deposit and bet £10 to receive £30 in free bets plus 50 free spins on selected slots.',
  },
  {
    operator: 'DraftKings',
    offer: 'Bet $5, Get $200 in Bonus Bets',
    type: 'Risk Free',
    code: 'DKBONUS',
    wagering: '1x',
    expires: '2025-06-30',
    rating: 5,
    tags: ['Sports'],
    color: '#3b82f6',
    description: 'New users only. Place a $5 bet on any sport and receive $200 in bonus bets win or lose.',
  },
  {
    operator: '888 Casino',
    offer: '£88 No Deposit Bonus',
    type: 'No Deposit',
    code: 'NDBONUS',
    wagering: '30x',
    expires: '2025-09-30',
    rating: 4,
    tags: ['Casino', 'Slots'],
    color: '#f59e0b',
    description: 'Get £88 free just for signing up — no deposit required. Play through once to keep your winnings.',
  },
  {
    operator: 'BetMGM',
    offer: '$1,500 First Bet Offer',
    type: 'Insurance',
    code: 'MGM1500',
    wagering: '1x',
    expires: '2025-08-31',
    rating: 4,
    tags: ['Sports', 'Casino'],
    color: '#8b5cf6',
    description: 'If your first bet loses, you receive the amount back as bonus bets up to $1,500.',
  },
  {
    operator: 'FanDuel',
    offer: 'Bet $5 Get $150',
    type: 'Bonus Bets',
    code: 'FD150',
    wagering: '1x',
    expires: '2025-07-31',
    rating: 4,
    tags: ['Sports'],
    color: '#06b6d4',
    description: 'Place just $5 on any sporting event and receive $150 in bonus bets immediately.',
  },
  {
    operator: 'PokerStars Casino',
    offer: '100% up to $600 + 100 Free Spins',
    type: 'Matched Deposit',
    code: 'STARS600',
    wagering: '20x',
    expires: '2025-10-31',
    rating: 4,
    tags: ['Casino', 'Poker', 'Slots'],
    color: '#ef4444',
    description: 'Massive welcome package combining matched deposit bonus with free spins on top slots.',
  },
];

const types = ['All', 'Welcome Bonus', 'No Deposit', 'Free Spins', 'Risk Free', 'Bonus Bets'];

export default function PromotionsPage() {
  return (
    <div style={{ paddingTop: '72px', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(180deg, var(--surface) 0%, var(--obsidian) 100%)',
        padding: '4rem 1.5rem 3rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <span style={{ color: 'var(--gold)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            🎁 Exclusive Deals
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Best Betting Bonuses & Promotions
          </h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '540px', lineHeight: 1.7, marginBottom: '2rem' }}>
            Handpicked offers verified for fair terms. We negotiate exclusive codes unavailable elsewhere.
          </p>

          {/* Filter */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {types.map((type, i) => (
              <button key={type} style={{
                padding: '0.5rem 1.125rem',
                borderRadius: '100px',
                border: '1px solid',
                borderColor: i === 0 ? 'rgba(245,158,11,0.5)' : 'var(--border)',
                background: i === 0 ? 'rgba(245,158,11,0.1)' : 'transparent',
                color: i === 0 ? 'var(--gold)' : 'var(--text-muted)',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
              }}>{type}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Promo cards */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {promos.map((promo, i) => (
            <div
              key={promo.operator}
              className="card-hover"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '1.5rem 2rem',
                display: 'grid',
                gridTemplateColumns: '1fr auto auto auto',
                gap: '1.5rem',
                alignItems: 'center',
              }}
            >
              {/* Operator */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800 }}>{promo.operator}</h3>
                  <span className="bet-badge" style={{ background: `${promo.color}22`, color: promo.color, border: `1px solid ${promo.color}44` }}>
                    {promo.type}
                  </span>
                  {promo.tags.map(t => (
                    <span key={t} className="bet-badge" style={{ background: 'var(--surface-2)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ fontWeight: 700, color: '#22c55e', fontSize: '1.125rem', marginBottom: '0.375rem' }}>{promo.offer}</div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>{promo.description}</p>
                <div style={{ marginTop: '0.5rem', display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <span>📋 Wagering: <strong style={{ color: '#f5f5f0' }}>{promo.wagering}</strong></span>
                  <span>📅 Expires: <strong style={{ color: '#f5f5f0' }}>{promo.expires}</strong></span>
                  <span>⭐ <strong style={{ color: '#f59e0b' }}>{'★'.repeat(promo.rating)}</strong></span>
                </div>
              </div>

              {/* Code */}
              <div style={{ textAlign: 'center', minWidth: '120px' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: '0.375rem' }}>Bonus Code</div>
                <div style={{
                  padding: '0.5rem 0.875rem',
                  background: 'var(--surface-2)',
                  border: '1px dashed rgba(245,158,11,0.4)',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  color: '#fbbf24',
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                }}>{promo.code}</div>
              </div>

              {/* CTA */}
              <a href="#" target="_blank" rel="noopener noreferrer sponsored" className="btn-gold" style={{ minWidth: '130px', textAlign: 'center', justifyContent: 'center' }}>
                Claim Now →
              </a>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div style={{
          marginTop: '3rem',
          padding: '1.5rem 2rem',
          background: 'rgba(239,68,68,0.06)',
          border: '1px solid rgba(239,68,68,0.15)',
          borderRadius: '12px',
          fontSize: '0.8125rem',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
        }}>
          <strong style={{ color: '#ef4444' }}>⚠️ Responsible Gambling Notice:</strong> All bonuses are subject to the operator's terms and conditions.
          18+ only. Please gamble responsibly. If you feel you may have a gambling problem, contact{' '}
          <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" style={{ color: '#ef4444' }}>BeGambleAware.org</a>{' '}
          or call the National Helpline: 0808 8020 133. BetPulse earns affiliate commissions from featured operators.
        </div>
      </div>
    </div>
  );
}
