import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { addStudentRecord, studentList } from "../redux/Action"

const StudentAdd = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const [college, setCollege] = useState('')
    const [course, setCourse] = useState('be')
    const [department, setDepartment] = useState('ece')
    const [emailError, setEmailError] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const studentlist = useSelector((state) => state.studentData.studentlist)

    const handleCreate = (e) => {
        e.preventDefault()
        const studentObj = { name, email, phone, gender, college, course, department }
        const result = studentlist.find(students => students.email === email)
        if (!result) {
            setEmailError('')
            dispatch(addStudentRecord(studentObj))
            navigate('/')
        }else{
            setEmailError('Email Id is already registered')
        }

    }


    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <div className="container">
                        <div className="card" >
                            <div className="card-body">
                                <h5>Add Student</h5>
                                <form className="user-form" onSubmit={handleCreate}>
                                    <div className="mb-3">
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-control" required name="name" value={name} onChange={e => setName(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" required name="email" value={email} onChange={e => setEmail(e.target.value)} />
                                        <span className="text-danger">{emailError}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Phone</label>
                                        <input type="text" className="form-control" required name="phone" value={phone} onChange={e => setPhone(e.target.value)} />
                                        {phone && !(phone.match(/^[6-9]\d{9}$/)) ? <span className="text-danger">Enter valid phone number</span> : null}
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Gender</label><br />
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" value='Male' onChange={e => setGender(e.target.value)} />
                                            <label className="form-check-label">Male</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" value='Female' onChange={e => setGender(e.target.value)} />
                                            <label className="form-check-label" >Female</label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">College Name</label>
                                        <input type="text" className="form-control" required name="college" value={college} onChange={e => setCollege(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Course</label>
                                        <select className="form-control" value={course} onChange={e => setCourse(e.target.value)}>
                                            <option value='be'>BE</option>
                                            <option value='b.tech'>B.Tech</option>
                                            <option value='me'>ME</option>
                                            <option value='m.tech'>M.Tech</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Department</label>
                                        <select className="form-control" value={department} onChange={e => setDepartment(e.target.value)}>
                                            <option value='ece'>ECE</option>
                                            <option value='cse'>CSE</option>
                                            <option value='eee'>EEE</option>
                                            <option value='civil'>Civil</option>
                                            <option value='it'>IT</option>
                                            <option value='mech'>Mech</option>
                                        </select>
                                    </div>



                                    <button type="submit" className="btn btn-success">Submit</button>
                                    <Link to="/" className="btn btn-danger">Cancel</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentAdd;