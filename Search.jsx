import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

Search.propTypes = {
    onSubmit: PropTypes.func,
    
};
Search.defaultProps={
    onSubmit:null,
}

function Search(props) {
    const { onSubmit}=props;
    const [search,setSearch]=useState('');
    const typingTimeoutRef=useRef(null);
    
    function hadleSearchTermChange(e){
        const value=e.target.value;
        setSearch(e.target.value);
    if(!onSubmit) return;


    if(typingTimeoutRef.current){
        clearTimeout(typingTimeoutRef.current);
    };

typingTimeoutRef.current=setTimeout(()=>{
    const formValues={
        search:e.target.value,
    
    }; onSubmit(formValues);},300);

    }
    return (
       <form className="navbar-form navbar-left" role="search">
           <div className="form-group">
<input type="text" value={ search} placeholder="Search" onChange={hadleSearchTermChange}/>
</div>
       </form>
    );
}

export default Search;