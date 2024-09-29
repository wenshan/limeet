// 判定浏览器对图片类型的支持
const supportImageType = async () => {
  let isWebp = false;
  let isAvif = false;
  const webpSrc =
    'https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/1px.jpgp?x-oss-process=image/format,webp';
  const avifSrc =
    'https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/1px.jpg?x-oss-process=image/format,avif';
  const loadImg = (imgSrc) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        createImageBitmap &&
          createImageBitmap(image)
            .then(() => {
              resolve(true);
            })
            .catch(() => {
              resolve(false);
            });
      };
      image.onerror = () => {
        resolve(false);
      };
      image.src = imgSrc;
    });
  };
  // avif
  isAvif = await loadImg(avifSrc);
  if (isAvif) {
    isWebp = false;
  } else {
    isWebp = await loadImg(webpSrc);
  }
  window.supportImageType = {
    isWebp,
    isAvif
  };
  return {
    isWebp,
    isAvif
  };
};

export default supportImageType;
