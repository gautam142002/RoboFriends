import React from "react";

const SearchBox = ({userInput}) => {
    return(
        <div className="pa2">
            <input 
                className="tc bg-light-gray br2 pa3 "
                type = 'search' 
                placeholder = 'Search Robots'
                onChange={userInput}
            />
        </div>
        
    );
}

export default SearchBox;