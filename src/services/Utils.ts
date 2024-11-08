import { SURVEY_URL } from "./Constant"

export const openSurveyLink = () => {
    // window.open(SURVEY_URL)
    window.location.replace(SURVEY_URL)
}