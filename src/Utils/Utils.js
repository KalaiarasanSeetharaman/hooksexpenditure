export const dataList = [
        { 
            "id":1,
            "date": "5.8.2012",
            "amount": 1500,
            "type": "spend",
            "desc": "Groceries from Albert"
        },
        { 
            "id":2,
            "date": "3.8.2012",    
            "amount": 42000,    
            "type": "income",    
            "desc": "Salary from work"  
        },  
        {  
            "id":3,  
            "date": "1.8.2012",    
            "amount": 1500,    
            "type": "spend",    
            "desc": "New shirt from ZARA"  
        },  
        { 
            "id":4,   
            "date": "30.7.2012",    
            "amount": 13,    
            "type": "spend",    
            "desc": "Icecream"  
        }
    ];



export const formatDate = () => {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day,month, year ].join('.');
}