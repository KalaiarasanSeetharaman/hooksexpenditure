import React, {useState, useEffect, useCallback, Fragment} from 'react';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import Expense from '../Component/Expense/Expense';
import IncomeModal from '../Component/Expense/IncomeModal';
import SpendingModal from '../Component/Expense/SpendingModal';
import {dataList} from '../Utils/Utils';


  const  ExpenseContainer = React.memo(() =>{
    const [lists, setLists] = useState([]);
    const [totalSpending, setTotalSpending] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [balance, setBalance] = useState(0);
    const [showIncomeModal, setShowIncomeModal] = useState(false);
    const [showSpendModal, setShowSpendModal] = useState(false);

    useEffect(()=> {
      if(!localStorage.getItem('expenseList')){
          localStorage.setItem('expenseList', JSON.stringify(dataList));
      }
        let expenseList = JSON.parse(localStorage.getItem('expenseList'));
        setLists(expenseList);
        getValuesForSpendIncomeBalance(expenseList);
      },[])

    const getValuesForSpendIncomeBalance = (expenseList) => {
        const totalspending = expenseList.filter(data => data.type === 'spend').reduce((acc, val) => {
          return acc + val.amount;
        }, 0);
        setTotalSpending(totalspending);
        const totalincome = expenseList.filter(data => data.type === 'income').reduce((acc, val) => {
            return acc + val.amount;
          }, 0);
        setTotalIncome(totalincome);
        const balance = totalincome - totalspending;
        setBalance(balance);
    }

    const handleIncome = useCallback(() =>{
      setShowIncomeModal(true);
      setShowSpendModal(false);

    },[])

    const handleSpend = useCallback(() =>{
      setShowIncomeModal(false);
      setShowSpendModal(true);
    },[])

    const handleIncomeClose = useCallback(() =>{
      setShowIncomeModal(false);
    },[])

    const handleSpendClose = useCallback(() =>{
      setShowSpendModal(false);
    },[])

    const addIncomeSpending = useCallback((payload) => {
      payload.id=Math.floor(Math.random()*1000);
      setLists(lists=> {      
          let updatedlists = [
            ...lists,
            payload
          ]
          localStorage.setItem('expenseList', JSON.stringify(updatedlists));
          return updatedlists
      } );
      setShowIncomeModal(false);
      setShowSpendModal(false);
    },[])

    const deleteItem = useCallback((itemindex)=>{      
      setLists(lists=>{
        let newlists = [...lists];
        let updatedexpense = newlists.filter((data)=>data.id!==itemindex);
        localStorage.setItem('expenseList', JSON.stringify(updatedexpense));
        return updatedexpense
        }
      );
    },[])

    return (
          
            <Fragment>
                <Header
                    balance ={balance}
                    totalSpending={totalSpending}
                    totalIncome={totalIncome}
                />
                 <Expense 
                    lists = {lists}
                    deleteItem={deleteItem}
                    handleIncome={handleIncome}
                    handleSpend={handleSpend}
                 />
                <IncomeModal
                  show={showIncomeModal}
                  handleIncomeClose ={handleIncomeClose}
                  addIncomeSpending ={addIncomeSpending}
                />
                 <SpendingModal
                    show={showSpendModal}
                    handleSpendClose ={handleSpendClose}
                    addIncomeSpending ={addIncomeSpending}
                 />
                <Footer/> 
            </Fragment>
        )
    })
  
  export default ExpenseContainer