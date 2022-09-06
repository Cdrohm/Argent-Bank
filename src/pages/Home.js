import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initProfile } from '../utils/slice/userIdSlice'
import Feature from '../components/home/Feature'
/**
 * Homepage display
 * @returns 
 */
const Home = () => {
    const dispatch = useDispatch()

    //Init user profil
    useEffect(() => {
        dispatch(initProfile())
    })

    const features = [
        {
            type: "chat",
            title: "You are our #1 priority",
            text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
        },

        {
            type: "money",
            title: "More savings means higher rates",
            text: "The more you save with us, the higher your interest rate will be!",
        },

        {
            type: "security",
            title: "Security you can trust",
            text: "We use top of the line encryption to make sure your data and money is always safe.",
        }
    ]

    return (
        <main className="Home main">
            <div className="hero" style={{ backgroundImage: `url(${require("../assets/bank-tree.jpeg")})` }}>
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className="features">
            <h2 className="sr-only">Features</h2>
            {features.map((feature, index) => (
                <Feature value={feature} key={`feature-${index}`} />
            ))}
            </section>
        </main>
    )
}

export default Home