const timeout = ms => new Promise(res => setTimeout(res, ms))

const imageUri = '';

export default async ({
  offset,
  limit,
  q,
}) => {
  await timeout(1000);
  console.log('q', q);
  const items = [...Array(limit).keys()].map(i => ({ id: i + offset, title: `Song ${q} ${i + offset}`, imageUri }));
  return items;
};
