type Type = 'thumbnail' | 'small' | 'medium';
interface ImageParameters {
  id?: string;
  format?: string | null;
  type?: Type;
}

export const createUploadUrlPath = (relativePath: string): string =>
  `${process.env.baseUrl}/uploads/${relativePath}`;

export const getImageSource = ({
  id,
  format = '.jpg',
  type,
}: ImageParameters) => {
  if (type) {
    return createUploadUrlPath(`${type}_${id}${format}`);
  }

  return createUploadUrlPath(`${id}${format}`);
};
