import './index.css';

export const Intro = (props) => {
    return (
        <section className="intro">
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
        </section>
    );
};