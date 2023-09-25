import Nav from "../../components/Nav/Nav";
import style from "./MainSection.module.css";

const MainSection = () => {
  return (
    <>
      <section className={style.mainsection}>
        <Nav />
        <div
          className={style.secondsection}
          style={{ backgroundImage: "url(/images/chicken.png)" }}
        >
        <div className={style.glasstemp}>
            <div className={style.text}>
              <div className={style.chicken}>
                <img src="/images/plateimg.png" className={style.plateimage} />
                <div />
                <div className={style.logo}>
                  <img src="/images/smalogo.png" />
                  <div className={style.plogo}>Fun Foodies</div>
                </div>
                <h1 className={style.heading}>
                  Eat your favourite home made food
                  <br /> Food anytime at your place{" "}
                </h1>
                <h1 className={style.subhead}>Homemade Delecious Food</h1>
                <div className={style.simpletext}>
                  <span>
                    “Tell me what you eat, and I will tell you who you are.”
                    <br />
                    “So long as you have food in your mouth you have
                    <br />
                    ssolved all questions for the time being.”
                    <br />
                    “There is no sincere love than the love of food.”
                    <br />
                  </span>
                </div>
              </div>
              <div className={style.search}>
                <input
                  className={style.bar}
                  type="text"
                  placeholder="Search by food name"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
