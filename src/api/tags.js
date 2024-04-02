import { API_BASE_URL } from '../utils/constants';

export async function getTags() {
  const params = new URLSearchParams({
    order: 'desc',
    sort: 'popular',
    pagesize: '100',
    site: 'stackoverflow',
    key: '8RHHpmNmp8nScLok*hyZrw((',
  }).toString();

  const response = await fetch(`${API_BASE_URL}/tags?${params}`);

  if (!response.ok) {
    throw new Error(
      `ERROR ${response.status} (${response.statusText}) has occurred while fetching tags.`
    );
  }

  const data = await response.json();

  if (!data) throw new Error('An unexpected server response.');

  return data.items;
}
