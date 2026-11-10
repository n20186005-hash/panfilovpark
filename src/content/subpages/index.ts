import type { SubPage } from './types';
import { visitor } from './visitor';
import { attractions } from './attractions';
import { nearby } from './nearby';
import { food } from './food';
import { itineraries } from './itineraries';
import { seasonal } from './seasonal';

export const subpages: SubPage[] = [
  ...visitor,
  ...attractions,
  ...nearby,
  ...food,
  ...itineraries,
  ...seasonal,
];

export function getSubpage(slug: string): SubPage | undefined {
  return subpages.find((p) => p.slug === slug);
}

export type { SubPage } from './types';
