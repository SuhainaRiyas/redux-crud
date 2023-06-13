import axios from "axios";
import { FAIL_REQUEST, STUDENT_LIST, DELETE_STUDENT, ADD_STUDENT, EDIT_STUDENT, UPDATE_STUDENT } from "./ActionType";
import { toast } from "react-toastify";

export const failRequest = (error) => {
    return {
        type: FAIL_REQUEST,
        payload: error
    }
}

export const studentList = (data) => {
    return {
        type: STUDENT_LIST,
        payload: data
    }
}
export const addStudent = () => {
    return {
        type: ADD_STUDENT,
    }
}
export const editStudent = (data) => {
    return {
        type: EDIT_STUDENT,
        payload: data
    }
}
export const updateStudent = () => {
    return {
        type : UPDATE_STUDENT
    }
}
export const deleteStudent = () => {
    return {
        type: DELETE_STUDENT,
    }
}


export const fetchStudentList = () => {
    return (dispatch) => {
        axios.get('http://localhost:8080/students')
          .then((response) => {
            dispatch(studentList(response.data))
          })
          .catch((err) => {
            dispatch(failRequest(err.message))
          });
      }
}

export const addStudentRecord = (data) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/students/', data).then((resp) => {
            dispatch(addStudent())
            toast.success('Student added successfully', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose:2000
            })
        }).catch(err => dispatch(failRequest(err.message)))
    }
}
export const updateStudentRecord = (id,data) => {
    return (dispatch) => {
        axios.put('http://localhost:8080/students/'+id, data).then((resp) => {
            dispatch(updateStudent())
            toast.success('Student updated successfully', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose:2000
            })
        }).catch(err => dispatch(failRequest(err.message)))
    }
}

export const getStudentRecord = (id) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/students/' + id).then((response) => {
            dispatch(editStudent(response.data))
        }).catch(err => dispatch(failRequest(err.message)))
    }

}

export const removeStudentRecord = (id) => {
    return (dispatch) => {
        axios.delete('http://localhost:8080/students/' + id).then((response) => {
            dispatch(deleteStudent())
        }).catch(err => dispatch(failRequest(err.message)))
    }

}