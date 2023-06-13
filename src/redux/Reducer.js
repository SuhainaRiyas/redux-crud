import { ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT, FAIL_REQUEST, STUDENT_LIST, UPDATE_STUDENT } from "./ActionType"

const initialState = {
    studentlist: [],
    studentObj: {},
    errormsg: ''
}
export const studentData = (state = initialState, action) => {
    switch (action.type) {
        case FAIL_REQUEST:
            return {
                ...state,
                errormsg: action.payload
            }
        case STUDENT_LIST:
            return {
                studentlist: action.payload,
                studentObj: {},
                errormsg: ''
            }
        case ADD_STUDENT:
            return {
                ...state
            }
        case EDIT_STUDENT :
            return {
                ...state,
                studentObj : action.payload
            }
        case UPDATE_STUDENT : 
            return {
                ...state
            }
        case DELETE_STUDENT:
            return {
                ...state
            }
        default: return state
    }
}