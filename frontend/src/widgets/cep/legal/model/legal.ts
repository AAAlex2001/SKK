export interface CepLegalDocument {
  id: string;
  number: string;
  title: string;
  href?: string;
}

export const CEP_LEGAL_DOCUMENTS: CepLegalDocument[] = [
  {
    id: "116-fz",
    number: "116-ФЗ",
    title: "О промышленной безопасности опасных производственных объектов",
    href: "https://www.consultant.ru/document/cons_doc_LAW_15234/",
  },
  {
    id: "117-fz",
    number: "117-ФЗ",
    title: "О безопасности гидротехнических сооружений",
    href: "https://www.consultant.ru/document/cons_doc_LAW_15265/",
  },
  {
    id: "order-503",
    number: "№ 503",
    title:
      "Порядок проведения технического расследования причин аварий, инцидентов и случаев утраты взрывчатых материалов",
    href: "https://www.consultant.ru/document/cons_doc_LAW_372330/",
  },
  {
    id: "skk-regulation",
    number: "СКК",
    title: "Положение о Центре независимой экспертизы причин аварий на ОПО",
  },
];
