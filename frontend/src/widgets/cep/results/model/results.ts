export interface CepWorkResult {
  number: string;
  title: string;
  description: string;
}

export const CEP_WORK_RESULTS: CepWorkResult[] = [
  {
    number: "01",
    title: "Экспертное заключение",
    description:
      "Отчёт с материалами исследования и обоснованными выводами экспертной группы.",
  },
  {
    number: "02",
    title: "Установленные причины",
    description: "Выводы о непосредственных причинах аварии или инцидента.",
  },
  {
    number: "03",
    title: "Ответы для комиссии",
    description:
      "Ответы на вопросы, поставленные комиссией по расследованию и эксплуатирующей организацией.",
  },
  {
    number: "04",
    title: "Практические рекомендации",
    description:
      "Мероприятия по ликвидации последствий и предотвращению повторения подобных аварий.",
  },
];
