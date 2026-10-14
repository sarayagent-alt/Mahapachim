export type PageView = 'home' | 'services' | 'projects' | 'about' | 'contact';

export interface BeforeAfterImage {
  beforeUrl: string;
  afterUrl: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  year: string;
  coverImage: string;
  beforeImage: string;
  afterImage: string;
  galleryImages: string[];
  summaryQuote: string;
  before: {
    description: string;
    feel: string;
  };
  challenge: {
    title: string;
    description: string;
    points: string[];
  };
  understanding: {
    title: string;
    psychologicalInsight: string;
    spatialInsight: string;
  };
  transformation: {
    title: string;
    whatKept: string[];
    whatMoved: string[];
    whatChanged: string[];
    whatAdded: string[];
  };
  after: {
    title: string;
    description: string;
    impact: string;
  };
}

export interface ServiceItem {
  id: string;
  stepNumber: string;
  title: string;
  tagline: string;
  forWhom: string;
  description: string;
  whatIncluded: string[];
  outcome: string;
  duration: string;
  ctaText: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  homeType: string;
  quote: string;
  transformationSummary: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  location: string;
  spaceType: string;
  reason: string;
  photos: string[];
}
