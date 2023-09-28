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
                  <span className='text-light'>
                    “PERFECT PLACE FOR THE BEST EXPERIENCE”
                    <br />
                    “MILLIONS OF BENEFITS WHEN WE ARE TOGETHER"
                    <br />
                    “THERE IS NO SINCERE LOVE THAN THE LOVE OF FOOD”
                    <br />
                  </span>
                </div>
              </div>
              <div>
                <span className={`${style.search} ${'text-warning-emphasis'}`}>
                  <h1>@ FUN! FOOODIES!</h1>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
