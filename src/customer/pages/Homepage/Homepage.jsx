import React from 'react';
import MainCoresoul from '../../component/homecareousal/MainCoresoul';
import HomeSectionCoresoul from '../../component/homeSectionCoresoul/homeSectionCoresoul';
import { mensKurta } from '../../../Data/mensKurta';


const Homepage =() =>{

    return (
        <>
        <div>
         <MainCoresoul/>
         <div className='space-y-10 py-10 px-5 lg:px-10' >
            <HomeSectionCoresoul data={mensKurta}  sectionName={"Men's Kurta"}/>
            <HomeSectionCoresoul data={mensKurta} sectionName={"Men's Shoe"}/>
            <HomeSectionCoresoul data={mensKurta} sectionName={"Women's Saree"}/>
            <HomeSectionCoresoul data={mensKurta} sectionName={"Electronics Accessoreis"}/>
            <HomeSectionCoresoul data={mensKurta} sectionName={"Women Suits"}/>
            <HomeSectionCoresoul data={mensKurta} sectionName={"Comfy's collections "}/>
            <HomeSectionCoresoul data={mensKurta} sectionName={"Mobile Phones"}/>
           
         </div>
        </div>
        </>
    )
}
export default Homepage ;