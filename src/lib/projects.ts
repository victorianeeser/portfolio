import { getCollection } from 'astro:content';

/** All published projects, in display order. */
export async function getProjects() {
  const projects = await getCollection('projects', ({ data }) => !data.draft);
  return projects.sort((a, b) => a.data.order - b.data.order);
}
