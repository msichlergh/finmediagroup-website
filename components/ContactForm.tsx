'use client'

/**
 * Same markup as the legacy form, which was inert (`onsubmit="return false"`).
 * Still front-end only — the second pass wires it to a server action.
 *
 * Difference from legacy: every label is associated with its control, so the
 * form is usable with a screen reader and clicking a label focuses the field.
 */
export function ContactForm() {
  return (
    <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
      <div className="field">
        <label htmlFor="first-name">First name</label>
        <input id="first-name" name="firstName" type="text" autoComplete="given-name" placeholder="Jane" />
      </div>
      <div className="field">
        <label htmlFor="last-name">Last name</label>
        <input id="last-name" name="lastName" type="text" autoComplete="family-name" placeholder="Doe" />
      </div>
      <div className="field">
        <label htmlFor="email">Work email</label>
        <input id="email" name="email" type="email" autoComplete="email" placeholder="jane@company.com" />
      </div>
      <div className="field">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" autoComplete="organization" placeholder="Company Ltd" />
      </div>
      <div className="field full">
        <label htmlFor="topic">What can we help with?</label>
        <select id="topic" name="topic" defaultValue="Media listing or sponsorship">
          <option>Media listing or sponsorship</option>
          <option>Awards &amp; recognition</option>
          <option>Expos &amp; events</option>
          <option>Advisory</option>
          <option>Venture partnership</option>
          <option>Press</option>
          <option>Something else</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="A few lines about what you have in mind..."
        />
      </div>
      <div className="field full">
        <button className="btn btn-primary" type="submit" style={{ width: 'fit-content' }}>
          Send Message
        </button>
      </div>
    </form>
  )
}
