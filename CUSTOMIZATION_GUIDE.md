# Portfolio Customization Guide

This guide will help you customize your portfolio with your actual information and projects.

## ✅ Already Completed

Your portfolio has been customized with your actual information from your CV:

- ✅ Personal details (name, email, phone, location)
- ✅ GitHub and LinkedIn links updated
- ✅ Professional summary updated in About section
- ✅ All 5 projects added with proper descriptions
- ✅ Technical skills updated with your actual skill set
- ✅ Work experience updated (Tutor & Entrepreneur)
- ✅ Education details (First-Class BSc in IT)
- ✅ Certifications and courses updated

## 📋 Remaining Tasks

### 1. Add Your CV File

**IMPORTANT:** To enable the CV download functionality:

1. Locate your `CV.pdf` file on your computer
2. Place it in the `/public` folder in your project root
3. The file must be named exactly `CV.pdf` (case-sensitive)
4. The download button in the Hero section is already configured to point to `/CV.pdf`

**Note:** If you don't have a `/public` folder yet:
- Create a new folder called `public` in your project root directory (same level as `src`)
- Add your `CV.pdf` file inside it

### 2. Update Project Live URLs (Optional)

Some of your projects have placeholder URLs (`#`). When you deploy them, update these:

**File: `/src/app/components/Projects.tsx`**

Find your projects and update the `liveUrl` field:
```tsx
{
  title: "Hotels Portal IT Graduation Project",
  // ... other fields ...
  liveUrl: "#", // Replace with actual deployed URL when ready
  githubUrl: "https://github.com/mozanfu-art",
}
```

## Quick Customization Checklist

### 1. Personal Information & Links

**File: `/src/app/components/Hero.tsx`**

Replace these placeholder links (around line 62-84):
```tsx
// Update these URLs with your actual links:
href="https://github.com/yourusername"  // Your GitHub username
href="https://linkedin.com/in/yourprofile"  // Your LinkedIn profile
href="mailto:your.email@example.com"  // Your email address
```

**File: `/src/app/components/Contact.tsx`**

Update contact information (around line 11-25):
```tsx
{
  icon: Mail,
  label: "Email",
  value: "your.email@example.com",  // Change this
  href: "mailto:your.email@example.com",  // Change this
  color: "purple",
}
```

And social links (around line 28-38):
```tsx
{
  icon: Github,
  label: "GitHub",
  url: "https://github.com/yourusername",  // Change this
  color: "hover:text-purple-400",
},
{
  icon: Linkedin,
  label: "LinkedIn",
  url: "https://linkedin.com/in/yourprofile",  // Change this
  color: "hover:text-orange-400",
},
```

### 2. Projects Section

**File: `/src/app/components/Projects.tsx`**

Replace the placeholder projects (starting around line 7) with your actual projects:

```tsx
const projects = [
  {
    title: "Your Project Name",  // Change this
    description: "Your project description here",  // Change this
    type: "Web Application",  // Or "Mobile App", "Cloud Solution", etc.
    icon: Globe,  // Choose from: Globe, Smartphone, Cloud, Code2, etc.
    tags: ["Tech1", "Tech2", "Tech3"],  // Your technologies
    liveUrl: "https://your-live-demo.com",  // Your live demo URL
    githubUrl: "https://github.com/you/repo",  // Your GitHub repo
    gradient: "from-purple-600/20 to-purple-900/20",  // Keep or change
    border: "border-purple-500/30",  // Keep or change
  },
  // Add more projects...
];
```

**Available Icons:**
- `Globe` - Web applications
- `Smartphone` - Mobile apps
- `Cloud` - Cloud solutions
- `Code2` - General coding projects
- `Database` - Database projects
- `Network` - Networking projects

### 3. Add More Skills (Optional)

**File: `/src/app/components/Skills.tsx`**

Add more skills to existing categories or create new ones (around line 5):

```tsx
const skillCategories = [
  {
    category: "Your Category Name",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
    color: "purple", // or "orange"
  },
  // Add more categories...
];
```

### 4. CV Download Link

**File: `/src/app/components/Hero.tsx`**

To add a CV download:

Option A - Host CV in your project:
1. Create a `/public` folder in your project root
2. Add your CV PDF to `/public/cv.pdf`
3. Update the button (around line 57):
```tsx
<Button
  variant="outline"
  className="bg-orange-600/20 border-orange-500 hover:bg-orange-600/40 text-white"
  asChild
>
  <a href="/cv.pdf" download>  {/* Changed from #cv */}
    <Download className="mr-2 h-4 w-4" />
    Download CV
  </a>
</Button>
```

Option B - Host CV externally:
```tsx
<a href="https://your-cloud-storage-link.com/cv.pdf" target="_blank">
  <Download className="mr-2 h-4 w-4" />
  Download CV
</a>
```

### 5. Update Professional Summary (Optional)

**File: `/src/app/components/About.tsx`**

Edit the summary paragraph (around line 39):
```tsx
<p className="text-gray-300 text-lg mb-12 text-center leading-relaxed">
  Your updated professional summary here...
</p>
```

### 6. Add More Experience/Education (Optional)

**File: `/src/app/components/Experience.tsx`**

Add more work experience (around line 6):
```tsx
const experiences = [
  {
    title: "Your Job Title",
    period: "Start Date – End Date",
    type: "Professional Experience",
    icon: Briefcase,
    points: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2",
      "Achievement or responsibility 3",
    ],
  },
  // Add more experiences...
];
```

Add more courses (around line 28):
```tsx
const courses = [
  "Course Name – Provider | Platform (Year)",
  // Add more courses...
];
```

## Color Customization

The portfolio uses a black background with purple and orange accents. To change colors:

### Primary Colors
- Purple: `purple-400`, `purple-500`, `purple-600`, `purple-900`
- Orange: `orange-400`, `orange-500`, `orange-600`, `orange-900`

### Where to Find Colors
Search for these patterns in all component files:
- `bg-purple-` - Background colors
- `text-purple-` - Text colors
- `border-purple-` - Border colors
- `from-purple-` / `to-orange-` - Gradient colors

## Adding New Sections

To add a new section:

1. Create a new component file: `/src/app/components/YourSection.tsx`
2. Follow the pattern from existing components
3. Add it to `/src/app/App.tsx`:

```tsx
import { YourSection } from "@/app/components/YourSection";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      {/* ... other sections ... */}
      <div id="yoursection">
        <YourSection />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
```

4. Add to navigation in `/src/app/components/Navigation.tsx`:

```tsx
const navLinks = [
  // ... existing links ...
  { label: "Your Section", href: "#yoursection" },
];
```

## Testing Your Changes

1. Save your files
2. Check the preview in Figma Make
3. Make sure all links work
4. Test on both desktop and mobile views
5. Verify smooth scrolling between sections

## Pro Tips

- **Keep descriptions concise** - Aim for 1-2 sentences for projects
- **Use action verbs** - Start experience points with strong verbs
- **Update regularly** - Add new projects and skills as you learn
- **Test all links** - Make sure every link works before deploying
- **Optimize images** - If you add images, keep them under 200KB each

## Need Help?

If something isn't working:
1. Check the browser console for errors
2. Verify all imports are correct
3. Make sure you didn't accidentally delete any closing tags
4. Review the original file structure if needed

Remember: The site is already styled and structured - you mainly need to update text content and links!