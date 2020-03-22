import React from 'react'

function Popup({ selected, closePopup }) {
    return (
        <section className="popup">
            <div className="container">
                <div className="content">
                    <h2>{selected.Title}<span>({selected.Year})</span></h2>
                    <p className="rating">Rating: {selected.imdbRating}</p>
                    <img src={selected.Poster}/>
                    <p className="plot">{selected.Plot}</p> 
                </div>
            </div>
            <button className="close" onClick={closePopup}>Close</button>
        </section>
    )
}

export default Popup
