import React from 'react'
import style from "../users/users.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {userApi} from "../../api/api";
import {Button} from "antd";
import {
    deleteUsersThunk,
    follow,
    getUsersThunk,
    postUsersThunk,
    Testunfollow,
    toogleFollowingInProgress,
    unfollow
} from "../../redux/userReducer";
import Pagination from "react-js-pagination";
import * as PropTypes from "prop-types";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSuperSelector
} from "../../redux/userSelector";
/*

export const Paginator = ({totalUsersCount, pageSize, onPageClick, currentPage}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = []
    for (let i=1; i<= pagesCount; i++ ){
        if(i>20) break;
        pages.push(i)
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    return (
        <div>

            {
                pages.map(pag => {
                    return <span onClick={ (e) => { onPageClick(pag)}  } className={currentPage === pag && style.bold}>{pag}</span>
                })
            }



            <div>Всего страниц: { pagesCount }</div>
            <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={10}
                totalItemsCount={450}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange.bind(this)}
            />
        </div>
    )
}*/


let mapStateToProps = (state) => {
    return {
        currentPage: getCurrentPage(state),
    }
}

export class PaginatorComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: this.currentPage
        };
    }

    handlePageChange(pageNumber) {

        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
        this.props.onPageClick(pageNumber)
    }

    render() {

        let {totalUsersCount, pageSize, onPageClick, currentPage} = this.props;

        let pagesCount = Math.ceil(totalUsersCount / pageSize);

        return (
            <div>
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={10}
                    totalItemsCount={totalUsersCount}
                    pageRangeDisplayed={10}
                    itemClass="page-item"
                    linkClass="page-link"
                    onChange={this.handlePageChange.bind(this)}
                />

                <div>Всего страниц: {pagesCount}</div>
            </div>
        )
    }
}

export const Paginator = compose(connect(mapStateToProps, { }))(PaginatorComponent)
