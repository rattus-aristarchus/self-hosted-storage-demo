export default {
  // Общий заголовок
  name: "Отчёт с историей",
  // Путь к папке с отчётом
  output: "./allure-report",
  // Путь к файлу с историей
  historyPath: "./test-history/history.jsonl",
  // Отчёты
  plugins: {
    // Отчёт с группировкй по фичам
    "awesome": {
      import: "@allurereport/plugin-awesome",
      options: {
        // Имя отчёта
        reportName: "Отчёт",
        // Язык отчёта
        reportLanguage: "ru",
        // для хранилища
        publish: true,
      },
    },
  },
  allureService: {
    accessToken: "ars1...",
  },
};