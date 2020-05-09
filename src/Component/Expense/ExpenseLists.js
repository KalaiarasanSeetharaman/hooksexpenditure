import React, {Fragment, useState, useEffect}  from 'react';
import {Row, Col } from 'react-bootstrap';
import {RedList, GreenList, ListGroupItem, PaginationHeader} from './ExpenseStyle';
import Pagination from "react-js-pagination";

const ExpenseLists = React.memo(({expenselists, deleteItem}) => {
    const [itemsCountPerPage, setItemsCountPerPage] = useState(10);
    const [activePage, setActivePage] = useState(1);
    const [totalItemsCount, setTotalItemsCount] = useState(0);
    const [pageRangeDisplayed, setPageRangeDisplayed] = useState(5);
    useEffect(    
        ()=>{
            setTotalItemsCount(expenselists.length);
        },[expenselists]
    );

    const handlePageChange=(pageNumber)=>{
        setActivePage(pageNumber);
    }
    const indexOfLastPost = activePage * itemsCountPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsCountPerPage;
    const currentexpenselists = expenselists.slice(indexOfFirstPost , indexOfLastPost);
    if(currentexpenselists){
        
        return(
            <Fragment>
                {
                    currentexpenselists.map((list,index)=>{
                        let Amount = <RedList>{list.amount}Kc</RedList>;
                        if(list.type === 'income'){
                            Amount = <GreenList>{list.amount}Kc</GreenList>;
                        }
                        return(
                            <ListGroupItem   key={index}>
                                <Row>
                                    <Col md={4} xs={12}>
                                    <span>{list.date}</span><br/>
                                        {Amount}
                                    </Col>
                                    <Col md={4} xs={12}>{list.desc}</Col>
                                    <Col md={4} xs={12} 
                                        onClick={()=>{
                                            if(window.confirm('Are you sure to delete this record ?')){
                                                deleteItem(list.id)
                                            }
                                        }}
                                    >Delete</Col>
                                </Row>
                            </ListGroupItem>
                        )

                    })
                }
                {
                    <PaginationHeader>
                        <Pagination
                            style={{margin:'0 auto!important'}}
                            activePage={activePage}
                            itemsCountPerPage={itemsCountPerPage}
                            totalItemsCount={totalItemsCount}
                            pageRangeDisplayed={pageRangeDisplayed}
                            onChange={(e)=>handlePageChange(e)}
                        />
                    </PaginationHeader>
                 }
            </Fragment>
            )
        }else{
            return(
                <Fragment> 
                    No Data Found
                </Fragment> 
            )
        }
})
export default ExpenseLists