import './menulateral.css';
import logo from '../../utils/images/logkuepa.png';
import user from '../../utils/images/user.jpeg';



const MenuLateral = ()=> {
    return (
        <div className="startmenu">
             <img src={logo} alt="logokuepa"  className="logo"/>
                <div id="icons">
                    <i class="bi bi-house"></i>
                    <i class="bi bi-list-check"></i>
                    <i class="bi bi-archive"></i>
                </div>
                <div id="user">
                    <i class="bi bi-app-indicator"></i>
                    <img src={user} alt="usuario" className="usuario" />
                </div>

        </div>
      );
    }
    
    export default MenuLateral;
  



