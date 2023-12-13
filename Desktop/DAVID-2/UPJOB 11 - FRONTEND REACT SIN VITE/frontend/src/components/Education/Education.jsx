import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import PopUpClose from '../PopUpClose'
import PopUpContent from '../PopUpContent'
import PopUpFooter from '../PopUpFooter'
import CustomSelectForEducation from '../CustomSelectForEducation'
//import CustomButton from '../CustomButton.jsx'

import Modal from '../Modal.jsx'
import './Education.css'
import NavBar from '../NavBar.jsx'
import Cookies from 'universal-cookie'


function Education() {

    const degrees = ['Associate of Arts (AA)', 'Associate of Arts and Sciences (AAS)', 'Associate of Science (AS)']

    const navigate = useNavigate()
    const [education, setEducation] = useState([{ 'id': '1', 'school': '', 'studyArea': '', 'degree': '', 'dateFrom': '', 'dateTo': '', 'description': '', 'saved': false }])
    // const [dateFrom, setDateFrom] = useState('')
    // const [dateTo, setDateTo] = useState('')

    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false)
    const [currentEducation, setCurrentEducation] = useState(0)

    const handleClose = () => {setEdit(false);setShow(false); setCurrentEducation(education.length - 1)};
    const handleShow = () => setShow(true);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    let deleteEducationWhen1 = (savingEducation, educationIndex) => new Promise(resolve => { setEducation(savingEducation); setCurrentEducation(educationIndex), () => resolve() })
    

    const editEducation = (pk) => {
        let index = education.findIndex(study => study.id === pk)
        setCurrentEducation(index)
        setShow(true);
        setEdit(true)
    }

    const deleteEducation = (pk) => {
        console.log('inside deleteEducation')

        if (education.length === 1) {
            // console.log('setting currentEducation to currentEducation -2', currentEducation - 2)
            // setCurrentEducation(currentEducation - 2)
            // console.log('setting Education to initial')
            // setEducation([{'id': '1', 'school': '', 'studyArea' : '', 'degree': '', 'dateFrom': '', 'dateTo': '', 'description' : '', 'saved' : false}])

            deleteEducationWhen1([{ 'id': '1', 'school': '', 'studyArea': '', 'degree': '', 'dateFrom': '', 'dateTo': '', 'description': '', 'saved': false }], 0)


        } else {
            // let index = education.findIndex(study => study.id === pk);
            // console.log(index)
            //let newState = education.splice(index, 1)
            let newState = education.filter(item => item.id !== pk)
            console.log('este es el newState', newState)
            setCurrentEducation(currentEducation - 1)
            console.log('setting the currentEducation to currentEducation -1', currentEducation - 1)
            console.log('setting Education to new', newState)
            setEducation(newState)
        }


    }

    // function makeVisibleOrUpdateEducationPlusUpdateCurrentEducation(savingEducation, educationIndex) {
    //     return new Promise(resolve => { setEducation(savingEducation); setCurrentEducation(educationIndex), () => resolve() })
    // }

    // // // function makeVisibleOrUpdateEducation(savingEducation){

    // // //     return new Promise(resolve => {setEducation(savingEducation), () => resolve()})}

    // // // function UpdateCurrentEducation(educationIndex){
    // // //     return new Promise(resolve => {setCurrentEducation(educationIndex), () => resolve()})}






    async function addEducation() {
        console.log('inside addEducation')
        let newEducation = { id: Date.now(), school: '', studyArea: '', degree: '', dateFrom: '', dateTo: '', description: '', saved: false }
        let savingEducation = [...education, newEducation]
        savingEducation[currentEducation] = { ...savingEducation[currentEducation], ['saved']: true }
        console.log('this is savingEducation', savingEducation)

        setEducation(savingEducation)
        setCurrentEducation(currentEducation + 1)

        // await makeVisibleOrUpdateEducationPlusUpdateCurrentEducation(savingEducation, currentEducation + 1)

        //SIEMPRE SETEAR EL ESTADO CON LA FUNCIÓN NO A PELO sino como funcion como por ejemplo SETSTATE(PREVSTATE => PREVSTATE + 1) NO SETSTATE(STATE + 1). PORQUE ASI SI PONES DOS SETSTATES NO CONSECUTIVOS Y FUNCIONA. AUNQUE SI LO LOGUEAS NO CAMBIA HASTA QUE SE RE-RENDERIZA.

        //logo upjob, dos useState, lo que ha dicho de salvar cuando le das al botón (getElementById de todos los campos)

        // await makeVisibleOrUpdateEducation(savingEducation);

        // let savingEducation = [...education]
        // savingEducation[currentEducation] = {...savingEducation[currentEducation], ['saved']: true}
        // console.log('this  is savingEducation', savingEducation)

        // setEducation(savingEducation)



        //setEducation([...education, newEducation])

        // await makeVisibleOrUpdateEducation([...education, newEducation])
        // console.log('education is now setted again, it is: ', education)
        // console.log('about to set education to currentEducation + 1, that is:', currentEducation + 1)
        // await UpdateCurrentEducation(currentEducation + 1)
        //setCurrentEducation(currentEducation + 1)


    }

    const saveEducations = () => {
        const cookies = new Cookies(null, {path: '/'});
        cookies.set('educations', education)

    }

    // useEffect(() => {
    //     console.log('useEffect, education', education)
    //     console.log('useEffect, currentEducation', currentEducation)

    //     const cookies = new Cookies(null, {path: '/'});
    //     const educationFromCookie = cookies.get('educations', education)
    //     setEducation(educationFromCookie)
    // }, [])

    useEffect(() => {
        console.log('useEffect, education', education)
        console.log('useEffect, currentEducation', currentEducation)

        const cookies = new Cookies(null, {path: '/'});
        const educationFromCookie = cookies.get('educations')
        console.log('educationFromCookie', educationFromCookie)
        if(educationFromCookie !== undefined){
        setEducation(educationFromCookie)

        }
    }, [])


    const saveEducation = (property, value) => {
        console.log('inside saveEducation')
        // if (education.length > 1){

        let newEducation2 = [...education]
        newEducation2[currentEducation] = { ...newEducation2[currentEducation], [property]: value }

        setEducation(newEducation2)

    }



    const checkDates = () => { console.log('test') }



    // const openModal = () => {
    //     alert('Hola')

    // }
    return (
        // <div>
        <><NavBar></NavBar>

            <h1>Education</h1>
            <p>
                Add the schools you attended, areas of study, and degrees earned.
            </p>
            {/* <CustomButton className={className} onClick={handleShow}></CustomButton> */}

            <input type="button" className="add-education-button" onClick={handleShow} value="Add education"></input>

            <Modal show={show} handleClose={handleClose}>
                <div id="popup" className={show ? 'shown' : 'hidden'}>
                    <div className="blocker" onClick={handleClose}></div>
                    <div className="contents">
                        <PopUpClose handleClose={handleClose}>x</PopUpClose>
                        <PopUpContent>
                            <label htmlFor="school">School</label>
                            <br></br>
                            <input type="text" value={education !== undefined? education[currentEducation]['school'] : ''} id="school" name="school" onChange={(e) => { saveEducation(e.target.name, e.target.value) }}></input>
                            <br></br>

                            <label htmlFor="studyArea">Area of study(Optional)</label>
                            <br></br>
                            <input type="text" value={education !== undefined?education[currentEducation]['studyArea'] : ''} id="studyArea" name="studyArea" onChange={(e) => { saveEducation(e.target.name, e.target.value) }}></input>
                            <br></br>

                            <label htmlFor="degree">Degree(Optional)</label>
                            <br></br>
                            <CustomSelectForEducation value={education !== undefined?education[currentEducation]['degree']: ''} arrayToIterate={degrees} id="degree" name="degree" nullvalue="Not chosen" functionCheck={saveEducation}></CustomSelectForEducation>
                            <br></br>
                            {/*20 MIN Y AL FINAL NO HABIA QUE PASARLE PARÁMETROS A saveEducation para que cogiera el e.target.name y e.target.value del hijo*/}

                            <label htmlFor="dates-attended">Dates attended (Optional)</label>
                            <br></br>

                            <input id="datefrom" value={education !== undefined?education[currentEducation]['dateFrom']: ''} name="dateFrom" list="yearsfrom" type="number" min="1900" max="2099" step="1" placeholder="From" onBlur={checkDates} onChange={(e) => { saveEducation(e.target.name, e.target.value) }} />

                            {/*onChange={(e)=>{setDateFrom(e.target.value)}}*/}

                            <input id="dateto" value={education !== undefined?education[currentEducation]['dateTo']: ''} name="dateTo" list="yearsto" type="number" min="1900" max="2099" step="1" placeholder="To" onBlur={checkDates} onChange={(e) => { saveEducation(e.target.name, e.target.value) }} />

                            {/*onChange={(e)=>{setDateTo(e.target.value)}}*/}

                            <div>{ education !== undefined?education[currentEducation]['dateTo'] < education[currentEducation]['dateFrom'] ? 'La fecha de finalización no puede ser inferior a la fecha de inicio' : '' : ''}</div>

                            <br></br>

                            <label htmlFor="description">Description (Optional)</label>
                            <br></br>

                            <textarea id="text-area" value={education !== undefined?education[currentEducation]['description'] : ''} name="description" rows="4" cols="50" onChange={(e) => saveEducation(e.target.name, e.target.value)}></textarea>
                            <br></br>

                            <div>{edit ? null : (<>                          <input type="button" className="back-button" onClick={handleClose} value="Cancel"></input>

                                <input type="button" onClick={addEducation} className="continue-button" value="Save and add more" />
                                <input type="button" className="continue-button" onClick={() => { navigate('/employment') }} value="Save and continue" /></>)}
                            </div>





                        </PopUpContent>
                        <PopUpFooter handleClose={handleClose}>


                        </PopUpFooter>
                    </div>
                </div>


            </Modal>

            {education !== undefined && education.map((study, key) => {
                return (<>{study.saved ? (
                    <div className={(study.saved) ? "education-div" : null}>
                        <div>School: <br></br>{study.school}</div>
                        <div>Area of Study: <br></br>{study.studyArea}</div>
                        <div>Degree: <br></br>{study.degree}</div>
                        <div>From: <br></br>{study.dateFrom}</div>
                        <div>To: <br></br>{study.dateTo}</div>
                        <div>Description: <br></br>{study.description}</div>
                        <div className="buttonBox">
                            {(study.saved) ? <input type="button" className="back-button" value="Delete education" onClick={() => { deleteEducation(study.id) }} /> : null}
                            {(study.saved) ?
                                <input type="button" className="continue-button" value="Edit education" onClick={() => { editEducation(study.id) }} /> : null} </div>
                    </div>) : ''}</>)
            })}


            <input type="button" className="back-button" value="Back" onClick={() => { navigate('/expertise-level') }} />
            <input type="button" className="continue-button" value="Continue" onClick={() => { navigate('/employment'); saveEducations() }} />




            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add your education</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>School</label>
                    <label>Area of study (Optional)</label>
                    <label>Degree (Optional)</label>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </>

        // {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        //     Launch demo modal
        // </button>

        // <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        //     <div className="modal-dialog" role="document">
        //         <div className="modal-content">
        //             <div className="modal-header">
        //                 <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        //                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        //                     <span aria-hidden="true">&times;</span>
        //                 </button>
        //             </div>
        //             <div className="modal-body">
        //                 ...
        //             </div>
        //             <div className="modal-footer">
        //                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        //                 <button type="button" className="btn btn-primary">Save changes</button>
        //             </div>
        //         </div>
        //     </div>
        // </div> */}


    )
}

export default Education