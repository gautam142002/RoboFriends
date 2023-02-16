import React from "react";

const Card = ({name, email, id}) => {
    return (
      <div className="tc bg-light-gray dib br3 pa3 ma2 grow bw3 shadow-4">
        <img alt = 'robot card' src = {`https://robohash.org/${id}?10x10`} ></img>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
      </div>  
    );
}

export default Card;