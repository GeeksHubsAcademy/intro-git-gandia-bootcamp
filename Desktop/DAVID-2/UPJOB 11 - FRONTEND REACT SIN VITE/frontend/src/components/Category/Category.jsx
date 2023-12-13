import React, { useEffect, useState } from 'react'
import CustomSelect from '../CustomSelect.jsx'

import './Category.css'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar.jsx'
import Cookies from 'universal-cookie';
import axios from 'axios';
import Cookies2 from 'js-cookie';



let subcategories_dev = ['Scripts & Utilities', 'Web & Mobile Design']
let subcategories_design = ['Logo Design']
let subcategories_admin_support = ['Social Media Manager', 'Support']
let subcategories_accounting_and_consulting = ['Consulting', 'Accounting']
let subcategories_customer_service = ['Phone Service']
let subcategories_data_science_and_analytics = ['Python Machine Learning']

// let categoriesArray = [
//     { 'name': 'Design & Creative', 'subcateogry':  ['Logo Design'] }, 
//     { 'name': 'Web, Mobile & Software Dev', 'subcategory':  ['Scripts & Utilities', 'Web & Mobile Design']}, 
//     { 'name': 'Data Science & Analytics', 'subcategory': 'data_science_and_analytics' }, { 'name': 'Customer Service', 'subcategory': 'customer_service' }, { 'name': 'Admin Support', 'subcategory': 'admin_support' }, { 'name': 'Accounting & Consulting', 'subcategory': 'accounting_and_consulting' }
// ];
const categories = {
    'Design & Creative': ['Logo Design'] ,
    'Web, Mobile & Software Dev':  ['Scripts & Utilities', 'Web & Mobile Design'],
    // ...

}
const categoriesKeys = Object.keys(categories)

export default function Category() {
    const navigate = useNavigate()
 
 
   
    const [categorySelected, setCategory] = useState('')
    
    const subcategoriesSelected = categories[categorySelected] || [];

    const [subcategorySelected, setSubCategory] = useState('')

    const saveCategoryAndSubcategory = () =>{    
        const cookies = new Cookies(null, {path: '/'});
        cookies.set('category', categorySelected)
        cookies.set('subcategory', subcategorySelected)     
    }

    const cookies = new Cookies(null, {path: '/'});

    const getCookieAndGetCategory = async () => {
        //await axios.get('http://localhost:8000/csrf_cookie/').then((res) => console.log(res)).catch((err) => console.log(err))

                
    var body = JSON.stringify({ })
    if(cookies.get('category')===undefined && cookies.get('subcategory')===undefined  ){
        const config = {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-CSRFToken': Cookies2.get('csrftoken')
            }
          };
        axios.get('http://localhost:8000/category-and-subcategory/me/',config).then((res) => console.log(res)).catch((err) => console.log(err))
    } else {
        console.log(cookies.get('category'))
        const categoryFromCookie = cookies.get('category')
        setCategory(categoryFromCookie)
        console.log(cookies.get('subcategory'))
        const subcategoryFromCookie = cookies.get('subcategory')
        setSubCategory(subcategoryFromCookie)
    }
}

    useEffect(()=>{
        


        getCookieAndGetCategory();
    
    


},[])



    return (
        <>
        <NavBar></NavBar>
        <div>
            <h1>Category and subcategory</h1>
            <div className="category">
            <label htmlFor="category" id="category-label">Category</label>
            <CustomSelect value={categorySelected != ''? categorySelected: ''}arrayToIterate={categoriesKeys} name="category" id="category" nullvalue="Not chosen" functionCheck={setCategory}></CustomSelect>
            </div>
            
            <div className="subcategory">
            <label htmlFor="subcategory" id="subcategory-label">Subcategory</label>
            <CustomSelect arrayToIterate={subcategoriesSelected} value={subcategorySelected != ''? subcategorySelected: ''} name="subcategory" id="subcategory" nullvalue="Not chosen" functionCheck={setSubCategory}></CustomSelect>
            </div>


            <input type="button" value="Back" className="back-button" onClick={ () => navigate("/get-started/") }></input>
            <input type="button" value="Continue" className="continue-button" onClick={ () => {saveCategoryAndSubcategory();navigate("/skills/")} }></input>


        </div>
        </>
    )
}



