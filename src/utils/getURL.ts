export const getURL = (path: string = '') => {
  let url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://localhost:3000/';

  url = url.replace(/\/+$/, '');
  url = url.includes('http') ? url : `https://${url}`;
  const formattedPath = path.replace(/^\/+/, '');
  return formattedPath ? `${url}/${formattedPath}` : url;
};
