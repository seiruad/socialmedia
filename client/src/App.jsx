import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PagePost } from 'pages/page-post/PagePost.component';


export const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path={'/'}> <PagePost /> </Route>
      </Switch>  
    </div>
  )
}
