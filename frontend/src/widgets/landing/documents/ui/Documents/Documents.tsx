import { Gallery } from "@/shared/ui";

import { DOCUMENTS } from "../../model/documents";

export function Documents() {
  return (
    <Gallery
      id="documents"
      title="Разрешительные документы"
      items={DOCUMENTS}
    />
  );
}
