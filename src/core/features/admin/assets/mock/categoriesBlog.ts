export const categoriesBlog = {
  guide: "Guide",
  fashionTrends: "Fashion & Trends",
  careGuide: "Care Guide",
  sports: "Sports",
  news: "News",
  productReview: "Product Review",
} as const;

export type categoriesBlog =
  (typeof categoriesBlog)[keyof typeof categoriesBlog];
