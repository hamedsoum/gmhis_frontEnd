export interface IExamination {
    admission: number,
    conclusion: string,
    clinicalExamination: string;
    conclusionExamResult: string,
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
