/**
 * SEO Helper Functions
 * Update meta tags dynamically for better SEO
 */

export const updateMetaTags = (options = {}) => {
  const defaults = {
    title: 'Naveen Kumar S | Fullstack Web Developer Portfolio',
    description: 'Naveen Kumar S - Fullstack Web Developer specializing in React, Node.js, MongoDB, and Python. Explore my portfolio of modern web applications.',
    url: 'https://www.naveenkumars.me/',
    image: 'https://www.naveenkumars.me/profile.jpeg'
  };

  const config = { ...defaults, ...options };

  // Update title
  document.title = config.title;

  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    document.head.appendChild(metaDescription);
  }
  metaDescription.content = config.description;

  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = config.url;

  // Update Open Graph tags
  updateOGTag('og:title', config.title);
  updateOGTag('og:description', config.description);
  updateOGTag('og:url', config.url);
  updateOGTag('og:image', config.image);

  // Update Twitter tags
  updateMetaTag('twitter:title', config.title);
  updateMetaTag('twitter:description', config.description);
  updateMetaTag('twitter:image', config.image);
};

const updateOGTag = (property, content) => {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.content = content;
};

const updateMetaTag = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.name = name;
    document.head.appendChild(tag);
  }
  tag.content = content;
};

// Page-specific SEO configurations
export const SEO_CONFIGS = {
  home: {
    title: 'Naveen Kumar S | Fullstack Web Developer Portfolio',
    description: 'Naveen Kumar S - Fullstack Web Developer specializing in React, Node.js, MongoDB, and Python. Explore my portfolio of modern web applications.',
    keywords: 'Naveen Kumar S, fullstack developer, web developer, React, Node.js, MERN stack'
  },
  projects: {
    title: 'Projects | Naveen Kumar S - Web Developer',
    description: 'Explore Naveen Kumar S\'s portfolio of web projects built with React, Node.js, MongoDB, and modern technologies.',
    keywords: 'web projects, React projects, Node.js projects, fullstack applications, Naveen Kumar S'
  },
  skills: {
    title: 'Skills | Naveen Kumar S - Fullstack Developer',
    description: 'Technical skills of Naveen Kumar S: React, Node.js, JavaScript, Python, MongoDB, and more web development technologies.',
    keywords: 'web developer skills, React, Node.js, JavaScript, Python, MongoDB, fullstack'
  },
  about: {
    title: 'About | Naveen Kumar S - Web Developer',
    description: 'Learn about Naveen Kumar S, a passionate fullstack web developer with expertise in building modern web applications.',
    keywords: 'about Naveen Kumar S, web developer, fullstack developer, professional experience'
  },
  contact: {
    title: 'Contact | Naveen Kumar S - Web Developer',
    description: 'Get in touch with Naveen Kumar S for web development projects, collaborations, or inquiries.',
    keywords: 'contact Naveen Kumar S, hire web developer, web development services'
  }
};
