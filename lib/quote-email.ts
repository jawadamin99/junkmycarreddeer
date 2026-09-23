export type QuoteLead = {
  name: string;
  phone: string;
  vehicle: string;
  city: string;
  email: string;
  message: string;
  sourcePage: string;
};

const brandRed = "#ed1c24";
const ink = "#111214";

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);

const display = (value: string, fallback = "Not provided") =>
  escapeHtml(value || fallback).replace(/\n/g, "<br>");

export function buildQuoteEmail(lead: QuoteLead, reference: string, submittedAt: Date) {
  const phoneHref = `tel:${lead.phone.replace(/[^\d+]/g, "")}`;
  const sourcePath = lead.sourcePage.startsWith("/") && !lead.sourcePage.startsWith("//")
    ? lead.sourcePage
    : "/";
  const sourceUrl = new URL(sourcePath, "https://www.junkmycarreddeer.ca").toString();
  const submitted = new Intl.DateTimeFormat("en-CA", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Edmonton",
  }).format(submittedAt);

  const text = [
    "NEW CASH OFFER REQUEST",
    `Reference: ${reference}`,
    `Submitted: ${submitted} (Alberta time)`,
    "",
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email || "Not provided"}`,
    `Vehicle: ${lead.vehicle}`,
    `City or town: ${lead.city}`,
    `Notes: ${lead.message || "None"}`,
    `Source page: ${sourceUrl}`,
  ].join("\n");

  const html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;background:#f1f0ed;color:${ink};font-family:Arial,Helvetica,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(lead.name)} wants an offer for ${escapeHtml(lead.vehicle)} in ${escapeHtml(lead.city)}.</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f1f0ed;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:#ffffff;border-collapse:collapse;border-top:5px solid ${brandRed};box-shadow:0 12px 34px rgba(17,18,20,.10);">
        <tr><td style="background:${ink};padding:28px 32px;">
          <img src="https://www.junkmycarreddeer.ca/junk-my-car-red-deer-logo.png" width="230" alt="Junk My Car Red Deer" style="display:block;max-width:100%;height:auto;">
          <p style="margin:22px 0 5px;color:#ff4a51;font-size:13px;line-height:1.4;font-weight:800;letter-spacing:2px;text-transform:uppercase;">New website inquiry</p>
          <h1 style="margin:0;color:#ffffff;font-size:30px;line-height:1.15;">Cash offer request</h1>
          <p style="margin:10px 0 0;color:#b9b9bb;font-size:15px;line-height:1.55;">${escapeHtml(submitted)} · Ref ${escapeHtml(reference)}</p>
        </td></tr>
        <tr><td style="padding:30px 32px 12px;">
          <p style="margin:0 0 7px;color:#777;font-size:12px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;">Vehicle</p>
          <h2 style="margin:0;font-size:27px;line-height:1.25;color:${ink};">${display(lead.vehicle)}</h2>
          <p style="margin:8px 0 0;color:#5b5c60;font-size:17px;line-height:1.5;">Pickup in <strong>${display(lead.city)}</strong></p>
        </td></tr>
        <tr><td style="padding:14px 32px 8px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0;background:#f7f6f3;border:1px solid #e2dfda;">
            <tr>
              <td style="width:50%;padding:20px;border-right:1px solid #e2dfda;vertical-align:top;">
                <p style="margin:0 0 7px;color:#777;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;">Customer</p>
                <p style="margin:0;font-size:18px;line-height:1.5;font-weight:700;">${display(lead.name)}</p>
              </td>
              <td style="width:50%;padding:20px;vertical-align:top;">
                <p style="margin:0 0 7px;color:#777;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;">Phone</p>
                <a href="${escapeHtml(phoneHref)}" style="color:${brandRed};font-size:18px;line-height:1.5;font-weight:800;text-decoration:none;">${display(lead.phone)}</a>
              </td>
            </tr>
          </table>
        </td></tr>
        <tr><td style="padding:16px 32px 8px;">
          <p style="margin:0 0 7px;color:#777;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;">Email</p>
          ${lead.email ? `<a href="mailto:${escapeHtml(lead.email)}" style="color:${ink};font-size:17px;line-height:1.5;font-weight:700;">${display(lead.email)}</a>` : `<p style="margin:0;color:#777;font-size:17px;">Not provided</p>`}
        </td></tr>
        <tr><td style="padding:16px 32px;">
          <p style="margin:0 0 7px;color:#777;font-size:12px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;">Condition, access or timing notes</p>
          <div style="padding:18px 20px;background:#f7f6f3;border-left:4px solid ${brandRed};color:#343538;font-size:16px;line-height:1.65;">${display(lead.message, "No additional notes")}</div>
        </td></tr>
        <tr><td style="padding:8px 32px 30px;">
          <table role="presentation" cellspacing="0" cellpadding="0"><tr>
            <td style="background:${brandRed};"><a href="${escapeHtml(phoneHref)}" style="display:inline-block;padding:15px 22px;color:#fff;font-size:15px;font-weight:800;text-decoration:none;text-transform:uppercase;letter-spacing:.6px;">Call ${display(lead.name)}</a></td>
            ${lead.email ? `<td style="padding-left:12px;"><a href="mailto:${escapeHtml(lead.email)}?subject=${encodeURIComponent(`Your ${lead.vehicle} cash offer`) }" style="display:inline-block;padding:14px 21px;border:1px solid #c9c7c2;color:${ink};font-size:15px;font-weight:800;text-decoration:none;text-transform:uppercase;letter-spacing:.6px;">Reply by email</a></td>` : ""}
          </tr></table>
        </td></tr>
        <tr><td style="padding:20px 32px;background:#eceae5;border-top:1px solid #dedbd5;color:#68696d;font-size:13px;line-height:1.6;">
          Submitted from <a href="${escapeHtml(sourceUrl)}" style="color:${ink};">${escapeHtml(sourceUrl)}</a><br>
          This message was generated by the quote form at junkmycarreddeer.ca.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  return { html, text, submitted };
}
