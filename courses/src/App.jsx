import { useState, useEffect } from 'react';
import {apiurl} from './data';
import {filterData} from './data';

function App() {

  const [courses,setcourse] = useState(null);
  const [category,setcategory] = useState(filterData[0].title);

  async function fetchData(){
    try {
      let response = await fetchData(apiurl);
      let output = await response.json();
      setcourse(output);
      
    } catch (error) {
      console.log(error);

      
    }
  }
  useEffect(()=>{
    fetchData();
  },[]);




  return (
    <>

    </>
  )
}

export default App;
