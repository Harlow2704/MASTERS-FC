/* Masters Security FC club crest artwork. Uses the uploaded club crest SVG. */
function clubCrest(width = 36) {
  const w = Math.max(24, Number(width) || 36);
  const src = (typeof D !== "undefined" && D.club?.logo) ? D.club.logo : "masters_fc_logo.svg";
  return `<img class="crest" src="${src}" width="${w}" height="${Math.round(w * 1.2)}" alt="Masters Security FC crest" loading="eager">`;
}
function shield(width = 36, suffix = "crest") { return clubCrest(width); }
function roundel(size = 160) {
  const s = Math.max(72, Number(size) || 160);
  const src = (typeof D !== "undefined" && D.club?.logo) ? D.club.logo : "masters_fc_logo.svg";
  return `<img class="crest crest-roundel" src="${src}" width="${s}" height="${s}" alt="Masters Security FC crest" loading="eager">`;
}
