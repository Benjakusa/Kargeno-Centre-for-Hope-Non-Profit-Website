Kar Geno Website
Overview
The Kar Geno Website is a community-focused platform for Kar Geno - Centre for Hope, a community-based organization in Kisumu, Western Kenya. The website showcases Kar Geno's initiatives, including the Women's Microfinance Fund, Hope Designers, Moringa Cooperative, Organic Poultry, Children's Programme, and Health Programme. It aims to engage visitors, promote community empowerment projects, and encourage donations and volunteer participation.
This project was developed by Benard Oloo Ochieng to create a modern, responsive, and visually appealing website that reflects Kar Geno's mission of uplifting marginalized communities through sustainable initiatives.
Features

Responsive Design: Fully responsive across devices (desktop, tablet, mobile) with breakpoints at 992px, 768px, and 576px.
Consistent Theme: Green color scheme (#4CAF50 grass green, #26A69A teal, #8BC34A lime, #FFCA28 mustard, #FFD700 gold) with Poppins font and black footer.
Interactive Elements:
Sticky header with hamburger menu for mobile.
Parallax hero banners with green gradient overlays.
Hexagonal cards for project highlights with staggered animations.
Smooth scrolling for in-page navigation.
Hover effects on buttons, logos, and social icons.


Sections:
Header: Logo, navigation with dropdown for projects, and donate button.
Hero: Parallax banner with project-specific images and call-to-action buttons.
About: Introduces each project with textured backgrounds (e.g., feather, paper, stethoscope).
Focus Areas/Activities: Hexagonal cards showcasing key project components (e.g., poultry farming, children's activities, health education).
Get Involved: Encourages donations and volunteering with prominent CTA buttons.
Footer: Four-column layout with About, Quick Links, Contact, and Social Media.


External Resources:
Font Awesome 6.4.0 for icons.
Google Fonts Poppins (300, 400, 500, 600, 700).
Transparent Textures for section backgrounds (feather, paper, dots, stethoscope).



Project Structure
The project is organized as follows:
kar-geno-website/
├── index.html              # Homepage
├── about.html              # About Kar Geno
├── women.html              # Women's Microfinance Fund
├── hope.html               # Hope Designers
├── moringa.html            # Moringa Cooperative
├── organic.html            # Organic Poultry
├── child.html              # Children's Programme
├── health.html             # Health Programme
├── styles/
│   ├── hope.css            # Styles for Hope Designers
│   ├── moringa.css         # Styles for Moringa Cooperative
│   ├── organic.css         # Styles for Organic Poultry
│   ├── child.css           # Styles for Children's Programme
│   ├── health.css          # Styles for Health Programme
├── scripts/
│   ├── hope.js             # Scripts for Hope Designers
│   ├── moringa.js          # Scripts for Moringa Cooperative
│   ├── organic.js          # Scripts for Organic Poultry
│   ├── child.js            # Scripts for Children's Programme
│   ├── health.js           # Scripts for Health Programme
├── images/
│   ├── LOGO-KAR-GENO-2.jpg # Logo
│   ├── Site Icon.jpeg       # Favicon
│   ├── moringa-hero.jpg    # Moringa hero image (placeholder)
│   ├── poultry-hero.jpg    # Organic Poultry hero image (placeholder)
│   ├── children-hero.jpg   # Children's Programme hero image (placeholder)
│   ├── health-hero.jpg     # Health Programme hero image (placeholder)
└── README.md               # Project documentation

Installation

Clone the Repository:
git clone https://github.com/benardoloo/kar-geno-website.git


Navigate to Project Directory:
cd kar-geno-website


Serve Locally:Use a local server (e.g., VS Code Live Server, Python HTTP server, or Node.js http-server) to view the website:
python -m http.server 8000

Open http://localhost:8000 in your browser.

Dependencies:

No local dependencies required; external resources are loaded via CDNs:
Font Awesome: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css
Google Fonts Poppins: https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap
Transparent Textures: https://www.transparenttextures.com/patterns/...




Images:

Ensure images (LOGO-KAR-GENO-2.jpg, Site Icon.jpeg, and hero images) are in the images/ folder or update paths to hosted URLs.
Replace placeholder hero images (moringa-hero.jpg, poultry-hero.jpg, children-hero.jpg, health-hero.jpg) with specific project images (recommended: 1200x600px, compressed JPEG).



Usage

Navigation: Use the header navigation to access different pages or project dropdown. The hamburger menu appears on mobile devices (≤992px).
Donation/Volunteer Links: Update placeholder links (#donate, #volunteer) with actual URLs (e.g., donate.html, volunteer.html).
Social Media: Update footer social media links (#) with actual URLs for Facebook, Twitter, Instagram, and YouTube.
Testing:
Verify theme consistency: green buttons (#4CAF50 to #26A69A), hexagonal cards, and animated social icons.
Check animations: hero fade-up, staggered card animations (150ms), section fade-ins.
Test responsiveness: navbar collapse at 992px, card stacking at 992px, rectangular cards at 768px, tighter padding at 576px.
Ensure hero images load correctly and parallax works (disabled at 768px).



Pages and Content

Moringa Cooperative (moringa.html):

Focuses on moringa farming, processing, and sales.
Features five key focus areas (Cultivation, Processing, Health Benefits, Economic Empowerment, Sustainability) as hexagonal cards.
Includes a timeline of milestones (2016–2025).


Organic Poultry (organic.html):

Highlights organic poultry farming for community empowerment.
Features five key focus areas (Free-Range Farming, Nutrition, Economic Empowerment, Sustainability, Community Impact) as hexagonal cards.


Children's Programme (child.html):

Supports children through leisure activities and sponsorships.
Features five activity cards (Choir & Dance, Football, Theatre, Health & HIV Discussions, Cooking & Group Meals) and three sponsorship impact cards (School Attendance, Improved Results, Enhanced Confidence).


Health Programme (health.html):

Promotes health education and menstrual health support.
Features four focus area cards (HIV/AIDS Education, Adolescent Health, Menstrual Health, Community Outreach) and volunteer/donation CTAs.



Development Details

Developer: Benard Oloo Ochieng
Technologies:
HTML5: Semantic structure for accessibility.
CSS3: Flexbox, Grid, animations, and media queries for responsiveness.
JavaScript: Vanilla JS for interactivity (hamburger menu, smooth scrolling, parallax, IntersectionObserver for animations).


Theme:
Colors: #4CAF50 (grass green), #26A69A (teal), #8BC34A (lime), #FFCA28 (mustard), #FFD700 (gold), #000000 (black), #ffffff (white), #4b4b4b (gray).
Typography: Poppins (300, 400, 500, 600, 700).
Backgrounds: Radial gradients, textures (feather, paper, dots, stethoscope).


Animations:
Hero: Fade-up text reveal.
Cards: Staggered fade-in (150ms delay) using IntersectionObserver.
Sections: Fade-in on scroll.
Buttons: Bounce effect on hover.
Logo: Rotate and scale on hover.
Social Icons: 360-degree rotation on hover.



Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make changes and commit (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

Please ensure code follows the project's style guide:

Use consistent naming (e.g., focus-card, section-title).
Maintain green theme and Poppins font.
Validate HTML and CSS (e.g., W3C validators).
Test responsiveness and animations across browsers (Chrome, Firefox, Safari).

Future Improvements

Add a photo gallery for each project to showcase activities.
Implement a donation form or payment gateway integration.
Create a volunteer signup form for the Health Programme.
Add a blog section with articles on project impacts.
Optimize images and add lazy loading for better performance.
Provide specific hero images for each page (e.g., moringa fields, poultry farms, children in activities, health sessions).

Contact
For questions or feedback, contact:

Benard Oloo Ochieng: benjakusa@gmail.com
Kar Geno: info@kargeno.org, +254 712 345 678
Website: [Insert live website URL if hosted]

License
This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgments

Kar Geno - Centre for Hope for their inspiring work in Kisumu.
Font Awesome and Google Fonts for icons and typography.
Transparent Textures for background patterns.

Last updated: September 21, 2025