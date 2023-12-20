import { useState } from "react";
import '../../styles/App.css';


export default function Pagination(props) {
    const { sliderValue, itemsPerPage, onPageChange } = props;
    const [ currentPage, setCurrentPage ] = useState(0);

    const lastPage = Math.ceil(sliderValue/itemsPerPage)
    function handlePageChange(e) {
        setCurrentPage(e)
        onPageChange(e);
    }


    return (
        <div>
            <button onClick={()=>handlePageChange(currentPage-1)} disabled={currentPage===0}>
                Previous
            </button>
            <span> {currentPage} </span>
            <button onClick={()=>handlePageChange(currentPage+1)} disabled={currentPage===lastPage-1}>
                Next
            </button>
        </div>
    )
}