// Server-side only hidden form so Netlify detects the form at build time.
export default function NetlifyForm() {
  return (
    <form name="Contact" data-netlify="true" style={{ display: 'none' }}>
      <input type="hidden" name="form-name" value="Contact" />
      <input name="name" />
      <input name="email" />
      <input name="company" />
      <textarea name="message" />
    </form>
  );
}
