const Card = (props) => {
  return (
    <div className="video-info-grid">
      <div className="channel-picture">
        <img className="profile-pic" src={props.src} alt="Not working!" />
      </div>
      <div className="video-info">
        <p className="video-title">{props.title}</p>
        <p className="video-author">{props.author}</p>
        <p className="video-stats">
          {props.views} &#46; {props.date}
        </p>
      </div>
    </div>
  );
};

export default Card;
