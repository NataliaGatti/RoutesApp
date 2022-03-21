import { useNavigate } from "react-router-dom";
import styles from "./goHome.module.css";

export default function GoHome() {
  const navigate = useNavigate()

  const handleGoHome = ()=> {
    navigate("/")
  }

  return (
  <div>
    <button className={styles.botton} onClick={handleGoHome}>Go Home</button>
  </div>);

}