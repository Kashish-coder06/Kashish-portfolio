import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def generate_pdf():
    pdf_path = os.path.join("public", "Kashish_Kumari_CV.pdf")
    
    # 0.45 in margins for perfect single-page layout
    margin = 32
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=margin,
        rightMargin=margin,
        topMargin=26,
        bottomMargin=26
    )

    styles = getSampleStyleSheet()

    # Colors
    c_primary = colors.HexColor("#0f172a")     # Slate 900
    c_cyan = colors.HexColor("#0284c7")        # Sky / Cyan Accent
    c_text = colors.HexColor("#1e293b")        # Slate 800
    c_sub = colors.HexColor("#475569")         # Slate 600
    c_border = colors.HexColor("#cbd5e1")      # Slate 300

    # Custom styles
    style_name = ParagraphStyle(
        'CVName',
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=22,
        textColor=c_primary,
        alignment=1 # Centered
    )

    style_contact = ParagraphStyle(
        'CVContact',
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=c_sub,
        alignment=1 # Centered
    )

    style_section = ParagraphStyle(
        'CVSection',
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=c_cyan,
        spaceBefore=7,
        spaceAfter=2,
    )

    style_body = ParagraphStyle(
        'CVBody',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=c_text,
    )

    style_body_bold = ParagraphStyle(
        'CVBodyBold',
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11.5,
        textColor=c_primary,
    )

    style_bullet = ParagraphStyle(
        'CVBullet',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=c_text,
        leftIndent=10,
        firstLineIndent=-6,
    )

    elements = []

    # 1. Header
    elements.append(Paragraph("KASHISH KUMARI", style_name))
    elements.append(Spacer(1, 3))
    
    contact_text = (
        "Hyderabad, Sindh, Pakistan &nbsp;|&nbsp; "
        "kashish06kumari@gmail.com &nbsp;|&nbsp; "
        "<font color='#0284c7'><b>LinkedIn:</b></font> linkedin.com/in/kashishkumari06 &nbsp;|&nbsp; "
        "<font color='#0284c7'><b>Portfolio:</b></font> kashishkumari.netlify.app &nbsp;|&nbsp; "
        "<font color='#0284c7'><b>GitHub:</b></font> github.com/Kashish-coder06"
    )
    elements.append(Paragraph(contact_text, style_contact))
    elements.append(Spacer(1, 4))
    elements.append(HRFlowable(width="100%", thickness=1, color=c_border, spaceBefore=2, spaceAfter=4))

    # Helper for Section Titles
    def add_section_header(title):
        elements.append(Paragraph(title.upper(), style_section))
        elements.append(HRFlowable(width="100%", thickness=0.8, color=c_cyan, spaceBefore=1, spaceAfter=3))

    # 2. Professional Summary
    add_section_header("Professional Summary")
    summary_text = (
        "BS Information Technology student (CGPA 3.80/4.0) with hands-on experience in "
        "<b>Python, Generative AI, Large Language Models (LLMs), data analysis</b>, and graphic design. "
        "Proven experience building Retrieval-Augmented Generation (RAG) pipelines, FastAPI microservices, "
        "and Streamlit data applications. Seeking an internship or entry-level role in AI, data science, or software development."
    )
    elements.append(Paragraph(summary_text, style_body))

    # 3. Skills
    add_section_header("Skills")
    skills = [
        ("Programming Languages", "Python, SQL"),
        ("Data and Analytics", "Pandas, NumPy, Data Analysis, Data Visualization, Plotly, Tableau, Excel"),
        ("Generative AI", "LangChain, Retrieval-Augmented Generation (RAG), Large Language Models (LLMs), Groq API, Llama 3, Prompt Engineering"),
        ("Web and Backend", "FastAPI, REST APIs, Streamlit, Supabase, Leaflet GIS, Selenium"),
        ("AI Tools and Productivity", "AI Tools Proficiency, AI-Assisted Development (coding, research, content creation, workflow automation)"),
        ("Design Tools", "Adobe Photoshop, Adobe Illustrator, Canva, UI/UX Design"),
    ]
    for category, items in skills:
        p_text = f"<b>{category}:</b> {items}"
        elements.append(Paragraph(p_text, style_body))
        elements.append(Spacer(1, 1))

    # 4. Work Experience
    add_section_header("Work Experience")
    experiences = [
        (
            "Python + Generative AI and LangChain Intern",
            "Datheon (AI Systems and Automation Studio)",
            "Oct 2026 – Nov 2026",
            [
                "Built modular AI agents and prompt chains using LangChain and the Groq API.",
                "Developed automated workflows that reduced manual data processing effort."
            ]
        ),
        (
            "Volunteer Management Intern",
            "Alkhidmat Foundation Pakistan",
            "Jun 2026 – Present",
            [
                "Coordinated welfare operations and volunteer teams for regional relief and community initiatives.",
                "Streamlined communication and operational records to speed up resource dispatch."
            ]
        ),
        (
            "Generative AI Intern",
            "Borlo Labs",
            "Mar 2026 – Apr 2026",
            [
                "Researched and prototyped Retrieval-Augmented Generation (RAG) pipelines for contextual knowledge retrieval.",
                "Developed backend microservices using FastAPI with structured response schemas."
            ]
        ),
        (
            "Graphic Designer and Computer Operator Intern",
            "Digital Sindh Institute of Management and Technology",
            "Oct 2024",
            [
                "Designed marketing campaigns, event banners, and social media visuals using Photoshop and Illustrator; managed administrative data workflows and digital assets."
            ]
        )
    ]

    for role, company, dates, bullets in experiences:
        t_data = [
            [
                Paragraph(f"<b>{role}</b> | <font color='#0284c7'><b>{company}</b></font>", style_body),
                Paragraph(f"<font color='#475569'><b>{dates}</b></font>", ParagraphStyle('RAlign', parent=style_body, alignment=2))
            ]
        ]
        t = Table(t_data, colWidths=[410, 138])
        t.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 1),
            ('TOPPADDING', (0,0), (-1,-1), 1),
        ]))
        elements.append(t)
        for b in bullets:
            elements.append(Paragraph(f"• &nbsp;{b}", style_bullet))
        elements.append(Spacer(1, 2))

    # 5. Projects
    add_section_header("Projects")
    projects = [
        (
            "Raasta: Civic Issue Reporting and Mapping Platform",
            "React, TypeScript, Leaflet GIS, Supabase, Tailwind CSS",
            [
                "Developed a real-time platform, using AI-assisted development, where citizens can report local infrastructure issues with geographic coordinates.",
                "Implemented an interactive Leaflet map explorer, community upvoting, and an admin moderation dashboard."
            ]
        ),
        (
            "WhatsApp Chat Analyzer",
            "Python, Streamlit, Pandas, Plotly, Regular Expressions",
            [
                "Built an analytics web app that processes exported Android and iOS chat files and extracts engagement statistics, activity heatmaps, emoji distributions, and word clouds.",
                "Deployed on Streamlit Cloud, parsing files dynamically without storing data on the server."
            ]
        ),
        (
            "KashishBot: Conversational AI Chatbot",
            "Python, Groq API, Llama 3, Prompt Engineering",
            [
                "Built a fast streaming AI chatbot using Groq inference acceleration.",
                "Designed custom system prompts with context retention for task guidance."
            ]
        )
    ]

    for p_name, p_tech, bullets in projects:
        t_data = [
            [
                Paragraph(f"<b>{p_name}</b>", style_body),
                Paragraph(f"<font color='#0284c7'><b>{p_tech}</b></font>", ParagraphStyle('RAlignP', parent=style_body, alignment=2, fontSize=7.5))
            ]
        ]
        t = Table(t_data, colWidths=[290, 258])
        t.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 1),
            ('TOPPADDING', (0,0), (-1,-1), 1),
        ]))
        elements.append(t)
        for b in bullets:
            elements.append(Paragraph(f"• &nbsp;{b}", style_bullet))
        elements.append(Spacer(1, 2))

    # 6. Education
    add_section_header("Education")
    edu_list = [
        ("Bachelor of Science in Information Technology (BS IT)", "Government College University Hyderabad (GCUH)", "2024 – 2027 (Expected) | CGPA: 3.80 / 4.0"),
        ("Coursework", "Data Structures and Algorithms, OOP, Database Management Systems, Software Engineering", ""),
        ("Advanced Certification in Data Science and Artificial Intelligence", "Saylani Mass I.T. Training (S.M.I.T)", "2026 – Present"),
        ("Diploma in Information Technology and Computer Operator", "Govt. Vocational Training Center (Girls), Qasimabad", "2024"),
        ("Multimedia Graphic Design Course", "Benazir Bhutto Shaheed Youth Development Program (BBSYDP)", "2024"),
    ]

    for item, inst, detail in edu_list:
        if item == "Coursework":
            elements.append(Paragraph(f"&nbsp;&nbsp;&nbsp;&nbsp;<b>Coursework:</b> {inst}", style_body))
        else:
            line = f"<b>{item}</b> | {inst}"
            if detail:
                line += f" | <font color='#475569'>{detail}</font>"
            elements.append(Paragraph(f"• &nbsp;{line}", style_bullet))
        elements.append(Spacer(1, 1))

    # 7. Certifications and Awards
    add_section_header("Certifications and Awards")
    certs_text = (
        "<b>Hackathon 2026-2027 Certificate of Participation for Raasta</b>, Denning Hyderabad Tech Gen Society @ DITE; "
        "<b>Data Analytics Job Simulation</b>, Deloitte Australia (Forage); "
        "<b>Pandas Data Analysis Certification</b>, Kaggle; "
        "<b>HCAI AI V4.0 Certification</b>, Huawei Academic Program."
    )
    elements.append(Paragraph(certs_text, style_body))

    # Build PDF
    doc.build(elements)
    print("PDF generated successfully:", pdf_path)

if __name__ == "__main__":
    generate_pdf()
