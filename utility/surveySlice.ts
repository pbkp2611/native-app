import { createSlice } from '@reduxjs/toolkit'
import { c } from './q'

const surveySlice = createSlice({
    name: 'survey',
    initialState: { qnr: c },
    reducers: {
        setSurveyState:(state, action)=>{
            const surveyState = action.payload
            const updatedArray = state.qnr.map(obj => {
                if (obj.id === surveyState.id) {
                  console.log({ ...obj, response: surveyState.response })
                  return { ...obj, response: surveyState.response };
                }
                return obj;
            });
            state.qnr = updatedArray
        },
        setShowState:(state, action)=>{
            const surveyState = action.payload
            const updatedArray = state.qnr.map(obj => {
                if (obj.id === surveyState.id) {
                //   console.log({ ...obj, response: surveyState.response })
                  return { ...obj, show: true };
                }
                return obj;
            });
            state.qnr = updatedArray
        }
    }
})

export const { setSurveyState, setShowState } = surveySlice.actions

export default surveySlice.reducer

export const selectCurrentQnr = (state: { survey: { qnr: any } }) => state.survey.qnr