import type { Metadata } from 'next';
import { DEFAULT_TITLE, KEYWORDS, SITE_NAME, SITE_URL, TITLE_TEMPLATE } from './site';

type CreatePageMetadataInput = {
  title: string;
  description: string;
  path: string;
  titleAbsolute?: boolean;
};

export function createPageMetadata(input: CreatePageMetadataInput): Metadata {
  const url = new URL(input.path, SITE_URL).toString();
  const fullTitle = input.titleAbsolute ? input.title : `${input.title} | ${SITE_NAME}`;

  const title: Metadata['title'] = input.titleAbsolute
    ? { default: input.title, template: TITLE_TEMPLATE }
    : input.title;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description: input.description,
    keywords: [...KEYWORDS],
    applicationName: SITE_NAME,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title: fullTitle,
      description: input.description,
      url,
    },
    twitter: {
      card: 'summary',
      title: fullTitle,
      description: input.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export { DEFAULT_TITLE };
