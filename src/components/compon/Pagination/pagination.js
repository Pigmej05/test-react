import React from 'react';
import Pagination from 'react-paginating';
import {connect} from "react-redux";
import c from "./paginator.module.css";
import {getRepository} from "../../API/api";
import {setPage} from "../../../redux/app_reducer";
import {getCurrentPage, getPageSize, getTotalPage} from "../../../redux/select_repository";



class Paginat extends React.Component {


    handlePageChange = (page) => {
        this.props.getRepository(this.props.elementaryValue,page)
        this.props.setPage(page);
    };

    render() {
        return (
            <div>
                <Pagination
                    total={this.props.totalPage}
                    pageCount={25}
                    currentPage={this.props.currentPage}
                    limit={this.props.pageSize}
                >
                    {({
                          pages,
                          currentPage,
                          hasNextPage,
                          hasPreviousPage,
                          previousPage,
                          nextPage,
                          totalPages,
                          getPageItemProps
                      }) => (
                        <div className={c.paginat}>
                            <button className={c.big}
                                    {...getPageItemProps({
                                        pageValue: 1,
                                        onPageChange: this.handlePageChange
                                    })}
                            >
                                первая
                            </button>

                            {hasPreviousPage && (
                                <button
                                    {...getPageItemProps({
                                        pageValue: previousPage,
                                        onPageChange: this.handlePageChange
                                    })}
                                >
                                    {'<'}
                                </button>
                            )}

                            {pages.map(page => {
                                let activePage = null;
                                if (currentPage === page) {
                                    activePage = {backgroundColor: 'darkorange'};
                                }
                                return (
                                    <button
                                        key={page}
                                        style={activePage}
                                        {...getPageItemProps({
                                            pageValue: page,
                                            onPageChange: this.handlePageChange
                                        })}
                                    >
                                        {page}
                                    </button>
                                );
                            })}

                            {hasNextPage && (
                                <button
                                    {...getPageItemProps({
                                        pageValue: nextPage,
                                        onPageChange: this.handlePageChange
                                    })}
                                >
                                    {'>'}
                                </button>
                            )}

                        </div>
                    )}
                </Pagination>
            </div>
        );
    }
}

let mapStateToProps = (state) => {

    return {

        totalPage: getTotalPage(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),

    }
}


export default connect(mapStateToProps, {setPage, getRepository })(Paginat)
