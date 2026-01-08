export default function NetlifyForm() {
  return (
    <form
      name="Contact"
      method="POST"
      data-netlify="true"
      hidden
    >
      <input type="hidden" name="form-name" value="Contact" />
      <input name="name" />
      <input name="email" />
      <input name="company" />
      <textarea name="message"></textarea>
    </form>
  );
}
