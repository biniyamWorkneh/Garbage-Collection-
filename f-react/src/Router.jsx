import React from 'react'
import {Route,Routes} from "react-router-dom"
import Finished from '../MainComponent/Finished'
import Todo from '../MainComponent/Todo'
import Members from '../MainComponent/Members'
const RouterPage = () => {
  return (
    <div>
        <Routes>
            <Route exact path='/' element={<Finished/>}/>
            <Route path='/todo' element= {<Todo/>}/>
            <Route path='/members' element= {<Members/>}/>
        </Routes>

    </div>
  )
}

export default RouterPage