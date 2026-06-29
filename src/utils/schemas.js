/**
 * Breadcrumb Schema for SEO
 * Helps Google understand site structure
 */

export const generateBreadcrumbSchema = (items = []) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

/**
 * FAQ Schema for SEO
 * Use for FAQ sections
 */
export const generateFAQSchema = (faqs = []) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

/**
 * Project/Portfolio Item Schema
 * Use for project showcase
 */
export const generateProjectSchema = (project) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "name": project.name,
    "description": project.description,
    "url": project.url,
    "image": project.image,
    "author": {
      "@type": "Person",
      "name": "Naveen Kumar S"
    },
    "programmingLanguage": project.languages,
    "dateCreated": project.dateCreated,
    "datePublished": project.datePublished
  };
};

/**
 * Insert JSON-LD schema into page
 */
export const insertSchemaTag = (schema, id) => {
  if (id) {
    const existing = document.getElementById(id);
    if (existing) {
      existing.remove();
    }
  }

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  if (id) {
    script.id = id;
  }
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};
