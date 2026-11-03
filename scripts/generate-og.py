#!/usr/bin/env python3
"""Generate the 1200x630 Open Graph image used by each Carlier site."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
W, H = 1200, 630
BG = "#0b0d0f"
GRID = "#171b1f"
TEXT = "#f2f4f6"
MUTED = "#a8adb5"
FONT_DIR = Path("/usr/share/fonts/truetype/dejavu")
FONT_BOLD = FONT_DIR / "DejaVuSans-Bold.ttf"
FONT_REG = FONT_DIR / "DejaVuSans.ttf"
FONT_MONO = FONT_DIR / "DejaVuSansMono.ttf"


def font(path, size):
    try:
        return ImageFont.truetype(str(path), size)
    except OSError:
        return ImageFont.load_default()


def wrap(draw, text, fnt, max_width):
    words, lines, line = text.split(), [], ""
    for word in words:
        candidate = f"{line} {word}".strip()
        if draw.textlength(candidate, font=fnt) <= max_width:
            line = candidate
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


SITES = [
    dict(
        path="images/og-1200x630.png",
        eyebrow="CARLIER.SITE",
        title="Software engineering\n& product development",
        subtitle="Mobile · Web · AI systems · Cybersecurity · Infrastructure",
        url="carlier.site",
        accent="#8dff4f",
    ),
    dict(
        path="consulting/images/og-1200x630.png",
        eyebrow="CARLIER CONSULTING",
        title="Engineering for\nCTOs & founders",
        subtitle="Product engineering · AI systems · Cloud · Cybersecurity",
        url="carlier.site/consulting",
        accent="#8dff4f",
    ),
    dict(
        path="apps/images/og-1200x630.png",
        eyebrow="CARLIER APPS",
        title="Language learning\n& coin identification",
        subtitle="Learn Chinese · Cantonese · Thai · Coin Identifier",
        url="carlier.site/apps",
        accent="#8dff4f",
    ),
    dict(
        path="hosting/images/og-1200x630.png",
        eyebrow="CARLIER HOSTING",
        title="Managed hosting\nfor Odoo & AI agents",
        subtitle="Backups · Updates · Monitoring · Support",
        url="carlier.site/hosting",
        accent="#8dff4f",
    ),
    dict(
        path="hosting/odoo/images/og-1200x630.png",
        eyebrow="CARLIER HOSTING",
        title="Managed Odoo\nCommunity hosting",
        subtitle="Unlimited users · Automated SSL · Secure updates",
        url="carlier.site/hosting/odoo",
        accent="#8dff4f",
    ),
    dict(
        path="ai-identifier/images/og-1200x630.png",
        eyebrow="AI IDENTIFIER",
        title="Identify anything\nwith your camera",
        subtitle="On-device collections · AI-powered recognition",
        url="carlier.site/ai-identifier",
        accent="#8dff4f",
    ),
    dict(
        path="ai-live-agent/images/og-1200x630.png",
        eyebrow="AI LIVE AGENT",
        title="A live AI agent\nin your pocket",
        subtitle="Real-time conversation · Private by default",
        url="carlier.site/ai-live-agent",
        accent="#8dff4f",
    ),
    dict(
        path="cybersecurity/images/og-1200x630.png",
        eyebrow="CARLIER SECURITY TEAM",
        title="Offensive defense.\nElite protection.",
        subtitle="Pen testing · Threat intel · Incident response · 24/7 SOC",
        url="carlier.site/cybersecurity",
        accent="#00e5ff",
    ),
]


def build(site):
    accent = site["accent"]
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)

    # Subtle technical grid.
    for x in range(0, W, 48):
        draw.line((x, 0, x, H), fill=GRID, width=1)
    for y in range(0, H, 48):
        draw.line((0, y, W, y), fill=GRID, width=1)

    # Accent frame and glow blocks.
    draw.rectangle((0, 0, 14, H), fill=accent)
    draw.rectangle((W - 190, 0, W, 8), fill=accent)
    draw.rectangle((W - 8, 0, W, 190), fill=accent)
    draw.rectangle((82, 512, 1118, 513), fill="#2b3037")

    # Wordmark / shield mark.
    draw.rounded_rectangle((82, 66, 146, 130), radius=14, outline=accent, width=4)
    draw.line((100, 98, 128, 98), fill=accent, width=5)
    draw.line((114, 84, 114, 112), fill=accent, width=5)
    draw.text((164, 82), "CARLIER", font=font(FONT_BOLD, 30), fill=TEXT)
    draw.text(
        (164, 116),
        site["eyebrow"],
        font=font(FONT_MONO, 20),
        fill=accent,
    )

    # Headline.
    y = 184
    title_font = font(FONT_BOLD, 76)
    for line in site["title"].split("\n"):
        draw.text((82, y), line, font=title_font, fill=TEXT)
        y += 88

    # Supporting copy.
    sub_font = font(FONT_REG, 27)
    sub_lines = wrap(draw, site["subtitle"], sub_font, 960)
    y = max(y + 8, 468)
    for line in sub_lines[:2]:
        draw.text((82, y), line, font=sub_font, fill=MUTED)
        y += 36

    # Footer.
    draw.text((82, 548), site["url"], font=font(FONT_MONO, 26), fill=accent)
    draw.text(
        (W - 82, 550),
        "SOFTWARE · AI · INFRASTRUCTURE",
        font=font(FONT_MONO, 16),
        fill=MUTED,
        anchor="ra",
    )

    out = ROOT / site["path"]
    out.parent.mkdir(parents=True, exist_ok=True)
    img.save(out, "PNG", optimize=True)
    print(f"wrote {out} ({out.stat().st_size / 1024:.1f} KB)")


if __name__ == "__main__":
    for site in SITES:
        build(site)
