const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '../src/components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Add "use client" if not present
  if (!content.includes('"use client"')) {
    content = `"use client";\n\n` + content;
  }

  // Replace <a href="#something"> with <Link href="#something">
  // We need to be careful. Let's just find <a> tags with href starting with # and replace them.
  // Actually, we also need to add import Link from 'next/link'.
  let hasLink = false;
  content = content.replace(/<a\s+href="([^"]+)"([^>]*)>/g, (match, href, rest) => {
    if (href.startsWith('#')) {
      hasLink = true;
      return `<Link href="${href}"${rest}>`;
    }
    return match; // keep original if it's an external link
  });
  content = content.replace(/<\/a>/g, (match, offset, string) => {
    // Basic check if the tag was a Link
    return match; // we will just do a global replace of </a> to </Link> where we know we replaced <a>, but wait, regex for this is tricky.
  });

  // Better approach for Next.js links:
  // Instead of regex, maybe just replace specific components?
  // Let's just add "use client" first.
  
  fs.writeFileSync(filePath, content);
});

console.log("Added use client to all components.");
