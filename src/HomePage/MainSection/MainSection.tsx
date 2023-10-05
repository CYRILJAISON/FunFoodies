import Nav from "../../components/Nav/Nav";
import style from "./MainSection.module.css";

const MainSection = () => {
  return (
    <>
      <section className={style.mainsection}>
        <div className={style.container}>
          <video src="./videos/roast.mov" autoPlay muted loop playsInline width="100%" height="HEIGHT_HERE">
          </video>
        </div>
      </section>
    </>
  );
};

export default MainSection;
