import { Mark } from './Mark'
import { LEADERSHIP, type TeamMember } from '@/lib/team'

/** Headshot, or the monogram until one is supplied. */
function Avatar({ member, size = 'md' }: { member: TeamMember; size?: 'sm' | 'md' }) {
  return (
    <div className={`avatar avatar-${size}`}>
      {member.photo ? (
        // eslint-disable-next-line @next/next/no-img-element -- headshots are plain static files
        <img src={member.photo} alt={member.name} />
      ) : (
        <Mark />
      )}
    </div>
  )
}

/** Name + role, with the avatar alongside. Used under the CEO quote. */
export function Byline({ member }: { member: TeamMember }) {
  return (
    <div className="byline">
      <Avatar member={member} size="sm" />
      <div>
        <p className="byline-name">{member.name}</p>
        <p className="byline-role">{member.role}, FinMedia Group</p>
      </div>
    </div>
  )
}

export function TeamSection() {
  return (
    <section className="sec sec-tight">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Leadership</span>
          <h2>The people behind the network.</h2>
          <p>
            Operators, creators, and strategists with deep roots in fintech, prop trading, and
            brokerage — the same team that built our own platforms.
          </p>
        </div>

        <div className="team">
          {LEADERSHIP.map((member) => (
            <article className="member reveal" key={member.name}>
              <Avatar member={member} />
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              {member.bio && <p className="member-bio">{member.bio}</p>}
              {member.linkedin && (
                <a
                  className="member-link"
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
