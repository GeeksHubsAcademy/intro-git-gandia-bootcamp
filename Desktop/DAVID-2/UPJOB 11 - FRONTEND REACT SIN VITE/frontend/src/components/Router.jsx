
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Register from './Register/Register.jsx'
import Login from './Login/Login.jsx'
import Profile from './Profile/Profile.jsx'
import Welcome from './Welcome/Welcome.jsx'
import Starting from './Starting/Starting.jsx'
import Category from './Category/Category.jsx'
import Skills from './Skills/Skills.jsx'
import ExpertiseLevel from './ExpertiseLevel/ExpertiseLevel.jsx'
import Education from './Education/Education.jsx'
import Employment from './Employment/Employment.jsx'
import Languages from './Languages/Languages6.jsx'
import HourlyRate from './HourlyRate/HourlyRate.jsx'
import TitleAndOverview from './TitleAndOverview/TitleAndOverview.jsx'
import ProfilePhoto from './ProfilePhoto/ProfilePhoto.jsx'
import Location from './Location/Location.jsx'
import PhoneNumber from './PhoneNumber/PhoneNumber.jsx'
import LogOut from './LogOut/LogOut.jsx'


export const Body = () => {

    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to={"/"}/>}/>
                <Route path="/" element={<Home />}/>
                <Route path="/register/" element={<Register />}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/profile" element={<Profile />}/>
                <Route path="/welcome" element={<Welcome />}/>
                <Route path="/get-started/" element={<Starting/>}/>
                <Route path="/category-and-subcategory/" element={<Category/>}/>
                <Route path="/skills/" element={<Skills/>}/>
                <Route path="/expertise-level/" element={<ExpertiseLevel/>}/>
                <Route path="/education/" element={<Education/>}/>
                <Route path="/employment/" element={<Employment/>}/>
                <Route path="/languages/" element={<Languages/>}/>
                <Route path="/hourly-rate/" element={<HourlyRate/>}/>
                <Route path="/title-and-overview/" element={<TitleAndOverview/>}/>
                <Route path="/profile-photo/" element={<ProfilePhoto/>}/>
                <Route path="/location/" element={<Location/>}/>
                <Route path="/phone-number/" element={<PhoneNumber/>}/>
                <Route path="/logout/" element={<LogOut/>}/>
                
            </Routes>
        </>
    )
}

//<Route path="/category-and-subcategory/" element={<Category/>}/>