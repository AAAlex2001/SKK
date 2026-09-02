import { Gallery } from "@/shared/ui";

import { REVIEWS } from "../../model/reviews";

export function Reviews() {
  return <Gallery title="Отзывы" items={REVIEWS} />;
}
