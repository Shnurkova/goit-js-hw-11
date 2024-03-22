import {searchImgs } from '../main';

export function fetchImg() {
  const searchParams = new URLSearchParams({
    key: '43014470-46919859f304ff208235eaa47',
    q: searchImgs,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `https://pixabay.com/api/?${searchParams}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}