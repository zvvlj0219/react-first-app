import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  MemoPage from './view/MemoPage';

const Router = () =>{
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MemoPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router