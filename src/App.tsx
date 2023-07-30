import React , {useContext , useEffect} from "react";
import LoginForm from './components/login.form';
import { ContexT } from "./index";
import { observer } from "mobx-react-lite";

const App = () => {

  const {store} = useContext(ContexT);

  useEffect(() => {
    if(localStorage.getItem('token')){
      store.checkAuth();
    }

  } , []);
  

if(store.isLoading){
  return <div>Loading...</div>
}
  
if(!store.isAuth){
  return(
    <div>
      <LoginForm />
    </div>
  )
}

  return(
    <div>
      <h1>{store.isAuth ? `user is authorized ${store.user.email}` : "Sign up"}</h1>
      <button onClick={() => store.logout()}>Log Out</button>
      <div>
        
      </div>
    </div>
  )
}

export default observer(App);

