import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function CategoryFooter() {
  return (
    <div>
        <nav aria-label="Page navigation example w-25 text-center">
            <ul className="pagination justify-content-end">
                <li className="page-item"><a className="page-link text-dark" href="#"><IoIosArrowBack /></a></li>
                <li className="page-item"><a className="page-link grayText" href="#">1</a></li>
                <li className="page-item"><a className="page-link text-dark" href="#">2</a></li>
                <li className="page-item"><a className="page-link text-dark" href="#">3</a></li>
                <li className="page-item"><a className="page-link text-dark" href="#">4</a></li>
                <li className="page-item"><a className="page-link text-dark" href="#"><IoIosArrowForward /></a></li>
            </ul>
        </nav>
    </div>
  )
}
