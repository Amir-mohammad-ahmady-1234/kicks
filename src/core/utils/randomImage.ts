const baseurlimg = "/common/img/main/products/";
const Imagesp = [
  `${baseurlimg}Rectangle1.png`,
  `${baseurlimg}Rectangle2.png`,
  `${baseurlimg}Rectangle3.png`,
  `${baseurlimg}Rectangle4.png`,
  `${baseurlimg}Rectangle5.png`,
  `${baseurlimg}Rectangle6.png`,
];

export const getProductImage = (index: number): string => {
  if (index >= 0 && index < Imagesp.length) {
    return Imagesp[index];
  }
  return Imagesp[Math.floor(Math.random() * Imagesp.length)];
};
