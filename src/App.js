import { Container } from "react-bootstrap";
import SlickSlider from "./components/Slick/SlickSlider";
import "./styles/style.scss";
import advertise from "./media/add.jpg";
import Countdown from "react-countdown";

function App() {
  // const Completionist = () => <span>You are good to go!</span>;

  return (
    <div className="App">
      {/* <PaginationTable /> */}

      <SlickSlider />
      <div>
        <Container
          className="my-5 clock-container"
          style={{
            backgroundImage: `url(${advertise})`,
            backgroundRepeat: "no-repeat",
            height: "220px",
            width: "100%",
          }}
        >
      
        </Container>
      </div>
    </div>
  );
}

export default App;
