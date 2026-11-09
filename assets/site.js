// Subject filter, sheet zoom, and Twitch player loaded only on demand.
document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    const f = chip.dataset.f;
    document.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
    document.querySelectorAll(".matiere").forEach((s) => { s.hidden = f !== "all" && s.dataset.m !== f; });
  });
});

document.querySelectorAll(".zoom").forEach((btn) => {
  btn.addEventListener("click", () => {
    const box = document.createElement("div");
    box.className = "lightbox";
    const img = document.createElement("img");
    img.src = btn.dataset.full;
    img.alt = btn.querySelector("img").alt;
    box.append(img);
    const close = () => { box.remove(); document.removeEventListener("keydown", onKey); };
    const onKey = (e) => { if (e.key === "Escape") close(); };
    box.addEventListener("click", close);
    document.addEventListener("keydown", onKey);
    document.body.append(box);
  });
});

document.querySelectorAll(".player").forEach((p) => {
  p.querySelector("button").addEventListener("click", () => {
    const frame = document.createElement("iframe");
    frame.src = p.dataset.src;
    frame.allowFullscreen = true;
    frame.title = "Lecteur Twitch";
    p.replaceChildren(frame);
  });
});
