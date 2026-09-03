import { Gallery } from "@/shared/ui";

import { REVIEWS } from "../../model/reviews";

export function Reviews() {
  return <Gallery id="reviews" title="Отзывы" items={REVIEWS} />;
}
