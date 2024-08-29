const getPathname = (locale: string, pathname: string) => {
  if (!pathname) return '/';

  const segments = pathname.split('/');
  segments[1] = locale;
  return segments.join('/');
};

export default getPathname;
