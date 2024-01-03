
import Nav from "../Components/Nav";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Home = () => {


    return (
        <>
            <div className="page-container">

                <Nav />
                <main className="content">
                    <Section1 />
                    <Section2 />
                    <Section3 />
                </main>
            </div >
        </>
    );
}

export default Home;