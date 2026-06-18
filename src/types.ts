export interface SpecValue {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  imageAlt: string;
  specifications: SpecValue[];
  useCases: string[];
  features: string[];
  bladeGeometry?: {
    outerDiameter?: string;
    innerDiameter?: string;
    thickness?: string;
    materialGrade?: string;
    hardnessRating?: string;
  };
  image?: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  accentTitle: string;
  metrics: { label: string; value: string }[];
  useCases: string[];
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  technicalMetric: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}
