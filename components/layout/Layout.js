import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <footer style={{
          margin:"auto", 
          padding:"10px", 
          backgroundColor:"#77002e", 
          color:"#fcb8d2", }}>
        <p style={{
            textAlign:"center", 
            fontSize:"1.25rem",
          }}>
            This web applicaiton is developed by Ashur Kanwal.<br/>
            With the help of Maximilan Schwarzmuller youtube NextJS demo toutorial.
        </p>
      </footer>
    </div>
  );
}

export default Layout;
