import './index.css';

export const Pose = (props) => {
    return (
        <div className="pose">
            <img src={props.src} alt="yoga-pose" />
        </div>
    );
};
