import React from "react";

export default function Pagination({ postPerPage, totalPosts }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="Pagination">
        {pageNumbers.map((number) => {
          <li key={number} className="page-Item">
            <a href="!#" className="page_Link">
              {number}
            </a>
          </li>;
        })}
      </ul>
    </div>
  );
}
