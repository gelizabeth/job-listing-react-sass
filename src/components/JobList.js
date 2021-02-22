import React, { useState, useEffect } from 'react';
import Job from "./Job";
import '../sass/jobList.scss'


const JobList = ({ list }) => {
    const [filterList, setFilterList] = useState([]);
    const [renderedList, setRenderedList] = useState(list);

    useEffect(() => {
        if(filterList!=''){
            let newList;
            filterList.forEach(filter => {
                if(!newList){
                    newList = [];
                    newList.push(list.filter(listItem => {
                        if(listItem.languages.find(language => language === filter)
                            ||listItem.tools.find(tool=>tool===filter)
                            ||listItem.role===filter
                            ||listItem.level===filter){
                                return listItem;
                            }
                    }));
                } else {
                    newList[0]  = newList[0].filter(listItem => {
                    if(listItem.languages.find(language => language === filter)
                        ||listItem.tools.find(tool=>tool===filter)
                        ||listItem.role===filter
                        ||listItem.level===filter){
                            return listItem;
                        }
                }); 
            }
                
            });
            setRenderedList(newList[0]);
            
            
        } else setRenderedList(list);
    }, [filterList]);

    const addFilter = (filter) => {
        if(filterList.length!==0){
            let foundItem = filterList.find(item=>item === filter);
            if(foundItem){
                setFilterList(filterList.filter(item => item!==filter));
            }else setFilterList(prev => [...prev, filter]);
        }else setFilterList(prev => [...prev, filter]);     
    }
    const deleteFilter = (event) => {
        console.log(event);
        if(event.target.innerHTML){
            addFilter(event.target.innerHTML);
        }    
    }
    const clearFilters = () => {
        setFilterList([]);
    }
    return (
        <div className="job-list">
            <div className= {filterList!='' ? 'filter-list display-true': 'filter-list'}>
            <div className='filter-list__clear' onClick={clearFilters}>Clear</div>
            {filterList.map((filter, index) => <div className="filter-list__item" key={index} onClick={deleteFilter}><div className="filter-list__item__name">{filter}</div></div>)}
            {/* <div className="filter-list__item__close"></div> */}
            </div>
            
            {renderedList.map( (item, index) => <Job job={item}  key={index} onFilterClick={addFilter}></Job>)}

        </div>


    )
}
export default JobList;
