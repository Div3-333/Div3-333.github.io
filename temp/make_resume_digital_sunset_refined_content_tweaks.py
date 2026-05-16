from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor
from reportlab.pdfbase.pdfmetrics import stringWidth, registerFont
from reportlab.pdfbase.ttfonts import TTFont

OUT = '/mnt/data/Divyanshu_Sharma_Digital_Sunset_Resume_v7.pdf'
W, H = A4

# Font registration. Do not distribute the font files; they are only embedded in the PDF.
try:
    registerFont(TTFont('Inter', '/usr/share/fonts/opentype/inter/Inter-Regular.otf'))
    registerFont(TTFont('Inter-Bold', '/usr/share/fonts/opentype/inter/Inter-Bold.otf'))
    registerFont(TTFont('Inter-Italic', '/usr/share/fonts/opentype/inter/Inter-Italic.otf'))
    FONT = 'Inter'
    FONT_BOLD = 'Inter-Bold'
    FONT_ITALIC = 'Inter-Italic'
except Exception:
    FONT = 'Helvetica'
    FONT_BOLD = 'Helvetica-Bold'
    FONT_ITALIC = 'Helvetica-Oblique'

# Digital sunset palette - balanced, not monochrome orange.
BG = HexColor('#fff8f1')          # warm paper
INK = HexColor('#201722')         # dusk ink
DUSK = HexColor('#2d1838')        # deep violet
PLUM = HexColor('#56315f')
MUTED = HexColor('#6f6470')
SOFT_MUTED = HexColor('#8a7d83')
CORAL = HexColor('#e9654f')
ROSE = HexColor('#c84d7b')
GOLD = HexColor('#f1b657')
AMBER_PALE = HexColor('#fff0dc')
LAVENDER = HexColor('#eee6f1')
LINE = HexColor('#ead9cd')
LINE_DARK = HexColor('#d6bdaf')
WHITE = HexColor('#ffffff')

c = canvas.Canvas(OUT, pagesize=A4)
c.setTitle('Divyanshu Sharma Resume')
c.setAuthor('Divyanshu Sharma')

M = 30
CW = W - 2 * M

# ---------- utilities ----------
def sw(text, font, size):
    return stringWidth(text, font, size)

def wrap(text, font, size, max_width):
    words = text.split(' ')
    lines, line = [], ''
    for word in words:
        candidate = word if not line else line + ' ' + word
        if sw(candidate, font, size) <= max_width:
            line = candidate
        else:
            if line:
                lines.append(line)
            if sw(word, font, size) > max_width:
                piece = ''
                for ch in word:
                    if sw(piece + ch, font, size) <= max_width:
                        piece += ch
                    else:
                        if piece:
                            lines.append(piece)
                        piece = ch
                line = piece
            else:
                line = word
    if line:
        lines.append(line)
    return lines

def draw_text(x, y, text, font=FONT, size=8.45, color=INK, max_width=None, leading=None):
    if leading is None:
        leading = size * 1.22
    c.setFont(font, size)
    c.setFillColor(color)
    lines = wrap(text, font, size, max_width) if max_width else text.split('\n')
    for line in lines:
        c.drawString(x, y, line)
        y -= leading
    return y, len(lines)

def draw_rule(y, color=LINE, w=0.45):
    c.setStrokeColor(color)
    c.setLineWidth(w)
    c.line(M, y, W - M, y)

def section(y, title):
    # Consistent section treatment everywhere: no isolated boxes, no mismatched cards.
    label = title.upper()
    c.setFont(FONT_BOLD, 9.0)
    c.setFillColor(PLUM)
    c.drawString(M, y, label)
    tw = sw(label, FONT_BOLD, 9.0)
    c.setStrokeColor(LINE)
    c.setLineWidth(0.55)
    c.line(M + tw + 9, y + 3.0, W - M, y + 3.0)
    c.setStrokeColor(CORAL)
    c.setLineWidth(1.05)
    c.line(M + tw + 9, y + 3.0, min(M + tw + 60, W - M), y + 3.0)
    return y - 17.0

def date_text(y, text):
    c.setFont(FONT_BOLD, 7.55)
    c.setFillColor(PLUM)
    c.drawRightString(W - M, y, text)

def draw_badge(x, y, text):
    # Small, consistent employment-type badge. Anchored to the role line so it does
    # not disturb the left/right sightlines of the section.
    pad_x = 5.0
    size = 6.7
    tw = sw(text, FONT_BOLD, size)
    bw = tw + pad_x * 2
    bh = 10.0
    c.setFillColor(LAVENDER)
    c.setStrokeColor(LINE_DARK)
    c.setLineWidth(0.45)
    c.roundRect(x, y - 2.3, bw, bh, 4.8, fill=1, stroke=1)
    c.setFont(FONT_BOLD, size)
    c.setFillColor(PLUM)
    c.drawString(x + pad_x, y + 0.3, text)
    return bw

def entry_header(y, org, role=None, date=None, badge=None):
    c.setFont(FONT_BOLD, 8.55)
    c.setFillColor(INK)
    c.drawString(M, y, org)
    if date:
        date_text(y, date)
    y -= 11.35
    if role:
        c.setFont(FONT_ITALIC, 7.75)
        c.setFillColor(MUTED)
        c.drawString(M, y, role)
        if badge:
            bx = M + sw(role, FONT_ITALIC, 7.75) + 7.5
            draw_badge(bx, y, badge.upper())
        y -= 11.15
    return y

def bullet(y, text, x=M + 13, max_width=CW - 13, size=8.35, leading=10.45, after=3.2, dot_color=ROSE):
    # One optical bullet column and one optical text column for every bullet.
    c.setFillColor(dot_color)
    c.circle(x - 6.2, y + 3.05, 0.88, fill=1, stroke=0)
    y, _ = draw_text(x, y, text, FONT, size, INK, max_width, leading)
    return y - after

def label_value_row(y, label, value, label_x, value_x, max_value_width, size=7.95, leading=9.6, after=3.4):
    # Fixed value_x makes the skills section maintain one clean visual line of sight.
    c.setFillColor(ROSE)
    c.circle(M + 7.0, y + 3.05, 0.84, fill=1, stroke=0)
    c.setFont(FONT_BOLD, size)
    c.setFillColor(PLUM)
    c.drawString(label_x, y, label)
    y, _ = draw_text(value_x, y, value, FONT, size, INK, max_value_width, leading)
    return y - after

# ---------- background ----------
c.setFillColor(BG)
c.rect(0, 0, W, H, fill=1, stroke=0)

# Header: premium digital sunset without noisy artifacts.
header_y = H - 91
c.setFillColor(DUSK)
c.setStrokeColor(DUSK)
c.roundRect(M, header_y, CW, 62, 16, fill=1, stroke=0)

# soft horizon bands inside header - restrained and purposeful.
c.setFillColor(HexColor('#3a2048'))
c.roundRect(M + 3, header_y + 3, CW - 6, 18, 12, fill=1, stroke=0)
c.setFillColor(CORAL)
c.roundRect(M + 14, header_y + 14, 4.2, 34, 2.1, fill=1, stroke=0)
c.setFillColor(GOLD)
c.roundRect(M + 21, header_y + 21, 4.2, 23, 2.1, fill=1, stroke=0)
c.setFillColor(ROSE)
c.roundRect(M + 28, header_y + 26, 4.2, 14, 2.1, fill=1, stroke=0)

c.setFont(FONT_BOLD, 21.4)
c.setFillColor(WHITE)
c.drawString(M + 46, H - 58.5, 'Divyanshu Sharma')

contact_1 = 'Melbourne, VIC, Australia'
contact_2 = 'dsha0098@student.monash.edu | linkedin.com/in/divyanshu-sharma-b08517283 | github.com/Div3-333'
c.setFont(FONT, 7.8)
c.setFillColor(HexColor('#f5ecec'))
c.drawRightString(W - M - 14, H - 55.2, contact_1)
c.setFont(FONT, 7.25)
c.setFillColor(HexColor('#eadde7'))
c.drawRightString(W - M - 14, H - 70.4, contact_2)

x2 = W - M - 14
c.linkURL('mailto:dsha0098@student.monash.edu', (x2 - sw(contact_2, FONT, 7.25), H - 74, x2 - sw(' | linkedin.com/in/divyanshu-sharma-b08517283 | github.com/Div3-333', FONT, 7.25), H - 64), relative=0)
c.linkURL('https://linkedin.com/in/divyanshu-sharma-b08517283', (x2 - sw('linkedin.com/in/divyanshu-sharma-b08517283 | github.com/Div3-333', FONT, 7.25), H - 74, x2 - sw(' | github.com/Div3-333', FONT, 7.25), H - 64), relative=0)
c.linkURL('https://github.com/Div3-333', (x2 - sw('github.com/Div3-333', FONT, 7.25), H - 74, x2, H - 64), relative=0)

y = H - 119

# ---------- content ----------
summary = "Cybersecurity and Data Science student at Monash University. My studies gave me the frameworks; real infrastructure migrations, live vulnerability identification, and briefing non-technical stakeholders on commercial risk made them real. I don't measure knowledge by what I've learned but by what it lets me do for others. I'm applying to Palo Alto Networks because I want that same experience at a scale where the stakes actually matter."
y = section(y, 'Professional Summary')
y = draw_text(M, y, summary, FONT, 9.2, INK, CW, 12.0)[0] - 16.5

# Education - same visual language as every other section, no isolated orange box.
y = section(y, 'Education')
y = entry_header(y, 'Monash University | Melbourne, Australia', 'Bachelor of Computer Science', 'Expected Graduation: Nov 2027')
for b in [
    'Academic Standing: GPA: 3.778 / 4.0 | WAM: 87.3',
    'Specialization: Data Science & AI | Major: Cybersecurity',
    'Core Competencies: Network Infrastructure & Systems Administration, Software Security & Threat Modeling, Algorithmic Efficiency, Relational Database Architecture.',
    'Relevant Coursework: OSI and TCP/IP Network Architectures, LAN/WAN Configuration, Vulnerability Analysis, Cryptographic Protocols, Secure Software Development, Advanced Data Structures.'
]:
    y = bullet(y, b, M + 13, CW - 13, 8.75, 11.6, 4.65, ROSE)
y -= 9.8

# Professional Experience
y = section(y, 'Professional Experience')
y = entry_header(y, 'ProCare Solar | Melbourne, Australia', 'Technical Advisor & Digital Infrastructure Specialist', 'Apr 2026 to Present', 'Casual')
for b in [
    'Led a comprehensive digital infrastructure audit and penetration test, proactively identifying and eradicating 7 Critical and High-severity vulnerabilities, including exposed Webhooks and unpatched CVEs.',
    'Architected and executed a secure cloud migration to Vercel, reducing mobile Total Blocking Time (TBT) by over 90% and achieving verified 100/100 Lighthouse scores for Accessibility and SEO.',
    'Authored and presented liability and technical debt reports to non-technical business owners, translating complex cybersecurity risks into commercial impact.'
]:
    y = bullet(y, b, M + 13, CW - 13, 8.78, 11.62, 4.7, ROSE)
y -= 13.4

y = entry_header(y, 'North Shore Coaching College | Melbourne, Australia', 'Primary & High School Tutor', 'Feb 2026 to Present', 'Casual')
for b in [
    'Acted as the primary point of contact for parents and faculty, providing regular progress reports and translating academic metrics into clear, actionable feedback.',
    'Translated complex academic subjects into accessible frameworks for diverse student cohorts, managing concurrent stakeholder communication across parents, students, and faculty simultaneously.'
]:
    y = bullet(y, b, M + 13, CW - 13, 8.78, 11.62, 4.7, ROSE)
y -= 14.8

# Technical Projects
y = section(y, 'Technical Projects')
y = entry_header(y, 'Wrought-Iron (Secure Data Wrangling & Analysis Desktop Application)', 'Tech Stack: Rust, Python, Django, SQLite, HTML, CSS, JavaScript, PyInstaller', None)
for b in [
    'Architected and shipped a cross-platform desktop application using a Rust/Python hybrid backend and a Django web framework layer, packaged into native executables for both Windows and macOS.',
    'Delivered a production-ready, security-hardened tool across 3 versioned releases, explicitly auditing and eliminating backdoor vulnerabilities between build iterations, demonstrating an end-to-end understanding of secure software development lifecycle (SSDLC) principles.'
]:
    y = bullet(y, b, M + 13, CW - 13, 8.78, 11.62, 4.7, ROSE)
y -= 14.8

# Skills - fixed label/value columns, so every list/value begins on the same visual axis.
y = section(y, 'Skills')
label_x = M + 13
value_x = M + 190
value_w = W - M - value_x
for label, value in [
    ('Sales Engineering & Business:', 'Stakeholder Communication, Risk/Liability Translation, Technical Mentorship, Client-Facing Discovery.'),
    ('Technical & Networking:', 'Python, SQL, Linux/Bash, Wireshark, Cisco Packet Tracer, TCP/IP & OSI Models, LAN/WAN Architectures, Threat Modeling, Cryptographic Protocols, Git'),
    ('Technical Translation & Communication:', 'Linguistics and music background enabling rapid pattern recognition across complex system architectures and fluent translation of technical concepts into business language.')
]:
    y = label_value_row(y, label, value, label_x, value_x, value_w, 8.25, 10.75, 4.8)

# Crisp digital sunset footer; no filler art, no empty-bottom look.
c.setStrokeColor(DUSK)
c.setLineWidth(1.0)
c.line(M, 25.2, W - M, 25.2)
c.setStrokeColor(CORAL)
c.setLineWidth(1.15)
c.line(M, 23.0, W - M, 23.0)
c.setStrokeColor(GOLD)
c.setLineWidth(0.75)
c.line(M, 21.0, W - M, 21.0)

if y < 28:
    print(f'WARNING: content low on page: y={y:.1f}')
else:
    print(f'final y={y:.1f}')

c.showPage()
c.save()
print(OUT)
