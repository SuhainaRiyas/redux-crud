import { fetchStudentList, removeStudentRecord } from '../redux/Action'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import {toast} from 'react-toastify'

const StudentList = (props) => {
    useEffect(() => {
        props.loadStudents()
        if(props.studentData.errormsg){
            toast.error(props.studentData.errormsg, {
                position: toast.POSITION.BOTTOM_RIGHT,
            })
        }
    }, [])
    
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to delete this user?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                props.removeStudent(id)
                props.loadStudents()
                toast.success('Student deleted successfully', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose:2000
                })
            }
        })
    }

    return (
        <div className="container">
            <div className="card" style={{ marginTop: '20px' }}>
                <div className="card-title">
                    <h4 style={{ marginTop: '10px',color:'#2d5521' }}>Student's Details</h4>
                    <Link to={'/student/add/'} className="btn btn-sm btn-success" style={{ float: 'right', marginRight: '16px' }}>Add Student</Link>

                </div>

                {/* <div className='text-danger'>
                    <p>{props.studentData.errormsg}</p>
                </div> */}
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead className="">
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone No</th>
                                    <th>Gender</th>
                                    <th>College Name</th>
                                    <th>Course</th>
                                    <th>Department</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.studentData.studentlist && props.studentData.studentlist.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{i+1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.gender}</td>
                                                <td>{item.college}</td>
                                                <td>{String(item.course).toUpperCase()}</td>
                                                <td>{String(item.department).toUpperCase()}</td>
                                                <td>
                                                    <Link to={'/student/edit/'+item.id} className="btn btn-sm btn-dark"><i className="fa fa-edit" /></Link>
                                                    <button className="btn btn-sm btn-danger" onClick={()=>handleDelete(item.id)}><i className="fa fa-trash" /></button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        studentData: state.studentData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadStudents: () =>  dispatch(fetchStudentList()),
        removeStudent : (id) => dispatch(removeStudentRecord(id)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);