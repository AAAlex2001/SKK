import { Gallery } from "@/shared/ui";

import { DOCUMENTS } from "../../model/documents";

export function Documents() {
  return <Gallery title="Разрешительные документы" items={DOCUMENTS} />;
}
