type Props = {
  src: string;
  sizes?: string;
  srcSet?: string;
};

function ResponsiveImage(props: Props) {
  /*
   <img src="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/d84cfb9a-033e-4270-8018-903058ef3f38._CR0%2C0%2C3000%2C1500_SX1500_.jpg"
   srcSet="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/d84cfb9a-033e-4270-8018-903058ef3f38._CR0%2C0%2C3000%2C1500_SX840_.jpg 840w,
   https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/d84cfb9a-033e-4270-8018-903058ef3f38._CR0%2C0%2C3000%2C1500_SX1280_.jpg 1280w,
   https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/d84cfb9a-033e-4270-8018-903058ef3f38._CR0%2C0%2C3000%2C1500_SX1500_.jpg 1500w,
   https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/d84cfb9a-033e-4270-8018-903058ef3f38._CR0%2C0%2C3000%2C1500_SX1920_.jpg 1920w,
   https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/d84cfb9a-033e-4270-8018-903058ef3f38._CR0%2C0%2C3000%2C1500_SX3000_.jpg 3000w"
   sizes="(max-width: 840px) 100vw,(max-width: 1500px) 100vw,1500px" />
   https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/banner2tobg.png,1/resize,m_lfit,w_480/quality,q_90
   */
  if (!props.src) {
    return false;
  }
  let sizes;
  let srcSet;
  let realSrc = props.src;
  let isWebp = window?.supportImageType?.isWebp;
  let isAvif = window?.supportImageType?.isAvif;
  if (isAvif) {
    realSrc = `${props.src}?x-oss-process=image/format,avif`;
  }
  if(isWebp) {
    realSrc = `${props.src}?x-oss-process=image/format,webp`;
  }
  if (props.srcSet && props.sizes) {
    const arraySrcSet = props.srcSet?.split(',') || [840,1280,1500,1920,3000];
    const arrTemp: string[] = [];
    arraySrcSet.map((item: any) => {
      if (realSrc.indexOf('?x-oss-process=image') > 0) {
        arrTemp.push(`${realSrc}/resize,w_${item}`);
      } else {
        arrTemp.push(`${realSrc}?x-oss-process=image,w_${item}`);
      }

    });
    srcSet = arrTemp.join();
    sizes = props.sizes || '(max-width: 840px) 100vw,(max-width: 1500px) 100vw,1500px';
  }

  return (
    <>
      {(props.sizes && props.srcSet)? (<img src={realSrc} srcSet={srcSet} sizes={sizes} />) : (<img src={realSrc} />)}
    </>
  );
 };

 export default ResponsiveImage;
