export interface IExaminationDto {
  admission: number,
  conclusion: string,
  conclusionExamResult: string,
  clinicalExamination: string,
  endDate: Date,
  examinationReasons: string,
  examinationType: string,
  facility: 0,
  history: string,
  oldTreatment: string,
  id: 0,
  pathologies: number[],
  pratician: 0,
  startDate: Date,
  symptoms: number[]
}
