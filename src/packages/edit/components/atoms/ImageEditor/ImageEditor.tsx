// import { useRef, useState } from 'react';
// import ReactCrop, { type Crop } from 'react-image-crop';
// import Image from 'next/image';
// import 'react-image-crop/dist/ReactCrop.css';
// import { Button } from '@/ui/atoms';

// function ImageEditor({ src }: { src: string }) {
//   const [crop, setCrop] = useState<Crop>();
//   const [completedCrop, setCompletedCrop] = useState(null);
//   const canvasRef = useRef(null);

//   const imgRef = useRef<HTMLImageElement>(null);

//   const onDownloadCropClick = () => {
//     if (!completedCrop || !imgRef.current) {
//       return;
//     }
//     const image = imgRef.current;
//     const canvas = canvasRef.current;
//     const crop = completedCrop;

//     const scaleX = image.naturalWidth / image.width;
//     const scaleY = image.naturalHeight / image.height;
//     const ctx = canvas.getContext('2d');
//     canvas.width = crop.width * scaleX;
//     canvas.height = crop.height * scaleY;

//     ctx.drawImage(
//       image,
//       crop.x * scaleX,
//       crop.y * scaleY,
//       crop.width * scaleX,
//       crop.height * scaleY,
//       0,
//       0,
//       crop.width * scaleX,
//       crop.height * scaleY
//     );

//     // Скачивание canvas как изображение
//     canvas.toBlob(async (blob) => {
//       if (blob) {
//         // Создаем объект File
//         const croppedImageFile = new File([blob], 'cropped-image.png', {
//           type: 'image/png',
//         });

//         // Создаем formData для отправки на сервер
//         const formData = new FormData();
//         formData.append('files', croppedImageFile);

//         // Отправляем изображение на сервер
//         const data = await uploadImageToDB(formData);
//         const imageId = data?.[0]?.id;

//         if (imageId) {
//           // Обновляем Redux и react-hook-form значениями
//           dispatch(
//             updateSimpleData({
//               category: ShortCategories.IMAGE,
//               value: imageId,
//             })
//           );
//           setValue('image', imageId);
//         }
//       }
//     }, 'image/png');
//   };
// }

// return (
//   <>
//     <ReactCrop
//       crop={crop}
//       onChange={(c) => setCrop(c)}
//       onComplete={(c) => setCompletedCrop(c)}
//     >
//       <Image
//         ref={imgRef}
//         width={500}
//         height={600}
//         src={src}
//         alt={'preview-image'}
//       />
//     </ReactCrop>
//     <Button onClick={onDownloadCropClick}>Download Crop</Button>
//     <canvas ref={canvasRef} style={{ display: 'none' }} />
//   </>
// );

// export default ImageEditor;
