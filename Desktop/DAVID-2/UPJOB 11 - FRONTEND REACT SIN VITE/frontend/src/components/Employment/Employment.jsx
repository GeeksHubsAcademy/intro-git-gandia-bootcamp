import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import PopUpClose from '../PopUpClose'
import PopUpContent from '../PopUpContent'
import PopUpFooter from '../PopUpFooter'
import CustomSelectForEmployment from '../CustomSelectForEducation'
//import CustomButton from '../CustomButton.jsx'

import Modal from '../Modal.jsx'
import './Employment.css'
import NavBar from '../NavBar.jsx'
import Cookies from 'universal-cookie'


function Employment() {

    const countries = ['Spain', 'Portugal', 'Brazil']

    const navigate = useNavigate()
    const [employment, setEmployment] = useState([{  'id': '1', 'company': '', 'locationCity': '', 'locationCountry': '', 'title':'','dateFromMonth': '', 'dateToMonth': '', 'dateFromYear':'', 'dateToYear':'',
    'currentlyWorking':'', 'description': '', 'saved': false }])
    // const [dateFrom, setDateFrom] = useState('')
    // const [dateTo, setDateTo] = useState('')

    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false)
    const [currentEmployment, setCurrentEmployment] = useState(0)

    const handleClose = () => {setEdit(false);setShow(false); setCurrentEmployment(employment.length - 1)};
    const handleShow = () => setShow(true);

    function deleteEmploymentWhen1(savingEmployment, employmentIndex) {
        return new Promise(resolve => { setEmployment(savingEmployment); setCurrentEmployment(employmentIndex), () => resolve() })
    }

    function editEmployment(pk) {
        let index = employment.findIndex(study => study.id === pk)
        setCurrentEmployment(index)
        setShow(true);
        setEdit(true)
    }

    function deleteEmployment(pk) {
        console.log('inside deleteEmployment')

        if (employment.length === 1) {
            // console.log('setting currentEmployment to currentEmployment -2', currentEmployment - 2)
            // setCurrentEmployment(currentEmployment - 2)
            // console.log('setting Employment to initial')
            // setEmployment([{'id': '1', 'school': '', 'studyArea' : '', 'degree': '', 'dateFrom': '', 'dateTo': '', 'description' : '', 'saved' : false}])

            deleteEmploymentWhen1([{  'id': '1', 'company': '', 'locationCity': '', 'locationCountry': '', 'title':'','dateFromMonth': '', 'dateToMonth': '', 'dateFromYear':'', 'dateToYear':'',
            'currentlyWorking':'', 'description': '', 'saved': false }], 0)


        } else {
            // let index = employment.findIndex(study => study.id === pk);
            // console.log(index)
            //let newState = employment.splice(index, 1)
            let newState = employment.filter(item => item.id !== pk)
            console.log('este es el newState', newState)
            setCurrentEmployment(currentEmployment - 1)
            console.log('setting the currentEmployment to currentEmployment -1', currentEmployment - 1)
            console.log('setting Employment to new', newState)
            setEmployment(newState)
        }


    }

    const makeVisibleOrUpdateEmploymentPlusUpdateCurrentEmployment = (savingEmployment, employmentIndex) => {
        return new Promise(resolve => { setEmployment(savingEmployment); setCurrentEmployment(employmentIndex), () => resolve() })
    }

    // function makeVisibleOrUpdateEmployment(savingEmployment){

    //     return new Promise(resolve => {setEmployment(savingEmployment), () => resolve()})}

    // function UpdateCurrentEmployment(employmentIndex){
    //     return new Promise(resolve => {setCurrentEmployment(employmentIndex), () => resolve()})}






    async function addEmployment() {
        console.log('inside addEmployment')
        let newEmployment = {id: Date.now(), company: '', locationCity: '', locationCountry: '', title:'',dateFromMonth: '', dateToMonth: '', dateFromYear:'', dateToYear:'',
        currentlyWorking:'', description: '', 'saved': false }
        let savingEmployment = [...employment, newEmployment]
        savingEmployment[currentEmployment] = { ...savingEmployment[currentEmployment], ['saved']: true }
        console.log('this is savingEmployment', savingEmployment)

        await makeVisibleOrUpdateEmploymentPlusUpdateCurrentEmployment(savingEmployment, currentEmployment + 1)

        // await makeVisibleOrUpdateEmployment(savingEmployment);

        // let savingEmployment = [...employment]
        // savingEmployment[currentEmployment] = {...savingEmployment[currentEmployment], ['saved']: true}
        // console.log('this  is savingEmployment', savingEmployment)

        // setEmployment(savingEmployment)



        //setEmployment([...employment, newEmployment])

        // await makeVisibleOrUpdateEmployment([...employment, newEmployment])
        // console.log('employment is now setted again, it is: ', employment)
        // console.log('about to set employment to currentEmployment + 1, that is:', currentEmployment + 1)
        // await UpdateCurrentEmployment(currentEmployment + 1)
        //setCurrentEmployment(currentEmployment + 1)


    }

    const saveEmployments = () => {
        const cookies = new Cookies(null, {path: '/'});
        cookies.set('employments', employment)

    }

    useEffect(() => {
        console.log('useEffect, employment', employment)
        console.log('useEffect, currentEmployment', currentEmployment)

        const cookies = new Cookies(null, {path: '/'});
        const employmentFromCookie = cookies.get('employments')
        console.log('employmentFromCookie', employmentFromCookie)
        if(employmentFromCookie !== undefined){
        setEmployment(employmentFromCookie)

        }
    },[])

    const saveEmployment = (property, value) => {
        console.log('inside saveEmployment')
        // if (employment.length > 1){

        let newEmployment2 = [...employment]
        newEmployment2[currentEmployment] = { ...newEmployment2[currentEmployment], [property]: value }

        setEmployment(newEmployment2)

    }



    const checkDates = () => { console.log('test') }



    // const openModal = () => {
    //     alert('Hola')

    // }
    return (
        // <div>
        <><NavBar></NavBar>

            <h1>Employment</h1>
            <p>
                Add your past work experience. Build your credibility by showcasing the projects or jobs you have completed.
            </p>
            {/* <CustomButton className={className} onClick={handleShow}></CustomButton> */}

            <input type="button" className="add-employment-button" onClick={handleShow} value="Add employment"></input>

            <Modal show={show} handleClose={handleClose}>
                <div id="popup" className={show ? 'shown' : 'hidden'}>
                    <div className="blocker" onClick={handleClose}></div>
                    <div className="contents">
                        <PopUpClose handleClose={handleClose}>x</PopUpClose>
                        <PopUpContent>
                            <label htmlFor="company">Company</label>
                            <br></br>
                            <input type="text" value={employment[currentEmployment]['company']} id="company" name="company" onChange={(e) => { saveEmployment(e.target.name, e.target.value) }}></input>
                            <br></br>

                            <label htmlFor="locationCity">Location (City)</label>
                            <br></br>
                            <input type="text" value={employment[currentEmployment]['locationCity']} id="locationCity" name="locationCity" onChange={(e) => { saveEmployment(e.target.name, e.target.value) }}></input>
                            <br></br>

                            <label htmlFor="locationCountry">Country (Optional)</label>
                            <br></br>
                            <CustomSelectForEmployment value={employment[currentEmployment]['locationCountry']} arrayToIterate={countries} id="locationCountry" name="locationCountry" nullvalue="Not chosen" functionCheck={saveEmployment}></CustomSelectForEmployment>
                            <br></br>
                            {/*20 MIN Y AL FINAL NO HABIA QUE PASARLE PARÁMETROS A saveEmployment para que cogiera el e.target.name y e.target.value del hijo*/}

                            <label htmlFor="dates-attended">Period (Optional)</label>
                            <br></br>

                            <input id="dateFromYear" value={employment[currentEmployment]['dateFromYear']} name="dateFromYear" list="yearsfromYear" type="number" min="1900" max="2099" step="1" placeholder="From" onBlur={checkDates} onChange={(e) => { saveEmployment(e.target.name, e.target.value) }} />

                            {/*onChange={(e)=>{setDateFrom(e.target.value)}}*/}

                            <input id="dateToYear" value={employment[currentEmployment]['dateToYear']} name="dateToYear" list="yearsToYear" type="number" min="1900" max="2099" step="1" placeholder="To" onBlur={checkDates} onChange={(e) => { saveEmployment(e.target.name, e.target.value) }} />

                            {/*onChange={(e)=>{setDateTo(e.target.value)}}*/}

                            <div>{employment[currentEmployment]['dateToYear'] < employment[currentEmployment]['dateFromYear'] ? 'La fecha de finalización no puede ser inferior a la fecha de inicio' : null}</div>

                            <br></br>

                            <label htmlFor="description">Description (Optional)</label>
                            <br></br>

                            <textarea id="text-area" value={employment[currentEmployment]['description']} name="description" rows="4" cols="50" onChange={(e) => saveEmployment(e.target.name, e.target.value)}></textarea>
                            <br></br>

                            <div>{edit ? null : (<>                          <input type="button" className="back-button" onClick={handleClose} value="Cancel"></input>

                                <input type="button" onClick={addEmployment} className="continue-button" value="Save and add more" />
                                <input type="button" className="continue-button" onClick={() => { navigate('/employment') }} value="Save and continue" /></>)}
                            </div>





                        </PopUpContent>
                        <PopUpFooter handleClose={handleClose}>


                        </PopUpFooter>
                    </div>
                </div>


            </Modal>

            {employment.map((study, key) => {
                return (<>{study.saved ? (
                    <div className={(study.saved) ? "employment-div" : null}>
                        <div>Company: <br></br>{study.company}</div>
                        <div>Location (City): <br></br>{study.locationCity}</div>
                        <div>Location (Country): <br></br>{study.locationCountry}</div>
                        <div>From: <br></br>{study.dateFromYear}</div>
                        <div>To: <br></br>{study.dateToYear}</div>
                        <div>Description: <br></br>{study.description}</div>
                        <div className="buttonBox">
                            {(study.saved) ? <input type="button" className="back-button" value="Delete employment" onClick={() => { deleteEmployment(study.id) }} /> : null}
                            {(study.saved) ?
                                <input type="button" className="continue-button" value="Edit employment" onClick={() => { editEmployment(study.id) }} /> : null} </div>
                    </div>) : null}</>)
            })}


            <input type="button" className="back-button" value="Back" onClick={() => { navigate('/education/') }} />
            <input type="button" className="continue-button" value="Continue" onClick={() => { navigate('/languages'); saveEmployments() }} />




            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add your employment</Modal.Title>
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

export default Employment